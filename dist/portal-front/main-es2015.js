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
/* harmony import */ var _components_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/initial-page/initial-page.component */ "./src/app/components/initial-page/initial-page.component.ts");
/* harmony import */ var _components_objective_content_objective_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/objective-content/objective-content.component */ "./src/app/components/objective-content/objective-content.component.ts");
/* harmony import */ var _components_mapa_servicos_mapa_servicos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mapa-servicos/mapa-servicos.component */ "./src/app/components/mapa-servicos/mapa-servicos.component.ts");
/* harmony import */ var _components_contato_content_contato_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contato-content/contato-content.component */ "./src/app/components/contato-content/contato-content.component.ts");
/* harmony import */ var _components_ajuda_content_ajuda_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ajuda-content/ajuda-content.component */ "./src/app/components/ajuda-content/ajuda-content.component.ts");
/* harmony import */ var _grafa_painel_grafa_painel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grafa-painel/grafa-painel.component */ "./src/app/grafa-painel/grafa-painel.component.ts");










const routes = [
    { path: '', component: _components_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_2__["InitialPageComponent"] },
    { path: 'quem-somos', component: _components_objective_content_objective_content_component__WEBPACK_IMPORTED_MODULE_3__["ObjectiveContentComponent"] },
    { path: 'mapa-rede-servicos-acessiveis', component: _components_mapa_servicos_mapa_servicos_component__WEBPACK_IMPORTED_MODULE_4__["MapaServicosComponent"] },
    { path: 'contatos', component: _components_contato_content_contato_content_component__WEBPACK_IMPORTED_MODULE_5__["ContatoContentComponent"] },
    { path: 'ajuda', component: _components_ajuda_content_ajuda_content_component__WEBPACK_IMPORTED_MODULE_6__["AjudaContentComponent"] },
    { path: 'dash/:id', component: _grafa_painel_grafa_painel_component__WEBPACK_IMPORTED_MODULE_7__["GrafaPainelComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                anchorScrolling: 'enabled',
            })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        anchorScrolling: 'enabled',
                    })],
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
/* harmony import */ var _portal_services_print_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portal/services/print.service */ "./src/app/portal/services/print.service.ts");
/* harmony import */ var _components_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/acessibility-bar/acessibility-bar.component */ "./src/app/components/acessibility-bar/acessibility-bar.component.ts");
/* harmony import */ var _navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/toolbar/toolbar.component */ "./src/app/navigation/toolbar/toolbar.component.ts");
/* harmony import */ var _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu-bar/menu-bar.component */ "./src/app/components/menu-bar/menu-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_foot_bar_foot_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/foot-bar/foot-bar.component */ "./src/app/components/foot-bar/foot-bar.component.ts");








class AppComponent {
    // alternatively also the host parameter in the @Component()` decorator can be used
    constructor(printService) {
        this.printService = printService;
        this.title = 'Observatório Municipal da Pessoa com Deficiência';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_portal_services_print_service__WEBPACK_IMPORTED_MODULE_1__["PrintService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 0, consts: [["aria-labelledby", "barraacessibilidade"], ["id", "barraacessibilidade"], ["id", "barramenu"], ["id", "menubar"], ["id", "content", 1, "content", 2, "min-block-size", "70vh"], ["name", "print"], ["id", "footbar"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-acessibility-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-menu-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-foot-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__["AcessibilityBarComponent"], _navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"], _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__["MenuBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _components_foot_bar_foot_bar_component__WEBPACK_IMPORTED_MODULE_6__["FootBarComponent"]], styles: ["#barraacessibilidade[_ngcontent-%COMP%]{\n    background-color: #EEEEE4;\n}\n\n#barramenu[_ngcontent-%COMP%] {\n    background-color: #1C2E8A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYXJyYWFjZXNzaWJpbGlkYWRle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRTQ7XG59XG5cbiNiYXJyYW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzJFOEE7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _portal_services_print_service__WEBPACK_IMPORTED_MODULE_1__["PrintService"] }]; }, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _portal_portal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portal/portal.module */ "./src/app/portal/portal.module.ts");
/* harmony import */ var _portal_services_print_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portal/services/print.service */ "./src/app/portal/services/print.service.ts");
/* harmony import */ var _components_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/acessibility-bar/acessibility-bar.component */ "./src/app/components/acessibility-bar/acessibility-bar.component.ts");
/* harmony import */ var _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/menu-bar/menu-bar.component */ "./src/app/components/menu-bar/menu-bar.component.ts");
/* harmony import */ var _components_foot_bar_foot_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/foot-bar/foot-bar.component */ "./src/app/components/foot-bar/foot-bar.component.ts");
/* harmony import */ var _components_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/initial-page/initial-page.component */ "./src/app/components/initial-page/initial-page.component.ts");
/* harmony import */ var _components_objective_content_objective_content_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/objective-content/objective-content.component */ "./src/app/components/objective-content/objective-content.component.ts");
/* harmony import */ var _components_mapa_servicos_mapa_servicos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/mapa-servicos/mapa-servicos.component */ "./src/app/components/mapa-servicos/mapa-servicos.component.ts");
/* harmony import */ var _components_ajuda_content_ajuda_content_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/ajuda-content/ajuda-content.component */ "./src/app/components/ajuda-content/ajuda-content.component.ts");
/* harmony import */ var _components_contato_content_contato_content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/contato-content/contato-content.component */ "./src/app/components/contato-content/contato-content.component.ts");
/* harmony import */ var _grafa_painel_grafa_painel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./grafa-painel/grafa-painel.component */ "./src/app/grafa-painel/grafa-painel.component.ts");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _portal_services_print_service__WEBPACK_IMPORTED_MODULE_9__["PrintService"], _components_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_10__["AcessibilityBarComponent"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _portal_portal_module__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_10__["AcessibilityBarComponent"],
        _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_11__["MenuBarComponent"],
        _components_foot_bar_foot_bar_component__WEBPACK_IMPORTED_MODULE_12__["FootBarComponent"],
        _components_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_13__["InitialPageComponent"],
        _components_objective_content_objective_content_component__WEBPACK_IMPORTED_MODULE_14__["ObjectiveContentComponent"],
        _components_mapa_servicos_mapa_servicos_component__WEBPACK_IMPORTED_MODULE_15__["MapaServicosComponent"],
        _components_ajuda_content_ajuda_content_component__WEBPACK_IMPORTED_MODULE_16__["AjudaContentComponent"],
        _components_contato_content_contato_content_component__WEBPACK_IMPORTED_MODULE_17__["ContatoContentComponent"],
        _grafa_painel_grafa_painel_component__WEBPACK_IMPORTED_MODULE_18__["GrafaPainelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        _portal_portal_module__WEBPACK_IMPORTED_MODULE_8__["PortalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_10__["AcessibilityBarComponent"],
                    _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_11__["MenuBarComponent"],
                    _components_foot_bar_foot_bar_component__WEBPACK_IMPORTED_MODULE_12__["FootBarComponent"],
                    _components_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_13__["InitialPageComponent"],
                    _components_objective_content_objective_content_component__WEBPACK_IMPORTED_MODULE_14__["ObjectiveContentComponent"],
                    _components_mapa_servicos_mapa_servicos_component__WEBPACK_IMPORTED_MODULE_15__["MapaServicosComponent"],
                    _components_ajuda_content_ajuda_content_component__WEBPACK_IMPORTED_MODULE_16__["AjudaContentComponent"],
                    _components_contato_content_contato_content_component__WEBPACK_IMPORTED_MODULE_17__["ContatoContentComponent"],
                    _grafa_painel_grafa_painel_component__WEBPACK_IMPORTED_MODULE_18__["GrafaPainelComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                    _portal_portal_module__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
                ],
                providers: [
                    _portal_services_print_service__WEBPACK_IMPORTED_MODULE_9__["PrintService"], _components_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_10__["AcessibilityBarComponent"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/acessibility-bar/acessibility-bar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/acessibility-bar/acessibility-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: AcessibilityBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcessibilityBarComponent", function() { return AcessibilityBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_portal_acessibilidade_dialog_acessibilidade_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component */ "./src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");






class AcessibilityBarComponent {
    constructor(scroll, router, dialog, elementRef) {
        this.scroll = scroll;
        this.router = router;
        this.dialog = dialog;
        this.elementRef = elementRef;
        this.divsArray = document.getElementsByTagName('div');
        this.psArray = document.getElementsByTagName('p');
        this.hsArray = document.getElementsByTagName('h1');
        this.h2sArray = document.getElementsByTagName('h2');
        this.asArray = document.getElementsByTagName('a');
        this.ulsArray = document.getElementsByTagName('ul');
        this.situationContrast = false;
        this.situationFontSize = false;
        this.loggedIn = false;
        this.isPaginaInicial = true;
        this.isTabVisivel = 0;
        this.isDialogOpen = false;
        router.events.subscribe((val) => {
            if (this.router.url === '/paineis') {
                this.isPaginaInicial = true;
                document.getElementById("irBusca").tabIndex = 0;
                //this.isTabVisivel = 0;
            }
            else {
                this.isPaginaInicial = false;
                document.getElementById("irBusca").tabIndex = -1;
                //this.isTabVisivel = -1;
            }
        });
        this.dialog._afterAllClosed.subscribe(n => {
            this.isDialogOpen = false;
        });
    }
    ngOnInit() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                document.querySelector(this.getAttribute('href')).click();
            });
        });
    }
    irConteudo() {
        document.getElementById("content").scrollIntoView();
        document.getElementsByTagName("h2")[0].focus();
    }
    irMenu() {
        document.getElementById("menubar").scrollIntoView();
        document.getElementById("pgInicial").focus();
    }
    irRodape() {
        document.getElementById("footertext1").scrollIntoView();
        document.getElementById("footertext1").focus();
    }
    aumentarFonte() {
        if (this.situationFontSize === false) {
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.fontSize = "36px";
                    p.style.lineHeight = '40px';
                }
            }
            for (let a of this.asArray) {
                if (a.className != 'donotchange' &&
                    a.className != 'hover' &&
                    a.className != 'fontsize' &&
                    a.className != 'hover2' &&
                    a.className != 'hover3' &&
                    a.className != 'fontsize2') {
                    a.style.fontSize = "40px";
                    a.style.lineHeight = '44px';
                }
                else if (a.className === 'hover2' ||
                    a.className === 'hover3') {
                    a.style.fontSize = "26px";
                    a.style.lineHeight = '30px';
                }
                else if (a.className === 'hover') {
                    a.style.fontSize = "36px";
                    a.style.lineHeight = '40px';
                }
            }
            this.situationFontSize = true;
        }
        else {
            alert("A fonte já está aumentada.");
        }
    }
    diminuirFonte() {
        if (this.situationFontSize === true) {
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.fontSize = "";
                    p.style.lineHeight = '';
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.fontSize = "";
                    h.style.lineHeight = '';
                }
            }
            for (let a of this.asArray) {
                if (a.className != 'donotchange') {
                    a.style.fontSize = "";
                    a.style.lineHeight = '';
                }
            }
            this.situationFontSize = false;
        }
        else {
            alert("A fonte já está no mínimo.");
        }
    }
    altoContraste() {
        if (this.situationContrast === true) {
            for (let div of this.divsArray) {
                if (div.className != 'donotchange' &&
                    div.className != 'sem-resposta') {
                    div.style.backgroundColor = null;
                    div.style.color = null;
                    div.style.boxShadow = null;
                    div.style.border = null;
                }
            }
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.backgroundColor = null;
                    p.style.color = null;
                    p.style.boxShadow = null;
                    p.style.border = null;
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.backgroundColor = null;
                    h.style.color = null;
                    h.style.boxShadow = null;
                    h.style.border = null;
                }
            }
            for (let h2 of this.h2sArray) {
                if (h2.className != 'donotchange') {
                    h2.style.backgroundColor = null;
                    h2.style.color = null;
                    h2.style.boxShadow = null;
                    h2.style.border = null;
                }
            }
            for (let a of this.asArray) {
                if (a.className != 'donotchange') {
                    a.style.backgroundColor = null;
                    a.style.color = null;
                    a.style.boxShadow = null;
                    a.style.border = null;
                    if (a.className === 'hover3') {
                        a.classList.remove('hover3');
                        a.classList.add('hover2');
                    }
                    if (a.className == 'fontsize2') {
                        a.classList.remove('fontsize2');
                        a.classList.add('fontsize');
                    }
                }
            }
            this.situationContrast = false;
        }
        else {
            for (let div of this.divsArray) {
                if (div.className != 'donotchange' &&
                    div.className != 'content' &&
                    div.className != 'mat-card-header-text' &&
                    div.className != 'descricao' &&
                    div.className != 'autor' &&
                    div.className != 'tema' &&
                    div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'content' &&
                    div.className != 'mat-form-field-flex ng-tns-c49-0' &&
                    div.className != 'big pesquisa' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
                    div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-infix ng-tns-c49-0' &&
                    div.className != 'sem-resposta' &&
                    div.className != 'lista-paineis' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
                    div.className != 'mat-form-field-infix ng-tns-c107-0' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-0' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                    div.className != 'ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                    div.className != 'ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                    div.className != 'big pesquisa') {
                    div.style.backgroundColor = 'black';
                    div.style.color = 'white';
                }
                if (div.className === 'big pesquisa' ||
                    div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
                    div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
                    div.className === 'mat-form-field-infix ng-tns-c49-0') {
                    div.style.backgroundColor = 'white';
                    div.style.color = 'black';
                }
                if (div.className === "footer-basic") {
                    div.style.backgroundColor = 'white';
                }
                if (div.className === 'img') {
                    div.style.backgroundColor = 'white';
                    div.style.border = '2px solid #000';
                }
            }
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.backgroundColor = 'black';
                    p.style.color = 'white';
                    p.style.boxShadow = '0 0 0 2px #000';
                    p.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.backgroundColor = 'black';
                    h.style.color = 'white';
                    h.style.boxShadow = '0 0 0 2px #000';
                    h.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h2 of this.h2sArray) {
                if (h2.className != 'donotchange') {
                    h2.style.backgroundColor = 'black';
                    h2.style.color = 'white';
                    h2.style.boxShadow = '0 0 0 2px #000';
                    h2.style.border = '2px solid #ffeb3b';
                }
            }
            for (let a of this.asArray) {
                if (a.className != 'donotchange' &&
                    a.className != 'hover' &&
                    a.className != 'hover2') {
                    a.style.backgroundColor = 'black';
                    a.style.color = 'white';
                    a.style.boxShadow = '0 0 0 2px #000';
                    a.style.border = '2px solid #ffeb3b';
                    if (a.className === 'fontsize') {
                        a.classList.remove('fontsize');
                        a.classList.add('fontsize2');
                        a.style.boxShadow = '0 0 0 2px #000';
                        a.style.border = '2px solid #ffeb3b';
                    }
                }
                else if (a.className === 'hover2') {
                    a.classList.remove('hover2');
                    a.classList.add('hover3');
                    a.style.boxShadow = '0 0 0 2px #000';
                    a.style.border = '2px solid #ffeb3b';
                }
                else if (a.className === 'hover') {
                    a.style.boxShadow = '0 0 0 2px #000';
                    a.style.border = '2px solid #ffeb3b';
                }
            }
            for (let ul of this.ulsArray) {
                if (ul.id === 'atalhos') {
                    ul.style.backgroundColor = 'black';
                }
            }
            this.situationContrast = true;
        }
    }
    openDialog() {
        if (!this.isDialogOpen) {
            this.dialog.open(src_app_portal_acessibilidade_dialog_acessibilidade_dialog_component__WEBPACK_IMPORTED_MODULE_1__["AcessibilidadeDialogComponent"]);
            this.isDialogOpen = true;
        }
        else {
            this.dialog.closeAll();
            this.isDialogOpen = false;
        }
    }
    closeDialog() {
        this.dialog.closeAll();
    }
    onKeyPressAcess(e) {
        if (e.keyCode == 13) {
            if (!this.isDialogOpen) {
                this.openDialog();
            }
        }
    }
    onKeyPressConteudo(e) {
        if (e.keyCode == 13) {
            this.irConteudo();
        }
    }
    onKeyDown(e) {
        let map = {};
        map[e.keyCode] = e.type == 'keydown';
        if (e.altKey && map[49]) {
            document.getElementById("irConteudo").click();
        }
        else if (e.altKey && map[50]) {
            document.getElementById("irMenu").click();
        }
        else if ((e.altKey && map[51])) {
            document.getElementById("irRodapé").click();
        }
        else if ((e.altKey && map[52])) {
            document.getElementById("irContraste").click();
        }
        else if ((e.altKey && map[53])) {
            document.getElementById("irAcessibilidade").click();
        }
        else if ((e.altKey && map[54])) {
            document.getElementById("aumentar").click();
        }
        else if ((e.altKey && map[55])) {
            document.getElementById("diminuir").click();
        }
    }
}
AcessibilityBarComponent.ɵfac = function AcessibilityBarComponent_Factory(t) { return new (t || AcessibilityBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AcessibilityBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AcessibilityBarComponent, selectors: [["app-acessibility-bar"]], hostBindings: function AcessibilityBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AcessibilityBarComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 22, vars: 0, consts: [["id", "bench", 1, "table"], ["id", "atalhos"], ["id", "irConteudo", "tabindex", "0", "title", "Ir para o conteudo", 1, "hover2", 3, "keypress", "click"], ["id", "irMenu", "tabindex", "0", "title", "Ir para o menu", 1, "hover2", 3, "keypress", "click"], ["id", "irRodap\u00E9", "tabindex", "0", "title", "Ir para o rodap\u00E9", 1, "hover2", 3, "keypress", "click"], ["id", "irContraste", "tabindex", "0", "title", "Alto contraste", 1, "hover2", 3, "keypress", "click"], ["id", "irAcessibilidade", "tabindex", "0", "title", "Acessibilidade", 1, "hover2", 3, "keypress", "click"], ["id", "aumentar", "alt", "Aumentar fonte", "tabindex", "0", "title", "Aumentar Tamanho do Texto", 1, "fontsize", 3, "keypress", "click"], ["id", "diminuir", "alt", "Diminuir fonte", "tabindex", "0", "title", "Diminuir Tamanho do Texto", 1, "fontsize", 3, "keypress", "click"]], template: function AcessibilityBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AcessibilityBarComponent_Template_a_keypress_3_listener() { return ctx.irConteudo(); })("click", function AcessibilityBarComponent_Template_a_click_3_listener() { return ctx.irConteudo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ir para o conte\u00FAdo [alt + 1]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AcessibilityBarComponent_Template_a_keypress_6_listener() { return ctx.irMenu(); })("click", function AcessibilityBarComponent_Template_a_click_6_listener() { return ctx.irMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ir para o menu [alt + 2]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AcessibilityBarComponent_Template_a_keypress_9_listener() { return ctx.irRodape(); })("click", function AcessibilityBarComponent_Template_a_click_9_listener() { return ctx.irRodape(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ir para o rodap\u00E9 [alt + 3]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AcessibilityBarComponent_Template_a_keypress_12_listener() { return ctx.altoContraste(); })("click", function AcessibilityBarComponent_Template_a_click_12_listener() { return ctx.altoContraste(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Alto contraste [alt + 4]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AcessibilityBarComponent_Template_a_keypress_15_listener() { return ctx.openDialog(); })("click", function AcessibilityBarComponent_Template_a_click_15_listener() { return ctx.openDialog(); })("keypress", function AcessibilityBarComponent_Template_a_keypress_15_listener($event) { return ctx.onKeyPressAcess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Acessibilidade [alt + 5]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AcessibilityBarComponent_Template_a_keypress_18_listener() { return ctx.aumentarFonte(); })("click", function AcessibilityBarComponent_Template_a_click_18_listener() { return ctx.aumentarFonte(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "A+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AcessibilityBarComponent_Template_a_keypress_20_listener() { return ctx.diminuirFonte(); })("click", function AcessibilityBarComponent_Template_a_click_20_listener() { return ctx.diminuirFonte(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "A-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".table[_ngcontent-%COMP%] {\n    display: table;   \n\tmargin: 0 auto;\n}\n\n#atalhos[_ngcontent-%COMP%] {\n    background-color: #EEEEE4;\n    color: #333333;\n    font-size: 18px;\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    width: 100%;\n    align-content: center;\n}\n\n.fontsize[_ngcontent-%COMP%] {\n    background-color: #f9f9f9;\n    width: 8px;\n    color: #333333;\n    padding: 4px;\n    margin: 3px 5px 0 0;\n    border: 1px solid #c6c6c6;\n    border-radius: 50%;\n    font-size: 0.8125em;\n    font-weight: bold;\n    text-align: center;\n}\n\n.fontsize2[_ngcontent-%COMP%] {\n    background-color: #000;\n    width: 8px;\n    color: #FFF;\n    padding: 4px;\n    margin: 3px 5px 0 0;\n    border: 1px solid #c6c6c6;\n    border-radius: 50%;\n    font-size: 0.8125em;\n    font-weight: bold;\n    text-align: center;\n}\n\nli[_ngcontent-%COMP%] {\n    display: inline;\n    float: left;\n    min-width: 14vw;\n    width: -moz-fit-content;\n    width: fit-content;\n    max-width: 230px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n}\n\nlist[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    display: inline-block; \n}\n\n.hover2[_ngcontent-%COMP%]:hover {\n   cursor: pointer; \n   background-color: #333333;\n   color: #f9f9f9;\n}\n\n.hover3[_ngcontent-%COMP%] {\n    color: #FFF;\n}\n\n.hover3[_ngcontent-%COMP%]:hover {\n    cursor: pointer; \n    background-color: #FFF;\n    color: #000;\n }\n\n.fontsize[_ngcontent-%COMP%]:hover{\n    background-color: #333333 ;\n    color: #f9f9f9;\n    cursor: pointer;\n}\n\n.fontsize2[_ngcontent-%COMP%]:hover{\n    background-color: #FFF !important;\n    color: #000 !important;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2Vzc2liaWxpdHktYmFyL2FjZXNzaWJpbGl0eS1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWMsSUFBSSxnQ0FBZ0M7Q0FDckQsY0FBYztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtJQUNmLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0dBQ0csZUFBZTtHQUNmLHlCQUF5QjtHQUN6QixjQUFjO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FjZXNzaWJpbGl0eS1iYXIvYWNlc3NpYmlsaXR5LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZTsgICAvKiBBbGxvdyB0aGUgY2VudGVyaW5nIHRvIHdvcmsgKi9cblx0bWFyZ2luOiAwIGF1dG87XG59XG5cbiNhdGFsaG9zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUU0O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvbnRzaXplIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIHdpZHRoOiA4cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIG1hcmdpbjogM3B4IDVweCAwIDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M2YzZjNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAwLjgxMjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb250c2l6ZTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgd2lkdGg6IDhweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgbWFyZ2luOiAzcHggNXB4IDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzZjNmM2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDAuODEyNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtaW4td2lkdGg6IDE0dnc7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1heC13aWR0aDogMjMwcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGlzdCBhe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG59XG5cbi5ob3ZlcjI6aG92ZXIge1xuICAgY3Vyc29yOiBwb2ludGVyOyBcbiAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gICBjb2xvcjogI2Y5ZjlmOTtcbn1cblxuLmhvdmVyMyB7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5ob3ZlcjM6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBjb2xvcjogIzAwMDtcbiB9XG5cbi5mb250c2l6ZTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzIDtcbiAgICBjb2xvcjogI2Y5ZjlmOTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb250c2l6ZTI6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcessibilityBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-acessibility-bar',
                templateUrl: './acessibility-bar.component.html',
                styleUrls: ['./acessibility-bar.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/ajuda-content/ajuda-content.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/ajuda-content/ajuda-content.component.ts ***!
  \*********************************************************************/
/*! exports provided: AjudaContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjudaContentComponent", function() { return AjudaContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../acessibility-bar/acessibility-bar.component */ "./src/app/components/acessibility-bar/acessibility-bar.component.ts");



class AjudaContentComponent {
    constructor(acessibilityBarComponent) {
        this.acessibilityBarComponent = acessibilityBarComponent;
        this.divsArray = document.getElementsByTagName('div');
        this.psArray = document.getElementsByTagName('p');
        this.hsArray = document.getElementsByTagName('h1');
        this.h2sArray = document.getElementsByTagName('h2');
        this.asArray = document.getElementsByTagName('a');
        this.ulsArray = document.getElementsByTagName('ul');
    }
    ngOnInit() {
        var bench = document.getElementById('bench');
        if (bench.style.backgroundColor === 'black') {
            for (let div of this.divsArray) {
                if (div.className != 'donotchange' &&
                    div.className != 'content' &&
                    div.className != 'mat-card-header-text' &&
                    div.className != 'descricao' &&
                    div.className != 'autor' &&
                    div.className != 'tema' &&
                    div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'content' &&
                    div.className != 'mat-form-field-flex ng-tns-c49-0' &&
                    div.className != 'big pesquisa' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
                    div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-infix ng-tns-c49-0' &&
                    div.className != 'sem-resposta' &&
                    div.className != 'lista-paineis' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
                    div.className != 'mat-form-field-infix ng-tns-c107-0' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-0' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                    div.className != 'ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                    div.className != 'big pesquisa') {
                    div.style.backgroundColor = 'black';
                    div.style.color = 'white';
                }
                if (div.className === 'big pesquisa' ||
                    div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
                    div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
                    div.className === 'mat-form-field-infix ng-tns-c49-0') {
                    div.style.backgroundColor = 'white';
                    div.style.color = 'black';
                }
                if (div.className === "footer-basic") {
                    div.style.backgroundColor = 'white';
                }
                if (div.className === 'img') {
                    div.style.backgroundColor = 'white';
                    div.style.border = '2px solid #000';
                }
            }
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.backgroundColor = 'black';
                    p.style.color = 'white';
                    p.style.boxShadow = '0 0 0 2px #000';
                    p.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.backgroundColor = 'black';
                    h.style.color = 'white';
                    h.style.boxShadow = '0 0 0 2px #000';
                    h.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h2 of this.h2sArray) {
                if (h2.className != 'donotchange') {
                    h2.style.backgroundColor = 'black';
                    h2.style.color = 'white';
                    h2.style.boxShadow = '0 0 0 2px #000';
                    h2.style.border = '2px solid #ffeb3b';
                }
            }
            // for (let a of this.asArray){
            //   if (a.className != 'donotchange' && 
            //   a.className != 'hover' && 
            //   a.className != 'hover2'){
            //     a.style.backgroundColor = 'black';
            //     a.style.color = 'white';
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //     if(a.className === 'fontsize') {
            //       a.classList.remove('fontsize');
            //       a.classList.add('fontsize2');
            //       a.style.boxShadow = '0 0 0 2px #000';
            //       a.style.border = '2px solid #ffeb3b'
            //     }     
            //   } else if (a.className === 'hover2'){
            //     a.classList.remove('hover2');
            //     a.classList.add('hover3');
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   } else if (a.className === 'hover') {
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   }
            // }
            for (let ul of this.ulsArray) {
                if (ul.id === 'atalhos') {
                    ul.style.backgroundColor = 'black';
                }
            }
        }
    }
}
AjudaContentComponent.ɵfac = function AjudaContentComponent_Factory(t) { return new (t || AjudaContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_1__["AcessibilityBarComponent"])); };
AjudaContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AjudaContentComponent, selectors: [["app-ajuda-content"]], decls: 10, vars: 0, consts: [["id", "pginicial"], ["id", "titulo"], ["tabindex", "0"], ["id", "text"], ["width", "840", "height", "472", "src", "https://www.youtube.com/embed/hGvShzSNUyM", "title", "YouTube video player - v\u00EDdeo de ajuda", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]], template: function AjudaContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ajuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Caso esteja com dificuldade, assista esse v\u00EDdeo para utilizar o Portal do Observat\u00F3rio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#titulo[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    text-align: center;\n}\n\nh1[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    margin-top: 54px;\n    margin-botton: 54px;\n    width: 100%;\n    line-height: 46px;\n}\n\nh2[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    margin-top: 54px;\n    margin-botton: 54px;\n    width: 100%;\n    line-height: 46px;\n}\n\n#text[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 60px;\n    margin-bottom: 60px;\n    text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 24px;\n    color: #333333;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 28px;\n    font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hanVkYS1jb250ZW50L2FqdWRhLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCx3SUFBd0k7SUFDeEksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWp1ZGEtY29udGVudC9hanVkYS1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiN0aXR1bG8ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMXtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgY29sb3I6ICMxQzJFOEE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBtYXJnaW4tdG9wOiA1NHB4O1xuICAgIG1hcmdpbi1ib3R0b246IDU0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbmgye1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBjb2xvcjogIzFDMkU4QTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1hcmdpbi10b3A6IDU0cHg7XG4gICAgbWFyZ2luLWJvdHRvbjogNTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogNDZweDtcbn1cblxuI3RleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjudaContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ajuda-content',
                templateUrl: './ajuda-content.component.html',
                styleUrls: ['./ajuda-content.component.css']
            }]
    }], function () { return [{ type: _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_1__["AcessibilityBarComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/contato-content/contato-content.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/contato-content/contato-content.component.ts ***!
  \*************************************************************************/
/*! exports provided: ContatoContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoContentComponent", function() { return ContatoContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../acessibility-bar/acessibility-bar.component */ "./src/app/components/acessibility-bar/acessibility-bar.component.ts");



class ContatoContentComponent {
    constructor(acessibilityBarComponent) {
        this.acessibilityBarComponent = acessibilityBarComponent;
        this.divsArray = document.getElementsByTagName('div');
        this.psArray = document.getElementsByTagName('p');
        this.hsArray = document.getElementsByTagName('h1');
        this.h2sArray = document.getElementsByTagName('h2');
        this.asArray = document.getElementsByTagName('a');
        this.ulsArray = document.getElementsByTagName('ul');
    }
    ngOnInit() {
        var bench = document.getElementById('bench');
        if (bench.style.backgroundColor === 'black') {
            for (let div of this.divsArray) {
                if (div.className != 'donotchange' &&
                    div.className != 'content' &&
                    div.className != 'mat-card-header-text' &&
                    div.className != 'descricao' &&
                    div.className != 'autor' &&
                    div.className != 'tema' &&
                    div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'content' &&
                    div.className != 'mat-form-field-flex ng-tns-c49-0' &&
                    div.className != 'big pesquisa' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
                    div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-infix ng-tns-c49-0' &&
                    div.className != 'sem-resposta' &&
                    div.className != 'lista-paineis' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
                    div.className != 'mat-form-field-infix ng-tns-c107-0' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-0' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                    div.className != 'ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                    div.className != 'big pesquisa') {
                    div.style.backgroundColor = 'black';
                    div.style.color = 'white';
                }
                if (div.className === 'big pesquisa' ||
                    div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
                    div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
                    div.className === 'mat-form-field-infix ng-tns-c49-0') {
                    div.style.backgroundColor = 'white';
                    div.style.color = 'black';
                }
                if (div.className === "footer-basic") {
                    div.style.backgroundColor = 'white';
                }
                if (div.className === 'img') {
                    div.style.backgroundColor = 'white';
                    div.style.border = '2px solid #000';
                }
            }
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.backgroundColor = 'black';
                    p.style.color = 'white';
                    p.style.boxShadow = '0 0 0 2px #000';
                    p.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.backgroundColor = 'black';
                    h.style.color = 'white';
                    h.style.boxShadow = '0 0 0 2px #000';
                    h.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h2 of this.h2sArray) {
                if (h2.className != 'donotchange') {
                    h2.style.backgroundColor = 'black';
                    h2.style.color = 'white';
                    h2.style.boxShadow = '0 0 0 2px #000';
                    h2.style.border = '2px solid #ffeb3b';
                }
            }
            // for (let a of this.asArray){
            //   if (a.className != 'donotchange' && 
            //   a.className != 'hover' && 
            //   a.className != 'hover2'){
            //     a.style.backgroundColor = 'black';
            //     a.style.color = 'white';
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //     if(a.className === 'fontsize') {
            //       a.classList.remove('fontsize');
            //       a.classList.add('fontsize2');
            //       a.style.boxShadow = '0 0 0 2px #000';
            //       a.style.border = '2px solid #ffeb3b'
            //     }     
            //   } else if (a.className === 'hover2'){
            //     a.classList.remove('hover2');
            //     a.classList.add('hover3');
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   } else if (a.className === 'hover') {
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   }
            // }
            for (let ul of this.ulsArray) {
                if (ul.id === 'atalhos') {
                    ul.style.backgroundColor = 'black';
                }
            }
        }
    }
}
ContatoContentComponent.ɵfac = function ContatoContentComponent_Factory(t) { return new (t || ContatoContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_1__["AcessibilityBarComponent"])); };
ContatoContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContatoContentComponent, selectors: [["app-contato-content"]], decls: 10, vars: 0, consts: [["id", "pginicial"], ["id", "titulo"], ["tabindex", "0"], ["id", "text"], ["tabindex", "0", "id", "frstLine"]], template: function ContatoContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Qualquer d\u00FAvida ou sugest\u00E3o, entre em contato pelo e-mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " observatorio.smped@prefeitura.sp.gov.br ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#pginicial[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n#titulo[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    text-align: center;\n}\n\nh2[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    margin-top: 54px;\n    margin-botton: 54px;\n    width: 100%;\n    line-height: 46px;\n}\n\n#text[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 60px;\n    margin-bottom: 60px;\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 24px;\n    color: #333333;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 28px;\n    font-weight: 500;\n}\n\n#frstLine[_ngcontent-%COMP%] {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YXRvLWNvbnRlbnQvY29udGF0by1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsd0lBQXdJO0lBQ3hJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhdG8tY29udGVudC9jb250YXRvLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwZ2luaWNpYWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3RpdHVsbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgye1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBjb2xvcjogIzFDMkU4QTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1hcmdpbi10b3A6IDU0cHg7XG4gICAgbWFyZ2luLWJvdHRvbjogNTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogNDZweDtcbn1cblxuI3RleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufSAgIFxuXG4jZnJzdExpbmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContatoContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contato-content',
                templateUrl: './contato-content.component.html',
                styleUrls: ['./contato-content.component.css']
            }]
    }], function () { return [{ type: _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_1__["AcessibilityBarComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/foot-bar/foot-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/foot-bar/foot-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: FootBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootBarComponent", function() { return FootBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FootBarComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FootBarComponent.ɵfac = function FootBarComponent_Factory(t) { return new (t || FootBarComponent)(); };
FootBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FootBarComponent, selectors: [["app-foot-bar"]], decls: 20, vars: 0, consts: [[1, "footer-basic"], ["id", "info"], ["id", "footertext1", "tabindex", "0", 1, "footertext", 2, "font-weight", "bold"], ["tabindex", "0", 1, "footertext"], ["tabindex", "0", "href", "https://observatorio.smped.prefeitura.sp.gov.br/", 1, "footertext"], [1, "social"], ["tabindex", "0", "href", "https://www.facebook.com/SMPEDSP/"], ["alt", "facebook", "src", "./assets/facebook.png", "href", "", 1, "icon"], ["tabindex", "0", "href", "https://twitter.com/smpedsp"], ["alt", "twitter", "src", "./assets/twitter.png", "href", "", 1, "icon"], ["tabindex", "0", "href", "https://www.youtube.com/user/inclusaosp"], ["alt", "youtube", "src", "./assets/youtube.png", "href", "", 1, "icon"], ["tabindex", "0", "href", "https://www.instagram.com/smpedsp/?hl=pt-br"], ["alt", "instagram", "src", "./assets/instagram.png", "href", "", 1, "icon"], [1, "selo"], ["href", "https://www.prefeitura.sp.gov.br/cidade/secretarias/pessoa_com_deficiencia", 1, "copyright"]], template: function FootBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Secretaria Municipal da Pessoa com Defici\u00EAncia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Rua L\u00EDbero Badar\u00F3, 425 - 32\u00BA andar - Centro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " observatorio.smped.prefeitura.sp.gov.br ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Secretaria Municipal da Pessoa com Defici\u00EAncia \u00A9 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer-basic[_ngcontent-%COMP%] {  \n    background-color:#222222;\n    color:#FFFFFF;\n    width: 100%;\n    margin-top: 100px;\n    margin-bottom: 0px;\n    display: inline-block;\n    text-align: center;\n  }\n  \n  .footer-basic[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    margin-top:15px;\n    text-align:center;\n    font-size:13px;\n    color:#FFFFFF;\n    margin-bottom:0;\n  }\n  \n  #info[_ngcontent-%COMP%] {\n      margin-top: 30px;\n      margin-right: 30px;\n  }\n  \n  #info[_ngcontent-%COMP%] {\n      display: inline-block;\n      text-align: justify;\n  }\n  \n  a[_ngcontent-%COMP%] {\n    text-decoration: inherit;\n    color:#FFFFFF\n  }\n  \n  .social[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  \n  .icon[_ngcontent-%COMP%]:hover{\n    box-shadow: 0 0 0 2px #FFFFFF;\n  }\n  \n  .icon[_ngcontent-%COMP%] {\n      width: 50px;\n      height: 50px;\n      margin: 10px;\n      display: inline-block ;\n  }\n  \n  .selo[_ngcontent-%COMP%] {\n      display: inline-block;\n      margin: 30px;\n  }\n  \n  .copyright[_ngcontent-%COMP%] {\n    display: block;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290LWJhci9mb290LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBRUE7TUFDSSxnQkFBZ0I7TUFDaEIsa0JBQWtCO0VBQ3RCOztFQUVBO01BQ0kscUJBQXFCO01BQ3JCLG1CQUFtQjtFQUN2Qjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QjtFQUNGOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixZQUFZO01BQ1osc0JBQXNCO0VBQzFCOztFQUVBO01BQ0kscUJBQXFCO01BQ3JCLFlBQVk7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290LWJhci9mb290LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1iYXNpYyB7ICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyMjIyMjI7XG4gICAgY29sb3I6I0ZGRkZGRjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmZvb3Rlci1iYXNpYyAuY29weXJpZ2h0IHtcbiAgICBtYXJnaW4tdG9wOjE1cHg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgZm9udC1zaXplOjEzcHg7XG4gICAgY29sb3I6I0ZGRkZGRjtcbiAgICBtYXJnaW4tYm90dG9tOjA7XG4gIH1cblxuICAjaW5mbyB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgI2luZm8ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICBjb2xvcjojRkZGRkZGXG4gIH1cblxuICAuc29jaWFsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAuaWNvbjpob3ZlcntcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI0ZGRkZGRjtcbiAgfVxuXG4gIC5pY29uIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrIDtcbiAgfVxuXG4gIC5zZWxvIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbjogMzBweDtcbiAgfVxuXG4gIC5jb3B5cmlnaHQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FootBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-foot-bar',
                templateUrl: './foot-bar.component.html',
                styleUrls: ['./foot-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/initial-page/initial-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/initial-page/initial-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: InitialPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPageComponent", function() { return InitialPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../acessibility-bar/acessibility-bar.component */ "./src/app/components/acessibility-bar/acessibility-bar.component.ts");



class InitialPageComponent {
    constructor(acessibilityBarComponent) {
        this.acessibilityBarComponent = acessibilityBarComponent;
        this.divsArray = document.getElementsByTagName('div');
        this.psArray = document.getElementsByTagName('p');
        this.hsArray = document.getElementsByTagName('h1');
        this.h2sArray = document.getElementsByTagName('h2');
        this.asArray = document.getElementsByTagName('a');
        this.ulsArray = document.getElementsByTagName('ul');
    }
    ngOnInit() {
        var bench = document.getElementById('bench');
        if (bench.style.backgroundColor === 'black') {
            for (let div of this.divsArray) {
                if (div.className != 'donotchange' &&
                    div.className != 'content' &&
                    div.className != 'mat-card-header-text' &&
                    div.className != 'descricao' &&
                    div.className != 'autor' &&
                    div.className != 'tema' &&
                    div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'content' &&
                    div.className != 'mat-form-field-flex ng-tns-c49-0' &&
                    div.className != 'big pesquisa' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
                    div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-infix ng-tns-c49-0' &&
                    div.className != 'sem-resposta' &&
                    div.className != 'lista-paineis' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
                    div.className != 'mat-form-field-infix ng-tns-c107-0' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-0' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                    div.className != 'ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                    div.className != 'big pesquisa') {
                    div.style.backgroundColor = 'black';
                    div.style.color = 'white';
                }
                if (div.className === 'big pesquisa' ||
                    div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
                    div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
                    div.className === 'mat-form-field-infix ng-tns-c49-0') {
                    div.style.backgroundColor = 'white';
                    div.style.color = 'black';
                }
                if (div.className === "footer-basic") {
                    div.style.backgroundColor = 'white';
                }
                if (div.className === 'img') {
                    div.style.backgroundColor = 'white';
                    div.style.border = '2px solid #000';
                }
            }
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.backgroundColor = 'black';
                    p.style.color = 'white';
                    p.style.boxShadow = '0 0 0 2px #000';
                    p.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.backgroundColor = 'black';
                    h.style.color = 'white';
                    h.style.boxShadow = '0 0 0 2px #000';
                    h.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h2 of this.h2sArray) {
                if (h2.className != 'donotchange') {
                    h2.style.backgroundColor = 'black';
                    h2.style.color = 'white';
                    h2.style.boxShadow = '0 0 0 2px #000';
                    h2.style.border = '2px solid #ffeb3b';
                }
            }
            // for (let a of this.asArray){
            //   if (a.className != 'donotchange' && 
            //   a.className != 'hover' && 
            //   a.className != 'hover2'){
            //     a.style.backgroundColor = 'black';
            //     a.style.color = 'white';
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //     if(a.className === 'fontsize') {
            //       a.classList.remove('fontsize');
            //       a.classList.add('fontsize2');
            //       a.style.boxShadow = '0 0 0 2px #000';
            //       a.style.border = '2px solid #ffeb3b'
            //     }     
            //   } else if (a.className === 'hover2'){
            //     a.classList.remove('hover2');
            //     a.classList.add('hover3');
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   } else if (a.className === 'hover') {
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   }
            // }
            for (let ul of this.ulsArray) {
                if (ul.id === 'atalhos') {
                    ul.style.backgroundColor = 'black';
                }
            }
        }
    }
}
InitialPageComponent.ɵfac = function InitialPageComponent_Factory(t) { return new (t || InitialPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_1__["AcessibilityBarComponent"])); };
InitialPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InitialPageComponent, selectors: [["app-initial-page"]], decls: 7, vars: 0, consts: [["id", "pginicial"], ["id", "titulo"], ["tabindex", "0"], ["id", "text"]], template: function InitialPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bem vindo ao Observat\u00F3rio Municipal da Pessoa com Defici\u00EAncia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " O Observat\u00F3rio \u00E9 uma a\u00E7\u00E3o da Secretaria Municipal da Pessoa com Defici\u00EAncia de S\u00E3o Paulo que elabora, centraliza e divulga os dados relativos a pessoas com defici\u00EAncia e acessibilidade na cidade. Ainda analisa e monitora pol\u00EDticas p\u00FAblicas que atendem pessoas com defici\u00EAncia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#pginicial[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n#titulo[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 54px;\n    margin-botton: 54px;\n    text-align: center;\n}\n\nh2[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    width: 100%;\n    line-height: 46px;\n}\n\n#text[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 60px;\n    margin-bottom: 60px;\n}\n\np[_ngcontent-%COMP%] {\n    text-align: justify;\n    font-size: 24px;\n    color: #333333;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 28px;\n    font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbml0aWFsLXBhZ2UvaW5pdGlhbC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLHdJQUF3STtJQUN4SSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbml0aWFsLXBhZ2UvaW5pdGlhbC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGdpbmljaWFsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN0aXR1bG8ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgbWFyZ2luLXRvcDogNTRweDtcbiAgICBtYXJnaW4tYm90dG9uOiA1NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDJ7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGNvbG9yOiAjMUMyRThBO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbiN0ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxucCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitialPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-initial-page',
                templateUrl: './initial-page.component.html',
                styleUrls: ['./initial-page.component.css']
            }]
    }], function () { return [{ type: _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_1__["AcessibilityBarComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/mapa-servicos/mapa-servicos.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/mapa-servicos/mapa-servicos.component.ts ***!
  \*********************************************************************/
/*! exports provided: MapaServicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaServicosComponent", function() { return MapaServicosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../acessibility-bar/acessibility-bar.component */ "./src/app/components/acessibility-bar/acessibility-bar.component.ts");



class MapaServicosComponent {
    constructor(acessibilityBarComponent) {
        this.acessibilityBarComponent = acessibilityBarComponent;
        this.divsArray = document.getElementsByTagName('div');
        this.psArray = document.getElementsByTagName('p');
        this.hsArray = document.getElementsByTagName('h1');
        this.h2sArray = document.getElementsByTagName('h2');
        this.asArray = document.getElementsByTagName('a');
        this.ulsArray = document.getElementsByTagName('ul');
    }
    ngOnInit() {
        var bench = document.getElementById('bench');
        if (bench.style.backgroundColor === 'black') {
            for (let div of this.divsArray) {
                if (div.className != 'donotchange' &&
                    div.className != 'content' &&
                    div.className != 'mat-card-header-text' &&
                    div.className != 'descricao' &&
                    div.className != 'autor' &&
                    div.className != 'tema' &&
                    div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'content' &&
                    div.className != 'mat-form-field-flex ng-tns-c49-0' &&
                    div.className != 'big pesquisa' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
                    div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-infix ng-tns-c49-0' &&
                    div.className != 'sem-resposta' &&
                    div.className != 'lista-paineis' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
                    div.className != 'mat-form-field-infix ng-tns-c107-0' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-0' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                    div.className != 'ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                    div.className != 'big pesquisa') {
                    div.style.backgroundColor = 'black';
                    div.style.color = 'white';
                }
                if (div.className === 'big pesquisa' ||
                    div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
                    div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
                    div.className === 'mat-form-field-infix ng-tns-c49-0') {
                    div.style.backgroundColor = 'white';
                    div.style.color = 'black';
                }
                if (div.className === "footer-basic") {
                    div.style.backgroundColor = 'white';
                }
                if (div.className === 'img') {
                    div.style.backgroundColor = 'white';
                    div.style.border = '2px solid #000';
                }
            }
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.backgroundColor = 'black';
                    p.style.color = 'white';
                    p.style.boxShadow = '0 0 0 2px #000';
                    p.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.backgroundColor = 'black';
                    h.style.color = 'white';
                    h.style.boxShadow = '0 0 0 2px #000';
                    h.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h2 of this.h2sArray) {
                if (h2.className != 'donotchange') {
                    h2.style.backgroundColor = 'black';
                    h2.style.color = 'white';
                    h2.style.boxShadow = '0 0 0 2px #000';
                    h2.style.border = '2px solid #ffeb3b';
                }
            }
            // for (let a of this.asArray){
            //   if (a.className != 'donotchange' && 
            //   a.className != 'hover' && 
            //   a.className != 'hover2'){
            //     a.style.backgroundColor = 'black';
            //     a.style.color = 'white';
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //     if(a.className === 'fontsize') {
            //       a.classList.remove('fontsize');
            //       a.classList.add('fontsize2');
            //       a.style.boxShadow = '0 0 0 2px #000';
            //       a.style.border = '2px solid #ffeb3b'
            //     }     
            //   } else if (a.className === 'hover2'){
            //     a.classList.remove('hover2');
            //     a.classList.add('hover3');
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   } else if (a.className === 'hover') {
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   }
            // }
            for (let ul of this.ulsArray) {
                if (ul.id === 'atalhos') {
                    ul.style.backgroundColor = 'black';
                }
            }
        }
    }
}
MapaServicosComponent.ɵfac = function MapaServicosComponent_Factory(t) { return new (t || MapaServicosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_1__["AcessibilityBarComponent"])); };
MapaServicosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapaServicosComponent, selectors: [["app-mapa-servicos"]], decls: 28, vars: 0, consts: [["id", "pginicial"], ["id", "titulo"], ["tabindex", "0"], ["src", "https://www.google.com/maps/d/embed?mid=1Iuowv-fzbrNxTssTRVtHYhMKlXk&ehbc=2E312F", "width", "640", "height", "480"], ["iv", "", "id", "legenda"], ["id", "text"]], template: function MapaServicosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mapa da Rede de Servi\u00E7os Acess\u00EDveis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "O Mapa da Rede de Servi\u00E7os Acess\u00EDveis destaca os equipamentos p\u00FAblicos com acessibilidade da cidade de S\u00E3o Paulo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " O Mapa da Rede de Servi\u00E7os Acess\u00EDveis \u00E9 um recurso que apresenta\ngeograficamente os equipamentos p\u00FAblicos com acessibilidade e os que atendem \u00E0\npessoa com defici\u00EAncia em S\u00E3o Paulo. \u00C9 um mapa online organizado de maneira\nsimples para consulta e analise. Al\u00E9m de trazer informa\u00E7\u00F5es como endere\u00E7o e\ntelefone para contato, traz tamb\u00E9m indica\u00E7\u00F5es do tipo de acessibilidade do local. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Seu objetivo principal \u00E9 facilitar a busca por equipamentos p\u00FAblicos\nacess\u00EDveis na cidade e centralizar as informa\u00E7\u00F5es de acessibilidade desses locais. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Por ser elaborado em uma plataforma popularmente conhecida e de f\u00E1cil\nutiliza\u00E7\u00E3o, o Mapa do Google (Google Maps), o Mapa de Rede facilita a busca por\ninforma\u00E7\u00F5es sobre os locais e formas de locomo\u00E7\u00E3o, j\u00E1 que conta com os recursos\nda pr\u00F3pria plataforma. Assim, garante ao mun\u00EDcipe informa\u00E7\u00E3o centralizada, r\u00E1pida e\ntransparente permitindo que os deslocamentos pela cidade se tornem mais f\u00E1ceis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " O Mapa da Rede de Servi\u00E7os foi feito com pesquisa e busca sobre os\nequipamentos p\u00FAblicos acess\u00EDveis na cidade de S\u00E3o Paulo nas Secretarias\nMunicipais. Tamb\u00E9m contou com o apoio da Coordena\u00E7\u00E3o de Acessibilidade e\nDesenho Universal CADU, parte da SMPED. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " As informa\u00E7\u00F5es foram reunidas por meio de di\u00E1logos intersecretariais entre a\nSMPED e as demais secretarias, al\u00E9m de intensa pesquisa dentro da prefeitura e\npublica\u00E7\u00F5es de Institutos que j\u00E1 dialogam com as secretarias. Vale ressaltar que\napesar de nem todos serem plenamente acess\u00EDveis para todos os tipos de\ndefici\u00EAncia, os equipamentos apresentam requisitos m\u00EDnimos de acessibilidade para\ngarantir o acesso e o atendimento da pessoa com defici\u00EAncia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " O Mapa est\u00E1 em constante constru\u00E7\u00E3o e \u00E9 periodicamente atualizado. O\nobjetivo \u00E9 que cres\u00E7a cada vez mais e aglomere mais e mais informa\u00E7\u00F5es, ajudando\nna constru\u00E7\u00E3o de uma cidade mais inclusiva. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#pginicial[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n#titulo[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    text-align: center;\n}\n\nh1[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    margin-top: 54px;\n    margin-botton: 54px;\n    width: 100%;\n    line-height: 46px;\n}\n\nh2[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    margin-top: 54px;\n    margin-botton: 54px;\n    width: 100%;\n    line-height: 46px;\n}\n\n#text[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 30px;\n    margin-bottom: 60px;\n    text-align: justify;\n    font-size: 24px;\n    color: #333333;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 28px;\n    font-weight: 500;\n}\n\n#legenda[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    font-size: 16px !important;\n    text-align: center;\n    color: #333333;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 28px;\n    font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXBhLXNlcnZpY29zL21hcGEtc2Vydmljb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLHdJQUF3STtJQUN4SSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3SUFBd0k7SUFDeEksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwYS1zZXJ2aWNvcy9tYXBhLXNlcnZpY29zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGdpbmljaWFsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN0aXR1bG8ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMXtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgY29sb3I6ICMxQzJFOEE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBtYXJnaW4tdG9wOiA1NHB4O1xuICAgIG1hcmdpbi1ib3R0b246IDU0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbmgye1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBjb2xvcjogIzFDMkU4QTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1hcmdpbi10b3A6IDU0cHg7XG4gICAgbWFyZ2luLWJvdHRvbjogNTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogNDZweDtcbn1cblxuI3RleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI2xlZ2VuZGEge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapaServicosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mapa-servicos',
                templateUrl: './mapa-servicos.component.html',
                styleUrls: ['./mapa-servicos.component.css']
            }]
    }], function () { return [{ type: _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_1__["AcessibilityBarComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/menu-bar/menu-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/menu-bar/menu-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: MenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function() { return MenuBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class MenuBarComponent {
    constructor() {
    }
    ngOnInit() {
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    focus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.delay(500);
            document.getElementsByTagName("h2")[0].focus();
            console.log(document.getElementsByTagName("h2")[0]);
        });
    }
}
MenuBarComponent.ɵfac = function MenuBarComponent_Factory(t) { return new (t || MenuBarComponent)(); };
MenuBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuBarComponent, selectors: [["app-menu-bar"]], decls: 20, vars: 0, consts: [[1, "table"], ["id", "atalho"], ["id", "pgInicial1"], ["routerLink", "", "tabindex", "0", "id", "pgInicial", 1, "hover", 3, "click"], ["routerLink", "/quem-somos", "tabindex", "0", "id", "Qmsomos", 1, "hover", 3, "click"], ["routerLink", "/paineis", "tabindex", "0", "id", "Paineis", 1, "hover", 3, "click"], [1, "twolines"], ["routerLink", "/mapa-rede-servicos-acessiveis", "tabindex", "0", "id", "Mapa", 1, "hover", 3, "click"], ["routerLink", "/contatos", "tabindex", "0", "id", "Contato", 1, "hover", 3, "click"], ["routerLink", "/ajuda", "tabindex", "0", "id", "Ajuda", 1, "hover", 3, "click"]], template: function MenuBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuBarComponent_Template_a_click_3_listener() { return ctx.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "P\u00E1gina Inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuBarComponent_Template_a_click_6_listener() { return ctx.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Quem somos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuBarComponent_Template_a_click_9_listener() { return ctx.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Pain\u00E9is");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuBarComponent_Template_a_click_12_listener() { return ctx.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Mapa da Rede de Servi\u00E7os Acess\u00EDveis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuBarComponent_Template_a_click_15_listener() { return ctx.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuBarComponent_Template_a_click_18_listener() { return ctx.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Ajuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".table[_ngcontent-%COMP%] {\n    display: table;   \n\tmargin: 0 auto;\n}\n\n#atalho[_ngcontent-%COMP%] {\n    color: #FFFFFF ; \n    font-size: 24px;\n    font-weight: bold;\n    margin: 0;\n    list-style-type: none;\n    width: 100%;\n    align-content: center;\n}\n\nli[_ngcontent-%COMP%] {\n    display: inline;\n    float: left;\n    min-width: 13vw;\n    width: -moz-fit-content;\n    width: fit-content;\n    max-width: 230px;\n    padding-top: 28px;\n    text-align: center;\n}\n\nlist[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    display: inline-block;\n    text-decoration: none !important;\n}\n\na[_ngcontent-%COMP%]:link {\n    text-decoration: none;\n  }\n\na[_ngcontent-%COMP%] {\n    color: #FFF;\n}\n\na[_ngcontent-%COMP%]:visited {\n    text-decoration: none;\n  }\n\n.twolines[_ngcontent-%COMP%]{\n    padding-top: 10px !important;\n    padding-bottom: 10px !important;\n    line-height: 28px;\n}\n\nhover[_ngcontent-%COMP%] {\n    background-color: #1C2E8A;\n}\n\nhover[_ngcontent-%COMP%]:visited {\n    color: #FFFFFF;\n}\n\n.hover[_ngcontent-%COMP%]:hover {\n    cursor: pointer; \n    background-color: #FFFFFF;\n    color: #1C2E8A;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LWJhci9tZW51LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYyxJQUFJLGdDQUFnQztDQUNyRCxjQUFjO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7SUFDZix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFCQUFxQjtFQUN2Qjs7QUFFRjtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtFQUN2Qjs7QUFHRjtJQUNJLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1iYXIvbWVudS1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XG4gICAgZGlzcGxheTogdGFibGU7ICAgLyogQWxsb3cgdGhlIGNlbnRlcmluZyB0byB3b3JrICovXG5cdG1hcmdpbjogMCBhdXRvO1xufVxuXG4jYXRhbGhvIHtcbiAgICBjb2xvcjogI0ZGRkZGRiA7IFxuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxubGkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtaW4td2lkdGg6IDEzdnc7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1heC13aWR0aDogMjMwcHg7XG4gICAgcGFkZGluZy10b3A6IDI4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5saXN0IGF7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hOmxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG5hIHtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuYTp2aXNpdGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBcbi50d29saW5lc3tcbiAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyRThBO1xufVxuXG5ob3Zlcjp2aXNpdGVkIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmhvdmVyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgY29sb3I6ICMxQzJFOEE7XG4gfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MenuBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-menu-bar',
                templateUrl: './menu-bar.component.html',
                styleUrls: ['./menu-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/objective-content/objective-content.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/objective-content/objective-content.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ObjectiveContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectiveContentComponent", function() { return ObjectiveContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../acessibility-bar/acessibility-bar.component */ "./src/app/components/acessibility-bar/acessibility-bar.component.ts");



class ObjectiveContentComponent {
    constructor(acessibilityBarComponent) {
        this.acessibilityBarComponent = acessibilityBarComponent;
        this.divsArray = document.getElementsByTagName('div');
        this.psArray = document.getElementsByTagName('p');
        this.hsArray = document.getElementsByTagName('h1');
        this.h2sArray = document.getElementsByTagName('h2');
        this.asArray = document.getElementsByTagName('a');
        this.ulsArray = document.getElementsByTagName('ul');
    }
    ngOnInit() {
        var bench = document.getElementById('bench');
        if (bench.style.backgroundColor === 'black') {
            for (let div of this.divsArray) {
                if (div.className != 'donotchange' &&
                    div.className != 'content' &&
                    div.className != 'mat-card-header-text' &&
                    div.className != 'descricao' &&
                    div.className != 'autor' &&
                    div.className != 'tema' &&
                    div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'content' &&
                    div.className != 'mat-form-field-flex ng-tns-c49-0' &&
                    div.className != 'big pesquisa' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
                    div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-infix ng-tns-c49-0' &&
                    div.className != 'sem-resposta' &&
                    div.className != 'lista-paineis' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
                    div.className != 'mat-form-field-infix ng-tns-c107-0' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-0' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                    div.className != 'ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                    div.className != 'big pesquisa') {
                    div.style.backgroundColor = 'black';
                    div.style.color = 'white';
                }
                if (div.className === 'big pesquisa' ||
                    div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
                    div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
                    div.className === 'mat-form-field-infix ng-tns-c49-0') {
                    div.style.backgroundColor = 'white';
                    div.style.color = 'black';
                }
                if (div.className === "footer-basic") {
                    div.style.backgroundColor = 'white';
                }
                if (div.className === 'img') {
                    div.style.backgroundColor = 'white';
                    div.style.border = '2px solid #000';
                }
            }
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.backgroundColor = 'black';
                    p.style.color = 'white';
                    p.style.boxShadow = '0 0 0 2px #000';
                    p.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.backgroundColor = 'black';
                    h.style.color = 'white';
                    h.style.boxShadow = '0 0 0 2px #000';
                    h.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h2 of this.h2sArray) {
                if (h2.className != 'donotchange') {
                    h2.style.backgroundColor = 'black';
                    h2.style.color = 'white';
                    h2.style.boxShadow = '0 0 0 2px #000';
                    h2.style.border = '2px solid #ffeb3b';
                }
            }
            // for (let a of this.asArray){
            //   if (a.className != 'donotchange' && 
            //   a.className != 'hover' && 
            //   a.className != 'hover2'){
            //     a.style.backgroundColor = 'black';
            //     a.style.color = 'white';
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //     if(a.className === 'fontsize') {
            //       a.classList.remove('fontsize');
            //       a.classList.add('fontsize2');
            //       a.style.boxShadow = '0 0 0 2px #000';
            //       a.style.border = '2px solid #ffeb3b'
            //     }     
            //   } else if (a.className === 'hover2'){
            //     a.classList.remove('hover2');
            //     a.classList.add('hover3');
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   } else if (a.className === 'hover') {
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   }
            // }
            for (let ul of this.ulsArray) {
                if (ul.id === 'atalhos') {
                    ul.style.backgroundColor = 'black';
                }
            }
        }
    }
}
ObjectiveContentComponent.ɵfac = function ObjectiveContentComponent_Factory(t) { return new (t || ObjectiveContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_1__["AcessibilityBarComponent"])); };
ObjectiveContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ObjectiveContentComponent, selectors: [["app-objective-content"]], decls: 22, vars: 0, consts: [["id", "pginicial"], ["id", "titulo"], ["tabindex", "0"], ["id", "text"]], template: function ObjectiveContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quem somos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " O Observat\u00F3rio Municipal da Pessoa com Defici\u00EAncia \u00E9 uma a\u00E7\u00E3o da Secretaria Municipal da Pessoa com Defici\u00EAncia - SMPED que busca produzir, agrupar, analisar e divulgar dados estat\u00EDsticos e anal\u00EDticos relativos \u00E0 pessoa com defici\u00EAncia residente no munic\u00EDpio de S\u00E3o Paulo, assim como, aos servi\u00E7os e pol\u00EDticas p\u00FAblicas voltados \u00E0 plena e efetiva inclus\u00E3o destas pessoas na sociedade. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Traz um trabalho transversal que dialoga com v\u00E1rias \u00E1reas da Administra\u00E7\u00E3o P\u00FAblica, reunindo assim os mais diversos indicadores relativos \u00E0 pessoa com defici\u00EAncia e acessibilidade. Assim estabelece correla\u00E7\u00F5es entre as \u00E1reas, compreendendo a pessoa com defici\u00EAncia em sua totalidade. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Sua inciativa tem como foco subsidiar o planejamento estrat\u00E9gico de pol\u00EDticas e monitorar a realiza\u00E7\u00E3o progressiva dos direitos da pessoa com defici\u00EAncia, de modo a se tornar um reposit\u00F3rio de informa\u00E7\u00E3o sobre este assunto. Al\u00E9m de ser um instrumento de informa\u00E7\u00E3o e de suporte \u00E0 decis\u00E3o p\u00FAblica necess\u00E1rio para a articula\u00E7\u00E3o e formula\u00E7\u00E3o de pol\u00EDticas p\u00FAblicas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " No desenvolvimento das a\u00E7\u00F5es e atividades do Observat\u00F3rio est\u00E1 a implanta\u00E7\u00E3o de sistemas e plataformas de tecnologia que permitam analisar, compilar e publicizar as an\u00E1lises e estudos produzidos. Al\u00E9m do desenvolvimento de sistemas de informa\u00E7\u00E3o georreferenciados e do monitoramento e avalia\u00E7\u00E3o da efic\u00E1cia, efici\u00EAncia e efetividade das a\u00E7\u00F5es, projetos e programas vinculados \u00E0s pessoas com defici\u00EAncia na Administra\u00E7\u00E3o P\u00FAblica Municipal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Este portal \u00E9 uma plataforma online desenvolvida \u00E0 luz da acessibilidade digital, incluindo fatores de transpar\u00EAncia, usabilidade e navegabilidade, objetivando contemplar as necessidades de todas as pessoas com defici\u00EAncia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " A coordena\u00E7\u00E3o do Observat\u00F3rio est\u00E1 a cargo da Divis\u00E3o de Planejamento, Monitoramento e Avalia\u00E7\u00E3o - DPMA integrada na Coordena\u00E7\u00E3o de Pol\u00EDticas e Projetos de Inclus\u00E3o - COPPI da Secretaria Municipal da Pessoa com Defici\u00EAncia da Prefeitura de S\u00E3o Paulo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#pginicial[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n#titulo[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    text-align: center;\n}\n\nh2[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    margin-top: 54px;\n    margin-botton: 54px;\n    width: 100%;\n    line-height: 46px;\n}\n\n#text[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 60px;\n    margin-bottom: 60px;\n}\n\np[_ngcontent-%COMP%] {\n    text-align: justify;\n    font-size: 24px;\n    color: #333333;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 28px;\n    font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vYmplY3RpdmUtY29udGVudC9vYmplY3RpdmUtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7SUFDZCx3SUFBd0k7SUFDeEksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2JqZWN0aXZlLWNvbnRlbnQvb2JqZWN0aXZlLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwZ2luaWNpYWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3RpdHVsbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgye1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBjb2xvcjogIzFDMkU4QTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1hcmdpbi10b3A6IDU0cHg7XG4gICAgbWFyZ2luLWJvdHRvbjogNTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogNDZweDtcbn1cblxuI3RleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG5wIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjectiveContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-objective-content',
                templateUrl: './objective-content.component.html',
                styleUrls: ['./objective-content.component.css']
            }]
    }], function () { return [{ type: _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_1__["AcessibilityBarComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dash-description.service.ts":
/*!*********************************************!*\
  !*** ./src/app/dash-description.service.ts ***!
  \*********************************************/
/*! exports provided: DashDescriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashDescriptionService", function() { return DashDescriptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





class DashDescriptionService {
    constructor(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
    }
    //getDescription(uid: string)
    //{
    //  let url="http://localhost:3000/api/dashboards/uid/" + uid
    //  const headers = new HttpHeaders({
    //    'Content-Type': 'application/json',
    //    'Authorization': `Bearer eyJrIjoibkVueHpMTzFKcThkcTIwVnB0RVZRMTgxVDR6QUY4aWIiLCJuIjoidGVzdGUiLCJpZCI6MX0=`
    //  }) 
    //  this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(url);
    //  return this.http.get(url);    
    //}
    //  getDescription(uid: string)
    //  {
    //    let url="https://f5aa-143-107-167-161.sa.ngrok.io/api/dashboards/uid/" + uid
    //    const headers = new HttpHeaders({
    //      'Content-Type': 'application/json',
    //      'Authorization': `Bearer eyJrIjoieTFPRWZGb21sWDBUZDd0N1RvZWlvUVB2dk1ieFh2b3EiLCJuIjoib2JzZXJ2YXRvcmlvIiwiaWQiOjF9`
    //    }) 
    //    return this.http.get(url, {headers: headers});    
    //  }
    getDescription(uid) {
        let url = "https://647c-143-107-167-161.sa.ngrok.io/api/dashboards/uid/" + uid;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJrIjoieTFPRWZGb21sWDBUZDd0N1RvZWlvUVB2dk1ieFh2b3EiLCJuIjoib2JzZXJ2YXRvcmlvIiwiaWQiOjF9`
        });
        return this.http.get(url, { headers: headers });
    }
}
DashDescriptionService.ɵfac = function DashDescriptionService_Factory(t) { return new (t || DashDescriptionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
DashDescriptionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashDescriptionService, factory: DashDescriptionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashDescriptionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/grafa-painel/grafa-painel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/grafa-painel/grafa-painel.component.ts ***!
  \********************************************************/
/*! exports provided: GrafaPainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrafaPainelComponent", function() { return GrafaPainelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _dash_description_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dash-description.service */ "./src/app/dash-description.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function GrafaPainelComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("T\u00EDtulo: ", panel_r1.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Descri\u00E7\u00E3o: ", panel_r1.description, "");
} }
class GrafaPainelComponent {
    constructor(route, sanitizer, DetailsGrafana) {
        this.route = route;
        this.sanitizer = sanitizer;
        this.DetailsGrafana = DetailsGrafana;
        this.description = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.separator = this.id.indexOf("&");
        this.separator2 = this.id.indexOf("@@");
        this.url = this.id.slice(this.separator2 + 4, this.separator);
        this.uid = this.id.slice(0, this.separator2);
        this.title = this.id.slice(this.separator + 1, this.id.length);
        this.source = "https://34b4-143-107-167-161.sa.ngrok.io/d" + this.url + "?orgId=1" + "&kiosk=true";
        //this.source = "http://localhost:3000/d" + this.url + "?orgId=1" + "&kiosk=true"
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.source);
        this.DetailsGrafana.getDescription(this.uid).subscribe(data => {
            this.description.push(data);
        });
    }
}
GrafaPainelComponent.ɵfac = function GrafaPainelComponent_Factory(t) { return new (t || GrafaPainelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dash_description_service__WEBPACK_IMPORTED_MODULE_3__["DashDescriptionService"])); };
GrafaPainelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GrafaPainelComponent, selectors: [["app-grafa-painel"]], decls: 17, vars: 6, consts: [["id", "pginicial"], [1, "botaoVoltar"], ["routerLink", "/paineis", 1, "botaoVoltarProprio"], ["id", "titulo"], ["tabindex", "0"], [1, "text"], ["id", "titulo-valor"], ["id", "autor-valor"], ["id", "descricao-valor"], ["id", "graficos"], ["id", "myIframe", "width", "90%", "height", "1000", "frameborder", "0", 3, "src"], ["id", "text2", 4, "ngFor", "ngForOf"], ["id", "text2"], ["id", "titulo-panel-valor"], ["id", "descricao-panel-valor"]], template: function GrafaPainelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "iframe", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GrafaPainelComponent_div_16_Template, 5, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tema: ", ctx.description[0].meta.folderTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Autor: ", ctx.description[0].meta.updatedBy, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description[0].dashboard.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.safeSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.description[0].dashboard.panels);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["#titulo[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    text-align: center;\n}\n\nh1[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    margin-top: 54px;\n    margin-botton: 54px;\n    width: 100%;\n    line-height: 46px;\n}\n\nh2[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    margin-top: 54px;\n    margin-botton: 54px;\n    width: 100%;\n    line-height: 46px;\n}\n\n.text[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 60px;\n    margin-bottom: 60px;\n    text-align: center;\n}\n\n#text2[_ngcontent-%COMP%] {\n    margin-left: 8%;\n    margin-right: 8%;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    align-items: left;\n}\n\n#titulo-valor[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-weight: normal;\n}\n\n#autor-valor[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight:lighter;\n}\n\n#descricao-valor[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight:normal;\n}\n\n#titulo-panel-valor[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n#descricao-panel-valor[_ngcontent-%COMP%] {\n    text-align: left;\n    margin-left: 10px;\n    font-size: 14px;\n}\n\np[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 24px;\n    color: #333333;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 28px;\n    font-weight: 500;\n}\n\n.botaoVoltar[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 20;  \n    margin-left: 8%;\n}\n\n.botaoVoltarProprio[_ngcontent-%COMP%]{\n    display: inline;\n    font-size: 20px;\n    background-color: #1C2E8A;\n    color: white;\n    border-radius: 10px;\n    cursor: pointer;\n    float: left;\n    width: -moz-fit-content;\n    width: fit-content;\n    text-align: center;\n}\n\n.botaoVoltarProprio[_ngcontent-%COMP%]:hover{\n    background-color: #1C2EEE;\n    color: white;\n}\n\n#graficos[_ngcontent-%COMP%] {\n    align-items: center;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhZmEtcGFpbmVsL2dyYWZhLXBhaW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztJQUNkLHdJQUF3STtJQUN4SSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZ3JhZmEtcGFpbmVsL2dyYWZhLXBhaW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jdGl0dWxvIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDF7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGNvbG9yOiAjMUMyRThBO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgbWFyZ2luLXRvcDogNTRweDtcbiAgICBtYXJnaW4tYm90dG9uOiA1NHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xufVxuXG5oMntcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgY29sb3I6ICMxQzJFOEE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBtYXJnaW4tdG9wOiA1NHB4O1xuICAgIG1hcmdpbi1ib3R0b246IDU0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbi50ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN0ZXh0MiB7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xuICAgIG1hcmdpbi1yaWdodDogOCU7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xufVxuXG4jdGl0dWxvLXZhbG9yIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuI2F1dG9yLXZhbG9yIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcbn1cblxuI2Rlc2NyaWNhby12YWxvciB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbn1cblxuXG4jdGl0dWxvLXBhbmVsLXZhbG9yIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2Rlc2NyaWNhby1wYW5lbC12YWxvciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbnAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYm90YW9Wb2x0YXIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAyMDsgIFxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcbn1cblxuLmJvdGFvVm9sdGFyUHJvcHJpb3tcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzJFOEE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3Rhb1ZvbHRhclByb3ByaW86aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFDMkVFRTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNncmFmaWNvcyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GrafaPainelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grafa-painel',
                templateUrl: './grafa-painel.component.html',
                styleUrls: ['./grafa-painel.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _dash_description_service__WEBPACK_IMPORTED_MODULE_3__["DashDescriptionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/grafana-dashs.service.ts":
/*!******************************************!*\
  !*** ./src/app/grafana-dashs.service.ts ***!
  \******************************************/
/*! exports provided: GrafanaDashsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrafanaDashsService", function() { return GrafanaDashsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class GrafanaDashsService {
    constructor(http) {
        this.http = http;
    }
    //getData()
    //{
    //  let url="http://localhost:3000/api/search"
    //  const headers = new HttpHeaders({
    //    'Content-Type': 'application/json',
    //    'Authorization': `Bearer eyJrIjoibkVueHpMTzFKcThkcTIwVnB0RVZRMTgxVDR6QUY4aWIiLCJuIjoidGVzdGUiLCJpZCI6MX0=`
    //  }) 
    //  return this.http.get(url, {headers: headers});    
    //}
    //getData()
    //  {
    //    let url="https://647c-143-107-167-161.sa.ngrok.io/api/search"
    //    const headers = new HttpHeaders({
    //      'Content-Type': 'application/json',
    //      'Authorization': `Bearer eyJrIjoieTFPRWZGb21sWDBUZDd0N1RvZWlvUVB2dk1ieFh2b3EiLCJuIjoib2JzZXJ2YXRvcmlvIiwiaWQiOjF9`
    //    }) 
    //    return this.http.get(url, {headers: headers});    
    //  }
    getData() {
        let url = "https://647c-143-107-167-161.sa.ngrok.io/api/search";
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJrIjoieTFPRWZGb21sWDBUZDd0N1RvZWlvUVB2dk1ieFh2b3EiLCJuIjoib2JzZXJ2YXRvcmlvIiwiaWQiOjF9`
        });
        return this.http.get(url, { headers: headers });
    }
}
GrafanaDashsService.ɵfac = function GrafanaDashsService_Factory(t) { return new (t || GrafanaDashsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GrafanaDashsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GrafanaDashsService, factory: GrafanaDashsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GrafanaDashsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/navigation/navigation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/navigation/navigation.module.ts ***!
  \*************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/navigation/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class NavigationModule {
}
NavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavigationModule });
NavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NavigationModule_Factory(t) { return new (t || NavigationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavigationModule, { declarations: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]], exports: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
                ],
                exports: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/navigation/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/navigation/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_portal_acessibilidade_dialog_acessibilidade_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component */ "./src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");







const _c0 = function () { return ["/"]; };
class ToolbarComponent {
    constructor(scroll, router, dialog, elementRef) {
        this.scroll = scroll;
        this.router = router;
        this.dialog = dialog;
        this.elementRef = elementRef;
        this.loggedIn = false;
        this.contraste = false;
        this.isPaginaInicial = true;
        this.isTabVisivel = 0;
        this.isDialogOpen = false;
        router.events.subscribe((val) => {
            if (this.router.url === '/paineis') {
                this.isPaginaInicial = true;
                document.getElementById("irBusca").tabIndex = 0;
                //this.isTabVisivel = 0;
            }
            else {
                this.isPaginaInicial = false;
                document.getElementById("irBusca").tabIndex = -1;
                //this.isTabVisivel = -1;
            }
        });
        this.dialog._afterAllClosed.subscribe(n => {
            this.isDialogOpen = false;
        });
    }
    ngOnInit() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                document.querySelector(this.getAttribute('href')).click();
            });
        });
    }
    irConteudo() {
        var _a, _b;
        this.scroll.scrollToAnchor("conteudo");
        (_a = document.querySelector('#conteudo')) === null || _a === void 0 ? void 0 : _a.focus();
        (_b = document.querySelector('#conteudo')) === null || _b === void 0 ? void 0 : _b.click();
    }
    irBusca() {
        try {
            if (document.getElementById("filtro")) {
                document.getElementById("filtro").click();
            }
        }
        finally {
        }
    }
    inverterCor() {
        if (this.contraste === false) {
            document.documentElement.style.setProperty('--color-terciary-text', '#3e3d3d');
            document.documentElement.style.setProperty('--text-grey', '#111212');
            document.documentElement.style.setProperty('--color-background', '#f4f1f1');
            document.documentElement.style.setProperty('--color-primary', '#253b46');
            document.documentElement.style.setProperty('--color-search-field', '#504e4e');
            document.body.style.filter = "invert(1)";
            this.contraste = !this.contraste;
        }
        else {
            document.body.style.filter = "invert(0)";
            this.contraste = !this.contraste;
            document.documentElement.style.setProperty('--color-terciary-text', '#929292');
            document.documentElement.style.setProperty('--text-grey', '#5f6368');
            document.documentElement.style.setProperty('--color-background', '#fafafa');
            document.documentElement.style.setProperty('--color-primary', '#607d8b');
            document.documentElement.style.setProperty('--color-search-field', '#8a8a8a');
        }
    }
    openDialog() {
        if (!this.isDialogOpen) {
            this.dialog.open(src_app_portal_acessibilidade_dialog_acessibilidade_dialog_component__WEBPACK_IMPORTED_MODULE_1__["AcessibilidadeDialogComponent"]);
            this.isDialogOpen = true;
        }
        else {
            this.dialog.closeAll();
            this.isDialogOpen = false;
        }
    }
    onKeyPressCor(e) {
        if (e.keyCode == 13) {
            this.inverterCor();
        }
    }
    closeDialog() {
        this.dialog.closeAll();
    }
    onKeyPressAcess(e) {
        if (e.keyCode == 13) {
            if (!this.isDialogOpen) {
                this.openDialog();
            }
        }
    }
    onKeyPressConteudo(e) {
        if (e.keyCode == 13) {
            this.irConteudo();
        }
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 10, vars: 2, consts: [[1, "donotchange"], ["id", "toolbar-principal", 1, "donotchange"], ["tabindex", "0", "id", "logo-observatorio", 1, "donotchange", 3, "routerLink"], ["src", "/assets/2019.06.29---Layout-Observat\u00F3rio-Municipal-PCD--COLORIDO-VAZADO.PNG", "alt", "Observat\u00F3rio Municipal da Pessoa com Defici\u00EAncia", 1, "logo"], ["id", "title", 1, "donotchange"], [1, "donotchange", 2, "text-align", "right", "width", "70%"], ["tabindex", "0", "href", "https://www.prefeitura.sp.gov.br/cidade/secretarias/pessoa_com_deficiencia/", "id", "logo-prefeitura", 1, "donotchange"], ["src", "/assets/Pessoa+com+Defici\u00EAncia_principal+-+horizontal .png", "alt", "Secretaria Municipal da Pessoa com Defici\u00EAncia - SMPED", 1, "logo"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Observat\u00F3rio Municipal da Pessoa com Defici\u00EAncia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarRow"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["#toolbar-principal[_ngcontent-%COMP%] {\n    background-color: #FFFFFF;\n    color: #1C2E8A;\n    height: 200px;\n    position: relative;\n}\n\n#title[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\nh1[_ngcontent-%COMP%]{\n    font-size: 40px;\n    font-weight: bold;   \n    padding: 5px; \n    position: relative;\n    white-space: normal; \n}\n\n.logo[_ngcontent-%COMP%] {\n    height: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b29sYmFyLXByaW5jaXBhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBjb2xvcjogIzFDMkU4QTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3RpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaDF7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgIFxuICAgIHBhZGRpbmc6IDVweDsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IFxufVxuXG4ubG9nbyB7XG4gICAgaGVpZ2h0OiAxODBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AcessibilidadeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcessibilidadeDialogComponent", function() { return AcessibilidadeDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class AcessibilidadeDialogComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    closeDialog() {
        this.dialog.closeAll();
    }
    onKeyPressAcess(e) {
        if (e.keyCode == 13)
            this.closeDialog();
    }
}
AcessibilidadeDialogComponent.ɵfac = function AcessibilidadeDialogComponent_Factory(t) { return new (t || AcessibilidadeDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
AcessibilidadeDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AcessibilidadeDialogComponent, selectors: [["app-acessibilidade-dialog"]], decls: 28, vars: 0, consts: [[3, "keypress"], ["tabindex", "0"], ["mat-button", "", "mat-dialog-close", "", "tabindex", "0", 3, "keypress"]], template: function AcessibilidadeDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AcessibilidadeDialogComponent_Template_div_keypress_0_listener($event) { return ctx.onKeyPressAcess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Acessibilidade digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "O Portal do Observat\u00F3rio atende requisitos de acessibilidade digital com foco na usabilidade, navega\u00E7\u00E3o e compromisso com as pessoas com e sem defici\u00EAncia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Os atalhos utilizados pelo portal s\u00E3o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Teclando-se Alt + 1, chega-se diretamente ao come\u00E7o do conte\u00FAdo principal da p\u00E1gina.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Teclando-se Alt + 2, chega-se diretamente ao menu principal da p\u00E1gina.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Teclando-se Alt + 3, chega-se diretamente ao rodap\u00E9.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Teclando-se Alt + 4, chega-se diretamente \u00E0 funcionalidade do alto-contraste.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Teclando-se Alt + 5, chega-se diretamente \u00E0 p\u00E1gina de descri\u00E7\u00E3o da acessibilidade.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Teclando-se Alt + 6, chega-se diretamente \u00E0 op\u00E7\u00E3o de aumentar a fonte.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Teclando-se Alt + 7, chega-se diretamente \u00E0 op\u00E7\u00E3o de diminuir a fonte.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pode haver a necessidade de pressionar o bot\u00E3o Shift junto ao respectivo comando, a depender do Sistema Operacional e/ou do navegador web utilizado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AcessibilidadeDialogComponent_Template_button_keypress_26_listener($event) { return ctx.onKeyPressAcess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Fechar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["div[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: var(--color-secondary-text);\n}\ndiv[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, div[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9yZXBvcy90ZXN0ZS90ZXN0ZS1jb250YWRvci9zcmMvYXBwL3BvcnRhbC9hY2Vzc2liaWxpZGFkZS1kaWFsb2cvYWNlc3NpYmlsaWRhZGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0YWwvYWNlc3NpYmlsaWRhZGUtZGlhbG9nL2FjZXNzaWJpbGlkYWRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGtDQUFBO0FDRFo7QURJUTtFQUNJLDBCQUFBO0FDRloiLCJmaWxlIjoic3JjL2FwcC9wb3J0YWwvYWNlc3NpYmlsaWRhZGUtZGlhbG9nL2FjZXNzaWJpbGlkYWRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgICBtYXQtZGlhbG9nLWFjdGlvbnN7XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktdGV4dCk7ICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBidXR0b246aG92ZXIsIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgfVxufSIsImRpdiBtYXQtZGlhbG9nLWFjdGlvbnMgYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS10ZXh0KTtcbn1cbmRpdiBtYXQtZGlhbG9nLWFjdGlvbnMgYnV0dG9uOmhvdmVyLCBkaXYgbWF0LWRpYWxvZy1hY3Rpb25zIGJ1dHRvbjpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcessibilidadeDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-acessibilidade-dialog',
                templateUrl: './acessibilidade-dialog.component.html',
                styleUrls: ['./acessibilidade-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/models/indicador.model.ts":
/*!**************************************************!*\
  !*** ./src/app/portal/models/indicador.model.ts ***!
  \**************************************************/
/*! exports provided: Indicador, TipoIndicador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indicador", function() { return Indicador; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoIndicador", function() { return TipoIndicador; });
class Indicador {
    constructor(id, titulo, descricao, autor, fonte, dimensao, metrica, agregacao, tipo, criacao, series, regioes, max) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.autor = autor;
        this.dimensao = dimensao;
        this.metrica = metrica;
        this.fonte = fonte;
        this.agregacao = agregacao;
        this.tipo = tipo;
        this.criacao = criacao;
        this.series = series;
        this.regioes = regioes;
        this.max = max;
    }
    static fromFormGroup(formGroup) {
        const id = undefined;
        const titulo = formGroup.get('titulo') ? formGroup.get('titulo').value : undefined;
        const autor = formGroup.get('autor') ? formGroup.get('autor').value : undefined;
        const descricao = formGroup.get('descricao') ? formGroup.get('descricao').value : undefined;
        const fonte = formGroup.get('fonte') ? formGroup.get('fonte').value : undefined;
        const dimensao = formGroup.get('dimensao') ? formGroup.get('dimensao').value : undefined;
        const metrica = formGroup.get('metrica') ? formGroup.get('metrica').value : undefined;
        const agregacao = formGroup.get('agregacao') ? formGroup.get('agregacao').value : undefined;
        const tipo = formGroup.get('tipo') ? formGroup.get('tipo').value : undefined;
        const criacao = new Date().getDate();
        return new Indicador(id, titulo, descricao, autor, fonte, dimensao, metrica, agregacao, tipo, criacao);
    }
    static fromResource(resource) {
        const indicador = new Indicador(resource.id, resource.titulo, resource.descricao, resource.autor, resource.fonte, resource.dimensao, resource.metrica, resource.agregacao, resource.tipo, resource.criacao, resource.series, resource.regioes, resource.max);
        return indicador;
    }
}
var TipoIndicador;
(function (TipoIndicador) {
    TipoIndicador["PIZZA"] = "pie";
    TipoIndicador["BARRAS"] = "bar";
    TipoIndicador["MAPA"] = "map";
})(TipoIndicador || (TipoIndicador = {}));


/***/ }),

/***/ "./src/app/portal/models/painel.model.ts":
/*!***********************************************!*\
  !*** ./src/app/portal/models/painel.model.ts ***!
  \***********************************************/
/*! exports provided: Painel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Painel", function() { return Painel; });
class Painel {
    constructor(id, titulo, descricao, autor, criacao, ultimaAteracao, tema) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.autor = autor;
        this.criacao = criacao;
        this.ultimaAteracao = ultimaAteracao;
        this.tema = tema;
    }
    static fromFormGroup(formGroup) {
        const id = undefined;
        const titulo = formGroup.get('titulo') ? formGroup.get('titulo').value : undefined;
        const autor = formGroup.get('autor') ? formGroup.get('autor').value : undefined;
        const descricao = formGroup.get('descricao') ? formGroup.get('descricao').value : undefined;
        const tema = formGroup.get('tema') ? formGroup.get('tema').value : undefined;
        return new Painel(id, titulo, descricao, autor, null, null, tema);
    }
    static fromResource(resource) {
        const painel = new Painel(resource.id, resource.titulo, resource.descricao, resource.autor, resource.criacao, resource.ultimaAteracao, resource.tema);
        painel.template = resource.template;
        return painel;
    }
}


/***/ }),

/***/ "./src/app/portal/models/serie.model.ts":
/*!**********************************************!*\
  !*** ./src/app/portal/models/serie.model.ts ***!
  \**********************************************/
/*! exports provided: Serie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Serie", function() { return Serie; });
class Serie {
    constructor(nome, itens) {
        this.nome = nome;
        this.itens = itens;
    }
    static fromResource(resource) {
        const serie = new Serie(resource.nome, resource.itens);
        return serie;
    }
    static toArray(serie) {
        const array = [serie.nome];
        serie.itens.map(item => {
            array.push(item);
        });
        return array;
    }
}


/***/ }),

/***/ "./src/app/portal/painel/painel.component.ts":
/*!***************************************************!*\
  !*** ./src/app/portal/painel/painel.component.ts ***!
  \***************************************************/
/*! exports provided: PainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelComponent", function() { return PainelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_serie_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/serie.model */ "./src/app/portal/models/serie.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/print.service */ "./src/app/portal/services/print.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/grafico/grafico.component */ "./src/app/portal/shared/grafico/grafico.component.ts");
/* harmony import */ var _shared_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/mapa/mapa.component */ "./src/app/portal/shared/mapa/mapa.component.ts");













function PainelComponent_div_12_div_17_div_1_app_grafico_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-grafico", 28);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const i_r11 = ctx_r15.index;
    const widget_r10 = ctx_r15.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "grafico-", i_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tipo", widget_r10.indicador.tipo)("dataSet$", ctx_r13.toObservable(widget_r10.indicador.series))("titulo", widget_r10.indicador.titulo)("descricao", widget_r10.indicador.descricao);
} }
function PainelComponent_div_12_div_17_div_1_app_mapa_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mapa", 29);
} if (rf & 2) {
    const widget_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indicador", widget_r10.indicador)("descricao", widget_r10.indicador.descricao);
} }
function PainelComponent_div_12_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PainelComponent_div_12_div_17_div_1_app_grafico_1_Template, 1, 5, "app-grafico", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PainelComponent_div_12_div_17_div_1_app_mapa_2_Template, 1, 2, "app-mapa", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r11 = ctx_r17.index;
    const widget_r10 = ctx_r17.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "widget-", i_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r10.indicador.tipo !== "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r10.indicador.tipo === "map");
} }
function PainelComponent_div_12_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PainelComponent_div_12_div_17_div_1_Template, 3, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const widget_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r10.indicador != undefined);
} }
function PainelComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PainelComponent_div_12_div_17_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.painel.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.painel.autor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tema: ", ctx_r8.painel.tema, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.painel.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.painel.template.widgets);
} }
class PainelComponent {
    constructor(location, route, printService, router, scroll) {
        this.location = location;
        this.route = route;
        this.printService = printService;
        this.router = router;
        this.scroll = scroll;
        this.titulo = 'Titulo';
    }
    onKeyDown(e) {
        let map = {};
        map[e.keyCode] = e.type == 'keydown';
        if ((e.altKey && map[49]) || (e.altKey && map[49] && e.shiftKey) || (e.shiftKey && map[49] && map[27])) {
            document.getElementById("irConteudo").click();
        }
        else if ((e.altKey && map[50]) || (e.altKey && map[50] && e.shiftKey) || (e.shiftKey && map[50] && map[27])) {
            document.getElementById("irMenu").click();
        }
        else if ((e.altKey && map[52]) || (e.altKey && map[52] && e.shiftKey) || (e.shiftKey && map[52] && map[27])) {
            document.getElementById("irContraste").click();
        }
        else if ((e.altKey && map[53]) || (e.altKey && map[53] && e.shiftKey) || (e.shiftKey && map[53] && map[27])) {
            document.getElementById("irAcessibilidade").click();
        }
        else if ((e.altKey && map[54]) || (e.altKey && map[54] && e.shiftKey) || (e.shiftKey && map[54] && map[27])) {
            this.scroll.scrollToPosition([0, document.body.scrollHeight]);
            console.log("Rodapé");
        }
    }
    ngOnInit() {
        this.painel = this.route.snapshot.data.painel;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])).subscribe(() => {
            const mainHeader = document.getElementById('titulo-valor');
            if (mainHeader) {
                mainHeader.focus();
            }
        });
    }
    ngOnChanges(e) {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])).subscribe(() => {
            const mainHeader = document.getElementById('titulo-valor');
            if (mainHeader) {
                mainHeader.focus();
                mainHeader.click();
            }
        });
    }
    onPrintPainel() {
        this.printService.printDocument('paineis', this.painel.id);
    }
    toObservable(series) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(series.map(serie => _models_serie_model__WEBPACK_IMPORTED_MODULE_1__["Serie"].toArray(serie)));
    }
    voltarNavegacao() {
        this.router.navigate(['..'], { relativeTo: this.route });
    }
    onKeyPressCor(e) {
        if (e.keyCode == 13) {
            this.voltarNavegacao();
        }
    }
}
PainelComponent.ɵfac = function PainelComponent_Factory(t) { return new (t || PainelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_print_service__WEBPACK_IMPORTED_MODULE_6__["PrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"])); };
PainelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PainelComponent, selectors: [["app-painel"]], hostBindings: function PainelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function PainelComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 1, consts: [[1, "container"], [1, "painel"], [1, "painel-header"], ["mat-icon-button", "", "id", "back-button", "tabindex", "0", "aria-hidden", "false", "aria-label", "voltar navega\u00E7\u00E3o", 1, "back-button", 3, "click", "keypress"], [1, "painel-title"], ["id", "titulo", 1, "titulo", 2, "margin", "0 !important"], ["id", "imprimir-button"], ["mat-button", "", "id", "imprimir", 3, "click"], ["class", "painel-content", 4, "ngIf"], [1, "painel-content"], [1, "input-box"], [1, "titulo-container"], ["id", "titulo-valor", 1, "titulo"], ["autofocus", "", "tabindex", "0"], [1, "autor-container"], ["id", "autor-valor", "tabindex", "0", 1, "autor"], [1, "tema-container"], ["id", "tema-valor", 1, "tema"], ["tabindex", "0"], [1, "descricao-container"], ["id", "descricao-valor", "tabindex", "0", 1, "descricao"], ["id", "conteudo", 1, "template"], ["class", "widget", 4, "ngFor", "ngForOf"], [1, "widget"], ["class", "grafico", 3, "id", 4, "ngIf"], [1, "grafico", 3, "id"], [3, "id", "tipo", "dataSet$", "titulo", "descricao", 4, "ngIf"], [3, "indicador", "descricao", 4, "ngIf"], [3, "id", "tipo", "dataSet$", "titulo", "descricao"], [3, "indicador", "descricao"]], template: function PainelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PainelComponent_Template_button_click_3_listener() { return ctx.voltarNavegacao(); })("keypress", function PainelComponent_Template_button_keypress_3_listener($event) { return ctx.onKeyPressCor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "arrow_back_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Perfil do painel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PainelComponent_Template_button_click_10_listener() { return ctx.onPrintPainel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Imprimir / Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PainelComponent_div_12_Template, 18, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.painel != undefined);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_9__["GraficoComponent"], _shared_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_10__["MapaComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex: 1 1 auto;\n  height: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  margin: 24px 16px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-header[_ngcontent-%COMP%]   .painel-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 96px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-header[_ngcontent-%COMP%]   #editar-button[_ngcontent-%COMP%] {\n  margin: auto 16px auto auto;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-header[_ngcontent-%COMP%]   #imprimir-button[_ngcontent-%COMP%]   #imprimir[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .autor-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0 20vw;\n  overflow-wrap: break-word;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .autor-container[_ngcontent-%COMP%]   .autor[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 10px 0;\n  font-weight: 300;\n  color: var(--color-terciary-text);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .autor-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .titulo-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .titulo-container[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0 0 0 0 !important;\n  font-weight: 400;\n  color: var(--color-terciary-text);\n  overflow-wrap: break-word;\n  padding: 0 20vw;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .titulo-container[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .tema-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0 20vw;\n  overflow-wrap: break-word;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .tema-container[_ngcontent-%COMP%]   .tema[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0;\n  font-weight: 300;\n  color: var(--color-terciary-text);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .descricao-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 20px 0 0;\n  padding: 0 10vw;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .descricao-container[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0;\n  font-weight: 200;\n  overflow-wrap: break-word;\n  color: var(--color-terciary-text);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .template[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-self: center;\n  width: 100%;\n  height: 100%;\n  max-width: 1600px;\n  background-color: var(--color-background);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .template[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 512px;\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 16px;\n  min-width: 512px;\n  min-height: 256px;\n  \n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .template[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]   .grafico[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9yZXBvcy90ZXN0ZS90ZXN0ZS1jb250YWRvci9zcmMvYXBwL3BvcnRhbC9wYWluZWwvcGFpbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0YWwvcGFpbmVsL3BhaW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0NOO0FEQ007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDUjtBRENRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQ1Y7QURFUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQVY7QURHUTtFQUNFLDJCQUFBO0FDRFY7QURLVTtFQUNFLDJCQUFBO0FDSFo7QURRTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ05SO0FEVVU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNSWjtBRFVZO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FDUmQ7QURXWTtFQUNFLGVBQUE7QUNUZDtBRGFVO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDWFo7QURhWTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNYZDtBRGFjO0VBQ0UsbUJBQUE7QUNYaEI7QURnQlU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNkWjtBRGdCWTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQ2RkO0FEa0JVO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDaEJaO0FEa0JZO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUNoQmQ7QURxQlE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7QUNuQlY7QURxQlU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQU1BOztJQUFBO0FDdEJaO0FEa0JZO0VBQ0UsWUFBQTtBQ2hCZCIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9wYWluZWwvcGFpbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMSAxIGF1dG87XG4gIGhlaWdodDogMTAwJTtcblxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAucGFpbmVsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleDogMSAxIGF1dG87XG5cbiAgICAgIC5wYWluZWwtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAuYmFjay1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbjogMjRweCAxNnB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYWluZWwtdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogOTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNlZGl0YXItYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMTZweCBhdXRvIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAjaW1wcmltaXItYnV0dG9ue1xuICAgICAgICAgICNpbXByaW1pcntcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBhaW5lbC1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAuaW5wdXQtYm94IHtcblxuICAgICAgICAgIC5hdXRvci1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHZ3O1xuICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblxuICAgICAgICAgICAgLmF1dG9yIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhciggLS1jb2xvci10ZXJjaWFyeS10ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGl0dWxvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC50aXR1bG8ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKCAtLWNvbG9yLXRlcmNpYXJ5LXRleHQpO1xuICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwdnc7XG5cbiAgICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC50ZW1hLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwdnc7XG4gICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG4gICAgICAgICAgICAudGVtYSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKCAtLWNvbG9yLXRlcmNpYXJ5LXRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kZXNjcmljYW8tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwdnc7XG5cbiAgICAgICAgICAgIC5kZXNjcmljYW8ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhciggLS1jb2xvci10ZXJjaWFyeS10ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGVtcGxhdGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMTYwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xuXG4gICAgICAgICAgLndpZGdldCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmbGV4OiAxIDEgNTEycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDUxMnB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMjU2cHg7XG5cbiAgICAgICAgICAgIC5ncmFmaWNvIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKi5ncmFmaWNvOmhvdmVye1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgICAgICAgICAgfSovXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMSAxIGF1dG87XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtaGVhZGVyIC5iYWNrLWJ1dHRvbiB7XG4gIG1hcmdpbjogMjRweCAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1oZWFkZXIgLnBhaW5lbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA5NnB4O1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtaGVhZGVyICNlZGl0YXItYnV0dG9uIHtcbiAgbWFyZ2luOiBhdXRvIDE2cHggYXV0byBhdXRvO1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtaGVhZGVyICNpbXByaW1pci1idXR0b24gI2ltcHJpbWlyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC5pbnB1dC1ib3ggLmF1dG9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwdnc7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC5pbnB1dC1ib3ggLmF1dG9yLWNvbnRhaW5lciAuYXV0b3Ige1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGVyY2lhcnktdGV4dCk7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC5pbnB1dC1ib3ggLmF1dG9yLWNvbnRhaW5lciBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLmlucHV0LWJveCAudGl0dWxvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtY29udGVudCAuaW5wdXQtYm94IC50aXR1bG8tY29udGFpbmVyIC50aXR1bG8ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMCAwIDAgMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGVyY2lhcnktdGV4dCk7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHBhZGRpbmc6IDAgMjB2dztcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLmlucHV0LWJveCAudGl0dWxvLWNvbnRhaW5lciAudGl0dWxvIGgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLmlucHV0LWJveCAudGVtYS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyMHZ3O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtY29udGVudCAuaW5wdXQtYm94IC50ZW1hLWNvbnRhaW5lciAudGVtYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGVyY2lhcnktdGV4dCk7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC5pbnB1dC1ib3ggLmRlc2NyaWNhby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDAgMDtcbiAgcGFkZGluZzogMCAxMHZ3O1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtY29udGVudCAuaW5wdXQtYm94IC5kZXNjcmljYW8tY29udGFpbmVyIC5kZXNjcmljYW8ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRlcmNpYXJ5LXRleHQpO1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtY29udGVudCAudGVtcGxhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDE2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC50ZW1wbGF0ZSAud2lkZ2V0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxIDEgNTEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDE2cHg7XG4gIG1pbi13aWR0aDogNTEycHg7XG4gIG1pbi1oZWlnaHQ6IDI1NnB4O1xuICAvKi5ncmFmaWNvOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIH0qL1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtY29udGVudCAudGVtcGxhdGUgLndpZGdldCAuZ3JhZmljbyB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PainelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-painel',
                templateUrl: './painel.component.html',
                styleUrls: ['./painel.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_print_service__WEBPACK_IMPORTED_MODULE_6__["PrintService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"] }]; }, { onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/portal-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/portal/portal-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PortalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalRoutingModule", function() { return PortalRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./painel/painel.component */ "./src/app/portal/painel/painel.component.ts");
/* harmony import */ var _services_painel_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/painel-resolver.service */ "./src/app/portal/services/painel-resolver.service.ts");
/* harmony import */ var _portal_portal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portal/portal.component */ "./src/app/portal/portal/portal.component.ts");
/* harmony import */ var _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./print-layout/print-layout.component */ "./src/app/portal/print-layout/print-layout.component.ts");
/* harmony import */ var _print_painel_print_painel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./print-painel/print-painel.component */ "./src/app/portal/print-painel/print-painel.component.ts");









const routes = [
    { path: 'print',
        outlet: 'print',
        component: _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_5__["PrintLayoutComponent"],
        children: [
            {
                path: 'paineis/:painelId',
                component: _print_painel_print_painel_component__WEBPACK_IMPORTED_MODULE_6__["PrintPainelComponent"],
                resolve: {
                    painel: _services_painel_resolver_service__WEBPACK_IMPORTED_MODULE_3__["PainelResolverService"]
                }
            }
        ]
    },
    {
        path: 'paineis',
        children: [
            {
                path: '',
                component: _portal_portal_component__WEBPACK_IMPORTED_MODULE_4__["PortalComponent"],
            },
            {
                path: ':painelId',
                component: _painel_painel_component__WEBPACK_IMPORTED_MODULE_2__["PainelComponent"],
                resolve: {
                    painel: _services_painel_resolver_service__WEBPACK_IMPORTED_MODULE_3__["PainelResolverService"]
                }
            },
        ]
    },
    {
        path: '',
        redirectTo: 'paineis',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'paineis',
    }
];
class PortalRoutingModule {
}
PortalRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PortalRoutingModule });
PortalRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PortalRoutingModule_Factory(t) { return new (t || PortalRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/portal/portal.module.ts":
/*!*****************************************!*\
  !*** ./src/app/portal/portal.module.ts ***!
  \*****************************************/
/*! exports provided: PortalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalModule", function() { return PortalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _portal_portal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portal/portal.component */ "./src/app/portal/portal/portal.component.ts");
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./painel/painel.component */ "./src/app/portal/painel/painel.component.ts");
/* harmony import */ var _shared_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/grafico/grafico.component */ "./src/app/portal/shared/grafico/grafico.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var _portal_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./portal-routing.module */ "./src/app/portal/portal-routing.module.ts");
/* harmony import */ var _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./print-layout/print-layout.component */ "./src/app/portal/print-layout/print-layout.component.ts");
/* harmony import */ var _print_painel_print_painel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./print-painel/print-painel.component */ "./src/app/portal/print-painel/print-painel.component.ts");
/* harmony import */ var _print_grafico_print_grafico_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./print-grafico/print-grafico.component */ "./src/app/portal/print-grafico/print-grafico.component.ts");
/* harmony import */ var _shared_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/mapa/mapa.component */ "./src/app/portal/shared/mapa/mapa.component.ts");
/* harmony import */ var _print_mapa_print_mapa_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./print-mapa/print-mapa.component */ "./src/app/portal/print-mapa/print-mapa.component.ts");
/* harmony import */ var _acessibilidade_dialog_acessibilidade_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./acessibilidade-dialog/acessibilidade-dialog.component */ "./src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");































class PortalModule {
}
PortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PortalModule });
PortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PortalModule_Factory(t) { return new (t || PortalModule)(); }, providers: [
    // {provide: ErrorHandler, useClass: ErrorHandlerPortal}
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_20__["SweetAlert2Module"],
            _portal_routing_module__WEBPACK_IMPORTED_MODULE_21__["PortalRoutingModule"],
            // MatSnackBarModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["A11yModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, { declarations: [_portal_portal_component__WEBPACK_IMPORTED_MODULE_2__["PortalComponent"],
        _painel_painel_component__WEBPACK_IMPORTED_MODULE_3__["PainelComponent"],
        _shared_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_4__["GraficoComponent"],
        _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_22__["PrintLayoutComponent"],
        _print_painel_print_painel_component__WEBPACK_IMPORTED_MODULE_23__["PrintPainelComponent"],
        _print_grafico_print_grafico_component__WEBPACK_IMPORTED_MODULE_24__["PrintGraficoComponent"],
        _shared_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_25__["MapaComponent"],
        _print_mapa_print_mapa_component__WEBPACK_IMPORTED_MODULE_26__["PrintMapaComponent"],
        _acessibilidade_dialog_acessibilidade_dialog_component__WEBPACK_IMPORTED_MODULE_27__["AcessibilidadeDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
        _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_20__["SweetAlert2Module"],
        _portal_routing_module__WEBPACK_IMPORTED_MODULE_21__["PortalRoutingModule"],
        // MatSnackBarModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["A11yModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _portal_portal_component__WEBPACK_IMPORTED_MODULE_2__["PortalComponent"],
                    _painel_painel_component__WEBPACK_IMPORTED_MODULE_3__["PainelComponent"],
                    _shared_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_4__["GraficoComponent"],
                    _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_22__["PrintLayoutComponent"],
                    _print_painel_print_painel_component__WEBPACK_IMPORTED_MODULE_23__["PrintPainelComponent"],
                    _print_grafico_print_grafico_component__WEBPACK_IMPORTED_MODULE_24__["PrintGraficoComponent"],
                    _shared_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_25__["MapaComponent"],
                    _print_mapa_print_mapa_component__WEBPACK_IMPORTED_MODULE_26__["PrintMapaComponent"],
                    _acessibilidade_dialog_acessibilidade_dialog_component__WEBPACK_IMPORTED_MODULE_27__["AcessibilidadeDialogComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
                    _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_20__["SweetAlert2Module"],
                    _portal_routing_module__WEBPACK_IMPORTED_MODULE_21__["PortalRoutingModule"],
                    // MatSnackBarModule,
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["A11yModule"]
                ],
                providers: [
                // {provide: ErrorHandler, useClass: ErrorHandlerPortal}
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/portal/portal/portal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/portal/portal/portal.component.ts ***!
  \***************************************************/
/*! exports provided: PortalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalComponent", function() { return PortalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_painel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/painel.service */ "./src/app/portal/services/painel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _grafana_dashs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../grafana-dashs.service */ "./src/app/grafana-dashs.service.ts");
/* harmony import */ var _dash_description_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dash-description.service */ "./src/app/dash-description.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
















const _c0 = function (a1) { return ["/dash", a1]; };
function PortalComponent_div_18_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function PortalComponent_div_18_mat_card_1_Template_mat_card_keypress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.irPainel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dash_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", dash_r5.dashboard.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c0, dash_r5.dashboard.uid + "@@" + dash_r5.meta.url + "&" + dash_r5.dashboard.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", dash_r5.dashboard.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](5, 7, dash_r5.dashboard.title, 0, 60));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Tema: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](12, 11, dash_r5.meta.folderTitle, 0, 80), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](16, 15, dash_r5.dashboard.description, 0, 400), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Publicado por ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](20, 19, dash_r5.meta.updatedBy, 0, 50), " ");
} }
function PortalComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PortalComponent_div_18_mat_card_1_Template, 21, 25, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.multipleDetails);
} }
function PortalComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Nenhum resultado foi encontrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PortalComponent {
    constructor(location, painelService, scroll, router, GrafanaDashs, DetailsGrafana, ref) {
        this.location = location;
        this.painelService = painelService;
        this.scroll = scroll;
        this.router = router;
        this.GrafanaDashs = GrafanaDashs;
        this.DetailsGrafana = DetailsGrafana;
        this.ref = ref;
        this.numberOfTicks = 0;
        this.divsArray = document.getElementsByTagName('div');
        this.psArray = document.getElementsByTagName('p');
        this.hsArray = document.getElementsByTagName('h1');
        this.asArray = document.getElementsByTagName('a');
        this.ulsArray = document.getElementsByTagName('ul');
        this.h2sArray = document.getElementsByTagName('h2');
        this.paineisDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.classe = 'big';
        this.multipleDetails = [];
        this.toRenderData = [];
        this.GrafanaDashs.getData().subscribe(data => {
            this.dataGrafana = data;
            if (data) {
                for (let i = 0; i < this.dataGrafana.length; i++) {
                    if (data[i] != undefined) {
                        this.DetailsGrafana.getDescription(this.dataGrafana[i].uid).subscribe(data2 => {
                            //if (data2.meta.isFolder != true){
                            this.multipleDetails.push(data2);
                            //}
                            //this.multipleDetails.push(data2)
                        });
                        //this.multipleDetails.push(row)
                        console.log(this.multipleDetails);
                    }
                }
            }
        });
        setInterval(() => {
            this.numberOfTicks++;
            this.ref.markForCheck();
        }, 3000);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var bench = document.getElementById('bench');
            if (bench.style.backgroundColor === 'black') {
                for (let div of this.divsArray) {
                    if (div.className != 'donotchange' &&
                        div.className != 'content' &&
                        div.className != 'mat-card-header-text' &&
                        div.className != 'descricao' &&
                        div.className != 'autor' &&
                        div.className != 'tema' &&
                        div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
                        div.className != 'content' &&
                        div.className != 'mat-form-field-flex ng-tns-c49-0' &&
                        div.className != 'big pesquisa' &&
                        div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
                        div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
                        div.className != 'mat-form-field-infix ng-tns-c49-0' &&
                        div.className != 'sem-resposta' &&
                        div.className != 'lista-paineis' &&
                        div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
                        div.className != 'mat-form-field-infix ng-tns-c107-0' &&
                        div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
                        div.className != 'mat-form-field-flex ng-tns-c107-0' &&
                        div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                        div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                        div.className != 'ng-tns-c107-1' &&
                        div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                        div.className != 'big pesquisa') {
                        div.style.backgroundColor = 'black';
                        div.style.color = 'white';
                    }
                    if (div.className === 'big pesquisa' ||
                        div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
                        div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
                        div.className === 'mat-form-field-infix ng-tns-c49-0') {
                        div.style.backgroundColor = 'white';
                        div.style.color = 'black';
                    }
                    if (div.className === "footer-basic") {
                        div.style.backgroundColor = 'white';
                    }
                    if (div.className === 'img') {
                        div.style.backgroundColor = 'white';
                        div.style.border = '2px solid #000';
                    }
                }
                for (let p of this.psArray) {
                    if (p.className != 'donotchange') {
                        p.style.backgroundColor = 'black';
                        p.style.color = 'white';
                        p.style.boxShadow = '0 0 0 2px #000';
                        p.style.border = '2px solid #ffeb3b';
                    }
                }
                for (let h of this.hsArray) {
                    if (h.className != 'donotchange') {
                        h.style.backgroundColor = 'black';
                        h.style.color = 'white';
                        h.style.boxShadow = '0 0 0 2px #000';
                        h.style.border = '2px solid #ffeb3b';
                    }
                }
                for (let h2 of this.h2sArray) {
                    if (h2.className != 'donotchange') {
                        h2.style.backgroundColor = 'black';
                        h2.style.color = 'white';
                        h2.style.boxShadow = '0 0 0 2px #000';
                        h2.style.border = '2px solid #ffeb3b';
                    }
                }
                // for (let a of this.asArray){
                //   if (a.className != 'donotchange' && 
                //   a.className != 'hover' && 
                //   a.className != 'hover2'){
                //     a.style.backgroundColor = 'black';
                //     a.style.color = 'white';
                //     a.style.boxShadow = '0 0 0 2px #000';
                //     a.style.border = '2px solid #ffeb3b'
                //     if(a.className === 'fontsize') {
                //       a.classList.remove('fontsize');
                //       a.classList.add('fontsize2');
                //       a.style.boxShadow = '0 0 0 2px #000';
                //       a.style.border = '2px solid #ffeb3b'
                //     }     
                //   } else if (a.className === 'hover2'){
                //     a.classList.remove('hover2');
                //     a.classList.add('hover3');
                //     a.style.boxShadow = '0 0 0 2px #000';
                //     a.style.border = '2px solid #ffeb3b'
                //   } else if (a.className === 'hover') {
                //     a.style.boxShadow = '0 0 0 2px #000';
                //     a.style.border = '2px solid #ffeb3b'
                //   }
                // }
                for (let ul of this.ulsArray) {
                    if (ul.id === 'atalhos') {
                        ul.style.backgroundColor = 'black';
                    }
                }
            }
            this.paineis = (yield this.painelService.getPaineis().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).toPromise());
            this.paineisDataSource.data = this.paineis;
            // this.paineisDataSource.filterPredicate = (data: IPainel, filter: string) => {
            //   return data.titulo == filter || data.tema == filter;
            // }
            this.paineisDataSource.filterPredicate = (d, filter) => {
                const textToSearchTi = d['titulo'] && d['titulo'].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() || '';
                const textToSearchTe = d['tema'] && d['tema'].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() || '';
                return textToSearchTi.indexOf(filter) !== -1 || textToSearchTe.indexOf(filter) !== -1;
            };
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.paineisDataSource.filter = filterValue.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        if (filterValue !== '') {
            this.classe = 'small';
        }
        else {
            this.classe = 'big';
        }
    }
    voltarNavegacao() {
        this.location.back();
    }
    //loadDescription(){
    //  if (this.dataGrafana){
    //    for (let i = 0; i < this.dataGrafana.length; i++){
    //      if (this.dataGrafana[i] != undefined){
    //        var row = []
    //        row.push(this.dataGrafana[i].title)
    //        row.push(this.dataGrafana[i].url)
    //        row.push(this.dataGrafana[i].uid)
    //        this.DetailsGrafana.getDescription(this.dataGrafana[i].uid).subscribe(data=>{
    //          row.push(data)
    //        })    
    //        console.log("ROW", row)
    //        this.multipleDetails.push(row)
    //        row = []
    //      }
    //    }
    //    //console.log(this.multipleDetails)
    //  }
    //}
    irPainel(e) {
        document.getElementById(document.activeElement.id).click();
    }
    onKeyDown(e) {
        let map = {};
        map[e.keyCode] = e.type == 'keydown';
        if ((e.altKey && map[49]) || (e.altKey && map[49] && e.shiftKey) || (e.shiftKey && map[49] && map[27])) {
            document.getElementById("irConteudo").click();
        }
        else if ((e.altKey && map[50]) || (e.altKey && map[50] && e.shiftKey) || (e.shiftKey && map[50] && map[27])) {
            document.getElementById("irMenu").click();
        }
        else if ((e.altKey && map[51]) || (e.altKey && map[51] && e.shiftKey) || (e.shiftKey && map[51] && map[27])) {
            document.getElementById("irBusca").click();
        }
        else if ((e.altKey && map[52]) || (e.altKey && map[52] && e.shiftKey) || (e.shiftKey && map[52] && map[27])) {
            document.getElementById("irContraste").click();
        }
        else if ((e.altKey && map[53]) || (e.altKey && map[53] && e.shiftKey) || (e.shiftKey && map[53] && map[27])) {
            document.getElementById("irAcessibilidade").click();
        }
        else if ((e.altKey && map[54]) || (e.altKey && map[54] && e.shiftKey) || (e.shiftKey && map[54] && map[27])) {
            this.scroll.scrollToPosition([0, document.body.scrollHeight]);
        }
    }
}
PortalComponent.ɵfac = function PortalComponent_Factory(t) { return new (t || PortalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_painel_service__WEBPACK_IMPORTED_MODULE_6__["PainelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_grafana_dashs_service__WEBPACK_IMPORTED_MODULE_8__["GrafanaDashsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dash_description_service__WEBPACK_IMPORTED_MODULE_9__["DashDescriptionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
PortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortalComponent, selectors: [["app-portal"]], hostBindings: function PortalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function PortalComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, decls: 20, vars: 5, consts: [["id", "general-container", 1, "container"], ["id", "titulo"], ["tabindex", "0"], ["tabindex", "0", "id", "introducao"], [1, "lista-paineis"], ["id", "matform", 1, "form-field"], ["matPrefix", ""], ["alt", "Pesquisar"], ["type", "text", "matInput", "", "id", "filtro", "placeholder", "Ex: Deficientes auditivos", 3, "keyup"], ["column", "", 1, "lista-paineis-content"], ["class", "grid-list", "id", "conteudo", "isFocusable", "", 4, "ngIf"], ["class", "sem-resposta", 4, "ngIf"], ["id", "conteudo", "isFocusable", "", 1, "grid-list"], ["cdkMonitorSubtreeFocus", "", "class", "painel-card", 3, "id", "routerLink", "keypress", 4, "ngFor", "ngForOf"], ["cdkMonitorSubtreeFocus", "", 1, "painel-card", 3, "id", "routerLink", "keypress"], [1, "header"], ["aria-hidden", "false"], ["alt", "painel"], [1, "content"], [1, "tema"], [1, "descricao"], [1, "autor"], [1, "sem-resposta"], [1, "img"], ["src", "assets/notfound.png"]], template: function PortalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Pain\u00E9is");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Os pain\u00E9is s\u00E3o an\u00E1lises de dados e indicadores que o Observat\u00F3rio elabora atrav\u00E9s de cruzamentos de informa\u00E7\u00F5es qualitativas e quantitativas compartilhadas com a Secretaria Municipal da Pessoa com Defici\u00EAncia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Pesquise por um painel ou por um tema");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function PortalComponent_Template_input_keyup_16_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PortalComponent_div_18_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PortalComponent_div_19_Template, 5, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("pesquisa ", ctx.classe, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataGrafana.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paineisDataSource.filteredData.length == 0 && ctx.dataGrafana.length == 0);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatPrefix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["CdkMonitorFocus"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex: 1 1 auto;\n  height: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%] {\n  max-height: calc(100% - 32px);\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 5px 0 0 0;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 320px;\n  width: 320px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .pesquisa[_ngcontent-%COMP%] {\n  transition: width 1.5s ease, font-size 1.5s ease, padding 1.5s ease;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .pesquisa[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  transition: width 1.5s ease;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 20px 0 5px 0;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  width: 660px;\n  font-size: 20px;\n  margin: 0;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  color: #333333;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #333333;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  width: 485px;\n  margin: 0;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #8a8a8a;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card[_ngcontent-%COMP%] {\n  width: 530px;\n  height: 200px;\n  margin: 16px;\n  box-shadow: 0px 1px 5px -1px black;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: #333333;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  height: 170px;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .autor[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  color: #333333;\n  font-weight: 400;\n  font-size: 16px;\n  overflow: break-word;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #333333;\n  overflow: break-word;\n  line-height: 20px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tema[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #333333;\n  overflow: break-word;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 2px #1c2e8a;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .sem-resposta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  color: #333333;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .sem-resposta[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  -webkit-filter: opacity(0.5);\n          filter: opacity(0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9yZXBvcy90ZXN0ZS90ZXN0ZS1jb250YWRvci9zcmMvYXBwL3BvcnRhbC9wb3J0YWwvcG9ydGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0YWwvcG9ydGFsL3BvcnRhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNDSjtBRENJO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDTjtBRENNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRENRO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDQ1Y7QURHTTtFQUNFLG1FQUFBO0FDRFI7QURHUTtFQUNFLDJCQUFBO0FDRFY7QURLTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDSFI7QURLUTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ0hWO0FES1U7RUFDRSxjQUFBO0FDSFo7QURPWTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDTGQ7QURXTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUNUUjtBRFdRO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUNUVjtBRFlZO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNWZDtBRGdCTTtFQUNFLHlCQUFBO0FDZFI7QURnQlE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDZFY7QURnQlU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUNkWjtBRGdCWTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNkZDtBRGlCWTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDZmQ7QURpQmM7RUFDRSxpQkFBQTtBQ2ZoQjtBRGtCYztFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDaEJoQjtBRG1CYztFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDakJoQjtBRG9CYztFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDbEJoQjtBRHVCVTtFQUNFLDZCQUFBO0FDckJaO0FEMkJJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDekJOO0FEMkJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDekJWIiwiZmlsZSI6InNyYy9hcHAvcG9ydGFsL3BvcnRhbC9wb3J0YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDEgMSBhdXRvOyAgICBcblxuICAgIC5saXN0YS1wYWluZWlzIHtcbiAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBcbiAgICAgIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHggMCAwIDA7XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogMzIwcHg7XG4gICAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnBlc3F1aXNhIHtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMS41cyBlYXNlLCBmb250LXNpemUgMS41cyBlYXNlLCBwYWRkaW5nIDEuNXMgZWFzZTtcblxuICAgICAgICAuZm9ybS1maWVsZCB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMS41cyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5iaWcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMjBweCAwIDVweCAwO1xuXG4gICAgICAgIC5mb3JtLWZpZWxkIHtcbiAgICAgICAgICB3aWR0aDogNjYwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgIG1hdC1sYWJlbHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc21hbGwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAuZm9ybS1maWVsZCB7XG4gICAgICAgICAgd2lkdGg6IDQ4NXB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjOGE4YThhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubGlzdGEtcGFpbmVpcy1jb250ZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcblxuICAgICAgICAuZ3JpZC1saXN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgIC5wYWluZWwtY2FyZCB7XG4gICAgICAgICAgICB3aWR0aDogNTMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggLTFweCBibGFjaztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgICAudGl0dWxvIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5hdXRvciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmRlc2NyaWNhbyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAudGVtYSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXQtY2FyZDpmb2N1cywgbWF0LWNhcmQ6aG92ZXJ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggIzFjMmU4YTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnNlbS1yZXNwb3N0YSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIC5pbWcge1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMSAxIGF1dG87XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5sb2dvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMCAwIDA7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5sb2dvLWNvbnRhaW5lciAubG9nbyB7XG4gIGhlaWdodDogMzIwcHg7XG4gIHdpZHRoOiAzMjBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLnBlc3F1aXNhIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMS41cyBlYXNlLCBmb250LXNpemUgMS41cyBlYXNlLCBwYWRkaW5nIDEuNXMgZWFzZTtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLnBlc3F1aXNhIC5mb3JtLWZpZWxkIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMS41cyBlYXNlO1xufVxuOmhvc3QgLmNvbnRhaW5lciAubGlzdGEtcGFpbmVpcyAuYmlnIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMCA1cHggMDtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLmJpZyAuZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA2NjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5iaWcgLmZvcm0tZmllbGQgbWF0LWxhYmVsIHtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5iaWcgLmZvcm0tZmllbGQgc3BhbiBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5zbWFsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgLmNvbnRhaW5lciAubGlzdGEtcGFpbmVpcyAuc21hbGwgLmZvcm0tZmllbGQge1xuICB3aWR0aDogNDg1cHg7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLnNtYWxsIC5mb3JtLWZpZWxkIHNwYW4gbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjOGE4YThhO1xufVxuOmhvc3QgLmNvbnRhaW5lciAubGlzdGEtcGFpbmVpcyAubGlzdGEtcGFpbmVpcy1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLmxpc3RhLXBhaW5laXMtY29udGVudCAuZ3JpZC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLmxpc3RhLXBhaW5laXMtY29udGVudCAuZ3JpZC1saXN0IC5wYWluZWwtY2FyZCB7XG4gIHdpZHRoOiA1MzBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiAxNnB4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAtMXB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5saXN0YS1wYWluZWlzLWNvbnRlbnQgLmdyaWQtbGlzdCAucGFpbmVsLWNhcmQgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5saXN0YS1wYWluZWlzLWNvbnRlbnQgLmdyaWQtbGlzdCAucGFpbmVsLWNhcmQgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLmNvbnRhaW5lciAubGlzdGEtcGFpbmVpcyAubGlzdGEtcGFpbmVpcy1jb250ZW50IC5ncmlkLWxpc3QgLnBhaW5lbC1jYXJkIC5jb250ZW50IC50aXR1bG8ge1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLmxpc3RhLXBhaW5laXMtY29udGVudCAuZ3JpZC1saXN0IC5wYWluZWwtY2FyZCAuY29udGVudCAuYXV0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvdmVyZmxvdzogYnJlYWstd29yZDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5saXN0YS1wYWluZWlzLWNvbnRlbnQgLmdyaWQtbGlzdCAucGFpbmVsLWNhcmQgLmNvbnRlbnQgLmRlc2NyaWNhbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG92ZXJmbG93OiBicmVhay13b3JkO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLmxpc3RhLXBhaW5laXMtY29udGVudCAuZ3JpZC1saXN0IC5wYWluZWwtY2FyZCAuY29udGVudCAudGVtYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG92ZXJmbG93OiBicmVhay13b3JkO1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLmxpc3RhLXBhaW5laXMtY29udGVudCAuZ3JpZC1saXN0IG1hdC1jYXJkOmZvY3VzLCA6aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5saXN0YS1wYWluZWlzLWNvbnRlbnQgLmdyaWQtbGlzdCBtYXQtY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjMWMyZThhO1xufVxuOmhvc3QgLmNvbnRhaW5lciAuc2VtLXJlc3Bvc3RhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG46aG9zdCAuY29udGFpbmVyIC5zZW0tcmVzcG9zdGEgLmltZyBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcbn0iXX0= */", ".container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#titulo[_ngcontent-%COMP%] {\n  margin-left: 25%;\n  margin-right: 25%;\n  text-align: center;\n}\n\nh2[_ngcontent-%COMP%]{\n  font-size: 38px;\n  color: #1C2E8A;\n  font-weight: bolder;\n  margin-top: 54px;\n  margin-botton: 54px;\n  width: 100%;\n  line-height: 46px;\n}\n\nh3[_ngcontent-%COMP%]{\n  font-weight: bold;\n}\n\n.mat-input-element[_ngcontent-%COMP%] {\n  color: #333333;\n  background: #FFFFFF;\n  caret-color: #333333;\n}\n\n#introducao[_ngcontent-%COMP%] {\n  margin-left: 25%;\n  margin-right: 25%;\n  margin-top: 30px;\n  margin-bottom: 60px;\n  text-align: justify;\n  font-size: 24px;\n  color: #333333;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  line-height: 28px;\n  font-weight: 500;\n}\n\n#barrinha[_ngcontent-%COMP%]{\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL3BvcnRhbC9wb3J0YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2Qsd0lBQXdJO0VBQ3hJLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wb3J0YWwvcG9ydGFsL3BvcnRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3RpdHVsbyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi1yaWdodDogMjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgye1xuICBmb250LXNpemU6IDM4cHg7XG4gIGNvbG9yOiAjMUMyRThBO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBtYXJnaW4tdG9wOiA1NHB4O1xuICBtYXJnaW4tYm90dG9uOiA1NHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbmgze1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGNhcmV0LWNvbG9yOiAjMzMzMzMzO1xufVxuXG4jaW50cm9kdWNhbyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi1yaWdodDogMjUlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI2JhcnJpbmhhe1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PortalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-portal',
                template: `Number of ticks: {{numberOfTicks}}`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './portal.component.html',
                styleUrls: ['./portal.component.scss', './portal.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }, { type: _services_painel_service__WEBPACK_IMPORTED_MODULE_6__["PainelService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _grafana_dashs_service__WEBPACK_IMPORTED_MODULE_8__["GrafanaDashsService"] }, { type: _dash_description_service__WEBPACK_IMPORTED_MODULE_9__["DashDescriptionService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/print-grafico/print-grafico.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/portal/print-grafico/print-grafico.component.ts ***!
  \*****************************************************************/
/*! exports provided: PrintGraficoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintGraficoComponent", function() { return PrintGraficoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! c3 */ "./node_modules/c3/c3.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_indicador_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/indicador.model */ "./src/app/portal/models/indicador.model.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function PrintGraficoComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r28.descricao, " ");
} }
class PrintGraficoComponent {
    constructor() {
        this.xCategoria = true;
        this.categoriaArray = ['x'];
        this.dataSetHolder = [];
        this.informacao = false;
    }
    ngOnInit() {
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
    }
    separaDados(data, id, pacote) {
        const x = [id + '_x'];
        const y = [id];
        data.forEach(item => {
            x.push(item.nome);
            y.push(item.valor);
        });
        pacote.eixo_x = x;
        pacote.eixo_y = y;
        return pacote;
    }
    loadData(pacote) {
        if (this.xCategoria === true) {
            const arrayToAdd = pacote.eixo_x.slice(1);
            this.categoriaArray.push(...arrayToAdd);
            this.chart.load({
                columns: [
                    this.categoriaArray,
                    pacote.eixo_y
                ]
            });
        }
        else {
            const x = '' + pacote.eixo_x[0];
            const y = '' + pacote.eixo_y[0];
            const xsc = {};
            xsc[y] = x;
            this.chart.load({
                xs: xsc,
                columns: [
                    pacote.eixo_x,
                    pacote.eixo_y
                ]
            });
        }
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const config = {
                bindto: '#chart-' + this.id,
                data: {
                    columns: [],
                    xFormat: '%H:%M:%S',
                    type: this.tipo
                },
                padding: {
                    right: 20,
                    bottom: 20,
                },
                point: {
                    show: false
                },
                transition: {
                    duration: 500
                }
            };
            if (this.xCategoria === true) {
                config.data.x = 'x';
                config.axis = {
                    x: {
                        type: 'category'
                    }
                };
            }
            else {
                config.data.xs = {};
            }
            switch (this.tipo) {
                case _models_indicador_model__WEBPACK_IMPORTED_MODULE_4__["TipoIndicador"].BARRAS:
                    config.legend = {
                        show: false
                    };
                    break;
                default:
                    break;
            }
            this.chart = c3__WEBPACK_IMPORTED_MODULE_3__["generate"](config);
            this.chart.resize();
            this.dataSet$.subscribe(data => {
                data.forEach(array => {
                    const dataNoId = Object.assign([], array);
                    const id = array[0];
                    dataNoId.shift();
                    let pacote = { eixo_x: [], eixo_y: [] };
                    if (this.dataSetHolder.length === 0) {
                        pacote = this.separaDados(dataNoId, id, pacote);
                        this.loadData(pacote);
                    }
                    else {
                        this.dataSetHolder.forEach(arrayHolder => {
                            if (id === arrayHolder[0]) {
                                const length = Object.keys(arrayHolder).length;
                                if (array.length > length) {
                                    pacote = this.separaDados(dataNoId, id, pacote);
                                    this.loadData(pacote);
                                }
                            }
                        });
                    }
                });
                this.dataSetHolder = [];
                data.forEach(dataItem => this.dataSetHolder.push(Object.assign({}, dataItem)));
            });
            this.resizeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).subscribe(() => this.chart.resize());
        });
    }
    abrirInfo() {
        this.informacao = !this.informacao;
    }
    onKeyPressInfo(e) {
        if (e.keyCode == 13) {
            this.abrirInfo();
        }
    }
    ngOnDestroy() {
        this.resizeSubscription.unsubscribe();
    }
}
PrintGraficoComponent.ɵfac = function PrintGraficoComponent_Factory(t) { return new (t || PrintGraficoComponent)(); };
PrintGraficoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PrintGraficoComponent, selectors: [["app-print-grafico"]], inputs: { dataSet$: "dataSet$", tipo: "tipo", titulo: "titulo", descricao: "descricao" }, decls: 11, vars: 4, consts: [[1, "card"], [1, "card-top-action"], ["mat-icon-button", "", "matTooltipPosition", "above", "matTooltipClass", "tooltip", 2, "border", "none", "background-color", "white", "cursor", "pointer", 3, "matTooltip", "keypress"], [3, "click", "keypress"], ["class", "informacao", 4, "ngIf"], [1, "content"], [3, "id"], [1, "informacao"]], template: function PrintGraficoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function PrintGraficoComponent_Template_button_keypress_5_listener($event) { return ctx.onKeyPressInfo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrintGraficoComponent_Template_mat_icon_click_6_listener() { return ctx.abrirInfo(); })("keypress", function PrintGraficoComponent_Template_mat_icon_keypress_6_listener($event) { return ctx.onKeyPressInfo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PrintGraficoComponent_div_8_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", ctx.descricao);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.informacao);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "chart-", ctx.id, "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 270mm;\n  max-width: 270mm;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 260mm;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .informacao[_ngcontent-%COMP%] {\n  padding-left: 2%;\n  margin-bottom: 2%;\n  color: var(--color-terciary-text);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 250mm;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .c3[_ngcontent-%COMP%] {\n  width: 250mm;\n  max-width: 250mm;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .c3[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 250mm;\n  max-width: 250mm;\n}\n[_ngcontent-%COMP%]:ng-deep   .c3-lines[_ngcontent-%COMP%] {\n  stroke-width: 50px;\n}\n  .c3-ygrid-line line {\n  stroke: #585858;\n}\n  .c3-xgrid-line line {\n  stroke: red;\n}\n  .c3-xgrid-line text {\n  fill: #020202;\n  font-size: 12px;\n  font-weight: bold;\n}\n  .c3-ygrid-line text {\n  fill: #020202;\n  font-size: 12px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9yZXBvcy90ZXN0ZS90ZXN0ZS1jb250YWRvci9zcmMvYXBwL3BvcnRhbC9wcmludC1ncmFmaWNvL3ByaW50LWdyYWZpY28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvcnRhbC9wcmludC1ncmFmaWNvL3ByaW50LWdyYWZpY28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFDSSxZQUFBO0FDQ1I7QURDUTtFQUNJLGNBQUE7QUNDWjtBRENZO0VBQ0ksYUFBQTtBQ0NoQjtBREdRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDRFo7QURJUTtFQUNJLFlBQUE7QUNGWjtBRElnQjtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0ZwQjtBRElnQjtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0ZwQjtBRFNBO0VBQ0ksa0JBQUE7QUNOSjtBRFNBO0VBQ0ksZUFBQTtBQ05KO0FEU0E7RUFDSSxXQUFBO0FDTko7QURTQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNOSjtBRFNBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcG9ydGFsL3ByaW50LWdyYWZpY28vcHJpbnQtZ3JhZmljby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDI3MG1tO1xuICAgIG1heC13aWR0aDogMjcwbW07XG4gIFxuICAgIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDI2MG1tO1xuICBcbiAgICAgICAgbWF0LWNhcmQtaGVhZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaW5mb3JtYWNhb3tcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXJjaWFyeS10ZXh0KTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgd2lkdGg6IDI1MG1tO1xuICAgIFxuICAgICAgICAgICAgICAgIC5jMyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBtbTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBtbTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MG1tO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI1MG1tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiAgXG46bmctZGVlcCAuYzMtbGluZXMge1xuICAgIHN0cm9rZS13aWR0aDogNTBweDtcbn1cblxuOjpuZy1kZWVwIC5jMy15Z3JpZC1saW5lIGxpbmUge1xuICAgIHN0cm9rZTogcmdiKDg4LCA4OCwgODgpO1xufVxuXG46Om5nLWRlZXAgLmMzLXhncmlkLWxpbmUgbGluZSB7XG4gICAgc3Ryb2tlOiByZWQ7XG59XG5cbjo6bmctZGVlcCAuYzMteGdyaWQtbGluZSB0ZXh0e1xuICAgIGZpbGw6ICMwMjAyMDI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG46Om5nLWRlZXAgLmMzLXlncmlkLWxpbmUgdGV4dHtcbiAgICBmaWxsOiAjMDIwMjAyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDI3MG1tO1xuICBtYXgtd2lkdGg6IDI3MG1tO1xufVxuOmhvc3QgLmNhcmQge1xuICB3aWR0aDogMjYwbW07XG59XG46aG9zdCAuY2FyZCBtYXQtY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IC5jYXJkIG1hdC1jYXJkLWhlYWRlciBidXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLmNhcmQgLmluZm9ybWFjYW8ge1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRlcmNpYXJ5LXRleHQpO1xufVxuOmhvc3QgLmNhcmQgLmNvbnRlbnQge1xuICB3aWR0aDogMjUwbW07XG59XG46aG9zdCAuY2FyZCAuY29udGVudCAuYzMge1xuICB3aWR0aDogMjUwbW07XG4gIG1heC13aWR0aDogMjUwbW07XG59XG46aG9zdCAuY2FyZCAuY29udGVudCAuYzMgc3ZnIHtcbiAgd2lkdGg6IDI1MG1tO1xuICBtYXgtd2lkdGg6IDI1MG1tO1xufVxuXG46bmctZGVlcCAuYzMtbGluZXMge1xuICBzdHJva2Utd2lkdGg6IDUwcHg7XG59XG5cbjo6bmctZGVlcCAuYzMteWdyaWQtbGluZSBsaW5lIHtcbiAgc3Ryb2tlOiAjNTg1ODU4O1xufVxuXG46Om5nLWRlZXAgLmMzLXhncmlkLWxpbmUgbGluZSB7XG4gIHN0cm9rZTogcmVkO1xufVxuXG46Om5nLWRlZXAgLmMzLXhncmlkLWxpbmUgdGV4dCB7XG4gIGZpbGw6ICMwMjAyMDI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjo6bmctZGVlcCAuYzMteWdyaWQtbGluZSB0ZXh0IHtcbiAgZmlsbDogIzAyMDIwMjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PrintGraficoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-print-grafico',
                templateUrl: './print-grafico.component.html',
                styleUrls: ['./print-grafico.component.scss']
            }]
    }], function () { return []; }, { dataSet$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], tipo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], descricao: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/print-layout/print-layout.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/portal/print-layout/print-layout.component.ts ***!
  \***************************************************************/
/*! exports provided: PrintLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintLayoutComponent", function() { return PrintLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/print.service */ "./src/app/portal/services/print.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class PrintLayoutComponent {
    constructor(printService) {
        this.printService = printService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(500).subscribe(() => this.printService.onDataReady());
    }
}
PrintLayoutComponent.ɵfac = function PrintLayoutComponent_Factory(t) { return new (t || PrintLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_print_service__WEBPACK_IMPORTED_MODULE_2__["PrintService"])); };
PrintLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintLayoutComponent, selectors: [["app-print-layout"]], decls: 6, vars: 0, consts: [[1, "content"]], template: function PrintLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["@page portrait {\n  size[_ngcontent-%COMP%]:   A4[_ngcontent-%COMP%]   portrait[_ngcontent-%COMP%];\n  margin[_ngcontent-%COMP%]:   2cm[_ngcontent-%COMP%]   3cm[_ngcontent-%COMP%];\n}\n@page landscape {\n  size[_ngcontent-%COMP%]:   A4[_ngcontent-%COMP%]   landscape[_ngcontent-%COMP%];\n  margin[_ngcontent-%COMP%]:   2cm[_ngcontent-%COMP%]   3cm[_ngcontent-%COMP%];\n}\n.content[_ngcontent-%COMP%] {\n  width: 270mm;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9yZXBvcy90ZXN0ZS90ZXN0ZS1jb250YWRvci9zcmMvYXBwL3BvcnRhbC9wcmludC1sYXlvdXQvcHJpbnQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0YWwvcHJpbnQtbGF5b3V0L3ByaW50LWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNBRjtBREdBO0VBQ0UsWUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcG9ydGFsL3ByaW50LWxheW91dC9wcmludC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAcGFnZSBwb3J0cmFpdCB7XG4gIHNpemU6IEE0IHBvcnRyYWl0O1xuICBtYXJnaW46IDJjbSAzY207XG59XG5cbkBwYWdlIGxhbmRzY2FwZSB7XG4gIHNpemU6IEE0IGxhbmRzY2FwZTtcbiAgbWFyZ2luOiAyY20gM2NtO1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiAyNzBtbTtcbn1cblxuLy8gLmNvbnRlbnQge1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH1cblxuLy8gQG1lZGlhIHNjcmVlbiB7XG4vLyAgIDpob3N0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuLy8gICB9XG4vLyB9XG5cbi8vIEBtZWRpYSBwcmludCB7XG5cbi8vICAgQHBhZ2UgcG9ydHJhaXQge1xuLy8gICAgIHNpemU6IEE0IHBvcnRyYWl0O1xuLy8gICAgIG1hcmdpbjogMmNtIDNjbTtcbi8vICAgfVxuXG4vLyAgIEBwYWdlIGxhbmRzY2FwZSB7XG4vLyAgICAgc2l6ZTogQTQgbGFuZHNjYXBlO1xuLy8gICAgIG1hcmdpbjogMmNtIDNjbTtcbi8vICAgfVxuXG4vLyAgIC5jb250ZW50IHtcbi8vICAgICB3aWR0aDogMjcwbW07XG4vLyAgIH1cbi8vIH1cblxuXG4vLyBAbWVkaWEgcHJpbnQgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgXG5cbi8vICAgLy8gLmNvbnRlbnQge1xuLy8gICAvLyAgIHdpZHRoOiAyNzBtbTtcbi8vICAgLy8gfVxuLy8gfVxuIiwiQHBhZ2UgcG9ydHJhaXQge1xuICBzaXplOiBBNCBwb3J0cmFpdDtcbiAgbWFyZ2luOiAyY20gM2NtO1xufVxuQHBhZ2UgbGFuZHNjYXBlIHtcbiAgc2l6ZTogQTQgbGFuZHNjYXBlO1xuICBtYXJnaW46IDJjbSAzY207XG59XG4uY29udGVudCB7XG4gIHdpZHRoOiAyNzBtbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print-layout',
                templateUrl: './print-layout.component.html',
                styleUrls: ['./print-layout.component.scss']
            }]
    }], function () { return [{ type: _services_print_service__WEBPACK_IMPORTED_MODULE_2__["PrintService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/print-mapa/print-mapa.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/portal/print-mapa/print-mapa.component.ts ***!
  \***********************************************************/
/*! exports provided: PrintMapaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintMapaComponent", function() { return PrintMapaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");





class PrintMapaComponent {
    constructor() {
        this.paleta = ['#bd0026', '#f03b20', '#fd8d3c', '#fecc5c', '#ffffb2'];
    }
    ngAfterViewInit() {
        // Invoca o mapa
        this.invocaMapa();
        // Carrega a camada de fundo
        this.adicionarRegioes(this.indicador);
        // Cria as regiões com os seus atributos
        // Cria a legenda
        this.criarLegenda(this.indicador);
    }
    ngOnInit() {
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
    }
    invocaMapa() {
        this.mymap = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map-' + this.id).setView([-23.7, -46.7], 9.3);
        leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' +
                'contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(this.mymap);
    }
    adicionarRegioes(mapa) {
        for (let j = 0; j < mapa.regioes.length; j++) {
            const polygon = [];
            for (let i = 0; i < mapa.regioes[j].coordenadas.length; i++) {
                polygon.push([this.indicador.regioes[j].coordenadas[i].y, this.indicador.regioes[j].coordenadas[i].x]);
            }
            if (mapa.regioes[j].valor === undefined || isNaN(mapa.regioes[j].valor)) {
                leaflet__WEBPACK_IMPORTED_MODULE_1__["polygon"](polygon, {
                    color: mapa.regioes[j].cor,
                    fillOpacity: 0.5
                }).bindPopup('<h3>' + mapa.regioes[j].nome + '</h3>'
                    + '<h4 >Valor: Sem dados</h4>').addTo(this.mymap);
            }
            else {
                leaflet__WEBPACK_IMPORTED_MODULE_1__["polygon"](polygon, {
                    color: mapa.regioes[j].cor,
                    fillOpacity: 0.5
                }).bindPopup('<h3>' + mapa.regioes[j].nome + '</h3>'
                    + '<h4 >Valor: ' + mapa.regioes[j].valor + '</h4>').addTo(this.mymap);
            }
        }
    }
    getColor(valor, max) {
        const limit = Math.trunc(max * 0.8);
        return valor > limit ? this.paleta[0] :
            valor > limit / 2 ? this.paleta[1] :
                valor > limit / 4 ? this.paleta[2] :
                    valor > limit / 8 ? this.paleta[3] :
                        this.paleta[4];
    }
    // done
    criarLegenda(mapa) {
        const self = this;
        const legend = new leaflet__WEBPACK_IMPORTED_MODULE_1__["Control"]({ position: 'bottomright' });
        legend.onAdd = () => {
            const div = leaflet__WEBPACK_IMPORTED_MODULE_1__["DomUtil"].create('div', 'info legend');
            const grades = [0,
                Math.trunc(mapa.max * 0.8 / 8),
                Math.trunc(mapa.max * 0.8 / 4),
                Math.trunc(mapa.max * 0.8 / 2),
                Math.trunc(mapa.max * 0.8)];
            div.innerHTML +=
                '<div style="display: flex;align-items: center;"><div style="width: 0; height: 0;border: 8.8px solid #AAAAAA;">' +
                    '</div><p style="    font-weight: 600;margin: 0 0px 0px 5px;">Sem dados</p</div>';
            for (let i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    '<div><div style="width: 0; height: 0;border: 10px solid ' + self.getColor(grades[i] + 1, mapa.max) + ';"></div> ' +
                        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '</div>' : '+');
            }
            return div;
        };
        legend.addTo(this.mymap);
    }
}
PrintMapaComponent.ɵfac = function PrintMapaComponent_Factory(t) { return new (t || PrintMapaComponent)(); };
PrintMapaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintMapaComponent, selectors: [["app-print-mapa"]], inputs: { indicador: "indicador" }, decls: 5, vars: 2, consts: [[1, "titulo"], [1, "map", 3, "id"]], template: function PrintMapaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.indicador.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "map-", ctx.id, "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 500px;\n  flex-direction: column;\n  align-items: center;\n}\n[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 100%;\n}\n  .legend {\n  line-height: 18px;\n  color: #555;\n}\n  .legend i {\n  width: 18px;\n  height: 18px;\n  float: left;\n  margin-right: 8px;\n  opacity: 0.7;\n}\n  .legend div {\n  font-weight: 600;\n  font-size: 14px;\n  height: 20px;\n  display: flex;\n  margin: 5px 0;\n  align-items: center;\n  justify-content: space-between;\n}\n  .info.legend.leaflet-control {\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0px 0px 12px 0px grey, 0px 0px 3px 0px black;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9yZXBvcy90ZXN0ZS90ZXN0ZS1jb250YWRvci9zcmMvYXBwL3BvcnRhbC9wcmludC1tYXBhL3ByaW50LW1hcGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvcnRhbC9wcmludC1tYXBhL3ByaW50LW1hcGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0VSO0FERFE7RUFDSSxXQUFBO0FDR1o7QUREUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDR1o7QURFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNFSjtBREFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0dKO0FEREE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0RBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9wb3J0YWwvcHJpbnQtbWFwYS9wcmludC1tYXBhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF0LWNhcmQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLnRpdHVsbyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAubWFwIHtcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59XG46Om5nLWRlZXAgLmxlZ2VuZCB7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICM1NTU7XG59XG46Om5nLWRlZXAgLmxlZ2VuZCBpIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgb3BhY2l0eTogMC43O1xufVxuOjpuZy1kZWVwIC5sZWdlbmQgZGl2IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOjpuZy1kZWVwIC5pbmZvLmxlZ2VuZC5sZWFmbGV0LWNvbnRyb2wge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4IGdyZXksIDBweCAwcHggM3B4IDBweCBibGFjaztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCBtYXQtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgbWF0LWNhcmQgLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWF0LWNhcmQgLm1hcCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmxlZ2VuZCB7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzU1NTtcbn1cblxuOjpuZy1kZWVwIC5sZWdlbmQgaSB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG46Om5nLWRlZXAgLmxlZ2VuZCBkaXYge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG46Om5nLWRlZXAgLmluZm8ubGVnZW5kLmxlYWZsZXQtY29udHJvbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggZ3JleSwgMHB4IDBweCAzcHggMHB4IGJsYWNrO1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintMapaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print-mapa',
                templateUrl: './print-mapa.component.html',
                styleUrls: ['./print-mapa.component.scss']
            }]
    }], function () { return []; }, { indicador: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/print-painel/print-painel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/portal/print-painel/print-painel.component.ts ***!
  \***************************************************************/
/*! exports provided: PrintPainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintPainelComponent", function() { return PrintPainelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_serie_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/serie.model */ "./src/app/portal/models/serie.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/print.service */ "./src/app/portal/services/print.service.ts");
/* harmony import */ var _print_grafico_print_grafico_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../print-grafico/print-grafico.component */ "./src/app/portal/print-grafico/print-grafico.component.ts");
/* harmony import */ var _print_mapa_print_mapa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../print-mapa/print-mapa.component */ "./src/app/portal/print-mapa/print-mapa.component.ts");









function PrintPainelComponent_div_2_div_15_div_1_app_print_grafico_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-print-grafico", 20);
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const i_r21 = ctx_r25.index;
    const widget_r20 = ctx_r25.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "print-grafico-", i_r21, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tipo", widget_r20.indicador.tipo)("dataSet$", ctx_r23.toObservable(widget_r20.indicador.series))("titulo", widget_r20.indicador.titulo)("descricao", widget_r20.indicador.descricao);
} }
function PrintPainelComponent_div_2_div_15_div_1_app_print_mapa_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-print-mapa", 21);
} if (rf & 2) {
    const widget_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indicador", widget_r20.indicador);
} }
function PrintPainelComponent_div_2_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrintPainelComponent_div_2_div_15_div_1_app_print_grafico_1_Template, 1, 5, "app-print-grafico", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrintPainelComponent_div_2_div_15_div_1_app_print_mapa_2_Template, 1, 1, "app-print-mapa", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r21 = ctx_r27.index;
    const widget_r20 = ctx_r27.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "print-widget-", i_r21, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r20.indicador.tipo !== "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r20.indicador.tipo === "map");
} }
function PrintPainelComponent_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrintPainelComponent_div_2_div_15_div_1_Template, 3, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const widget_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r20.indicador != undefined);
} }
function PrintPainelComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PrintPainelComponent_div_2_div_15_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.painel.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.painel.autor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tema: ", ctx_r18.painel.tema, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.painel.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.painel.template.widgets);
} }
class PrintPainelComponent {
    constructor(location, route, printService) {
        this.location = location;
        this.route = route;
        this.printService = printService;
        this.titulo = 'Exemplo layout';
    }
    ngOnInit() {
        this.painel = this.route.snapshot.data.painel;
    }
    onPrintPainel() {
        this.printService.printDocument('paineis', this.painel.id);
    }
    toObservable(series) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(series.map(serie => _models_serie_model__WEBPACK_IMPORTED_MODULE_1__["Serie"].toArray(serie)));
    }
    voltarNavegacao() {
        this.location.back();
    }
}
PrintPainelComponent.ɵfac = function PrintPainelComponent_Factory(t) { return new (t || PrintPainelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_print_service__WEBPACK_IMPORTED_MODULE_5__["PrintService"])); };
PrintPainelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintPainelComponent, selectors: [["app-print-painel"]], decls: 3, vars: 1, consts: [[1, "container"], [1, "painel"], ["class", "painel-content", 4, "ngIf"], [1, "painel-content"], [1, "input-box"], [1, "titulo-container"], ["id", "titulo-valor", 1, "titulo"], [1, "autor-container"], ["id", "autor-valor", 1, "autor"], [1, "tema-container"], ["id", "tema-valor", 1, "tema"], [1, "descricao-container"], ["id", "descricao-valor", 1, "descricao"], [1, "template"], ["class", "widget", 4, "ngFor", "ngForOf"], [1, "widget"], ["class", "grafico", 3, "id", 4, "ngIf"], [1, "grafico", 3, "id"], [3, "id", "tipo", "dataSet$", "titulo", "descricao", 4, "ngIf"], [3, "indicador", 4, "ngIf"], [3, "id", "tipo", "dataSet$", "titulo", "descricao"], [3, "indicador"]], template: function PrintPainelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrintPainelComponent_div_2_Template, 16, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.painel != undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _print_grafico_print_grafico_component__WEBPACK_IMPORTED_MODULE_6__["PrintGraficoComponent"], _print_mapa_print_mapa_component__WEBPACK_IMPORTED_MODULE_7__["PrintMapaComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 270mm;\n  max-width: 270mm;\n  height: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: block;\n  width: 270mm;\n  max-width: 270mm;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%] {\n  display: block;\n  width: 270mm;\n  max-width: 270mm;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%] {\n  width: 270mm;\n  max-width: 270mm;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .autor-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0 20vw;\n  overflow-wrap: break-word;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .autor-container[_ngcontent-%COMP%]   .autor[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 10px 0;\n  font-weight: 300;\n  color: #888888;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .titulo-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .titulo-container[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n  font-weight: 400;\n  color: #888;\n  overflow-wrap: break-word;\n  padding: 0 20vw;\n  line-height: 30px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .tema-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0 20vw;\n  overflow-wrap: break-word;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .tema-container[_ngcontent-%COMP%]   .tema[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0;\n  font-weight: 300;\n  color: #888888;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .descricao-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 20px 0 0;\n  padding: 0 10vw;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .descricao-container[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0;\n  font-weight: 200;\n  overflow-wrap: break-word;\n  color: #888;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .template[_ngcontent-%COMP%] {\n  display: block;\n  width: 270mm;\n  max-width: 270mm;\n  height: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .template[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 5px;\n  margin: 16px;\n  min-width: 512px;\n  min-height: 256px;\n  page-break-inside: avoid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9yZXBvcy90ZXN0ZS90ZXN0ZS1jb250YWRvci9zcmMvYXBwL3BvcnRhbC9wcmludC1wYWluZWwvcHJpbnQtcGFpbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0YWwvcHJpbnQtcGFpbmVsL3ByaW50LXBhaW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBRENRO0VBQ0ksY0FBQTtBQ0NaO0FEQ1k7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ2hCO0FEQ2dCO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQ3BCO0FEQ29CO0VBQ0ksYUFBQTtFQUVBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ3hCO0FEQ3dCO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0M1QjtBREdvQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0R4QjtBREd3QjtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNENUI7QURLb0I7RUFDSSxhQUFBO0VBRUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNIeEI7QURLd0I7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDSDVCO0FET29CO0VBQ0ksYUFBQTtFQUVBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDTHhCO0FET3dCO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDTDVCO0FEVWdCO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNScEI7QURVb0I7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQ1J4QiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9wcmludC1wYWluZWwvcHJpbnQtcGFpbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyNzBtbTtcbiAgICBtYXgtd2lkdGg6IDI3MG1tO1xuICAgIGhlaWdodDogMTAwJTtcbiAgXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMjcwbW07XG4gICAgICAgIG1heC13aWR0aDogMjcwbW07XG4gIFxuICAgICAgICAucGFpbmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICBcbiAgICAgICAgICAgIC5wYWluZWwtY29udGVudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI3MG1tO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjcwbW07XG4gIFxuICAgICAgICAgICAgICAgIC5pbnB1dC1ib3gge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjcwbW07XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjcwbW07XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC5hdXRvci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLmF1dG9yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg4ODg4ODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAudGl0dWxvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC50aXR1bG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjB2dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAudGVtYS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLnRlbWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg4ODg4ODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAuZGVzY3JpY2FvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHZ3O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVzY3JpY2FvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAudGVtcGxhdGUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI3MG1tO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI3MG1tO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC53aWRnZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI1NnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI3MG1tO1xuICBtYXgtd2lkdGg6IDI3MG1tO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNzBtbTtcbiAgbWF4LXdpZHRoOiAyNzBtbTtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjcwbW07XG4gIG1heC13aWR0aDogMjcwbW07XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC5pbnB1dC1ib3gge1xuICB3aWR0aDogMjcwbW07XG4gIG1heC13aWR0aDogMjcwbW07XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC5pbnB1dC1ib3ggLmF1dG9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjB2dztcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLmlucHV0LWJveCAuYXV0b3ItY29udGFpbmVyIC5hdXRvciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjODg4ODg4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLmlucHV0LWJveCAudGl0dWxvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtY29udGVudCAuaW5wdXQtYm94IC50aXR1bG8tY29udGFpbmVyIC50aXR1bG8ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM4ODg7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHBhZGRpbmc6IDAgMjB2dztcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC5pbnB1dC1ib3ggLnRlbWEtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyMHZ3O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtY29udGVudCAuaW5wdXQtYm94IC50ZW1hLWNvbnRhaW5lciAudGVtYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzg4ODg4ODtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC5pbnB1dC1ib3ggLmRlc2NyaWNhby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMCAwO1xuICBwYWRkaW5nOiAwIDEwdnc7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC5pbnB1dC1ib3ggLmRlc2NyaWNhby1jb250YWluZXIgLmRlc2NyaWNhbyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogMjAwO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICBjb2xvcjogIzg4ODtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjcwbW07XG4gIG1heC13aWR0aDogMjcwbW07XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLnRlbXBsYXRlIC53aWRnZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxNnB4O1xuICBtaW4td2lkdGg6IDUxMnB4O1xuICBtaW4taGVpZ2h0OiAyNTZweDtcbiAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintPainelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print-painel',
                templateUrl: './print-painel.component.html',
                styleUrls: ['./print-painel.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_print_service__WEBPACK_IMPORTED_MODULE_5__["PrintService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/services/painel-resolver.service.ts":
/*!************************************************************!*\
  !*** ./src/app/portal/services/painel-resolver.service.ts ***!
  \************************************************************/
/*! exports provided: PainelResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelResolverService", function() { return PainelResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _painel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./painel.service */ "./src/app/portal/services/painel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class PainelResolverService {
    constructor(painelService, router) {
        this.painelService = painelService;
        this.router = router;
    }
    resolve(route, state) {
        const painelId = route.paramMap.get('painelId');
        return this.painelService.getPainel(painelId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            this.router.navigate(['']);
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
        }));
    }
}
PainelResolverService.ɵfac = function PainelResolverService_Factory(t) { return new (t || PainelResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
PainelResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PainelResolverService, factory: PainelResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PainelResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/services/painel.service.ts":
/*!***************************************************!*\
  !*** ./src/app/portal/services/painel.service.ts ***!
  \***************************************************/
/*! exports provided: PainelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelService", function() { return PainelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_painel_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/painel.model */ "./src/app/portal/models/painel.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class PainelService {
    constructor(http) {
        this.http = http;
    }
    getPaineis() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url + '/paineis').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((paineis) => {
            return paineis.map((painel) => _models_painel_model__WEBPACK_IMPORTED_MODULE_2__["Painel"].fromResource(painel));
        }));
    }
    getPainel(painelId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url + '/paineis/' + painelId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((painel) => {
            return _models_painel_model__WEBPACK_IMPORTED_MODULE_2__["Painel"].fromResource(painel);
        }));
    }
}
PainelService.ɵfac = function PainelService_Factory(t) { return new (t || PainelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PainelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PainelService, factory: PainelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PainelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/services/print.service.ts":
/*!**************************************************!*\
  !*** ./src/app/portal/services/print.service.ts ***!
  \**************************************************/
/*! exports provided: PrintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintService", function() { return PrintService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PrintService {
    constructor(router) {
        this.router = router;
        this.isPrinting = false;
    }
    printDocument(documentCollection, documentId) {
        this.isPrinting = true;
        this.router.navigate(['/',
            { outlets: {
                    print: ['print', documentCollection, documentId]
                } }]);
    }
    onDataReady() {
        setTimeout(() => {
            window.print();
            this.isPrinting = false;
            this.router.navigate([{ outlets: { print: null } }]);
        });
    }
}
PrintService.ɵfac = function PrintService_Factory(t) { return new (t || PrintService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PrintService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PrintService, factory: PrintService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/shared/grafico/grafico.component.ts":
/*!************************************************************!*\
  !*** ./src/app/portal/shared/grafico/grafico.component.ts ***!
  \************************************************************/
/*! exports provided: GraficoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficoComponent", function() { return GraficoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! c3 */ "./node_modules/c3/c3.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_indicador_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/indicador.model */ "./src/app/portal/models/indicador.model.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");










class GraficoComponent {
    constructor() {
        this.xCategoria = true;
        this.categoriaArray = ['x'];
        this.dataSetHolder = [];
        this.informacao = false;
    }
    ngOnInit() {
    }
    separaDados(data, id, pacote) {
        const x = [id + '_x'];
        const y = [id];
        data.forEach(item => {
            x.push(item.nome);
            y.push(item.valor);
        });
        pacote.eixo_x = x;
        pacote.eixo_y = y;
        return pacote;
    }
    loadData(pacote) {
        if (this.xCategoria === true) {
            const arrayToAdd = pacote.eixo_x.slice(1);
            this.categoriaArray.push(...arrayToAdd);
            this.chart.load({
                columns: [
                    this.categoriaArray,
                    pacote.eixo_y
                ]
            });
        }
        else {
            const x = '' + pacote.eixo_x[0];
            const y = '' + pacote.eixo_y[0];
            const xsc = {};
            xsc[y] = x;
            this.chart.load({
                xs: xsc,
                columns: [
                    pacote.eixo_x,
                    pacote.eixo_y
                ]
            });
        }
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.tipo === 'pie') {
                this.config = {
                    bindto: '#chart-' + this.id,
                    data: {
                        columns: [],
                        xFormat: '%H:%M:%S',
                        type: 'pie',
                    },
                    pie: {
                        label: {
                            format: function (value, ratio, id) {
                                return d3__WEBPACK_IMPORTED_MODULE_5__["format"]('.2s')(value);
                            }
                        }
                    },
                    padding: {
                        right: 20,
                        bottom: 20,
                    },
                    point: {
                        show: false
                    },
                    transition: {
                        duration: 500
                    }
                };
            }
            else if (this.tipo === 'bar') {
                this.config = {
                    bindto: '#chart-' + this.id,
                    data: {
                        columns: [],
                        xFormat: '%H:%M:%S',
                        type: this.tipo,
                    },
                    padding: {
                        right: 20,
                        bottom: 20,
                    },
                    point: {
                        show: false
                    },
                    transition: {
                        duration: 500
                    }
                };
            }
            if (this.xCategoria === true) {
                this.config.data.x = 'x';
                this.config.axis = {
                    x: {
                        type: 'category'
                    }
                };
            }
            else {
                this.config.data.xs = {};
            }
            switch (this.tipo) {
                case _models_indicador_model__WEBPACK_IMPORTED_MODULE_4__["TipoIndicador"].BARRAS:
                    this.config.legend = {
                        show: false
                    };
                    break;
                default:
                    break;
            }
            this.chart = c3__WEBPACK_IMPORTED_MODULE_3__["generate"](this.config);
            this.dataSet$.subscribe(data => {
                data.forEach(array => {
                    const dataNoId = Object.assign([], array);
                    const id = array[0];
                    dataNoId.shift();
                    let pacote = { eixo_x: [], eixo_y: [] };
                    if (this.dataSetHolder.length === 0) {
                        pacote = this.separaDados(dataNoId, id, pacote);
                        this.loadData(pacote);
                    }
                    else {
                        this.dataSetHolder.forEach(arrayHolder => {
                            if (id === arrayHolder[0]) {
                                const length = Object.keys(arrayHolder).length;
                                if (array.length > length) {
                                    pacote = this.separaDados(dataNoId, id, pacote);
                                    this.loadData(pacote);
                                }
                            }
                        });
                    }
                });
                this.dataSetHolder = [];
                data.forEach(dataItem => this.dataSetHolder.push(Object.assign({}, dataItem)));
            });
            this.resizeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).subscribe(() => this.chart.resize());
        });
    }
    abrirInfo() {
        this.informacao = !this.informacao;
    }
    onKeyPressInfo(e) {
        if (e.keyCode == 13) {
            this.abrirInfo();
        }
    }
    ngOnDestroy() {
        this.resizeSubscription.unsubscribe();
    }
}
GraficoComponent.ɵfac = function GraficoComponent_Factory(t) { return new (t || GraficoComponent)(); };
GraficoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GraficoComponent, selectors: [["app-grafico"]], inputs: { dataSet$: "dataSet$", tipo: "tipo", id: "id", titulo: "titulo", descricao: "descricao" }, decls: 13, vars: 3, consts: [[1, "card"], ["tabindex", "0"], [1, "card-top-action"], [1, "content"], [3, "id"], [1, "mat-elevation-z0", 2, "font-size", "larger"], ["cdkMonitorSubtreeFocus", "", 1, "left-aligned-header", 2, "font-size", "large"], ["tabindex", "0", "cdkMonitorSubtreeFocus", "", 1, "informacao"]], template: function GraficoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-expansion-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-expansion-panel-header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Descri\u00E7\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "chart-", ctx.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.descricao, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["CdkMonitorFocus"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelTitle"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: calc(100% - 32px);\n  height: calc(100% - 32px);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  width: 100%;\n}\n[_ngcontent-%COMP%]:ng-deep   .c3-lines[_ngcontent-%COMP%] {\n  stroke-width: 50px;\n}\n  .c3-ygrid-line line {\n  stroke: #585858;\n}\n  .c3-xgrid-line line {\n  stroke: red;\n}\n  .c3-xgrid-line text {\n  fill: #020202;\n  font-size: 12px;\n  font-weight: bold;\n}\n  .c3-ygrid-line text {\n  fill: #020202;\n  font-size: 12px;\n  font-weight: bold;\n}\n@media print {\n  [_nghost-%COMP%] {\n    display: block;\n    height: 100%;\n    width: 270mm;\n    max-width: 270mm;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 260mm;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n    display: block;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: none;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 250mm;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .c3[_ngcontent-%COMP%] {\n    width: 250mm;\n    max-width: 250mm;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .c3[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 250mm;\n    max-width: 250mm;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9yZXBvcy90ZXN0ZS90ZXN0ZS1jb250YWRvci9zcmMvYXBwL3BvcnRhbC9zaGFyZWQvZ3JhZmljby9ncmFmaWNvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0YWwvc2hhcmVkL2dyYWZpY28vZ3JhZmljby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0NOO0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0FDREY7QURJQTtFQUNFLFdBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0RGO0FESUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREY7QURJQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUNERjtFREdFO0lBQ0UsWUFBQTtFQ0RKO0VER0k7SUFDRSxjQUFBO0VDRE47RURHTTtJQUNFLGFBQUE7RUNEUjtFREtJO0lBQ0UsWUFBQTtFQ0hOO0VES007SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUNIUjtFREtRO0lBQ0UsWUFBQTtJQUNBLGdCQUFBO0VDSFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9zaGFyZWQvZ3JhZmljby9ncmFmaWNvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcblxuICAuY2FyZCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XG5cbiAgICBtYXQtY2FyZC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH0gIFxuICB9XG59XG5cbjpuZy1kZWVwIC5jMy1saW5lcyB7XG4gIHN0cm9rZS13aWR0aDogNTBweDtcbn1cblxuOjpuZy1kZWVwIC5jMy15Z3JpZC1saW5lIGxpbmUge1xuICBzdHJva2U6IHJnYig4OCwgODgsIDg4KTtcbn1cblxuOjpuZy1kZWVwIC5jMy14Z3JpZC1saW5lIGxpbmUge1xuICBzdHJva2U6IHJlZDtcbn1cblxuOjpuZy1kZWVwIC5jMy14Z3JpZC1saW5lIHRleHR7XG4gIGZpbGw6ICMwMjAyMDI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjo6bmctZGVlcCAuYzMteWdyaWQtbGluZSB0ZXh0e1xuICBmaWxsOiAjMDIwMjAyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAyNzBtbTtcbiAgICBtYXgtd2lkdGg6IDI3MG1tO1xuXG4gICAgLmNhcmQge1xuICAgICAgd2lkdGg6IDI2MG1tO1xuICBcbiAgICAgIG1hdC1jYXJkLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDI1MG1tO1xuXG4gICAgICAgIC5jMyB7XG4gICAgICAgICAgd2lkdGg6IDI1MG1tO1xuICAgICAgICAgIG1heC13aWR0aDogMjUwbW07XG5cbiAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgd2lkdGg6IDI1MG1tO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBtbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuY2FyZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMnB4KTtcbn1cbjpob3N0IC5jYXJkIG1hdC1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46bmctZGVlcCAuYzMtbGluZXMge1xuICBzdHJva2Utd2lkdGg6IDUwcHg7XG59XG5cbjo6bmctZGVlcCAuYzMteWdyaWQtbGluZSBsaW5lIHtcbiAgc3Ryb2tlOiAjNTg1ODU4O1xufVxuXG46Om5nLWRlZXAgLmMzLXhncmlkLWxpbmUgbGluZSB7XG4gIHN0cm9rZTogcmVkO1xufVxuXG46Om5nLWRlZXAgLmMzLXhncmlkLWxpbmUgdGV4dCB7XG4gIGZpbGw6ICMwMjAyMDI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjo6bmctZGVlcCAuYzMteWdyaWQtbGluZSB0ZXh0IHtcbiAgZmlsbDogIzAyMDIwMjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjcwbW07XG4gICAgbWF4LXdpZHRoOiAyNzBtbTtcbiAgfVxuICA6aG9zdCAuY2FyZCB7XG4gICAgd2lkdGg6IDI2MG1tO1xuICB9XG4gIDpob3N0IC5jYXJkIG1hdC1jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgOmhvc3QgLmNhcmQgbWF0LWNhcmQtaGVhZGVyIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICA6aG9zdCAuY2FyZCAuY29udGVudCB7XG4gICAgd2lkdGg6IDI1MG1tO1xuICB9XG4gIDpob3N0IC5jYXJkIC5jb250ZW50IC5jMyB7XG4gICAgd2lkdGg6IDI1MG1tO1xuICAgIG1heC13aWR0aDogMjUwbW07XG4gIH1cbiAgOmhvc3QgLmNhcmQgLmNvbnRlbnQgLmMzIHN2ZyB7XG4gICAgd2lkdGg6IDI1MG1tO1xuICAgIG1heC13aWR0aDogMjUwbW07XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GraficoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-grafico',
                templateUrl: './grafico.component.html',
                styleUrls: ['./grafico.component.scss']
            }]
    }], function () { return []; }, { dataSet$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], tipo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], descricao: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/shared/mapa/mapa.component.ts":
/*!******************************************************!*\
  !*** ./src/app/portal/shared/mapa/mapa.component.ts ***!
  \******************************************************/
/*! exports provided: MapaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaComponent", function() { return MapaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");







class MapaComponent {
    constructor() {
        this.paleta = ['#bd0026', '#f03b20', '#fd8d3c', '#fecc5c', '#ffffb2'];
        this.faSquareFull = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSquareFull"];
    }
    ngAfterViewInit() {
        // Invoca o mapa
        this.invocaMapa();
        // Carrega a camada de fundo
        this.adicionarRegioes(this.indicador);
        // Cria as regiões com os seus atributos
        // Cria a legenda
        this.criarLegenda(this.indicador);
    }
    ngOnInit() {
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
    }
    invocaMapa() {
        this.mymap = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map-' + this.id).setView([-23.7, -46.7], 9.55);
        leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' +
                'contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(this.mymap);
    }
    adicionarRegioes(mapa) {
        for (let j = 0; j < mapa.regioes.length; j++) {
            const polygon = [];
            for (let i = 0; i < mapa.regioes[j].coordenadas.length; i++) {
                polygon.push([this.indicador.regioes[j].coordenadas[i].y, this.indicador.regioes[j].coordenadas[i].x]);
            }
            if (mapa.regioes[j].valor === undefined || isNaN(mapa.regioes[j].valor)) {
                leaflet__WEBPACK_IMPORTED_MODULE_1__["polygon"](polygon, {
                    color: mapa.regioes[j].cor,
                    fillOpacity: 0.5
                }).bindPopup('<h3>' + mapa.regioes[j].nome + '</h3>'
                    + '<h4 >Valor: Sem dados</h4>').addTo(this.mymap);
            }
            else {
                leaflet__WEBPACK_IMPORTED_MODULE_1__["polygon"](polygon, {
                    color: mapa.regioes[j].cor,
                    fillOpacity: 0.5
                }).bindPopup('<h3>' + mapa.regioes[j].nome + '</h3>'
                    + '<h4 >Valor: ' + mapa.regioes[j].valor + '</h4>').addTo(this.mymap);
            }
        }
    }
    getColor(valor, max) {
        const limit = Math.trunc(max * 0.8);
        return valor > limit ? this.paleta[0] :
            valor > limit / 2 ? this.paleta[1] :
                valor > limit / 4 ? this.paleta[2] :
                    valor > limit / 8 ? this.paleta[3] :
                        this.paleta[4];
    }
    // done
    criarLegenda(mapa) {
        const self = this;
        const legend = new leaflet__WEBPACK_IMPORTED_MODULE_1__["Control"]({ position: 'bottomright' });
        legend.onAdd = () => {
            const div = leaflet__WEBPACK_IMPORTED_MODULE_1__["DomUtil"].create('div', 'info legend');
            const grades = [0,
                Math.trunc(mapa.max * 0.8 / 8),
                Math.trunc(mapa.max * 0.8 / 4),
                Math.trunc(mapa.max * 0.8 / 2),
                Math.trunc(mapa.max * 0.8)];
            div.innerHTML +=
                '<div style="display: flex;align-items: center;"><div style="width: 0; height: 0;border: 8.8px solid #AAAAAA;">' +
                    '</div><p style="    font-weight: 600;margin: 0 0px 0px 5px;">Sem dados</p</div>';
            for (let i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    '<div><div style="width: 0; height: 0;border: 10px solid ' + self.getColor(grades[i] + 1, mapa.max) + ';"></div> ' +
                        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '</div><br>' : '+');
            }
            return div;
        };
        legend.addTo(this.mymap);
    }
}
MapaComponent.ɵfac = function MapaComponent_Factory(t) { return new (t || MapaComponent)(); };
MapaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapaComponent, selectors: [["app-mapa"]], inputs: { indicador: "indicador", descricao: "descricao" }, decls: 11, vars: 3, consts: [[1, "titulo"], ["tabindex", "0"], [1, "map", 3, "id"], [1, "mat-elevation-z0", 2, "font-size", "larger"], [1, "left-aligned-header", 2, "font-size", "large"], ["tabindex", "0", 1, "informacao"]], template: function MapaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Descri\u00E7\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.indicador.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "map-", ctx.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.descricao, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 500px;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 100%;\n}\n  .legend {\n  line-height: 18px;\n  color: #555;\n}\n  .legend i {\n  width: 18px;\n  height: 18px;\n  float: left;\n  margin-right: 8px;\n  opacity: 0.7;\n}\n  .legend div {\n  font-weight: 600;\n  font-size: 14px;\n  height: 20px;\n  display: flex;\n  margin: 5px 0;\n  align-items: center;\n  justify-content: space-between;\n}\n  .info.legend.leaflet-control {\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0px 0px 12px 0px grey, 0px 0px 3px 0px black;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n}\n@media print {\n  [_nghost-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  [_nghost-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    height: 520px;\n    flex-direction: column;\n    align-items: center;\n  }\n  [_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  [_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n    height: 400px;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9yZXBvcy90ZXN0ZS90ZXN0ZS1jb250YWRvci9zcmMvYXBwL3BvcnRhbC9zaGFyZWQvbWFwYS9tYXBhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0YWwvc2hhcmVkL21hcGEvbWFwYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0VSO0FERFE7RUFDSSxXQUFBO0FDR1o7QUREUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDR1o7QURHQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0FKO0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0VKO0FEQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0RBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDR0o7QUREQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLHVCQUFBO0VDSU47RURITTtJQUNJLFdBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUNLVjtFREpVO0lBQ0ksV0FBQTtFQ01kO0VESlU7SUFDSSxhQUFBO0lBQ0EsV0FBQTtFQ01kO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wb3J0YWwvc2hhcmVkL21hcGEvbWFwYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hdC1jYXJkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC50aXR1bG8ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLm1hcCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cbjo6bmctZGVlcCAubGVnZW5kIHtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjogIzU1NTtcbn1cbjo6bmctZGVlcCAubGVnZW5kIGkge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG46Om5nLWRlZXAgLmxlZ2VuZCBkaXYge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46Om5nLWRlZXAgLmluZm8ubGVnZW5kLmxlYWZsZXQtY29udHJvbCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggZ3JleSwgMHB4IDBweCAzcHggMHB4IGJsYWNrO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgcHJpbnQge1xuICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hdC1jYXJkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogNTIwcHg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC50aXR1bG8ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1hcCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG4gICIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCBtYXQtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgbWF0LWNhcmQgLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWF0LWNhcmQgLm1hcCB7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmxlZ2VuZCB7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzU1NTtcbn1cblxuOjpuZy1kZWVwIC5sZWdlbmQgaSB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG46Om5nLWRlZXAgLmxlZ2VuZCBkaXYge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG46Om5nLWRlZXAgLmluZm8ubGVnZW5kLmxlYWZsZXQtY29udHJvbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggZ3JleSwgMHB4IDBweCAzcHggMHB4IGJsYWNrO1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIDpob3N0IG1hdC1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNTIwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIDpob3N0IG1hdC1jYXJkIC50aXR1bG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIDpob3N0IG1hdC1jYXJkIC5tYXAge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mapa',
                templateUrl: './mapa.component.html',
                styleUrls: ['./mapa.component.scss']
            }]
    }], function () { return []; }, { indicador: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], descricao: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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
    production: false,
    test: false,
    hmg: false,
    base_url: 'https://api.observatorio.smped.prefeitura.sp.gov.br/portal'
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

module.exports = __webpack_require__(/*! /home/garsoft/Documentos/repos/repos/teste/teste-contador/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map