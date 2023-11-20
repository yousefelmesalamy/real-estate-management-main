(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



const routes = [{
  path: '',
  redirectTo: 'map',
  pathMatch: 'full'
}, {
  path: 'folder/:id',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then(m => m.FolderPageModule)
}, {
  path: 'map',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_enquiries_enquiries_module_ts"), __webpack_require__.e("default-src_app_mortgage-calc_mortgage-calc_module_ts"), __webpack_require__.e("default-src_app_properties_properties_module_ts"), __webpack_require__.e("src_app_map_map_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./map/map.module */ 42622)).then(m => m.MapPageModule)
}, {
  path: 'settings',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 27075)).then(m => m.SettingsPageModule)
}, {
  path: 'properties',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_enquiries_enquiries_module_ts"), __webpack_require__.e("default-src_app_mortgage-calc_mortgage-calc_module_ts"), __webpack_require__.e("default-src_app_properties_properties_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./properties/properties.module */ 11199)).then(m => m.PropertiesPageModule)
}, {
  path: 'enquiries',
  loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_enquiries_enquiries_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./enquiries/enquiries.module */ 85609)).then(m => m.EnquiriesPageModule)
}, {
  path: 'mortgage-calc',
  loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_mortgage-calc_mortgage-calc_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mortgage-calc/mortgage-calc.module */ 7130)).then(m => m.MortgageCalcPageModule)
}, {
  path: 'user',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_user_user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./user/user.module */ 88524)).then(m => m.UserPageModule)
}, {
  path: 'about',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 46985)).then(m => m.AboutPageModule)
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _enquiries_enquiries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enquiries/enquiries.service */ 50590);
/* harmony import */ var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/storage/storage.service */ 53328);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.service */ 1584);
/* harmony import */ var _web_scoket_web_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web-scoket/web-socket.service */ 81123);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/element/bundle */ 5732);














// Register swiper js

(0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_8__.register)();
let AppComponent = class AppComponent {
  constructor(platform, storage, userService, alertController, toastController, router, http, enquiriesService, webSocket) {
    this.platform = platform;
    this.storage = storage;
    this.userService = userService;
    this.alertController = alertController;
    this.toastController = toastController;
    this.router = router;
    this.http = http;
    this.enquiriesService = enquiriesService;
    this.webSocket = webSocket;
    this.appPages = [{
      title: 'Map',
      url: '/map',
      icon: 'map'
    }, {
      title: 'Properties',
      url: '/properties',
      icon: 'home'
    }, {
      title: 'Enquiries',
      url: '/enquiries',
      icon: 'reader'
    }, {
      title: 'Mortgage Calc',
      url: '/mortgage-calc',
      icon: 'calculator'
    }, {
      title: 'Settings',
      url: '/settings',
      icon: 'cog'
    }];
    this.appLowerPages = [{
      title: 'About',
      url: '/about',
      icon: 'help-circle'
    }, {
      title: 'Account',
      url: '/user/account',
      icon: 'person',
      signIn: true
    }, {
      title: 'Register',
      url: '/user/register',
      icon: 'create',
      guest: true
    }, {
      title: 'Sign In',
      url: '/user/signin',
      icon: 'log-in',
      guest: true
    }];
    this.unreadEnquiries = 0;
  }
  ngOnInit() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.platform.ready();
      yield _this.storage.init();
      const isDark = yield _this.storage.getDartTheme();
      // SET THEME
      if (isDark) {
        document.body.classList.add('dark');
      }
      _this.userService.user$.subscribe(user => {
        _this.user = user;
        if (user) {
          _this.webSocket.connect(_this.userService.token());
          /**
           *  Fetch users enquiries if there's was no initial fetch
           */
          if (!_this.enquiriesService.initialFetchDone) {
            _this.enquiriesService.fetchEnquiries();
          }
        }
      });
      _this.enquiriesService.enquiries$.subscribe(enquiries => {
        _this.unreadEnquiries = enquiries.filter(enq => _this.isUnread(enq)).length;
      });
      _this.checkServer();
    })();
  }
  isHidden(link) {
    if (!link.signIn && !link.guest) {
      return;
    }
    if (link.signIn && this.user) {
      return;
    }
    if (link.guest && !this.user) {
      return;
    }
    return true;
  }
  signOut() {
    var _this2 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Are you sure?',
        message: 'You will be <strong>Signed out </strong>!!!',
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'Sign out',
          cssClass: 'danger',
          handler: function () {
            var _ref = (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              yield _this2.userService.signOut();
              _this2.enquiriesService.resetState();
              _this2.showToast();
              _this2.router.navigate(['/user/signin']);
            });
            return function handler() {
              return _ref.apply(this, arguments);
            };
          }()
        }]
      });
      yield alert.present();
    })();
  }
  showToast() {
    var _this3 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastController.create({
        message: 'Success, you have signed out.',
        color: 'success',
        duration: 3000
      });
      toast.present();
    })();
  }
  checkServer() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.api.server)).then(data => console.log(data));
  }
  isUnread(enquiry) {
    return !enquiry.read && enquiry.users.to.user_id === this.user.user_id;
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
  }, {
    type: _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService
  }, {
    type: _user_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient
  }, {
    type: _enquiries_enquiries_service__WEBPACK_IMPORTED_MODULE_4__.EnquiriesService
  }, {
    type: _web_scoket_web_socket_service__WEBPACK_IMPORTED_MODULE_7__.WebSocketService
  }];
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-markdown */ 50982);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage-angular */ 47566);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/storage/storage.service */ 53328);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);












let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.IonicStorageModule.forRoot(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownModule.forRoot()],
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy
  }, _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 50590:
/*!************************************************!*\
  !*** ./src/app/enquiries/enquiries.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnquiriesService": () => (/* binding */ EnquiriesService)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utility */ 77666);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ 1584);








const enquiryUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api.server + 'enquiries';
const requestOptions = (token = '', body = {}) => ({
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders((0,_shared_utility__WEBPACK_IMPORTED_MODULE_2__.headerDict)({
    token
  })),
  body
});
let EnquiriesService = class EnquiriesService {
  constructor(http, userService) {
    this.http = http;
    this.userService = userService;
    this.initialFetchDone = false;
    this.enquiriesSub = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.enquirySub = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.enquiries$ = this.enquiriesSub.asObservable();
    this.enquiry$ = this.enquirySub.asObservable();
  }
  get enquiries() {
    return this.enquiriesSub.getValue();
  }
  set enquiries(enquiries) {
    this.enquiriesSub.next(enquiries);
  }
  get enquiry() {
    return this.enquirySub.getValue();
  }
  set enquiry(enquiry) {
    this.enquirySub.next(enquiry);
  }
  fetchEnquiries() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const token = _this.userService.token();
        _this.enquiries = (yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this.http.get(enquiryUrl, requestOptions(token)))).data;
        _this.initialFetchDone = true;
      } catch (error) {
        console.error(error);
        return error.error || error;
      }
    })();
  }
  fetchEnquiry(enqId) {
    var _this2 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const token = _this2.userService.token();
        _this2.enquiry = (yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this2.http.get(enquiryUrl + '/' + enqId, requestOptions(token)))).data;
        return _this2.enquiry;
      } catch (error) {
        console.error(error);
        return error.error || error;
      }
    })();
  }
  createEnquiry(enquiry, property) {
    var _this3 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = _this3.userService.token();
      const formData = {
        ...enquiry,
        property: {
          property_id: property.property_id,
          name: property.name
        }
      };
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this3.http.post(enquiryUrl, formData, requestOptions(token)));
        _this3.insertEnquiryToState(res.data);
        return res;
      } catch (error) {
        console.error(error);
        return error.error || error;
      }
    })();
  }
  removeEnquiry(enqId) {
    var _this4 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = _this4.userService.token();
      const url = enquiryUrl + '/' + enqId;
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this4.http.delete(url, requestOptions(token)));
        if (res && res.status === 200) {
          _this4.enquiries = _this4.enquiries.filter(enquiry => enquiry.enquiry_id !== enqId);
          return res;
        }
      } catch (error) {
        console.error(error);
        return error.error || error;
      }
    })();
  }
  readEnquiry(enqId) {
    var _this5 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = _this5.userService.token();
      const url = enquiryUrl + '/' + enqId;
      try {
        const {
          data
        } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this5.http.patch(url, {
          read: true
        }, requestOptions(token)));
        // UPDATE ENQUIRIES && CURRENT ENQUIRY
        _this5.enquiries = _this5.enquiries.map(enquiry => enquiry.enquiry_id === enqId ? data : enquiry);
        _this5.enquiry = data;
      } catch (error) {
        console.error(error);
      }
    })();
  }
  resetState() {
    this.enquiries = [];
    this.initialFetchDone = false;
  }
  insertEnquiryToState(enquiry) {
    this.enquiries = [...this.enquiries, enquiry];
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
  }, {
    type: _user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
  }];
};
EnquiriesService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], EnquiriesService);


/***/ }),

/***/ 95949:
/*!**********************************************************!*\
  !*** ./src/app/map/map-leaflet/map-leaflet.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapLeafletComponent": () => (/* binding */ MapLeafletComponent)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _map_leaflet_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-leaflet.component.html?ngResource */ 18805);
/* harmony import */ var _map_leaflet_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-leaflet.component.scss?ngResource */ 40484);
/* harmony import */ var _map_leaflet_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_map_leaflet_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ 5836);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_properties_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/properties/properties.service */ 83638);
/* harmony import */ var src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enums/property */ 14750);
/* harmony import */ var src_app_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/storage/storage.service */ 53328);
/* harmony import */ var _map_popup_map_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../map-popup/map-popup.component */ 29804);
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../map.service */ 53061);












let MapLeafletComponent = class MapLeafletComponent {
  constructor(mapService, propertiesService, resolver, injector, storage, activatedRoutes) {
    this.mapService = mapService;
    this.propertiesService = propertiesService;
    this.resolver = resolver;
    this.injector = injector;
    this.storage = storage;
    this.activatedRoutes = activatedRoutes;
    this.clickAddMarker = false;
    this.showPropertyMarkers = true;
    this.visibleMarkerType = [];
    this.clickedAt = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.properties = [];
    this.mapGroupMarkers = {
      [src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_5__.PropertyType.residential]: null,
      [src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_5__.PropertyType.commercial]: null,
      [src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_5__.PropertyType.industrial]: null,
      [src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_5__.PropertyType.land]: null
    };
    this.center = {
      lat: 8.947416086535465,
      lng: 125.5451552207221
    };
    this.markers = [];
    this.pendingMarker = [];
  }
  ngOnInit() {
    this.propertiesService.properties$.subscribe(properties => {
      this.properties = properties;
      if (this.map) {
        this.setMapMarkers();
      }
    });
    this.initMap().then(() => {
      this.map.on('dragend', () => {
        const center = this.map.getCenter();
        console.log('drag ended.', center);
      });
      const lat = this.activatedRoutes.snapshot.queryParamMap.get('lat');
      const lng = this.activatedRoutes.snapshot.queryParamMap.get('lng');
      if (lat && lng) {
        this.findMarker(Number(lat), Number(lng));
      }
    });
  }
  ngOnChanges() {
    if (this.map) {
      // remove all
      this.map.removeLayer(this.mapGroupMarkers.residential);
      this.map.removeLayer(this.mapGroupMarkers.commercial);
      this.map.removeLayer(this.mapGroupMarkers.industrial);
      this.map.removeLayer(this.mapGroupMarkers.land);
      // add included
      if (this.visibleMarkerType.includes(src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_5__.PropertyType.residential)) {
        this.map.addLayer(this.mapGroupMarkers.residential);
      }
      if (this.visibleMarkerType.includes(src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_5__.PropertyType.commercial)) {
        this.map.addLayer(this.mapGroupMarkers.commercial);
      }
      if (this.visibleMarkerType.includes(src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_5__.PropertyType.industrial)) {
        this.map.addLayer(this.mapGroupMarkers.industrial);
      }
      if (this.visibleMarkerType.includes(src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_5__.PropertyType.land)) {
        this.map.addLayer(this.mapGroupMarkers.land);
      }
    }
  }
  setMapCenter(coord) {
    this.map.flyTo([coord.lat, coord.lng], 19);
  }
  findMarker(lat, lng) {
    const foundMarker = this.markers.find(marker => {
      const latLng = marker.getLatLng();
      return latLng.lat === lat && latLng.lng === lng;
    });
    this.map.flyTo(foundMarker.getLatLng(), 19);
    setTimeout(() => {
      foundMarker.openPopup();
    }, 1000);
  }
  initMap() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const coord = yield _this.storage.getCoord();
      if (coord) {
        _this.center = coord;
      }
      _this.map = leaflet__WEBPACK_IMPORTED_MODULE_3__.map('mapId', {
        center: [_this.center.lat, _this.center.lng],
        zoom: 18,
        minZoom: 16,
        zoomControl: false
      });
      leaflet__WEBPACK_IMPORTED_MODULE_3__.control.zoom({
        position: 'bottomleft'
      }).addTo(_this.map);
      _this.map.whenReady(() => {
        setTimeout(() => {
          _this.map.invalidateSize();
        }, 1000);
      });
      const isDark = yield _this.storage.getDartTheme();
      _this.mapService.addTiles(_this.map, isDark);
      if (_this.clickAddMarker) {
        // set click event handler
        _this.map.on('click', e => {
          if (_this.pendingMarker.length) {
            _this.pendingMarker.forEach(marker => {
              _this.map.removeLayer(marker);
            });
          }
          _this.pinMarker(e.latlng);
          _this.clickedAt.emit(e.latlng);
        });
      }
      if (_this.showPropertyMarkers) {
        // set Properties Markers
        _this.setMapMarkers();
      }
    })();
  }
  setMapMarkers() {
    let residential = [];
    let commercial = [];
    let industrial = [];
    let land = [];
    const group = this.properties.reduce((arr, acc) => {
      arr[acc.type] = [...(arr[acc.type] || []), acc];
      return arr;
    }, {});
    if (group.residential && group.residential.length) {
      residential = group.residential.map(property => property.position ? this.addPropertyMarker(property) : undefined).filter(property => property !== undefined);
    }
    if (group.commercial && group.commercial.length) {
      commercial = group.commercial.map(property => property.position ? this.addPropertyMarker(property) : undefined).filter(property => property !== undefined);
    }
    if (group.industrial && group.industrial.length) {
      industrial = group.industrial.map(property => property.position ? this.addPropertyMarker(property) : undefined).filter(property => property !== undefined);
    }
    if (group.land && group.land.length) {
      land = group.land.map(property => property.position ? this.addPropertyMarker(property) : undefined).filter(property => property !== undefined);
    }
    this.mapGroupMarkers = {
      residential: leaflet__WEBPACK_IMPORTED_MODULE_3__.layerGroup(residential),
      commercial: leaflet__WEBPACK_IMPORTED_MODULE_3__.layerGroup(commercial),
      industrial: leaflet__WEBPACK_IMPORTED_MODULE_3__.layerGroup(industrial),
      land: leaflet__WEBPACK_IMPORTED_MODULE_3__.layerGroup(land)
    };
    const ctrl = leaflet__WEBPACK_IMPORTED_MODULE_3__.control.layers(this.mapGroupMarkers);
    ctrl.addTo(this.map);
    ctrl.remove();
    this.map.addLayer(this.mapGroupMarkers.residential);
    this.map.addLayer(this.mapGroupMarkers.commercial);
    this.map.addLayer(this.mapGroupMarkers.industrial);
    this.map.addLayer(this.mapGroupMarkers.land);
  }
  pinMarker(coord) {
    const icon = this.setMarkerIcon();
    const marker = this.mapService.addMarker(this.map, coord, {
      icon,
      popup: ''
    });
    marker.addTo(this.map);
    this.pendingMarker.push(marker);
  }
  addPropertyMarker(property) {
    // Dynamicaly Add Component to Popup
    const component = this.resolver.resolveComponentFactory(_map_popup_map_popup_component__WEBPACK_IMPORTED_MODULE_7__.MapPopupComponent).create(this.injector);
    component.instance.property = property;
    component.instance.changeDetector.detectChanges();
    const icon = this.setMarkerIcon(property.type);
    const marker = this.mapService.addMarker(this.map, property.position, {
      icon,
      popup: component
    });
    this.markers.push(marker);
    return marker;
  }
  setMarkerIcon(type = '') {
    let icon = '';
    switch (type) {
      case src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_5__.PropertyType.residential:
        icon = 'marker-residential.svg';
        break;
      case src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_5__.PropertyType.commercial:
        icon = 'marker-commercial.svg';
        break;
      case src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_5__.PropertyType.industrial:
        icon = 'marker-industrial.svg';
        break;
      case src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_5__.PropertyType.land:
        icon = 'marker-land.svg';
        break;
      default:
        icon = 'default-marker.svg';
        break;
    }
    return leaflet__WEBPACK_IMPORTED_MODULE_3__.icon({
      iconUrl: '../../../assets/images/map/' + icon,
      shadowUrl: '../../../assets/images/map/marker-shadow.svg',
      iconSize: [40, 45],
      shadowSize: [40, 55],
      iconAnchor: [22, 50],
      shadowAnchor: [5, 40],
      popupAnchor: [-3, -46] // point from which the popup should open relative to the iconAnchor
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _map_service__WEBPACK_IMPORTED_MODULE_8__.MapService
  }, {
    type: src_app_properties_properties_service__WEBPACK_IMPORTED_MODULE_4__.PropertiesService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ComponentFactoryResolver
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injector
  }, {
    type: src_app_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
  }];
  static #_2 = this.propDecorators = {
    clickAddMarker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    showPropertyMarkers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    visibleMarkerType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    clickedAt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }]
  };
};
MapLeafletComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-map-leaflet',
  template: _map_leaflet_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_map_leaflet_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], MapLeafletComponent);


/***/ }),

/***/ 29804:
/*!******************************************************!*\
  !*** ./src/app/map/map-popup/map-popup.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPopupComponent": () => (/* binding */ MapPopupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _map_popup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-popup.component.html?ngResource */ 4683);
/* harmony import */ var _map_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-popup.component.scss?ngResource */ 14911);
/* harmony import */ var _map_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_map_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_properties_properties_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/properties/properties.service */ 83638);






let MapPopupComponent = class MapPopupComponent {
  constructor(changeDetector, router, propertiesService) {
    this.changeDetector = changeDetector;
    this.router = router;
    this.propertiesService = propertiesService;
  }
  ngOnInit() {}
  viewMore() {
    this.propertiesService.property = this.property;
    this.router.navigate(['/properties', this.property.property_id]);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: src_app_properties_properties_service__WEBPACK_IMPORTED_MODULE_2__.PropertiesService
  }];
  static #_2 = this.propDecorators = {
    property: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  };
};
MapPopupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-map-popup',
  template: _map_popup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_map_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MapPopupComponent);


/***/ }),

/***/ 53683:
/*!********************************************************************!*\
  !*** ./src/app/map/map-search-field/map-search-field.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapSearchFieldComponent": () => (/* binding */ MapSearchFieldComponent)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _map_search_field_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-search-field.component.html?ngResource */ 55389);
/* harmony import */ var _map_search_field_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-search-field.component.scss?ngResource */ 25128);
/* harmony import */ var _map_search_field_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_map_search_field_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var leaflet_geosearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-geosearch */ 45722);
/* harmony import */ var src_app_shared_components_modal_search_modal_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/modal-search/modal-search.component */ 96455);
/* harmony import */ var src_app_shared_data_php_cities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/data/php-cities */ 89562);









let MapSearchFieldComponent = class MapSearchFieldComponent {
  constructor(modalCtrl) {
    this.modalCtrl = modalCtrl;
    this.selectedLocation = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.field = '';
  }
  ngOnInit() {}
  showSearchModal() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: src_app_shared_components_modal_search_modal_search_component__WEBPACK_IMPORTED_MODULE_4__.ModalSearchComponent,
        componentProps: {
          title: 'Search Location',
          placeholder: 'Search Cities...',
          items: [...src_app_shared_data_php_cities__WEBPACK_IMPORTED_MODULE_5__["default"]],
          displayProperty: 'city',
          searchFunction: _this.searchFunction
        }
      });
      yield modal.present();
      _this.field = '';
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        const {
          lat,
          lng
        } = data;
        _this.selectedLocation.emit({
          lat: Number(lat),
          lng: Number(lng)
        });
      }
    })();
  }
  searchFunction(text) {
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new leaflet_geosearch__WEBPACK_IMPORTED_MODULE_3__.OpenStreetMapProvider();
      const results = yield provider.search({
        query: text
      });
      if (!results) {
        return;
      }
      const items = results.map(item => {
        const {
          label,
          y,
          x
        } = item;
        return {
          city: label,
          lat: y,
          lng: x
        };
      });
      return items;
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
  }];
  static #_2 = this.propDecorators = {
    selectedLocation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }]
  };
};
MapSearchFieldComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-map-search-field',
  template: _map_search_field_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_map_search_field_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], MapSearchFieldComponent);


/***/ }),

/***/ 53061:
/*!************************************!*\
  !*** ./src/app/map/map.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapService": () => (/* binding */ MapService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 5836);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);




let MapService = class MapService {
  constructor() {}
  addTiles(map, isDark = false) {
    const key = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api.mapKey;
    let mapTiles = `https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=${key}`;
    if (isDark) {
      mapTiles = `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${key}`;
    }
    const tiles = leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer(mapTiles, {
      maxZoom: 20,
      attribution: `
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>,
      &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>
      &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      `
    });
    tiles.addTo(map);
  }
  addMarker(map, coord, options = {
    icon: null,
    popup: null
  }) {
    const marker = leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([coord.lat, coord.lng], {
      ...(options.icon ? {
        icon: options.icon
      } : '')
    });
    if (options.popup) {
      marker.bindPopup(options.popup.location.nativeElement);
    }
    // add click event
    marker.on('click', () => {
      // console.log(coord);
      map.flyTo(coord, 19);
    });
    return marker;
  }
  static #_ = this.ctorParameters = () => [];
};
MapService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], MapService);


/***/ }),

/***/ 83638:
/*!**************************************************!*\
  !*** ./src/app/properties/properties.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesService": () => (/* binding */ PropertiesService)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utility */ 77666);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ 1584);








const propertyUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api.server + 'properties';
const requestOptions = ({
  token = '',
  contentType = 'application/json'
}, body = {}) => ({
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders((0,_shared_utility__WEBPACK_IMPORTED_MODULE_2__.headerDict)({
    token,
    contentType
  })),
  body
});
let PropertiesService = class PropertiesService {
  constructor(http, userService) {
    this.http = http;
    this.userService = userService;
    this.propertiesSub = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.propertySub = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.properties$ = this.propertiesSub.asObservable();
    this.property$ = this.propertySub.asObservable();
    this.fetchProperties();
  }
  get properties() {
    return this.propertiesSub.getValue();
  }
  set properties(property) {
    this.propertiesSub.next(property);
  }
  get property() {
    return this.propertySub.getValue();
  }
  set property(property) {
    this.propertySub.next(property);
  }
  fetchProperties() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.properties = (yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this.http.get(propertyUrl))).data;
      } catch (error) {
        console.error(error);
      }
    })();
  }
  fetchProperty(id) {
    var _this2 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.property = (yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this2.http.get(propertyUrl + '/' + id))).data;
      } catch (error) {
        console.error(error);
      }
    })();
  }
  addProperty(property) {
    var _this3 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = _this3.userService.token();
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this3.http.post(propertyUrl, property, requestOptions({
          token
        })));
        _this3.properties = [..._this3.properties, res.data];
        return res;
      } catch (error) {
        console.error(error);
        return error;
      }
    })();
  }
  addPropertyImage(files, id) {
    var _this4 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const formData = new FormData();
      files.forEach(file => {
        formData.append('images', file, file.name);
      });
      try {
        const token = _this4.userService.token();
        return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this4.http.post(propertyUrl + '/upload/images/' + id, formData, requestOptions({
          token,
          contentType: null
        })));
      } catch (error) {
        console.error(error);
        return error.error || error;
      }
    })();
  }
  deletePropertyImage(images, propId) {
    var _this5 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = _this5.userService.token();
      try {
        const url = `${propertyUrl}/upload/images/${propId}`;
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this5.http.delete(url, requestOptions({
          token
        }, {
          images
        })));
        _this5.property.images = _this5.property.images.filter(img => !res.data.includes(img));
        return res;
      } catch (error) {
        console.error(error);
      }
    })();
  }
  removeProperty(propId) {
    var _this6 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = _this6.userService.token();
      try {
        const url = `${propertyUrl}/${propId}`;
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this6.http.delete(url, requestOptions({
          token
        })));
        _this6.properties = _this6.properties.filter(property => property.property_id !== res.data.property_id);
      } catch (error) {
        console.error(error);
      }
    })();
  }
  updateProperty(updated) {
    var _this7 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${propertyUrl}/${updated.property_id}`;
      try {
        const token = _this7.userService.token();
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this7.http.patch(url, updated, requestOptions({
          token
        })));
        // UPDATE CURRENT PROPERTIES
        _this7.properties = _this7.properties.map(property => property.property_id === updated.property_id ? res.data : property);
        _this7.property = res.data;
        return res;
      } catch (error) {
        console.error(error);
        return error.error || error;
      }
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
  }, {
    type: _user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
  }];
};
PropertiesService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], PropertiesService);


/***/ }),

/***/ 79310:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/action-popup/action-popup.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionPopupComponent": () => (/* binding */ ActionPopupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _action_popup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-popup.component.html?ngResource */ 62711);
/* harmony import */ var _action_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-popup.component.scss?ngResource */ 24708);
/* harmony import */ var _action_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_action_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user/user.service */ 1584);







let ActionPopupComponent = class ActionPopupComponent {
  constructor(popupCtrl, userService, router, toastCtrl) {
    this.popupCtrl = popupCtrl;
    this.userService = userService;
    this.router = router;
    this.toastCtrl = toastCtrl;
    this.message = true;
    this.edit = true;
    this.delete = true;
    this.report = true;
  }
  ngOnInit() {}
  close(action = null) {
    const user = this.userService.user;
    if (!user) {
      this.router.navigateByUrl('user/signin');
      this.popupCtrl.dismiss();
      this.toastCtrl.create({
        message: 'Please sign in, to continue',
        duration: 3000,
        color: 'danger'
      }).then(toast => toast.present());
      return;
    }
    this.popupCtrl.dismiss({
      action
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController
  }, {
    type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
  }];
  static #_2 = this.propDecorators = {
    message: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    edit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    delete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    report: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  };
};
ActionPopupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-action-popup',
  template: _action_popup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_action_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ActionPopupComponent);


/***/ }),

/***/ 98094:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/alert-card/alert-card.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertCardComponent": () => (/* binding */ AlertCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _alert_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-card.component.html?ngResource */ 83919);
/* harmony import */ var _alert_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-card.component.scss?ngResource */ 78369);
/* harmony import */ var _alert_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alert_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let AlertCardComponent = class AlertCardComponent {
  constructor() {
    this.color = 'danger';
    this.content = 'Alert Something is wrong';
  }
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
AlertCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-alert-card',
  template: _alert_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_alert_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AlertCardComponent);


/***/ }),

/***/ 23915:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/contact-form/contact-form.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactFormComponent": () => (/* binding */ ContactFormComponent)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _contact_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-form.component.html?ngResource */ 21617);
/* harmony import */ var _contact_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-form.component.scss?ngResource */ 12648);
/* harmony import */ var _contact_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 32124);







let ContactFormComponent = class ContactFormComponent {
  constructor(formBuilder, toastCtrl) {
    this.formBuilder = formBuilder;
    this.toastCtrl = toastCtrl;
    this.error = false;
    this.sent = false;
    this.contactForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10)]]
    });
  }
  ngOnInit() {}
  submit() {
    console.log(this.contactForm.get('email').errors);
    if (this.contactForm.invalid) {
      this.error = true;
      return;
    }
    console.log(this.contactForm.value);
    this.presentToast('Your message have been sent.').then(() => {
      this.error = false;
      this.contactForm.reset();
      this.sent = true;
    });
  }
  presentToast(message, duration = 3000) {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastCtrl.create({
        message,
        duration,
        color: 'success'
      });
      toast.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
  }];
};
ContactFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-contact-form',
  template: _contact_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_contact_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ContactFormComponent);


/***/ }),

/***/ 36468:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/div-horizontal-slide/div-horizontal-slide.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DivHorizontalSlideComponent": () => (/* binding */ DivHorizontalSlideComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _div_horizontal_slide_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./div-horizontal-slide.component.html?ngResource */ 72252);
/* harmony import */ var _div_horizontal_slide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./div-horizontal-slide.component.scss?ngResource */ 94487);
/* harmony import */ var _div_horizontal_slide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_div_horizontal_slide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let DivHorizontalSlideComponent = class DivHorizontalSlideComponent {
  constructor() {
    this.mouseDown = false;
  }
  startDragging(e, flag, el) {
    this.mouseDown = true;
    this.startX = e.pageX - el.offsetLeft;
    this.scrollLeft = el.scrollLeft;
  }
  stopDragging(e, flag) {
    this.mouseDown = false;
  }
  moveEvent(e, el) {
    e.preventDefault();
    if (!this.mouseDown) {
      return;
    }
    // console.log(e);
    const x = e.pageX - el.offsetLeft;
    const scroll = x - this.startX;
    el.scrollLeft = this.scrollLeft - scroll;
  }
};
DivHorizontalSlideComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-div-horizontal-slide',
  template: _div_horizontal_slide_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_div_horizontal_slide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DivHorizontalSlideComponent);


/***/ }),

/***/ 81534:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/enquiry-badge/enquiry-badge.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnquiryBadgeComponent": () => (/* binding */ EnquiryBadgeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _enquiry_badge_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enquiry-badge.component.html?ngResource */ 99672);
/* harmony import */ var _enquiry_badge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enquiry-badge.component.scss?ngResource */ 2429);
/* harmony import */ var _enquiry_badge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_enquiry_badge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _enums_enquiry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/enquiry */ 84212);





let EnquiryBadgeComponent = class EnquiryBadgeComponent {
  constructor() {
    this.topic = 'residential';
  }
  ngOnInit() {}
  topicColor() {
    switch (this.topic) {
      case _enums_enquiry__WEBPACK_IMPORTED_MODULE_2__.EnquiryTopic.info:
        return 'secondary';
      case _enums_enquiry__WEBPACK_IMPORTED_MODULE_2__.EnquiryTopic.sales:
        return 'warning';
      case _enums_enquiry__WEBPACK_IMPORTED_MODULE_2__.EnquiryTopic.schedule:
        return 'danger';
      case _enums_enquiry__WEBPACK_IMPORTED_MODULE_2__.EnquiryTopic.payment:
        return 'success';
      default:
        break;
    }
  }
  topicLabel() {
    switch (this.topic) {
      case _enums_enquiry__WEBPACK_IMPORTED_MODULE_2__.EnquiryTopic.info:
        return 'Enquire Information';
      case _enums_enquiry__WEBPACK_IMPORTED_MODULE_2__.EnquiryTopic.sales:
        return 'About Sales';
      case _enums_enquiry__WEBPACK_IMPORTED_MODULE_2__.EnquiryTopic.schedule:
        return 'About Schedule';
      case _enums_enquiry__WEBPACK_IMPORTED_MODULE_2__.EnquiryTopic.payment:
        return 'About Payment';
      default:
        break;
    }
  }
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    topic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  };
};
EnquiryBadgeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-enquiry-badge',
  template: _enquiry_badge_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_enquiry_badge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EnquiryBadgeComponent);


/***/ }),

/***/ 66526:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 1933);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 45023);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let FooterComponent = class FooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-footer',
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FooterComponent);


/***/ }),

/***/ 96455:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/modal-search/modal-search.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSearchComponent": () => (/* binding */ ModalSearchComponent)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _modal_search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-search.component.html?ngResource */ 15099);
/* harmony import */ var _modal_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-search.component.scss?ngResource */ 44400);
/* harmony import */ var _modal_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 32124);






let ModalSearchComponent = class ModalSearchComponent {
  constructor(modalCtrl) {
    this.modalCtrl = modalCtrl;
    this.title = 'Search';
    this.placeholder = 'Search...';
    this.items = [];
    this.displayProperty = null;
    this.itemsDisplayed = [];
    this.progress = false;
  }
  ngOnInit() {
    this.itemsDisplayed = this.items;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.searchField.setFocus();
    }, 2000);
  }
  close() {
    this.modalCtrl.dismiss();
  }
  selected(data) {
    this.modalCtrl.dismiss(data);
  }
  searching(event) {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const text = event.target.value;
      _this.itemsDisplayed = [];
      _this.progress = true;
      if (_this.searchFunction && text.length > 3) {
        _this.itemsDisplayed = yield _this.searchFunction(text);
        _this.progress = false;
      } else {
        const results = [];
        _this.items.forEach(item => {
          const found = (_this.displayProperty ? item[_this.displayProperty] : item).toLowerCase().indexOf(text.toLowerCase()) > -1;
          if (found) {
            results.push(item);
          }
        });
        setTimeout(() => {
          _this.itemsDisplayed = results;
          _this.progress = false;
        }, 1000);
      }
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
  }];
  static #_2 = this.propDecorators = {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    displayProperty: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    searchFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    searchField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
      args: ['SearchField']
    }]
  };
};
ModalSearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-modal-search',
  template: _modal_search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_modal_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ModalSearchComponent);


/***/ }),

/***/ 28964:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/property-badge/property-badge.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyBadgeComponent": () => (/* binding */ PropertyBadgeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _property_badge_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property-badge.component.html?ngResource */ 85767);
/* harmony import */ var _property_badge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-badge.component.scss?ngResource */ 52544);
/* harmony import */ var _property_badge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_property_badge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _enums_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/property */ 14750);





let PropertyBadgeComponent = class PropertyBadgeComponent {
  constructor() {
    this.type = 'residential';
  }
  ngOnInit() {}
  typeColor() {
    switch (this.type) {
      case _enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.residential:
        return 'danger';
      case _enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.commercial:
        return 'tertiary';
      case _enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.industrial:
        return 'warning';
      case _enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.land:
        return 'success';
      default:
        break;
    }
  }
  typeLabel() {
    switch (this.type) {
      case _enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.residential:
        return 'Residential Real Estate';
      case _enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.commercial:
        return 'Commercial Real Estate';
      case _enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.industrial:
        return 'Industrial Real Estate';
      case _enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.land:
        return 'Land Real Estate';
      default:
        break;
    }
  }
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  };
};
PropertyBadgeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-property-badge',
  template: _property_badge_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_property_badge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PropertyBadgeComponent);


/***/ }),

/***/ 89562:
/*!*******************************************!*\
  !*** ./src/app/shared/data/php-cities.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  city: 'Manila',
  lat: '14.6000',
  lng: '120.9833'
}, {
  city: 'Quezon City',
  lat: '14.6333',
  lng: '121.0333'
}, {
  city: 'Davao',
  lat: '7.0667',
  lng: '125.6000'
}, {
  city: 'Caloocan City',
  lat: '14.6500',
  lng: '120.9667'
}, {
  city: 'Cebu City',
  lat: '10.3000',
  lng: '123.9000'
}, {
  city: 'Zamboanga City',
  lat: '6.9167',
  lng: '122.0833'
}, {
  city: 'Taguig City',
  lat: '14.5167',
  lng: '121.0500'
}, {
  city: 'Antipolo',
  lat: '14.5842',
  lng: '121.1763'
}, {
  city: 'Pasig City',
  lat: '14.5750',
  lng: '121.0833'
}, {
  city: 'Cagayan de Oro',
  lat: '8.4833',
  lng: '124.6500'
}, {
  city: 'City of Parañaque',
  lat: '14.4667',
  lng: '121.0167'
}, {
  city: 'Dasmariñas',
  lat: '14.3294',
  lng: '120.9367'
}, {
  city: 'Valenzuela',
  lat: '14.7000',
  lng: '120.9833'
}, {
  city: 'Bacoor',
  lat: '14.4624',
  lng: '120.9645'
}, {
  city: 'General Santos',
  lat: '6.1167',
  lng: '125.1667'
}, {
  city: 'Las Piñas City',
  lat: '14.4500',
  lng: '120.9833'
}, {
  city: 'Makati City',
  lat: '14.5500',
  lng: '121.0333'
}, {
  city: 'San Jose del Monte',
  lat: '14.8139',
  lng: '121.0453'
}, {
  city: 'Bacolod',
  lat: '10.6765',
  lng: '122.9509'
}, {
  city: 'Muntinlupa City',
  lat: '14.3833',
  lng: '121.0500'
}, {
  city: 'City of Calamba',
  lat: '14.2167',
  lng: '121.1667'
}, {
  city: 'Marikina City',
  lat: '14.6500',
  lng: '121.1000'
}, {
  city: 'Iloilo',
  lat: '10.7167',
  lng: '122.5667'
}, {
  city: 'Pasay City',
  lat: '14.5500',
  lng: '121.0000'
}, {
  city: 'Angeles City',
  lat: '15.1472',
  lng: '120.5847'
}, {
  city: 'Lapu-Lapu City',
  lat: '10.3127',
  lng: '123.9488'
}, {
  city: 'Imus',
  lat: '14.4297',
  lng: '120.9367'
}, {
  city: 'Mandaluyong City',
  lat: '14.5833',
  lng: '121.0333'
}, {
  city: 'Rodriguez',
  lat: '14.7167',
  lng: '121.1167'
}, {
  city: 'Malabon',
  lat: '14.6625',
  lng: '120.9567'
}, {
  city: 'Mandaue City',
  lat: '10.3333',
  lng: '123.9333'
}, {
  city: 'Santa Rosa',
  lat: '14.3167',
  lng: '121.1167'
}, {
  city: 'Baguio City',
  lat: '16.4152',
  lng: '120.5956'
}, {
  city: 'Iligan',
  lat: '8.2333',
  lng: '124.2500'
}, {
  city: 'Tarlac City',
  lat: '15.4802',
  lng: '120.5979'
}, {
  city: 'Butuan',
  lat: '8.9534',
  lng: '125.5288'
}, {
  city: 'Biñan',
  lat: '14.3333',
  lng: '121.0833'
}, {
  city: 'Lipa City',
  lat: '13.9411',
  lng: '121.1622'
}, {
  city: 'Batangas',
  lat: '13.7500',
  lng: '121.0500'
}, {
  city: 'San Pedro',
  lat: '14.3583',
  lng: '121.0583'
}, {
  city: 'Cainta',
  lat: '14.5667',
  lng: '121.1167'
}, {
  city: 'Taytay',
  lat: '14.5692',
  lng: '121.1325'
}, {
  city: 'General Trias',
  lat: '14.3833',
  lng: '120.8833'
}, {
  city: 'Cabuyao',
  lat: '14.2750',
  lng: '121.1250'
}, {
  city: 'San Fernando',
  lat: '15.0333',
  lng: '120.6833'
}, {
  city: 'Cabanatuan City',
  lat: '15.4833',
  lng: '120.9667'
}, {
  city: 'Cotabato',
  lat: '7.2167',
  lng: '124.2500'
}, {
  city: 'Binangonan',
  lat: '14.4514',
  lng: '121.1919'
}, {
  city: 'Lucena',
  lat: '13.9333',
  lng: '121.6167'
}, {
  city: 'San Pablo',
  lat: '14.0700',
  lng: '121.3250'
}, {
  city: 'Tagum',
  lat: '7.4478',
  lng: '125.8078'
}, {
  city: 'Santa Maria',
  lat: '14.8183',
  lng: '120.9563'
}, {
  city: 'Puerto Princesa',
  lat: '9.7500',
  lng: '118.7500'
}, {
  city: 'San Mateo',
  lat: '14.6969',
  lng: '121.1219'
}, {
  city: 'Malolos',
  lat: '14.8433',
  lng: '120.8114'
}, {
  city: 'Mabalacat',
  lat: '15.2167',
  lng: '120.5833'
}, {
  city: 'Navotas',
  lat: '14.6667',
  lng: '120.9417'
}, {
  city: 'Silang',
  lat: '14.2306',
  lng: '120.9750'
}, {
  city: 'Tacloban',
  lat: '11.2444',
  lng: '125.0039'
}, {
  city: 'Olongapo',
  lat: '14.8333',
  lng: '120.2833'
}, {
  city: 'Talisay',
  lat: '10.2500',
  lng: '123.8333'
}, {
  city: 'Tanza',
  lat: '14.3944',
  lng: '120.8531'
}, {
  city: 'Marilao',
  lat: '14.7581',
  lng: '120.9481'
}, {
  city: 'Ormoc',
  lat: '11.0167',
  lng: '124.6167'
}, {
  city: 'Meycauayan',
  lat: '14.7333',
  lng: '120.9500'
}, {
  city: 'Marawi City',
  lat: '8.0000',
  lng: '124.3000'
}, {
  city: 'Pagadian',
  lat: '7.8333',
  lng: '123.4333'
}, {
  city: 'Legazpi City',
  lat: '13.1333',
  lng: '123.7333'
}, {
  city: 'Naga City',
  lat: '13.6167',
  lng: '123.1667'
}, {
  city: 'Valencia',
  lat: '7.9000',
  lng: '125.0833'
}, {
  city: 'San Carlos City',
  lat: '15.9281',
  lng: '120.3489'
}, {
  city: 'Panabo',
  lat: '7.3000',
  lng: '125.6833'
}, {
  city: 'Calbayog City',
  lat: '12.0667',
  lng: '124.6000'
}, {
  city: 'Kabankalan',
  lat: '9.9833',
  lng: '122.8167'
}, {
  city: 'Santo Tomas',
  lat: '14.0833',
  lng: '121.1833'
}, {
  city: 'Koronadal',
  lat: '6.5000',
  lng: '124.8500'
}, {
  city: 'Malaybalay',
  lat: '8.1575',
  lng: '125.1278'
}, {
  city: 'Tanauan',
  lat: '14.0833',
  lng: '121.1500'
}, {
  city: 'Dagupan City',
  lat: '16.0333',
  lng: '120.3333'
}, {
  city: 'Bago',
  lat: '10.5388',
  lng: '122.8384'
}, {
  city: 'Toledo',
  lat: '10.3833',
  lng: '123.6500'
}, {
  city: 'Digos',
  lat: '6.7500',
  lng: '125.3500'
}, {
  city: 'Sorsogon',
  lat: '12.9667',
  lng: '124.0000'
}, {
  city: 'Roxas City',
  lat: '11.5833',
  lng: '122.7500'
}, {
  city: 'Lubao',
  lat: '14.9333',
  lng: '120.6000'
}, {
  city: 'Trece Martires City',
  lat: '14.2833',
  lng: '120.8667'
}, {
  city: 'General Mariano Alvarez',
  lat: '14.3000',
  lng: '121.0000'
}, {
  city: 'Cadiz',
  lat: '10.9500',
  lng: '123.3000'
}, {
  city: 'Mexico',
  lat: '15.0667',
  lng: '120.7167'
}, {
  city: 'Pikit',
  lat: '7.0500',
  lng: '124.6667'
}, {
  city: 'Concepcion',
  lat: '15.3249',
  lng: '120.6554'
}, {
  city: 'Surigao',
  lat: '9.7833',
  lng: '125.4833'
}, {
  city: 'San Miguel',
  lat: '15.1458',
  lng: '120.9783'
}, {
  city: 'Tuguegarao',
  lat: '17.6167',
  lng: '121.7167'
}, {
  city: 'Polomolok',
  lat: '6.2167',
  lng: '125.0667'
}, {
  city: 'Midsayap',
  lat: '7.1917',
  lng: '124.5333'
}, {
  city: 'Baliuag',
  lat: '14.9500',
  lng: '120.9000'
}, {
  city: 'Sariaya',
  lat: '13.9667',
  lng: '121.5333'
}, {
  city: 'Sagay',
  lat: '10.9000',
  lng: '123.4167'
}, {
  city: 'Ilagan',
  lat: '17.1333',
  lng: '121.8833'
}, {
  city: 'San Jose',
  lat: '12.3528',
  lng: '121.0676'
}, {
  city: 'Ozamiz City',
  lat: '8.1500',
  lng: '123.8500'
}, {
  city: 'Mati',
  lat: '6.9500',
  lng: '126.2333'
}, {
  city: 'Capas',
  lat: '15.3312',
  lng: '120.5898'
}, {
  city: 'Kidapawan',
  lat: '7.0083',
  lng: '125.0894'
}, {
  city: 'San Jose',
  lat: '15.7833',
  lng: '121.0000'
}, {
  city: 'Danao',
  lat: '10.5333',
  lng: '123.9333'
}, {
  city: 'Santiago',
  lat: '16.6833',
  lng: '121.5500'
}, {
  city: 'Nasugbu',
  lat: '14.0667',
  lng: '120.6333'
}, {
  city: 'Calapan',
  lat: '13.3667',
  lng: '121.2000'
}, {
  city: 'Tabaco',
  lat: '13.3500',
  lng: '123.7333'
}, {
  city: 'Arayat',
  lat: '15.1493',
  lng: '120.7692'
}, {
  city: 'Urdaneta',
  lat: '15.9761',
  lng: '120.5711'
}, {
  city: 'San Carlos',
  lat: '10.4929',
  lng: '123.4095'
}, {
  city: 'Minglanilla',
  lat: '10.2450',
  lng: '123.7964'
}, {
  city: 'Consolacion',
  lat: '10.4000',
  lng: '123.9500'
}, {
  city: 'Dumaguete City',
  lat: '9.3103',
  lng: '123.3081'
}, {
  city: 'Dipolog',
  lat: '8.5667',
  lng: '123.3333'
}, {
  city: 'Malasiqui',
  lat: '15.9167',
  lng: '120.4167'
}, {
  city: 'Hagonoy',
  lat: '14.8333',
  lng: '120.7333'
}, {
  city: 'Calabayan',
  lat: '16.7667',
  lng: '121.7833'
}, {
  city: 'La Trinidad',
  lat: '16.4621',
  lng: '120.5877'
}, {
  city: 'Mariveles',
  lat: '14.4333',
  lng: '120.4833'
}, {
  city: 'Silay',
  lat: '10.8000',
  lng: '122.9667'
}, {
  city: 'Daraga',
  lat: '13.1619',
  lng: '123.6939'
}, {
  city: 'Jolo',
  lat: '6.0500',
  lng: '121.0000'
}, {
  city: 'Floridablanca',
  lat: '14.9333',
  lng: '120.5000'
}, {
  city: 'Talavera',
  lat: '15.5839',
  lng: '120.9189'
}, {
  city: 'Gingoog',
  lat: '8.8167',
  lng: '125.1000'
}, {
  city: 'Porac',
  lat: '15.0719',
  lng: '120.5419'
}, {
  city: 'San Juan',
  lat: '14.6000',
  lng: '121.0333'
}, {
  city: 'San Fernando',
  lat: '16.6167',
  lng: '120.3167'
}, {
  city: 'Bocaue',
  lat: '14.8000',
  lng: '120.9333'
}, {
  city: 'Carcar',
  lat: '10.1167',
  lng: '123.6333'
}, {
  city: 'Poblacion',
  lat: '10.4167',
  lng: '123.9667'
}, {
  city: 'Santo Tomas',
  lat: '7.5333',
  lng: '125.6167'
}, {
  city: 'Guimba',
  lat: '15.6581',
  lng: '120.7689'
}, {
  city: 'Glan',
  lat: '5.8167',
  lng: '125.2000'
}, {
  city: 'Bayawan',
  lat: '9.3667',
  lng: '122.8000'
}, {
  city: 'Tanay',
  lat: '14.4972',
  lng: '121.2864'
}, {
  city: 'Malita',
  lat: '6.4000',
  lng: '125.6000'
}, {
  city: 'Santa Cruz',
  lat: '14.2833',
  lng: '121.4167'
}, {
  city: 'Candelaria',
  lat: '13.9311',
  lng: '121.4233'
}, {
  city: 'Guagua',
  lat: '14.9667',
  lng: '120.6333'
}, {
  city: 'Rosario',
  lat: '13.8460',
  lng: '121.2060'
}, {
  city: 'Naga',
  lat: '10.2167',
  lng: '123.7500'
}, {
  city: 'Angono',
  lat: '14.5234',
  lng: '121.1536'
}, {
  city: 'Magalang',
  lat: '15.2167',
  lng: '120.6667'
}, {
  city: 'City of Isabela',
  lat: '6.7000',
  lng: '121.9667'
}, {
  city: 'Los Baños',
  lat: '14.1667',
  lng: '121.2167'
}, {
  city: 'Iriga City',
  lat: '13.4167',
  lng: '123.4167'
}, {
  city: 'Candaba',
  lat: '15.0933',
  lng: '120.8283'
}, {
  city: 'Naic',
  lat: '14.3167',
  lng: '120.7667'
}, {
  city: 'Ligao',
  lat: '13.2167',
  lng: '123.5167'
}, {
  city: 'Norzagaray',
  lat: '14.9167',
  lng: '121.0500'
}, {
  city: 'Laoag',
  lat: '18.1951',
  lng: '120.5918'
}, {
  city: 'Rosario',
  lat: '14.4167',
  lng: '120.8500'
}, {
  city: 'Tabuk',
  lat: '17.4500',
  lng: '121.4583'
}, {
  city: 'Gapan',
  lat: '15.3075',
  lng: '120.9453'
}, {
  city: 'Baybay',
  lat: '10.6833',
  lng: '124.8000'
}, {
  city: 'Calumpit',
  lat: '14.9167',
  lng: '120.7667'
}, {
  city: 'Libmanan',
  lat: '13.7000',
  lng: '123.0667'
}, {
  city: 'San Juan',
  lat: '13.8260',
  lng: '121.3960'
}, {
  city: 'Apalit',
  lat: '14.9496',
  lng: '120.7587'
}, {
  city: 'Plaridel',
  lat: '14.8869',
  lng: '120.8569'
}, {
  city: 'Himamaylan',
  lat: '10.1000',
  lng: '122.8667'
}, {
  city: 'Dinalupihan',
  lat: '14.8833',
  lng: '120.4667'
}, {
  city: 'Mangaldan',
  lat: '16.0700',
  lng: '120.4025'
}, {
  city: 'Tagbilaran City',
  lat: '9.6500',
  lng: '123.8500'
}, {
  city: 'Daet',
  lat: '14.1167',
  lng: '122.9500'
}, {
  city: 'Subic',
  lat: '14.9000',
  lng: '120.2333'
}, {
  city: 'San Ildefonso',
  lat: '15.0789',
  lng: '120.9419'
}, {
  city: 'Samal',
  lat: '7.0500',
  lng: '125.7333'
}, {
  city: 'Quezon',
  lat: '7.7333',
  lng: '125.1000'
}, {
  city: 'Catbalogan',
  lat: '11.7833',
  lng: '124.8833'
}, {
  city: 'Maluñgun',
  lat: '6.2667',
  lng: '125.2833'
}, {
  city: 'Lingayen',
  lat: '16.0167',
  lng: '120.2333'
}, {
  city: 'Bayugan',
  lat: '8.7143',
  lng: '125.7481'
}, {
  city: 'Naujan',
  lat: '13.3233',
  lng: '121.3028'
}, {
  city: 'Cavite City',
  lat: '14.4833',
  lng: '120.9000'
}, {
  city: 'Talisay',
  lat: '10.7333',
  lng: '122.9667'
}, {
  city: 'Cawayan',
  lat: '9.9667',
  lng: '122.6167'
}, {
  city: 'Maramag',
  lat: '7.7667',
  lng: '125.0000'
}, {
  city: 'Bongao',
  lat: '5.0292',
  lng: '119.7731'
}, {
  city: 'Manolo Fortich',
  lat: '8.3697',
  lng: '124.8644'
}, {
  city: 'Bulan',
  lat: '12.6714',
  lng: '123.8750'
}, {
  city: 'Tayabas',
  lat: '14.0167',
  lng: '121.5833'
}, {
  city: 'Guiguinto',
  lat: '14.8333',
  lng: '120.8833'
}, {
  city: 'Tiaong',
  lat: '13.9500',
  lng: '121.3167'
}, {
  city: 'Sindangan',
  lat: '8.2333',
  lng: '123.0000'
}, {
  city: 'Tacurong',
  lat: '6.6833',
  lng: '124.6667'
}, {
  city: 'Carmona',
  lat: '14.3167',
  lng: '121.0500'
}, {
  city: 'Pulilan',
  lat: '14.9020',
  lng: '120.8490'
}, {
  city: 'Balanga',
  lat: '14.6833',
  lng: '120.5333'
}, {
  city: 'Guihulñgan',
  lat: '10.1167',
  lng: '123.2667'
}, {
  city: 'Carmen',
  lat: '7.2000',
  lng: '124.7833'
}, {
  city: 'Masbate',
  lat: '12.3667',
  lng: '123.6167'
}, {
  city: 'Sultan Kudarat',
  lat: '7.2333',
  lng: '124.2500'
}, {
  city: 'Lopez',
  lat: '13.8840',
  lng: '122.2604'
}, {
  city: 'Calasiao',
  lat: '16.0167',
  lng: '120.3667'
}, {
  city: 'M’lang',
  lat: '6.9500',
  lng: '124.8833'
}, {
  city: 'Monkayo',
  lat: '7.8167',
  lng: '126.0500'
}, {
  city: 'San Rafael',
  lat: '14.9500',
  lng: '120.9667'
}, {
  city: 'Bislig',
  lat: '8.1833',
  lng: '126.3500'
}, {
  city: 'Escalante',
  lat: '10.8333',
  lng: '123.5000'
}, {
  city: 'Catarman',
  lat: '12.4500',
  lng: '124.6500'
}, {
  city: 'Lemery',
  lat: '13.9167',
  lng: '120.8833'
}, {
  city: 'Paniqui',
  lat: '15.6667',
  lng: '120.5833'
}, {
  city: 'Bauan',
  lat: '13.7917',
  lng: '121.0085'
}, {
  city: 'Santa Cruz',
  lat: '6.8333',
  lng: '125.4167'
}, {
  city: 'Balayan',
  lat: '13.9333',
  lng: '120.7333'
}, {
  city: 'Isulan',
  lat: '6.6333',
  lng: '124.6000'
}, {
  city: 'Palimbang',
  lat: '6.2167',
  lng: '124.2000'
}, {
  city: 'Alaminos',
  lat: '16.1553',
  lng: '119.9808'
}, {
  city: 'Pili',
  lat: '13.5833',
  lng: '123.3000'
}, {
  city: 'Parang',
  lat: '7.3744',
  lng: '124.2686'
}, {
  city: 'Kabacan',
  lat: '7.1167',
  lng: '124.8167'
}, {
  city: 'Oton',
  lat: '10.6931',
  lng: '122.4736'
}, {
  city: 'Pandi',
  lat: '14.8667',
  lng: '120.9500'
}, {
  city: 'Salaman',
  lat: '6.6333',
  lng: '124.0667'
}, {
  city: 'Polangui',
  lat: '13.2922',
  lng: '123.4856'
}, {
  city: 'Victorias',
  lat: '10.9000',
  lng: '123.0833'
}, {
  city: 'Gerona',
  lat: '15.6000',
  lng: '120.6000'
}, {
  city: 'Compostela',
  lat: '7.6667',
  lng: '126.0833'
}, {
  city: 'Balamban',
  lat: '10.4667',
  lng: '123.7833'
}, {
  city: 'Pinamalayan',
  lat: '13.0000',
  lng: '121.4167'
}, {
  city: 'Aroroy',
  lat: '12.5125',
  lng: '123.3989'
}, {
  city: 'Pongotan',
  lat: '7.1500',
  lng: '125.9500'
}, {
  city: 'Hinigaran',
  lat: '10.2667',
  lng: '122.8500'
}, {
  city: 'Maasin',
  lat: '10.1333',
  lng: '124.8500'
}, {
  city: 'Surallah',
  lat: '6.3667',
  lng: '124.7333'
}, {
  city: 'Daanbantayan',
  lat: '11.3333',
  lng: '124.0167'
}, {
  city: 'Banga',
  lat: '6.3000',
  lng: '124.7833'
}, {
  city: 'Nabua',
  lat: '13.4083',
  lng: '123.3750'
}, {
  city: 'Makilala',
  lat: '6.9667',
  lng: '125.0833'
}, {
  city: 'Kawit',
  lat: '14.4333',
  lng: '120.9000'
}, {
  city: 'Camiling',
  lat: '15.7000',
  lng: '120.4167'
}, {
  city: 'Sablayan',
  lat: '12.8370',
  lng: '120.7829'
}, {
  city: 'Binmaley',
  lat: '16.0323',
  lng: '120.2690'
}, {
  city: 'Calabanga',
  lat: '13.7167',
  lng: '123.2333'
}, {
  city: 'San Fabian',
  lat: '16.1500',
  lng: '120.4500'
}, {
  city: 'Baggao',
  lat: '17.8894',
  lng: '121.8709'
}, {
  city: 'Prosperidad',
  lat: '8.6057',
  lng: '125.9153'
}, {
  city: 'Solana',
  lat: '17.6500',
  lng: '121.6833'
}, {
  city: 'Dapitan',
  lat: '8.6549',
  lng: '123.4243'
}, {
  city: 'Guinobatan',
  lat: '13.1833',
  lng: '123.6000'
}, {
  city: 'Nabunturan',
  lat: '7.6078',
  lng: '125.9664'
}, {
  city: 'Bolinao',
  lat: '16.3333',
  lng: '119.8833'
}, {
  city: 'Santa Barbara',
  lat: '16.0031',
  lng: '120.4008'
}, {
  city: 'Calaca',
  lat: '13.9667',
  lng: '120.8000'
}, {
  city: 'Science City of Muñoz',
  lat: '15.7167',
  lng: '120.9000'
}, {
  city: 'Murcia',
  lat: '10.6000',
  lng: '123.0333'
}, {
  city: 'Maco',
  lat: '7.3619',
  lng: '125.8553'
}, {
  city: 'Indanan',
  lat: '6.0000',
  lng: '120.9667'
}, {
  city: 'Calatrava',
  lat: '10.6000',
  lng: '123.4833'
}, {
  city: 'Kalibo',
  lat: '11.7000',
  lng: '122.3667'
}, {
  city: 'Passi',
  lat: '11.1000',
  lng: '122.6333'
}, {
  city: 'Tanjay',
  lat: '9.5167',
  lng: '123.1583'
}, {
  city: 'Calauan',
  lat: '14.1500',
  lng: '121.3167'
}, {
  city: 'Alabel',
  lat: '6.1023',
  lng: '125.2868'
}, {
  city: 'Talipao',
  lat: '5.9760',
  lng: '121.1087'
}, {
  city: 'Matalam',
  lat: '7.0833',
  lng: '124.9000'
}, {
  city: 'Echague',
  lat: '16.7000',
  lng: '121.6500'
}, {
  city: 'Bantayan',
  lat: '11.2000',
  lng: '123.7333'
}, {
  city: 'Cabiao',
  lat: '15.2500',
  lng: '120.8500'
}, {
  city: 'Mabinay',
  lat: '9.7333',
  lng: '122.9167'
}, {
  city: 'Bogo',
  lat: '11.0167',
  lng: '124.0000'
}, {
  city: 'San Antonio',
  lat: '15.3833',
  lng: '120.8000'
}, {
  city: 'Siaton',
  lat: '9.0667',
  lng: '123.0333'
}, {
  city: 'Buhi',
  lat: '13.4333',
  lng: '123.5167'
}, {
  city: 'Poblacion',
  lat: '6.8000',
  lng: '124.6333'
}, {
  city: 'San Jose',
  lat: '13.8772',
  lng: '121.1050'
}, {
  city: 'Malapatan',
  lat: '5.9667',
  lng: '125.2833'
}, {
  city: 'Bulacan',
  lat: '14.7928',
  lng: '120.8789'
}, {
  city: 'Kapalong',
  lat: '7.5854',
  lng: '125.7052'
}, {
  city: 'Jose Abad Santos',
  lat: '5.9167',
  lng: '125.6500'
}, {
  city: 'Bais',
  lat: '9.5907',
  lng: '123.1213'
}, {
  city: 'Macabebe',
  lat: '14.9081',
  lng: '120.7156'
}, {
  city: 'Santa Catalina',
  lat: '9.3331',
  lng: '122.8658'
}, {
  city: 'Batarasa',
  lat: '8.6667',
  lng: '117.6167'
}, {
  city: 'Libon',
  lat: '13.3000',
  lng: '123.4333'
}, {
  city: 'Taytay',
  lat: '10.8167',
  lng: '119.5167'
}, {
  city: 'Pototan',
  lat: '10.9500',
  lng: '122.6333'
}, {
  city: 'Bauang',
  lat: '16.5333',
  lng: '120.3333'
}, {
  city: 'Pagbilao',
  lat: '13.9720',
  lng: '121.6870'
}, {
  city: 'Robles',
  lat: '10.3500',
  lng: '123.0667'
}, {
  city: 'Lamitan',
  lat: '6.6500',
  lng: '122.1333'
}, {
  city: 'Carmen',
  lat: '7.3606',
  lng: '125.7064'
}, {
  city: 'Ipil',
  lat: '7.7833',
  lng: '122.5833'
}, {
  city: 'Pilar',
  lat: '12.9333',
  lng: '123.6833'
}, {
  city: 'San Francisco',
  lat: '8.5050',
  lng: '125.9771'
}, {
  city: 'Balagtas',
  lat: '14.8145',
  lng: '120.9085'
}, {
  city: 'Gumaca',
  lat: '13.9210',
  lng: '122.1002'
}, {
  city: 'Barili',
  lat: '10.1167',
  lng: '123.5333'
}, {
  city: 'Ubay',
  lat: '10.0560',
  lng: '124.4729'
}, {
  city: 'Virac',
  lat: '13.5833',
  lng: '124.2333'
}, {
  city: 'Lambunao',
  lat: '11.0500',
  lng: '122.4833'
}, {
  city: 'Cabadbaran',
  lat: '9.1228',
  lng: '125.5346'
}, {
  city: 'Umingan',
  lat: '15.9000',
  lng: '120.8000'
}, {
  city: 'Mangatarem',
  lat: '15.7874',
  lng: '120.2921'
}, {
  city: 'Narra',
  lat: '9.2833',
  lng: '118.4167'
}, {
  city: 'Jaen',
  lat: '15.3333',
  lng: '120.9000'
}, {
  city: 'Tagoloan',
  lat: '8.5333',
  lng: '124.7500'
}, {
  city: 'Calauag',
  lat: '13.9575',
  lng: '122.2875'
}, {
  city: 'Argao',
  lat: '9.8833',
  lng: '123.6000'
}, {
  city: 'Bongabong',
  lat: '12.7167',
  lng: '121.3667'
}, {
  city: 'Talakag',
  lat: '8.2336',
  lng: '124.6003'
}, {
  city: 'Alicia',
  lat: '16.7787',
  lng: '121.6972'
}, {
  city: 'Tagaytay',
  lat: '14.1000',
  lng: '120.9333'
}, {
  city: 'Catanauan',
  lat: '13.5917',
  lng: '122.3250'
}, {
  city: 'Sipalay',
  lat: '9.7500',
  lng: '122.4000'
}, {
  city: 'Tupi',
  lat: '6.3333',
  lng: '124.9500'
}, {
  city: 'Pozorrubio',
  lat: '16.1167',
  lng: '120.5500'
}, {
  city: 'Manaoag',
  lat: '16.0439',
  lng: '120.4856'
}, {
  city: 'Santa Rosa',
  lat: '15.4239',
  lng: '120.9389'
}, {
  city: 'Bamban',
  lat: '15.6500',
  lng: '120.2500'
}, {
  city: 'Bula',
  lat: '13.4667',
  lng: '123.2833'
}, {
  city: 'Baras',
  lat: '14.5167',
  lng: '121.2667'
}, {
  city: 'Borongan',
  lat: '11.6000',
  lng: '125.4333'
}, {
  city: 'Dumangas',
  lat: '10.8333',
  lng: '122.7167'
}, {
  city: 'Infanta',
  lat: '14.7425',
  lng: '121.6494'
}, {
  city: 'Bacacay',
  lat: '13.2925',
  lng: '123.7917'
}, {
  city: 'Carles',
  lat: '11.5667',
  lng: '123.1333'
}, {
  city: 'Limay',
  lat: '14.5619',
  lng: '120.5983'
}, {
  city: 'Oas',
  lat: '13.2589',
  lng: '123.4953'
}, {
  city: 'Lala',
  lat: '7.9667',
  lng: '123.7500'
}, {
  city: 'Siasi',
  lat: '5.5462',
  lng: '120.8145'
}, {
  city: 'Tumauini',
  lat: '17.2667',
  lng: '121.8000'
}, {
  city: 'Tinambac',
  lat: '13.8167',
  lng: '123.3333'
}, {
  city: 'Miagao',
  lat: '10.6442',
  lng: '122.2352'
}, {
  city: 'Dalaguete',
  lat: '9.7612',
  lng: '123.5349'
}, {
  city: 'Bugallon',
  lat: '15.9167',
  lng: '120.1833'
}, {
  city: 'Binalbagan',
  lat: '10.2000',
  lng: '122.8667'
}, {
  city: 'Bagumbayan',
  lat: '6.5339',
  lng: '124.5633'
}, {
  city: 'Balingasag',
  lat: '8.7500',
  lng: '124.7833'
}, {
  city: 'Cawayan',
  lat: '12.0333',
  lng: '123.6833'
}, {
  city: 'Talibon',
  lat: '10.1167',
  lng: '124.2833'
}, {
  city: 'Don Carlos',
  lat: '7.6833',
  lng: '125.0000'
}, {
  city: 'Orani',
  lat: '14.8000',
  lng: '120.5333'
}, {
  city: 'Camalig',
  lat: '13.1500',
  lng: '123.6000'
}, {
  city: 'Pigcawayan',
  lat: '7.2833',
  lng: '124.4333'
}, {
  city: 'Brookes Point',
  lat: '8.7833',
  lng: '117.8333'
}, {
  city: 'San Fernando',
  lat: '10.1667',
  lng: '123.7000'
}, {
  city: 'Esperanza',
  lat: '6.7167',
  lng: '124.5167'
}, {
  city: 'Pinamungahan',
  lat: '10.2667',
  lng: '123.5833'
}, {
  city: 'Hermosa',
  lat: '14.8333',
  lng: '120.5000'
}, {
  city: 'Lupon',
  lat: '6.8981',
  lng: '126.0096'
}, {
  city: 'Aparri',
  lat: '18.3550',
  lng: '121.6419'
}, {
  city: 'Indang',
  lat: '14.2000',
  lng: '120.8833'
}, {
  city: 'San Pascual',
  lat: '13.8000',
  lng: '121.0333'
}, {
  city: 'Roxas',
  lat: '10.3333',
  lng: '119.3333'
}, {
  city: 'San Leonardo',
  lat: '15.3667',
  lng: '120.9667'
}, {
  city: 'Cuyapo',
  lat: '15.7833',
  lng: '120.6667'
}, {
  city: 'Sipocot',
  lat: '13.7667',
  lng: '122.9833'
}, {
  city: 'Castillejos',
  lat: '14.9333',
  lng: '120.2000'
}, {
  city: 'Pililla',
  lat: '14.4833',
  lng: '121.3000'
}, {
  city: 'Alamada',
  lat: '7.3868',
  lng: '124.5534'
}, {
  city: 'San Mateo',
  lat: '16.8833',
  lng: '121.5833'
}, {
  city: 'La Carlota',
  lat: '10.4167',
  lng: '122.9167'
}, {
  city: 'Bongabon',
  lat: '15.6321',
  lng: '121.1448'
}, {
  city: 'Rizal',
  lat: '15.6833',
  lng: '121.1667'
}, {
  city: 'La Paz',
  lat: '15.4431',
  lng: '120.7289'
}, {
  city: 'Janiuay',
  lat: '10.9500',
  lng: '122.5000'
}, {
  city: 'Tuburan',
  lat: '10.7333',
  lng: '123.8333'
}, {
  city: 'Pateros',
  lat: '14.5417',
  lng: '121.0667'
}, {
  city: 'Mauban',
  lat: '14.1911',
  lng: '121.7308'
}, {
  city: 'Victoria',
  lat: '15.5781',
  lng: '120.6819'
}, {
  city: 'Agoo',
  lat: '16.3220',
  lng: '120.3647'
}, {
  city: 'Aliaga',
  lat: '15.4988',
  lng: '120.8410'
}, {
  city: 'Atimonan',
  lat: '14.0036',
  lng: '121.9199'
}, {
  city: 'Hilongos',
  lat: '10.3667',
  lng: '124.7500'
}, {
  city: 'Goa',
  lat: '13.7000',
  lng: '123.5000'
}, {
  city: 'Rosales',
  lat: '15.8944',
  lng: '120.6328'
}, {
  city: 'Nagcarlan',
  lat: '14.1364',
  lng: '121.4165'
}, {
  city: 'Lutayan',
  lat: '6.6000',
  lng: '124.8500'
}, {
  city: 'Tangub',
  lat: '8.0667',
  lng: '123.7500'
}, {
  city: 'Saravia',
  lat: '10.8833',
  lng: '122.9667'
}, {
  city: 'Kapatagan',
  lat: '7.9000',
  lng: '123.7667'
}, {
  city: 'Tigbauan',
  lat: '10.6747',
  lng: '122.3776'
}, {
  city: 'San Jose',
  lat: '10.7500',
  lng: '121.9500'
}, {
  city: 'Villasis',
  lat: '15.9000',
  lng: '120.5833'
}, {
  city: 'Patikul',
  lat: '6.0667',
  lng: '121.1000'
}, {
  city: 'Parang',
  lat: '5.9167',
  lng: '120.9167'
}, {
  city: 'Isabela',
  lat: '10.2000',
  lng: '122.9833'
}, {
  city: 'Bay',
  lat: '14.1833',
  lng: '121.2833'
}, {
  city: 'Lantapan',
  lat: '8.0005',
  lng: '125.0235'
}, {
  city: 'Roxas',
  lat: '17.1167',
  lng: '121.6167'
}, {
  city: 'Buenavista',
  lat: '8.9744',
  lng: '125.4090'
}, {
  city: 'Tuao',
  lat: '17.7333',
  lng: '121.4500'
}, {
  city: 'Bayombong',
  lat: '16.4833',
  lng: '121.1500'
}, {
  city: 'Opol',
  lat: '8.5167',
  lng: '124.5667'
}, {
  city: 'Aurora',
  lat: '13.3500',
  lng: '122.5167'
}, {
  city: 'Laoang',
  lat: '12.5667',
  lng: '125.0167'
}, {
  city: 'Kiamba',
  lat: '5.9833',
  lng: '124.6167'
}, {
  city: 'Quezon',
  lat: '9.2333',
  lng: '118.0333'
}, {
  city: 'Candon',
  lat: '17.2000',
  lng: '120.4500'
}, {
  city: 'Bansalan',
  lat: '6.7833',
  lng: '125.2167'
}, {
  city: 'Calinog',
  lat: '11.1333',
  lng: '122.5000'
}, {
  city: 'Sibalom',
  lat: '10.7833',
  lng: '122.0167'
}, {
  city: 'Santa Barbara',
  lat: '10.8231',
  lng: '122.5344'
}, {
  city: 'Itogon',
  lat: '16.3667',
  lng: '120.6833'
}, {
  city: 'Poblacion',
  lat: '10.2500',
  lng: '123.9500'
}, {
  city: 'Jose Pañganiban',
  lat: '14.3000',
  lng: '122.7000'
}, {
  city: 'Abuyog',
  lat: '10.7458',
  lng: '125.0122'
}, {
  city: 'Gubat',
  lat: '12.9167',
  lng: '124.1167'
}, {
  city: 'Solano',
  lat: '16.5239',
  lng: '121.1919'
}, {
  city: 'Maasin',
  lat: '5.8667',
  lng: '125.0000'
}, {
  city: 'Sibulan',
  lat: '9.3500',
  lng: '123.2833'
}, {
  city: 'Cambanugoy',
  lat: '7.5386',
  lng: '125.7508'
}, {
  city: 'Angat',
  lat: '14.9281',
  lng: '121.0293'
}, {
  city: 'Obando',
  lat: '14.7000',
  lng: '120.9167'
}, {
  city: 'Paracale',
  lat: '14.2833',
  lng: '122.7833'
}, {
  city: 'Baao',
  lat: '13.4535',
  lng: '123.3654'
}, {
  city: 'Cabatuan',
  lat: '10.8833',
  lng: '122.4833'
}, {
  city: 'Mamungan',
  lat: '8.1167',
  lng: '124.2167'
}, {
  city: 'Ragay',
  lat: '13.8183',
  lng: '122.7923'
}, {
  city: 'Santa Cruz',
  lat: '15.7667',
  lng: '119.9167'
}, {
  city: 'Morong',
  lat: '14.5119',
  lng: '121.2389'
}, {
  city: 'Palompon',
  lat: '11.0500',
  lng: '124.3833'
}, {
  city: 'Santo Domingo',
  lat: '15.5833',
  lng: '120.8667'
}, {
  city: 'Castilla',
  lat: '12.9486',
  lng: '123.8822'
}, {
  city: 'Moncada',
  lat: '15.7333',
  lng: '120.5667'
}, {
  city: 'Teresa',
  lat: '14.5586',
  lng: '121.2083'
}, {
  city: 'Botolan',
  lat: '15.2896',
  lng: '120.0245'
}, {
  city: 'San Remigio',
  lat: '11.0000',
  lng: '123.9500'
}, {
  city: 'Milagros',
  lat: '12.2333',
  lng: '123.5000'
}, {
  city: 'Ilog',
  lat: '10.0333',
  lng: '122.7667'
}, {
  city: 'Asingan',
  lat: '16.0023',
  lng: '120.6695'
}, {
  city: 'Masantol',
  lat: '14.9000',
  lng: '120.7167'
}, {
  city: 'Jinoba-an',
  lat: '9.6018',
  lng: '122.4668'
}, {
  city: 'Matanao',
  lat: '6.7500',
  lng: '125.2333'
}, {
  city: 'Irosin',
  lat: '12.7000',
  lng: '124.0333'
}, {
  city: 'Gattaran',
  lat: '18.0667',
  lng: '121.6500'
}, {
  city: 'Kananya',
  lat: '11.1833',
  lng: '124.5667'
}, {
  city: 'Tulunan',
  lat: '6.8333',
  lng: '124.8833'
}, {
  city: 'Calatagan',
  lat: '13.8322',
  lng: '120.6322'
}, {
  city: 'Santa Cruz',
  lat: '13.4833',
  lng: '122.0333'
}, {
  city: 'Tandag',
  lat: '9.0667',
  lng: '126.1833'
}, {
  city: 'Taal',
  lat: '13.8833',
  lng: '120.9333'
}, {
  city: 'Malvar',
  lat: '14.0417',
  lng: '121.1583'
}, {
  city: 'Baganga',
  lat: '7.5752',
  lng: '126.5585'
}, {
  city: 'Uson',
  lat: '12.2253',
  lng: '123.7834'
}, {
  city: 'San Fernando',
  lat: '7.9167',
  lng: '125.3333'
}, {
  city: 'Orion',
  lat: '14.6206',
  lng: '120.5817'
}, {
  city: 'Placer',
  lat: '11.8667',
  lng: '123.9167'
}, {
  city: 'Pavia',
  lat: '10.7750',
  lng: '122.5417'
}, {
  city: 'Basey',
  lat: '11.2817',
  lng: '125.0683'
}, {
  city: 'Lagonoy',
  lat: '13.7333',
  lng: '123.5167'
}, {
  city: 'Rosario',
  lat: '16.2333',
  lng: '120.4833'
}, {
  city: 'San Mariano',
  lat: '16.9833',
  lng: '122.0167'
}, {
  city: 'Medellin',
  lat: '11.1286',
  lng: '123.9622'
}, {
  city: 'Tigaon',
  lat: '13.6333',
  lng: '123.5000'
}, {
  city: 'Alangalang',
  lat: '11.2000',
  lng: '124.8500'
}, {
  city: 'Batac',
  lat: '18.0554',
  lng: '120.5649'
}, {
  city: 'San Francisco',
  lat: '10.6500',
  lng: '124.3500'
}, {
  city: 'Santa Ana',
  lat: '15.0939',
  lng: '120.7681'
}, {
  city: 'Sigaboy',
  lat: '6.6500',
  lng: '126.0667'
}, {
  city: 'Tanauan',
  lat: '11.1167',
  lng: '125.0167'
}, {
  city: 'Manapla',
  lat: '10.9580',
  lng: '123.1230'
}, {
  city: 'New Corella',
  lat: '7.5866',
  lng: '125.8237'
}, {
  city: 'Esperanza',
  lat: '8.6760',
  lng: '125.6454'
}, {
  city: 'Boac',
  lat: '13.4500',
  lng: '121.8333'
}, {
  city: 'Naval',
  lat: '11.5833',
  lng: '124.4500'
}, {
  city: 'Binalonan',
  lat: '16.0500',
  lng: '120.6000'
}, {
  city: 'Mansalay',
  lat: '12.5204',
  lng: '121.4385'
}, {
  city: 'Canlaon',
  lat: '10.3833',
  lng: '123.2000'
}, {
  city: 'Jasaan',
  lat: '8.6500',
  lng: '124.7500'
}, {
  city: 'Naguilian',
  lat: '16.5333',
  lng: '120.4000'
}, {
  city: 'Barotac Nuevo',
  lat: '10.9000',
  lng: '122.7000'
}, {
  city: 'San Luis',
  lat: '15.0400',
  lng: '120.7919'
}, {
  city: 'Vigan',
  lat: '17.5747',
  lng: '120.3869'
}, {
  city: 'Magsaysay',
  lat: '6.7667',
  lng: '125.1833'
}, {
  city: 'Santa Maria',
  lat: '6.5500',
  lng: '125.4667'
}, {
  city: 'Upi',
  lat: '7.0289',
  lng: '124.1650'
}, {
  city: 'Bambang',
  lat: '16.3825',
  lng: '121.1100'
}, {
  city: 'Hagonoy',
  lat: '6.6833',
  lng: '125.3000'
}, {
  city: 'Paombong',
  lat: '14.8311',
  lng: '120.7892'
}, {
  city: 'Roxas',
  lat: '12.5833',
  lng: '121.5000'
}, {
  city: 'San Simon',
  lat: '14.9980',
  lng: '120.7800'
}, {
  city: 'Pangantocan',
  lat: '7.8333',
  lng: '124.8333'
}, {
  city: 'Mulanay',
  lat: '13.5222',
  lng: '122.4042'
}, {
  city: 'Tiwi',
  lat: '13.4585',
  lng: '123.6805'
}, {
  city: 'Guiuan',
  lat: '11.0333',
  lng: '125.7333'
}, {
  city: 'Malay',
  lat: '11.9000',
  lng: '121.9167'
}, {
  city: 'Ibaan',
  lat: '13.8176',
  lng: '121.1330'
}, {
  city: 'San Manuel',
  lat: '16.0656',
  lng: '120.6667'
}, {
  city: 'Burauen',
  lat: '10.9833',
  lng: '124.9000'
}, {
  city: 'Ramon',
  lat: '16.7833',
  lng: '121.5333'
}, {
  city: 'Lian',
  lat: '14.0333',
  lng: '120.6500'
}, {
  city: 'Diffun',
  lat: '16.6000',
  lng: '121.4667'
}, {
  city: 'Minalabac',
  lat: '13.5667',
  lng: '123.1833'
}, {
  city: 'Ajuy',
  lat: '11.1725',
  lng: '123.0196'
}, {
  city: 'Bato',
  lat: '13.3561',
  lng: '123.3639'
}, {
  city: 'Molave',
  lat: '8.0833',
  lng: '123.4833'
}, {
  city: 'San Joaquin',
  lat: '10.6000',
  lng: '122.0833'
}, {
  city: 'Pontevedra',
  lat: '10.3667',
  lng: '122.8833'
}, {
  city: 'Alfonso',
  lat: '14.1379',
  lng: '120.8552'
}, {
  city: 'Tagkawayan',
  lat: '13.9667',
  lng: '122.5333'
}, {
  city: 'Coron',
  lat: '12.0000',
  lng: '120.2000'
}, {
  city: 'San Isidro',
  lat: '15.2667',
  lng: '120.9000'
}, {
  city: 'Trento',
  lat: '8.0459',
  lng: '126.0614'
}, {
  city: 'Lucban',
  lat: '14.1133',
  lng: '121.5569'
}, {
  city: 'Carigara',
  lat: '11.3000',
  lng: '124.6833'
}, {
  city: 'Cogan',
  lat: '10.5833',
  lng: '123.9667'
}, {
  city: 'Tapas',
  lat: '11.2667',
  lng: '122.5333'
}, {
  city: 'Dumanjog',
  lat: '10.0500',
  lng: '123.4833'
}, {
  city: 'Mercedes',
  lat: '14.1093',
  lng: '123.0109'
}, {
  city: 'Aurora',
  lat: '7.9484',
  lng: '123.5819'
}, {
  city: 'Iba',
  lat: '15.3333',
  lng: '119.9833'
}, {
  city: 'Buenavista',
  lat: '10.7000',
  lng: '122.6333'
}, {
  city: 'Cataingan',
  lat: '12.0000',
  lng: '123.9833'
}, {
  city: 'Bani',
  lat: '16.1869',
  lng: '119.8592'
}, {
  city: 'Pila',
  lat: '14.2333',
  lng: '121.3667'
}, {
  city: 'Kitaotao',
  lat: '7.6397',
  lng: '125.0089'
}, {
  city: 'El Salvador',
  lat: '8.5667',
  lng: '124.5167'
}, {
  city: 'Cabagan',
  lat: '17.4333',
  lng: '121.7667'
}, {
  city: 'Urbiztondo',
  lat: '15.8227',
  lng: '120.3295'
}, {
  city: 'Buluan',
  lat: '6.7154',
  lng: '124.7854'
}, {
  city: 'Leon',
  lat: '10.7808',
  lng: '122.3894'
}, {
  city: 'Barobo',
  lat: '8.5500',
  lng: '126.2000'
}, {
  city: 'Donsol',
  lat: '12.9167',
  lng: '123.6000'
}, {
  city: 'Titay',
  lat: '7.8682',
  lng: '122.5613'
}, {
  city: 'Ibajay',
  lat: '11.8167',
  lng: '122.1667'
}, {
  city: 'Zaragoza',
  lat: '15.4531',
  lng: '120.7911'
}, {
  city: 'Magpet',
  lat: '7.1167',
  lng: '125.1167'
}, {
  city: 'Kalamansig',
  lat: '6.5667',
  lng: '124.0500'
}, {
  city: 'Pasacao',
  lat: '13.5167',
  lng: '123.0500'
}, {
  city: 'Cardona',
  lat: '14.4861',
  lng: '121.2289'
}, {
  city: 'Claveria',
  lat: '8.6100',
  lng: '124.8947'
}, {
  city: 'Kiblawan',
  lat: '6.6167',
  lng: '125.2167'
}, {
  city: 'Libungan',
  lat: '7.2500',
  lng: '124.5167'
}, {
  city: 'Hamtic',
  lat: '10.7000',
  lng: '121.9833'
}, {
  city: 'Peñablanca',
  lat: '17.6333',
  lng: '121.7833'
}, {
  city: 'Estancia',
  lat: '11.4500',
  lng: '123.1500'
}, {
  city: 'San Narciso',
  lat: '13.5677',
  lng: '122.5667'
}, {
  city: 'Padre Garcia',
  lat: '13.8833',
  lng: '121.2167'
}, {
  city: 'Sibonga',
  lat: '10.0333',
  lng: '123.5667'
}, {
  city: 'Bangued',
  lat: '17.5965',
  lng: '120.6179'
}, {
  city: 'Poblacion',
  lat: '10.4667',
  lng: '123.9667'
}, {
  city: 'General Tinio',
  lat: '15.3500',
  lng: '121.0500'
}, {
  city: 'Amulung',
  lat: '17.8387',
  lng: '121.7235'
}, {
  city: 'Alaminos',
  lat: '14.0635',
  lng: '121.2451'
}, {
  city: 'Impasugong',
  lat: '8.3000',
  lng: '125.0000'
}, {
  city: 'Asturias',
  lat: '10.5679',
  lng: '123.7172'
}, {
  city: 'Bantacan',
  lat: '7.5333',
  lng: '126.1333'
}, {
  city: 'Masinloc',
  lat: '15.5333',
  lng: '119.9500'
}, {
  city: 'Minalin',
  lat: '14.9667',
  lng: '120.6833'
}, {
  city: 'Tuba',
  lat: '16.3167',
  lng: '120.5500'
}, {
  city: 'Caramoan',
  lat: '13.7707',
  lng: '123.8631'
}, {
  city: 'President Roxas',
  lat: '7.1544',
  lng: '125.0558'
}, {
  city: 'Santa Ignacia',
  lat: '15.6167',
  lng: '120.4333'
}, {
  city: 'Sison',
  lat: '16.1667',
  lng: '120.5167'
}, {
  city: 'Dumingag',
  lat: '8.1667',
  lng: '123.3500'
}, {
  city: 'Aringay',
  lat: '16.3982',
  lng: '120.3555'
}, {
  city: 'Dulag',
  lat: '10.9525',
  lng: '125.0317'
}, {
  city: 'Tubod',
  lat: '8.0500',
  lng: '123.8000'
}, {
  city: 'Isabel',
  lat: '10.9333',
  lng: '124.4333'
}, {
  city: 'Siocon',
  lat: '7.7000',
  lng: '122.1333'
}, {
  city: 'Pio Duran',
  lat: '13.0333',
  lng: '123.4500'
}, {
  city: 'Rosario',
  lat: '8.3814',
  lng: '126.0015'
}, {
  city: 'San Pascual',
  lat: '13.1333',
  lng: '122.9833'
}, {
  city: 'Norala',
  lat: '6.5500',
  lng: '124.6667'
}, {
  city: 'Mahayag',
  lat: '8.1333',
  lng: '123.3833'
}, {
  city: 'Pontevedra',
  lat: '11.4833',
  lng: '122.8333'
}, {
  city: 'Albuera',
  lat: '10.9186',
  lng: '124.6923'
}, {
  city: 'Carmen',
  lat: '9.8167',
  lng: '124.2000'
}, {
  city: 'Ayungon',
  lat: '9.8584',
  lng: '123.1468'
}, {
  city: 'Mabini',
  lat: '13.7167',
  lng: '120.9000'
}, {
  city: 'Dumarao',
  lat: '11.2667',
  lng: '122.6833'
}, {
  city: 'Panay',
  lat: '11.5500',
  lng: '122.8000'
}, {
  city: 'Ocampo',
  lat: '13.5594',
  lng: '123.3761'
}, {
  city: 'Tibigan',
  lat: '9.9500',
  lng: '123.9667'
}, {
  city: 'Inabanga',
  lat: '10.0333',
  lng: '124.0667'
}, {
  city: 'Wao',
  lat: '7.6404',
  lng: '124.7257'
}, {
  city: 'Noveleta',
  lat: '14.4333',
  lng: '120.8833'
}, {
  city: 'Barotac Viejo',
  lat: '11.0500',
  lng: '122.8500'
}, {
  city: 'Jones',
  lat: '16.5583',
  lng: '121.7000'
}, {
  city: 'Dauis',
  lat: '9.6167',
  lng: '123.8500'
}, {
  city: 'Katipunan',
  lat: '8.5134',
  lng: '123.2847'
}, {
  city: 'Odiongan',
  lat: '12.4000',
  lng: '122.0000'
}, {
  city: 'Dingle',
  lat: '11.0500',
  lng: '122.6667'
}, {
  city: 'Talisay',
  lat: '14.1000',
  lng: '121.0167'
}, {
  city: 'Malinao',
  lat: '13.4000',
  lng: '123.7000'
}, {
  city: 'Pilar',
  lat: '11.4833',
  lng: '123.0000'
}, {
  city: 'Guinayangan',
  lat: '13.9000',
  lng: '122.4500'
}, {
  city: 'Bunawan',
  lat: '8.1781',
  lng: '125.9935'
}, {
  city: 'Gloria',
  lat: '12.9167',
  lng: '121.4667'
}, {
  city: 'New Washington',
  lat: '11.6500',
  lng: '122.4333'
}, {
  city: 'Sogod',
  lat: '10.3833',
  lng: '124.9833'
}, {
  city: 'Maitum',
  lat: '6.0333',
  lng: '124.4833'
}, {
  city: 'Talagutong',
  lat: '6.2667',
  lng: '125.6667'
}, {
  city: 'Lal-lo',
  lat: '18.2000',
  lng: '121.6667'
}, {
  city: 'Kabasalan',
  lat: '7.7968',
  lng: '122.7627'
}, {
  city: 'Balimbing',
  lat: '5.0728',
  lng: '119.8847'
}, {
  city: 'Narvacan',
  lat: '17.4175',
  lng: '120.4753'
}, {
  city: 'Libona',
  lat: '8.3333',
  lng: '124.7333'
}, {
  city: 'Malabang',
  lat: '7.5903',
  lng: '124.0703'
}, {
  city: 'Lupao',
  lat: '15.8793',
  lng: '120.8983'
}, {
  city: 'Tuy',
  lat: '14.0167',
  lng: '120.7333'
}, {
  city: 'Montevista',
  lat: '7.7000',
  lng: '125.9833'
}, {
  city: 'Veruela',
  lat: '8.0698',
  lng: '125.9554'
}, {
  city: 'Claveria',
  lat: '12.9035',
  lng: '123.2457'
}, {
  city: 'Banisilan',
  lat: '7.5000',
  lng: '124.7000'
}, {
  city: 'Roseller Lim',
  lat: '7.6568',
  lng: '122.4701'
}, {
  city: 'Buguias',
  lat: '16.7167',
  lng: '120.8333'
}, {
  city: 'Vinzons',
  lat: '14.1833',
  lng: '122.9000'
}, {
  city: 'Alcala',
  lat: '15.8468',
  lng: '120.5218'
}, {
  city: 'Tantangan',
  lat: '6.6167',
  lng: '124.7500'
}, {
  city: 'Jaro',
  lat: '11.1833',
  lng: '124.7833'
}, {
  city: 'Concepcion',
  lat: '11.2000',
  lng: '123.1000'
}, {
  city: 'Tayug',
  lat: '16.0267',
  lng: '120.7478'
}, {
  city: 'Angadanan',
  lat: '16.7571',
  lng: '121.7479'
}, {
  city: 'Mamburao',
  lat: '13.2233',
  lng: '120.5960'
}, {
  city: 'Cordon',
  lat: '16.6667',
  lng: '121.4500'
}, {
  city: 'Daram',
  lat: '11.6341',
  lng: '124.7947'
}, {
  city: 'Dolores',
  lat: '12.0500',
  lng: '125.4833'
}, {
  city: 'Manay',
  lat: '7.2167',
  lng: '126.5333'
}, {
  city: 'Loreto',
  lat: '8.1856',
  lng: '125.8538'
}, {
  city: 'Manjuyod',
  lat: '9.6833',
  lng: '123.1500'
}, {
  city: 'Pagsanjan',
  lat: '14.2667',
  lng: '121.4500'
}, {
  city: 'Toboso',
  lat: '10.7167',
  lng: '123.5167'
}, {
  city: 'Bacnotan',
  lat: '16.7333',
  lng: '120.3833'
}, {
  city: 'Lower Tungawan',
  lat: '7.6017',
  lng: '122.4273'
}, {
  city: 'Nasipit',
  lat: '8.9884',
  lng: '125.3408'
}, {
  city: 'Villaba',
  lat: '11.2167',
  lng: '124.4000'
}, {
  city: 'Pilar',
  lat: '14.6667',
  lng: '120.5667'
}, {
  city: 'Labangan',
  lat: '7.8667',
  lng: '123.5167'
}, {
  city: 'Sumisip',
  lat: '6.4167',
  lng: '121.9833'
}, {
  city: 'General Mamerto Natividad',
  lat: '15.6025',
  lng: '121.0515'
}, {
  city: 'El Nido',
  lat: '11.1956',
  lng: '119.4075'
}, {
  city: 'Kalilangan',
  lat: '7.7500',
  lng: '124.7500'
}, {
  city: 'Santa Rita',
  lat: '11.4667',
  lng: '124.9500'
}, {
  city: 'Siay',
  lat: '7.7056',
  lng: '122.8641'
}, {
  city: 'Lobo',
  lat: '13.6500',
  lng: '121.2500'
}, {
  city: 'Aguilar',
  lat: '15.8899',
  lng: '120.2379'
}, {
  city: 'President Quirino',
  lat: '6.7000',
  lng: '124.7333'
}, {
  city: 'Moises Padilla',
  lat: '10.2667',
  lng: '123.0833'
}, {
  city: 'Labason',
  lat: '8.0667',
  lng: '122.5167'
}, {
  city: 'Mandaon',
  lat: '12.2259',
  lng: '123.2842'
}, {
  city: 'Culasi',
  lat: '11.4272',
  lng: '122.0560'
}, {
  city: 'Carranglan',
  lat: '15.9667',
  lng: '121.0667'
}, {
  city: 'Banaybanay',
  lat: '6.9699',
  lng: '126.0126'
}, {
  city: 'Guambog',
  lat: '7.3000',
  lng: '125.8500'
}, {
  city: 'Matnog',
  lat: '12.5833',
  lng: '124.0833'
}, {
  city: 'Palayan City',
  lat: '15.5333',
  lng: '121.0833'
}, {
  city: 'Basud',
  lat: '14.0667',
  lng: '122.9667'
}, {
  city: 'Pananaw',
  lat: '5.9833',
  lng: '121.2500'
}, {
  city: 'Proper Bansud',
  lat: '12.8333',
  lng: '121.3667'
}, {
  city: 'Santa Rita',
  lat: '14.9953',
  lng: '120.6153'
}, {
  city: 'Santo Niño',
  lat: '6.4333',
  lng: '124.6833'
}, {
  city: 'San Jacinto',
  lat: '16.0725',
  lng: '120.4411'
}, {
  city: 'Santa Elena',
  lat: '14.2000',
  lng: '122.3833'
}, {
  city: 'Maria Aurora',
  lat: '15.7967',
  lng: '121.4737'
}, {
  city: 'Cateel',
  lat: '7.7833',
  lng: '126.4500'
}, {
  city: 'Maluso',
  lat: '6.5500',
  lng: '121.8833'
}, {
  city: 'Leyte',
  lat: '11.3667',
  lng: '124.4833'
}, {
  city: 'San Jose',
  lat: '13.7000',
  lng: '123.5167'
}, {
  city: 'Quezon',
  lat: '15.5500',
  lng: '120.8167'
}, {
  city: 'Santo Tomas',
  lat: '14.9667',
  lng: '120.7167'
}, {
  city: 'Caraga',
  lat: '7.3333',
  lng: '126.5667'
}, {
  city: 'Panitan',
  lat: '11.4667',
  lng: '122.7667'
}, {
  city: 'South Upi',
  lat: '6.8548',
  lng: '124.1443'
}, {
  city: 'Balabac',
  lat: '7.9833',
  lng: '117.0500'
}, {
  city: 'Abucay',
  lat: '14.7222',
  lng: '120.5354'
}, {
  city: 'Santa Cruz',
  lat: '17.0833',
  lng: '120.4500'
}, {
  city: 'Hinatuan',
  lat: '8.3667',
  lng: '126.3333'
}, {
  city: 'Tucuran',
  lat: '7.8500',
  lng: '123.5833'
}, {
  city: 'Payabon',
  lat: '9.7667',
  lng: '123.1333'
}, {
  city: 'Liloy',
  lat: '8.1167',
  lng: '122.6667'
}, {
  city: 'Nueva Valencia',
  lat: '10.5259',
  lng: '122.5398'
}, {
  city: 'Llanera',
  lat: '15.6667',
  lng: '121.0167'
}, {
  city: 'Pagalungan',
  lat: '7.0592',
  lng: '124.6987'
}, {
  city: 'Mambusao',
  lat: '11.4333',
  lng: '122.6000'
}, {
  city: 'Kibawe',
  lat: '7.5667',
  lng: '124.9833'
}, {
  city: 'Baler',
  lat: '15.7583',
  lng: '121.5625'
}, {
  city: 'Tampakan',
  lat: '6.4500',
  lng: '124.9333'
}, {
  city: 'Bañga',
  lat: '11.6333',
  lng: '122.3333'
}, {
  city: 'Anda',
  lat: '16.2896',
  lng: '119.9491'
}, {
  city: 'Bacolor',
  lat: '14.9984',
  lng: '120.6526'
}, {
  city: 'Laurel',
  lat: '14.0500',
  lng: '120.9000'
}, {
  city: 'Cabatuan',
  lat: '16.9589',
  lng: '121.6692'
}, {
  city: 'Villanueva',
  lat: '8.5833',
  lng: '124.7833'
}, {
  city: 'Polanco',
  lat: '8.5333',
  lng: '123.3667'
}, {
  city: 'San Miguel',
  lat: '8.8833',
  lng: '126.0000'
}, {
  city: 'President Manuel Acuña Roxas',
  lat: '8.5196',
  lng: '123.2277'
}, {
  city: 'Victoria',
  lat: '14.2250',
  lng: '121.3250'
}, {
  city: 'Tagudin',
  lat: '16.9333',
  lng: '120.4500'
}, {
  city: 'Balaoan',
  lat: '16.8167',
  lng: '120.4000'
}, {
  city: 'Lasam',
  lat: '18.0667',
  lng: '121.6000'
}, {
  city: 'Bulalacao',
  lat: '12.3333',
  lng: '121.3500'
}, {
  city: 'Socorro',
  lat: '13.0583',
  lng: '121.4117'
}, {
  city: 'Santo Tomas',
  lat: '16.2833',
  lng: '120.3833'
}, {
  city: 'Tabogon',
  lat: '10.9333',
  lng: '124.0333'
}, {
  city: 'Plaridel',
  lat: '8.6214',
  lng: '123.7101'
}, {
  city: 'Gonzaga',
  lat: '18.2667',
  lng: '122.0000'
}, {
  city: 'Alcala',
  lat: '17.9031',
  lng: '121.6590'
}, {
  city: 'Tagbina',
  lat: '8.4500',
  lng: '126.1667'
}, {
  city: 'Mobo',
  lat: '12.3333',
  lng: '123.6500'
}, {
  city: 'San Dionisio',
  lat: '11.2711',
  lng: '123.0948'
}, {
  city: 'Romblon',
  lat: '12.5789',
  lng: '122.2747'
}, {
  city: 'Mambajao',
  lat: '9.2500',
  lng: '124.7167'
}, {
  city: 'Malalag',
  lat: '6.6000',
  lng: '125.4000'
}, {
  city: 'Mondragon',
  lat: '12.5167',
  lng: '124.7500'
}, {
  city: 'La Libertad',
  lat: '10.0333',
  lng: '123.2167'
}, {
  city: 'Dingras',
  lat: '18.1000',
  lng: '120.7000'
}, {
  city: 'Naga',
  lat: '7.7887',
  lng: '122.6953'
}, {
  city: 'Maddela',
  lat: '16.3500',
  lng: '121.7000'
}, {
  city: 'Maayon',
  lat: '11.3833',
  lng: '122.7833'
}, {
  city: 'Alimodian',
  lat: '10.8196',
  lng: '122.4322'
}, {
  city: 'Talacogon',
  lat: '8.4488',
  lng: '125.7869'
}, {
  city: 'Rizal',
  lat: '12.4667',
  lng: '120.9667'
}, {
  city: 'Vallehermoso',
  lat: '10.3333',
  lng: '123.3167'
}, {
  city: 'Balud',
  lat: '12.0369',
  lng: '123.1935'
}, {
  city: 'Siniloan',
  lat: '14.4167',
  lng: '121.4500'
}, {
  city: 'Agoncillo',
  lat: '13.9334',
  lng: '120.9285'
}, {
  city: 'Taysan',
  lat: '13.7833',
  lng: '121.2000'
}, {
  city: 'Las Navas',
  lat: '12.3400',
  lng: '125.0320'
}, {
  city: 'Maimbung',
  lat: '5.9333',
  lng: '121.0333'
}, {
  city: 'Badian',
  lat: '9.8694',
  lng: '123.3959'
}, {
  city: 'Margosatubig',
  lat: '7.5783',
  lng: '123.1659'
}, {
  city: 'Valladolid',
  lat: '10.4667',
  lng: '122.8333'
}, {
  city: 'Malilipot',
  lat: '13.3167',
  lng: '123.7333'
}, {
  city: 'Maragondon',
  lat: '14.2667',
  lng: '120.7333'
}, {
  city: 'Kasibu',
  lat: '16.3167',
  lng: '121.2833'
}, {
  city: 'Amadeo',
  lat: '14.1728',
  lng: '120.9277'
}, {
  city: 'Pamplona',
  lat: '9.4667',
  lng: '123.1167'
}, {
  city: 'Clarin',
  lat: '8.2000',
  lng: '123.8500'
}, {
  city: 'Cabugao',
  lat: '17.8000',
  lng: '120.4500'
}, {
  city: 'Santa Cruz',
  lat: '13.1167',
  lng: '120.8500'
}, {
  city: 'Aritao',
  lat: '16.2973',
  lng: '121.0338'
}, {
  city: 'Baco',
  lat: '13.3584',
  lng: '121.0977'
}, {
  city: 'San Juan',
  lat: '16.6667',
  lng: '120.3333'
}, {
  city: 'Patnongon',
  lat: '10.9167',
  lng: '121.9833'
}, {
  city: 'Poblacion',
  lat: '7.5000',
  lng: '125.9333'
}, {
  city: 'Mapandan',
  lat: '16.0167',
  lng: '120.4500'
}, {
  city: 'Maasin',
  lat: '10.8833',
  lng: '122.4333'
}, {
  city: 'Rapu-Rapu',
  lat: '13.1833',
  lng: '124.1333'
}, {
  city: 'Basilisa',
  lat: '10.0654',
  lng: '125.5968'
}, {
  city: 'Mabuhay',
  lat: '7.4176',
  lng: '122.8370'
}, {
  city: 'San Andres',
  lat: '13.6000',
  lng: '124.1000'
}, {
  city: 'San Nicolas',
  lat: '18.1725',
  lng: '120.5958'
}, {
  city: 'Jamindan',
  lat: '11.4000',
  lng: '122.5000'
}, {
  city: 'Buug',
  lat: '7.7333',
  lng: '123.0667'
}, {
  city: 'Puerto Galera',
  lat: '13.5000',
  lng: '120.9542'
}, {
  city: 'Lilio',
  lat: '14.1300',
  lng: '121.4360'
}, {
  city: 'Oras',
  lat: '12.1333',
  lng: '125.4333'
}, {
  city: 'Bacong',
  lat: '9.2464',
  lng: '123.2948'
}, {
  city: 'Manucan',
  lat: '8.5161',
  lng: '123.0917'
}, {
  city: 'Nabas',
  lat: '11.8333',
  lng: '122.0833'
}, {
  city: 'Madridejos',
  lat: '11.2667',
  lng: '123.7333'
}, {
  city: 'Pamplona',
  lat: '13.6000',
  lng: '123.0833'
}, {
  city: 'Tambulig',
  lat: '8.0667',
  lng: '123.5333'
}, {
  city: 'Lumba-a-Bayabao',
  lat: '7.8833',
  lng: '124.3833'
}, {
  city: 'Jordan',
  lat: '10.6000',
  lng: '122.6000'
}, {
  city: 'Batobato',
  lat: '6.8244',
  lng: '126.0830'
}, {
  city: 'Magsaysay',
  lat: '12.3333',
  lng: '121.1500'
}, {
  city: 'Alicia',
  lat: '7.5060',
  lng: '122.9412'
}, {
  city: 'Real',
  lat: '14.6667',
  lng: '121.6000'
}, {
  city: 'Mankayan',
  lat: '16.8667',
  lng: '120.7833'
}, {
  city: 'Bangar',
  lat: '16.9000',
  lng: '120.4167'
}, {
  city: 'Enrile',
  lat: '17.5500',
  lng: '121.7000'
}, {
  city: 'Luna',
  lat: '16.8500',
  lng: '120.3833'
}, {
  city: 'San Andres',
  lat: '13.3667',
  lng: '122.6500'
}, {
  city: 'Bantay',
  lat: '17.5833',
  lng: '120.3833'
}, {
  city: 'Laur',
  lat: '15.5833',
  lng: '121.1833'
}, {
  city: 'San Nicolas',
  lat: '16.0700',
  lng: '120.7653'
}, {
  city: 'Borbon',
  lat: '10.8333',
  lng: '124.0000'
}, {
  city: 'Dinas',
  lat: '7.6136',
  lng: '123.3389'
}, {
  city: 'Bagabag',
  lat: '16.6044',
  lng: '121.2521'
}, {
  city: 'Caluya',
  lat: '11.9333',
  lng: '121.5500'
}, {
  city: 'Tayasan',
  lat: '9.9167',
  lng: '123.1500'
}, {
  city: 'Tago',
  lat: '9.0211',
  lng: '126.2317'
}, {
  city: 'Samal',
  lat: '14.7678',
  lng: '120.5431'
}, {
  city: 'Buldon',
  lat: '7.5167',
  lng: '124.3667'
}, {
  city: 'San Fernando',
  lat: '13.5667',
  lng: '123.1500'
}, {
  city: 'Dagami',
  lat: '11.0611',
  lng: '124.9031'
}, {
  city: 'Sogod',
  lat: '10.7500',
  lng: '124.0000'
}, {
  city: 'Aborlan',
  lat: '9.4386',
  lng: '118.5481'
}, {
  city: 'Aurora',
  lat: '16.9918',
  lng: '121.6357'
}, {
  city: 'Santo Domingo',
  lat: '13.2350',
  lng: '123.7769'
}, {
  city: 'Siayan',
  lat: '8.2519',
  lng: '123.1122'
}, {
  city: 'Palauig',
  lat: '15.4333',
  lng: '120.0500'
}, {
  city: 'Valencia',
  lat: '9.2833',
  lng: '123.2500'
}, {
  city: 'Gasan',
  lat: '13.3167',
  lng: '121.8500'
}, {
  city: 'Pola',
  lat: '13.1439',
  lng: '121.4400'
}, {
  city: 'San Antonio',
  lat: '14.9486',
  lng: '120.0864'
}, {
  city: 'Gutalac',
  lat: '7.9833',
  lng: '122.4000'
}, {
  city: 'Sibuco',
  lat: '7.2833',
  lng: '122.0667'
}, {
  city: 'Magsaysay',
  lat: '9.0167',
  lng: '125.1833'
}, {
  city: 'Sagnay',
  lat: '13.6000',
  lng: '123.5167'
}, {
  city: 'Gandara',
  lat: '12.0130',
  lng: '124.8118'
}, {
  city: 'Imbatug',
  lat: '8.3128',
  lng: '124.6873'
}, {
  city: 'Pandan',
  lat: '11.7167',
  lng: '122.1000'
}, {
  city: 'Ballesteros',
  lat: '18.4000',
  lng: '121.5167'
}, {
  city: 'Palapag',
  lat: '12.5470',
  lng: '125.1160'
}, {
  city: 'Dueñas',
  lat: '11.0667',
  lng: '122.6167'
}, {
  city: 'Canaman',
  lat: '13.6500',
  lng: '123.1667'
}, {
  city: 'Tabango',
  lat: '11.3167',
  lng: '124.3667'
}, {
  city: 'Sual',
  lat: '16.0667',
  lng: '120.1000'
}, {
  city: 'Mogpog',
  lat: '13.4833',
  lng: '121.8667'
}, {
  city: 'Cabanglasan',
  lat: '8.0667',
  lng: '125.3167'
}, {
  city: 'San Enrique',
  lat: '11.0697',
  lng: '122.6567'
}, {
  city: 'Jagna',
  lat: '9.6500',
  lng: '124.3667'
}, {
  city: 'Guimbal',
  lat: '10.6667',
  lng: '122.3167'
}, {
  city: 'Kadingilan',
  lat: '7.6000',
  lng: '124.9167'
}, {
  city: 'Olutanga',
  lat: '7.3106',
  lng: '122.8464'
}, {
  city: 'San Marcelino',
  lat: '14.9742',
  lng: '120.1573'
}, {
  city: 'Bugasong',
  lat: '11.0500',
  lng: '122.0667'
}, {
  city: 'Capoocan',
  lat: '11.2833',
  lng: '124.6500'
}, {
  city: 'Sulop',
  lat: '6.5986',
  lng: '125.3436'
}, {
  city: 'Bayog',
  lat: '7.8474',
  lng: '123.0423'
}, {
  city: 'Allacapan',
  lat: '18.2270',
  lng: '121.5556'
}, {
  city: 'Panglao',
  lat: '9.5833',
  lng: '123.7500'
}, {
  city: 'Languyan',
  lat: '5.2667',
  lng: '120.0833'
}, {
  city: 'San Antonio',
  lat: '13.9000',
  lng: '121.3000'
}, {
  city: 'Malangas',
  lat: '7.6263',
  lng: '123.0340'
}, {
  city: 'Sitangkai',
  lat: '4.6615',
  lng: '119.3919'
}, {
  city: 'Columbio',
  lat: '6.7000',
  lng: '124.9333'
}, {
  city: 'San Luis',
  lat: '13.8333',
  lng: '120.9333'
}, {
  city: 'Matalom',
  lat: '10.2833',
  lng: '124.8000'
}, {
  city: 'Balasan',
  lat: '11.4728',
  lng: '123.0878'
}, {
  city: 'Pambujan',
  lat: '12.5667',
  lng: '124.9333'
}, {
  city: 'Tobias Fornier',
  lat: '10.5167',
  lng: '121.9500'
}, {
  city: 'Santa Maria',
  lat: '15.9808',
  lng: '120.7003'
}, {
  city: 'Catubig',
  lat: '12.4000',
  lng: '125.0500'
}, {
  city: 'Marantao',
  lat: '7.9500',
  lng: '124.2330'
}, {
  city: 'Munai',
  lat: '7.9758',
  lng: '124.0636'
}, {
  city: 'Basista',
  lat: '15.8524',
  lng: '120.3976'
}, {
  city: 'San Quintin',
  lat: '15.9844',
  lng: '120.8150'
}, {
  city: 'Medina',
  lat: '8.9167',
  lng: '125.0167'
}, {
  city: 'Santa Ana',
  lat: '18.4667',
  lng: '122.1500'
}, {
  city: 'Casiguran',
  lat: '12.8667',
  lng: '124.0167'
}, {
  city: 'Cuenca',
  lat: '13.9167',
  lng: '121.0500'
}, {
  city: 'Claveria',
  lat: '9.5667',
  lng: '125.7333'
}, {
  city: 'Barugo',
  lat: '11.3167',
  lng: '124.7333'
}, {
  city: 'Banate',
  lat: '11.0500',
  lng: '122.7833'
}, {
  city: 'Abulug',
  lat: '18.4441',
  lng: '121.4576'
}, {
  city: 'Dao',
  lat: '11.3944',
  lng: '122.6858'
}, {
  city: 'Leganes',
  lat: '10.7833',
  lng: '122.5833'
}, {
  city: 'Diplahan',
  lat: '7.6939',
  lng: '122.9845'
}, {
  city: 'Guindulman',
  lat: '9.7620',
  lng: '124.4880'
}, {
  city: 'Initao',
  lat: '8.5000',
  lng: '124.3167'
}, {
  city: 'Bonifacio',
  lat: '8.0527',
  lng: '123.6136'
}, {
  city: 'Juban',
  lat: '12.8500',
  lng: '123.9833'
}, {
  city: 'Bautista',
  lat: '15.7833',
  lng: '120.5000'
}, {
  city: 'Jalajala',
  lat: '14.3557',
  lng: '121.3233'
}, {
  city: 'Mayantoc',
  lat: '15.6167',
  lng: '120.3833'
}, {
  city: 'Vintar',
  lat: '18.2250',
  lng: '120.6500'
}, {
  city: 'Bacarra',
  lat: '18.2519',
  lng: '120.6107'
}, {
  city: 'Capalonga',
  lat: '14.3333',
  lng: '122.5000'
}, {
  city: 'Salug',
  lat: '8.1079',
  lng: '122.7542'
}, {
  city: 'Lupi Viejo',
  lat: '13.8167',
  lng: '122.9000'
}, {
  city: 'Luuk',
  lat: '5.9676',
  lng: '121.3133'
}, {
  city: 'San Luis',
  lat: '8.4964',
  lng: '125.7364'
}, {
  city: 'Aloguinsan',
  lat: '10.2229',
  lng: '123.5491'
}, {
  city: 'Midsalip',
  lat: '8.0324',
  lng: '123.3145'
}, {
  city: 'Batan',
  lat: '11.5833',
  lng: '122.5000'
}, {
  city: 'Pinukpuk',
  lat: '17.6000',
  lng: '121.3667'
}, {
  city: 'Dumalinao',
  lat: '7.8167',
  lng: '123.3667'
}, {
  city: 'Igbaras',
  lat: '10.7167',
  lng: '122.2667'
}, {
  city: 'Trinidad',
  lat: '10.0795',
  lng: '124.3432'
}, {
  city: 'San Remigio',
  lat: '10.8331',
  lng: '122.0875'
}, {
  city: 'Numancia',
  lat: '11.7000',
  lng: '122.3333'
}, {
  city: 'Naguilian',
  lat: '17.0167',
  lng: '121.8500'
}, {
  city: 'San Manuel',
  lat: '17.0167',
  lng: '121.6333'
}, {
  city: 'Balimbing',
  lat: '7.9000',
  lng: '123.8500'
}, {
  city: 'Shariff Aguak',
  lat: '6.8647',
  lng: '124.4417'
}, {
  city: 'Payao',
  lat: '7.5857',
  lng: '122.8022'
}, {
  city: 'San Isidro',
  lat: '11.4167',
  lng: '124.3500'
}, {
  city: 'Badoc',
  lat: '17.9267',
  lng: '120.4754'
}, {
  city: 'Kalingalan Caluang',
  lat: '5.8833',
  lng: '121.2667'
}, {
  city: 'Mendez-Nuñez',
  lat: '14.1286',
  lng: '120.9058'
}, {
  city: 'Laoac East',
  lat: '16.0333',
  lng: '120.5500'
}, {
  city: 'Cantilan',
  lat: '9.3336',
  lng: '125.9775'
}, {
  city: 'Lingig',
  lat: '8.0381',
  lng: '126.4127'
}, {
  city: 'Abra de Ilog',
  lat: '13.4448',
  lng: '120.7260'
}, {
  city: 'San Vicente',
  lat: '10.5333',
  lng: '119.2833'
}, {
  city: 'Calubian',
  lat: '11.4500',
  lng: '124.4167'
}, {
  city: 'Simunul',
  lat: '4.8980',
  lng: '119.8213'
}, {
  city: 'Milaor',
  lat: '13.6000',
  lng: '123.1833'
}, {
  city: 'Moalboal',
  lat: '9.9500',
  lng: '123.4000'
}, {
  city: 'Balungao',
  lat: '15.9000',
  lng: '120.7000'
}, {
  city: 'Bauko',
  lat: '16.9833',
  lng: '120.8667'
}, {
  city: 'Getafe',
  lat: '10.1500',
  lng: '124.1500'
}, {
  city: 'Jimalalud',
  lat: '9.9797',
  lng: '123.1999'
}, {
  city: 'Balatan',
  lat: '13.3167',
  lng: '123.2333'
}, {
  city: 'Sapa Sapa',
  lat: '5.0899',
  lng: '120.2729'
}, {
  city: 'Calape',
  lat: '9.8833',
  lng: '123.8833'
}, {
  city: 'Lemery',
  lat: '11.2333',
  lng: '122.9333'
}, {
  city: 'Santa Maria',
  lat: '14.4750',
  lng: '121.4250'
}, {
  city: 'Magsingal',
  lat: '17.6850',
  lng: '120.4244'
}, {
  city: 'Lumbang',
  lat: '14.3000',
  lng: '121.4667'
}, {
  city: 'Simbahan',
  lat: '6.3000',
  lng: '120.5833'
}, {
  city: 'Cabarroguis',
  lat: '16.5833',
  lng: '121.5000'
}, {
  city: 'Polillo',
  lat: '14.7167',
  lng: '121.9500'
}, {
  city: 'San Roque',
  lat: '12.5330',
  lng: '124.8670'
}, {
  city: 'Torrijos',
  lat: '13.3167',
  lng: '122.0833'
}, {
  city: 'Catmon',
  lat: '10.6667',
  lng: '123.9500'
}, {
  city: 'Mallig',
  lat: '17.2000',
  lng: '121.6167'
}, {
  city: 'Sibagat',
  lat: '8.8219',
  lng: '125.6938'
}, {
  city: 'Sibutu',
  lat: '4.8500',
  lng: '119.4667'
}, {
  city: 'San Jacinto',
  lat: '12.5667',
  lng: '123.7333'
}, {
  city: 'Santa Maria',
  lat: '17.3667',
  lng: '120.4833'
}, {
  city: 'Damulog',
  lat: '7.4833',
  lng: '124.9333'
}, {
  city: 'Sergio Osmeña Sr',
  lat: '8.2988',
  lng: '123.5036'
}, {
  city: 'Buguey',
  lat: '18.2882',
  lng: '121.8331'
}, {
  city: 'Sigma',
  lat: '11.4214',
  lng: '122.6662'
}, {
  city: 'Dimataling',
  lat: '7.5333',
  lng: '123.3667'
}, {
  city: 'Caramoran',
  lat: '13.9833',
  lng: '124.1333'
}, {
  city: 'Buenavista',
  lat: '13.7394',
  lng: '122.4675'
}, {
  city: 'Talayan',
  lat: '6.9844',
  lng: '124.3564'
}, {
  city: 'Barira',
  lat: '7.4833',
  lng: '124.3000'
}, {
  city: 'Hinunangan',
  lat: '10.4000',
  lng: '125.2000'
}, {
  city: 'Talusan',
  lat: '7.4263',
  lng: '122.8084'
}, {
  city: 'Pantabangan',
  lat: '15.8167',
  lng: '121.1500'
}, {
  city: 'Claveria',
  lat: '18.6000',
  lng: '121.0833'
}, {
  city: 'Gamu',
  lat: '17.0500',
  lng: '121.8333'
}, {
  city: 'Morong',
  lat: '14.6800',
  lng: '120.2683'
}, {
  city: 'Peñaranda',
  lat: '15.3500',
  lng: '121.0000'
}, {
  city: 'Merida',
  lat: '10.9098',
  lng: '124.5376'
}, {
  city: 'Calintaan',
  lat: '12.5756',
  lng: '120.9428'
}, {
  city: 'Matanog',
  lat: '7.4667',
  lng: '124.2500'
}, {
  city: 'Dipaculao',
  lat: '15.9833',
  lng: '121.6333'
}, {
  city: 'Alubijid',
  lat: '8.5714',
  lng: '124.4751'
}, {
  city: 'General Nakar',
  lat: '14.7631',
  lng: '121.6350'
}, {
  city: 'President Roxas',
  lat: '11.4300',
  lng: '122.9300'
}, {
  city: 'Benito Soliven',
  lat: '16.9833',
  lng: '121.9500'
}, {
  city: 'Lianga',
  lat: '8.6330',
  lng: '126.0932'
}, {
  city: 'Candijay',
  lat: '9.8180',
  lng: '124.4960'
}, {
  city: 'Dumalag',
  lat: '11.3000',
  lng: '122.6167'
}, {
  city: 'Tandubas',
  lat: '5.1340',
  lng: '120.3461'
}, {
  city: 'Mataas Na Kahoy',
  lat: '13.9667',
  lng: '121.0833'
}, {
  city: 'Balindong',
  lat: '7.9167',
  lng: '124.2000'
}, {
  city: 'Masiu',
  lat: '7.8167',
  lng: '124.3167'
}, {
  city: 'Dasol',
  lat: '15.9896',
  lng: '119.8805'
}, {
  city: 'Ivisan',
  lat: '11.5217',
  lng: '122.6908'
}, {
  city: 'Pasuquin',
  lat: '18.3333',
  lng: '120.6167'
}, {
  city: 'Tudela',
  lat: '8.2472',
  lng: '123.8424'
}, {
  city: 'Balete',
  lat: '11.5500',
  lng: '122.3833'
}, {
  city: 'Bontoc',
  lat: '10.3500',
  lng: '124.9667'
}, {
  city: 'Dolores',
  lat: '14.0157',
  lng: '121.4011'
}, {
  city: 'New Panamao',
  lat: '5.9667',
  lng: '121.2000'
}, {
  city: 'Siraway',
  lat: '7.5881',
  lng: '122.1424'
}, {
  city: 'Lavezares',
  lat: '12.5333',
  lng: '124.3333'
}, {
  city: 'Tubao',
  lat: '16.3500',
  lng: '120.4167'
}, {
  city: 'Salay',
  lat: '8.8667',
  lng: '124.8000'
}, {
  city: 'Anilao',
  lat: '10.9785',
  lng: '122.7531'
}, {
  city: 'Santa Fe',
  lat: '11.1500',
  lng: '123.8000'
}, {
  city: 'Kumalarang',
  lat: '7.7500',
  lng: '123.1500'
}, {
  city: 'Manticao',
  lat: '8.4042',
  lng: '124.2867'
}, {
  city: 'Las Nieves',
  lat: '8.7351',
  lng: '125.6010'
}, {
  city: 'Saint Bernard',
  lat: '10.2833',
  lng: '125.1333'
}, {
  city: 'Datu Paglas',
  lat: '6.7669',
  lng: '124.8500'
}, {
  city: 'San Narciso',
  lat: '15.0167',
  lng: '120.0833'
}, {
  city: 'Licab',
  lat: '15.5439',
  lng: '120.7634'
}, {
  city: 'Libacao',
  lat: '11.4833',
  lng: '122.3000'
}, {
  city: 'Villareal',
  lat: '11.5667',
  lng: '124.9333'
}, {
  city: 'La Paz',
  lat: '8.2801',
  lng: '125.8092'
}, {
  city: 'Macalelon',
  lat: '13.7500',
  lng: '122.1333'
}, {
  city: 'Paracelis',
  lat: '17.2667',
  lng: '121.4667'
}, {
  city: 'Agno',
  lat: '16.1161',
  lng: '119.8027'
}, {
  city: 'Sexmoan',
  lat: '14.9333',
  lng: '120.6167'
}, {
  city: 'Santo Domingo',
  lat: '17.6333',
  lng: '120.4083'
}, {
  city: 'Oslob',
  lat: '9.5500',
  lng: '123.4000'
}, {
  city: 'Caridad',
  lat: '14.4828',
  lng: '120.8958'
}, {
  city: 'Pantao-Ragat',
  lat: '8.0500',
  lng: '124.1500'
}, {
  city: 'Iguig',
  lat: '17.7500',
  lng: '121.7333'
}, {
  city: 'Mahaplag',
  lat: '10.5833',
  lng: '124.9833'
}, {
  city: 'Babatngon',
  lat: '11.4207',
  lng: '124.8434'
}, {
  city: 'Majayjay',
  lat: '14.1463',
  lng: '121.4729'
}, {
  city: 'Aglipay',
  lat: '16.4889',
  lng: '121.5874'
}, {
  city: 'Dauin',
  lat: '9.2000',
  lng: '123.2667'
}, {
  city: 'Pulupandan',
  lat: '10.5167',
  lng: '122.8000'
}, {
  city: 'San Miguel',
  lat: '10.7833',
  lng: '122.4667'
}, {
  city: 'Sumilao',
  lat: '8.2872',
  lng: '124.9456'
}, {
  city: 'Jimenez',
  lat: '8.3333',
  lng: '123.8333'
}, {
  city: 'Aloran',
  lat: '8.4146',
  lng: '123.8228'
}, {
  city: 'Zamboanguita',
  lat: '9.1167',
  lng: '123.2000'
}, {
  city: 'Dupax Del Norte',
  lat: '16.2864',
  lng: '121.0942'
}, {
  city: 'San Jose',
  lat: '10.0083',
  lng: '125.5889'
}, {
  city: 'Cuartero',
  lat: '11.3500',
  lng: '122.6667'
}, {
  city: 'Ponot',
  lat: '8.4500',
  lng: '123.0333'
}, {
  city: 'San Luis',
  lat: '15.7167',
  lng: '121.5167'
}, {
  city: 'Lapuyan',
  lat: '7.6333',
  lng: '123.2000'
}, {
  city: 'Siquijor',
  lat: '9.1833',
  lng: '123.5500'
}, {
  city: 'Bontoc',
  lat: '17.0872',
  lng: '120.9756'
}, {
  city: 'Padre Burgos',
  lat: '13.9226',
  lng: '121.8116'
}, {
  city: 'Maribojoc',
  lat: '9.7500',
  lng: '123.8500'
}, {
  city: 'Baclayon',
  lat: '9.6227',
  lng: '123.9135'
}, {
  city: 'Lagawe',
  lat: '16.8167',
  lng: '121.1000'
}, {
  city: 'Tingloy',
  lat: '13.6500',
  lng: '120.8667'
}, {
  city: 'Anda',
  lat: '9.7420',
  lng: '124.5737'
}, {
  city: 'Alcantara',
  lat: '9.9715',
  lng: '123.4047'
}, {
  city: 'Agdangan',
  lat: '13.8758',
  lng: '121.9122'
}, {
  city: 'Perez',
  lat: '14.1833',
  lng: '121.9333'
}, {
  city: 'Padre Burgos',
  lat: '10.0333',
  lng: '125.0167'
}, {
  city: 'Basco',
  lat: '20.4500',
  lng: '121.9667'
}, {
  city: 'Corella',
  lat: '9.6833',
  lng: '123.9167'
}, {
  city: 'Sikatuna',
  lat: '9.6833',
  lng: '123.9667'
}, {
  city: 'Oroquieta',
  lat: '8.4859',
  lng: '123.8048'
}, {
  city: 'Kabugao',
  lat: '18.0231',
  lng: '121.1840'
}, {
  city: 'Santa Cruz',
  lat: '14.1167',
  lng: '121.2833'
}, {
  city: 'Koronadal',
  lat: '6.2541',
  lng: '124.9922'
}, {
  city: 'San Jose',
  lat: '10.1800',
  lng: '125.5683'
}, {
  city: 'Tabuk',
  lat: '17.4084',
  lng: '121.2785'
}, {
  city: 'Pili',
  lat: '13.7177',
  lng: '123.7448'
}, {
  city: 'Madridejos',
  lat: '9.7912',
  lng: '123.3462'
}]);

/***/ }),

/***/ 92414:
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/custom-validators.directive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomValidatorsDirective": () => (/* binding */ CustomValidatorsDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let CustomValidatorsDirective = class CustomValidatorsDirective {
  constructor() {}
  isSame(v1, v2, error = 'isSame') {
    return control => {
      const val1 = control.get(v1);
      const val2 = control.get(v2);
      return val1 && val2 && val1.value === val2.value ? {
        [error]: true
      } : null;
    };
  }
  isDifferent(v1, v2, error = 'isDifferent') {
    return control => {
      const val1 = control.get(v1);
      const val2 = control.get(v2);
      return val1 && val2 && val1.value !== val2.value ? {
        [error]: true
      } : null;
    };
  }
  isGreaterValidator(isGreater, isLess, error = 'isGreater') {
    return control => {
      const val1 = Number(control.value[isGreater].split(',').join(''));
      const val2 = Number(control.value[isLess].split(',').join(''));
      return val1 && val2 && val1 <= val2 ? {
        [error]: true
      } : null;
    };
  }
  isAbove(num) {
    return control => {
      const value = control.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      if (isNaN(value)) {
        return;
      }
      return value > num ? {
        isAbove: true
      } : null;
    };
  }
  patternValidator(regex, error) {
    return control => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }
  emailValidation() {
    return control => {
      const email = control.value;
      if (!email) {
        // If the email is not provided, don't perform validation
        return null;
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        // If the email format is invalid, return an error
        return {
          invalidFormat: true
        };
      }
      // Email is valid
      return null;
    };
  }
  static #_ = this.ctorParameters = () => [];
};
CustomValidatorsDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: '[appCustomValidators]'
})], CustomValidatorsDirective);


/***/ }),

/***/ 84212:
/*!*****************************************!*\
  !*** ./src/app/shared/enums/enquiry.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnquiryNotification": () => (/* binding */ EnquiryNotification),
/* harmony export */   "EnquiryTopic": () => (/* binding */ EnquiryTopic)
/* harmony export */ });
var EnquiryTopic;
(function (EnquiryTopic) {
  EnquiryTopic["schedule"] = "schedule";
  EnquiryTopic["payment"] = "payment";
  EnquiryTopic["sales"] = "sales";
  EnquiryTopic["info"] = "information";
})(EnquiryTopic || (EnquiryTopic = {}));
var EnquiryNotification;
(function (EnquiryNotification) {
  EnquiryNotification["new"] = "newEnquiry";
})(EnquiryNotification || (EnquiryNotification = {}));

/***/ }),

/***/ 14750:
/*!******************************************!*\
  !*** ./src/app/shared/enums/property.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyType": () => (/* binding */ PropertyType)
/* harmony export */ });
var PropertyType;
(function (PropertyType) {
  PropertyType["residential"] = "residential";
  PropertyType["commercial"] = "commercial";
  PropertyType["industrial"] = "industrial";
  PropertyType["land"] = "land";
})(PropertyType || (PropertyType = {}));

/***/ }),

/***/ 53328:
/*!************************************************************!*\
  !*** ./src/app/shared/services/storage/storage.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 80190);




let StorageService = class StorageService {
  constructor(storage) {
    this.storage = storage;
    this.ionStorage = null;
    this.init();
  }
  init() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // If using, define drivers here: await this.storage.defineDriver(/*...*/);
      const storage = yield _this.storage.create();
      _this.ionStorage = storage;
    })();
  }
  set(key, value) {
    var _this2 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.ionStorage?.set(key, value);
    })();
  }
  get(key) {
    var _this3 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this3.ionStorage?.get(key);
    })();
  }
  setDarkTheme(value) {
    var _this4 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.ionStorage?.set('isDark', value);
    })();
  }
  getDartTheme() {
    var _this5 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this5.ionStorage?.get('isDark');
    })();
  }
  setCoord(coord) {
    var _this6 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.ionStorage?.set('coord', coord);
    })();
  }
  getCoord() {
    var _this7 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this7.ionStorage?.get('coord');
    })();
  }
  setUser(user) {
    var _this8 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this8.ionStorage?.set('user', user);
    })();
  }
  getUser() {
    var _this9 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this9.ionStorage?.get('user');
    })();
  }
  removeUser() {
    var _this10 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this10.ionStorage?.remove('user');
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage
  }];
};
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], StorageService);


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_action_popup_action_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/action-popup/action-popup.component */ 79310);
/* harmony import */ var _components_property_badge_property_badge_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/property-badge/property-badge.component */ 28964);
/* harmony import */ var _components_div_horizontal_slide_div_horizontal_slide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/div-horizontal-slide/div-horizontal-slide.component */ 36468);
/* harmony import */ var _directives_custom_validators_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/custom-validators.directive */ 92414);
/* harmony import */ var _components_alert_card_alert_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/alert-card/alert-card.component */ 98094);
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact-form/contact-form.component */ 23915);
/* harmony import */ var _components_enquiry_badge_enquiry_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/enquiry-badge/enquiry-badge.component */ 81534);
/* harmony import */ var _map_map_leaflet_map_leaflet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../map/map-leaflet/map-leaflet.component */ 95949);
/* harmony import */ var _map_map_search_field_map_search_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../map/map-search-field/map-search-field.component */ 53683);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ 66526);












// FROM MAP MODULE



let SharedModule = class SharedModule {};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  declarations: [_components_action_popup_action_popup_component__WEBPACK_IMPORTED_MODULE_0__.ActionPopupComponent, _components_property_badge_property_badge_component__WEBPACK_IMPORTED_MODULE_1__.PropertyBadgeComponent, _components_div_horizontal_slide_div_horizontal_slide_component__WEBPACK_IMPORTED_MODULE_2__.DivHorizontalSlideComponent, _directives_custom_validators_directive__WEBPACK_IMPORTED_MODULE_3__.CustomValidatorsDirective, _components_alert_card_alert_card_component__WEBPACK_IMPORTED_MODULE_4__.AlertCardComponent, _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_5__.ContactFormComponent, _components_enquiry_badge_enquiry_badge_component__WEBPACK_IMPORTED_MODULE_6__.EnquiryBadgeComponent, _map_map_leaflet_map_leaflet_component__WEBPACK_IMPORTED_MODULE_7__.MapLeafletComponent, _map_map_search_field_map_search_field_component__WEBPACK_IMPORTED_MODULE_8__.MapSearchFieldComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__.FooterComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule],
  exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _components_action_popup_action_popup_component__WEBPACK_IMPORTED_MODULE_0__.ActionPopupComponent, _components_property_badge_property_badge_component__WEBPACK_IMPORTED_MODULE_1__.PropertyBadgeComponent, _components_div_horizontal_slide_div_horizontal_slide_component__WEBPACK_IMPORTED_MODULE_2__.DivHorizontalSlideComponent, _directives_custom_validators_directive__WEBPACK_IMPORTED_MODULE_3__.CustomValidatorsDirective, _components_alert_card_alert_card_component__WEBPACK_IMPORTED_MODULE_4__.AlertCardComponent, _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_5__.ContactFormComponent, _components_enquiry_badge_enquiry_badge_component__WEBPACK_IMPORTED_MODULE_6__.EnquiryBadgeComponent, _map_map_leaflet_map_leaflet_component__WEBPACK_IMPORTED_MODULE_7__.MapLeafletComponent, _map_map_search_field_map_search_field_component__WEBPACK_IMPORTED_MODULE_8__.MapSearchFieldComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__.FooterComponent],
  providers: [_directives_custom_validators_directive__WEBPACK_IMPORTED_MODULE_3__.CustomValidatorsDirective]
})], SharedModule);


/***/ }),

/***/ 77666:
/*!***********************************!*\
  !*** ./src/app/shared/utility.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerDict": () => (/* binding */ headerDict),
/* harmony export */   "sortListByDate": () => (/* binding */ sortListByDate),
/* harmony export */   "sortListByName": () => (/* binding */ sortListByName),
/* harmony export */   "sortListByNumber": () => (/* binding */ sortListByNumber)
/* harmony export */ });
const headerDict = (arg = {
  token: '',
  contentType: 'application/json'
}) => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ...(arg.contentType && {
    'Content-Type': arg.contentType
  }),
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Accept: 'application/json',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'Access-Control-Allow-Headers': 'Content-Type',
  Authorization: `Bearer ${arg.token}`
});
const sortListByName = (items, {
  asc = true,
  property = null
} = {}) => items.sort((a, b) => {
  const aName = property ? a[property].toLowerCase() : a.toLowerCase();
  const bName = property ? b[property].toLowerCase() : b.toLowerCase();
  if (!asc) {
    return aName < bName ? 1 : aName > bName ? -1 : 0;
  }
  return aName > bName ? 1 : aName < bName ? -1 : 0;
});
const sortListByDate = (items, {
  latest = true,
  property = null
} = {}) => items.sort((a, b) => {
  const aDate = property ? new Date(a[property]).getTime() : new Date(a).getTime();
  const bDate = property ? new Date(b[property]).getTime() : new Date(b).getTime();
  if (!latest) {
    return aDate > bDate ? 1 : aDate < bDate ? -1 : 0;
  }
  return aDate < bDate ? 1 : aDate > bDate ? -1 : 0;
});
const sortListByNumber = (items, {
  asc = true,
  property = null
} = {}) => items.sort((a, b) => {
  const aNum = property ? Number(a[property]) : Number(a);
  const bNum = property ? Number(b[property]) : Number(a);
  if (!asc) {
    return aNum > bNum ? 1 : aNum < bNum ? -1 : 0;
  }
  return aNum < bNum ? 1 : aNum > bNum ? -1 : 0;
});

/***/ }),

/***/ 1584:
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utility */ 77666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/storage/storage.service */ 53328);








const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api.server;
const requestOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders((0,_shared_utility__WEBPACK_IMPORTED_MODULE_2__.headerDict)())
};
let UserService = class UserService {
  constructor(http, storage) {
    this.http = http;
    this.storage = storage;
    this.userSub = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.user$ = this.userSub.asObservable();
    // Access Stored User
    this.storage.init().then(() => {
      this.storage.getUser().then(user => {
        if (user) {
          this.updateUser(user);
        }
      });
    });
  }
  get user() {
    return this.userSub.getValue();
  }
  token() {
    return this.userSub.getValue().accessToken;
  }
  signOut() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.userSub.next(null);
      _this.storage.removeUser();
    })();
  }
  signIn(email, password) {
    var _this2 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this2.http.post(url + 'auth/signin', {
          email,
          password
        }, requestOptions));
        yield _this2.updateUser(result);
        return result;
      } catch (error) {
        console.log('err', error);
        return error;
      }
    })();
  }
  register(fullName, email, password) {
    var _this3 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this3.http.post(url + 'auth/register', {
          fullName,
          email,
          password
        }, requestOptions));
        yield _this3.updateUser(result);
        return result;
      } catch (error) {
        console.log('error', error);
        return error;
      }
    })();
  }
  googleAuth(payload) {
    var _this4 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this4.http.post(url + 'auth/google', payload));
        yield _this4.updateUser(result);
        return result;
      } catch (error) {
        console.log('google-auth error:', error);
      }
    })();
  }
  updateUser(user) {
    var _this5 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.userSub.next(user);
      yield _this5.storage.setUser(user);
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
  }, {
    type: _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
  }];
};
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], UserService);


/***/ }),

/***/ 81123:
/*!**************************************************!*\
  !*** ./src/app/web-scoket/web-socket.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSocketService": () => (/* binding */ WebSocketService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _enquiries_enquiries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enquiries/enquiries.service */ 50590);
/* harmony import */ var _shared_enums_enquiry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/enums/enquiry */ 84212);





const parseMessage = message => {
  try {
    const parsedMessage = JSON.parse(message);
    return parsedMessage;
  } catch (error) {
    return message.toString();
  }
};
let WebSocketService = class WebSocketService {
  constructor(enquiry) {
    this.enquiry = enquiry;
    this.messages = [];
  }
  connect(token) {
    this.socket = new WebSocket(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.webSocketUrl}?userToken=${token}`);
    this.socket.onopen = () => {
      console.log('WebSocket connection established.');
    };
    this.socket.onmessage = event => {
      const message = event.data;
      console.log('Received message:', parseMessage(message));
      this.handleNotification(parseMessage(message));
      this.messages.push(message);
    };
    this.socket.onclose = event => {
      console.log('WebSocket connection closed:', event);
    };
    this.socket.onerror = error => {
      console.error('WebSocket error:', error);
    };
  }
  send(message) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.error('WebSocket connection is not open.');
    }
  }
  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
  handleNotification(notfication) {
    switch (notfication.type) {
      case _shared_enums_enquiry__WEBPACK_IMPORTED_MODULE_2__.EnquiryNotification["new"]:
        this.enquiry.insertEnquiryToState(notfication.payload);
        break;
      default:
        console.error('Unkown Notification type', notfication.type);
        break;
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _enquiries_enquiries_service__WEBPACK_IMPORTED_MODULE_1__.EnquiriesService
  }];
};
WebSocketService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], WebSocketService);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  api: {
    server: 'http://localhost:8000/',
    mapKey: '',
    googleAuthClientId: '',
    webSocketUrl: "ws://localhost:8000/websocket"
  }
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

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-44d9e816_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-44d9e816_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"default-node_modules_ionic_core_dist_esm_form-controller-ed77647a_js-node_modules_ionic_core_-dc6182",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"default-node_modules_ionic_core_dist_esm_form-controller-ed77647a_js-node_modules_ionic_core_-dc6182",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 41993:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 41993;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 79595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.logo-container {\n  margin: 0 auto;\n  max-width: 200px;\n  text-align: center;\n}\n\n.logo-title {\n  margin: -10px 0 24px;\n}\n.logo-title a {\n  font-size: 14px;\n  color: var(--ion-color-dark-tint);\n  line-height: 100%;\n  text-decoration: none;\n}\n\n@media (min-width: 992px) {\n  .max-w-400 {\n    max-width: 350px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/app.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/app.component.scss"],"names":[],"mappings":"AAAA;EACE,2EAAA;ACCF;;ADEA;EACE,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,sBAAA;ACCF;;ADEA;EACE,eAAA;ACCF;;ADEA;EACE,mBAAA;ACCF;;ADEA;;EAEE,kBAAA;ACCF;;ADEA;EACE,2DAAA;ACCF;;ADEA;EACE,eAAA;EACA,gBAAA;EAEA,gBAAA;ACAF;;ADGA;EACE,eAAA;EAEA,mBAAA;EAEA,cAAA;EAEA,gBAAA;ACHF;;ADMA;EACE,qBAAA;EACA,mBAAA;EACA,kBAAA;ACHF;;ADMA;EACE,sDAAA;ACHF;;ADMA;EACE,+BAAA;ACHF;;ADMA;EACE,cAAA;ACHF;;ADMA;EACE,gBAAA;ACHF;;ADMA;EACE,sBAAA;ACHF;;ADMA;EACE,mBAAA;ACHF;;ADMA;EACE,iBAAA;EACA,mBAAA;ACHF;;ADMA;EACE,qBAAA;EACA,mBAAA;EACA,kBAAA;ACHF;;ADMA;EACE,+BAAA;ACHF;;ADMA;EACE,eAAA;EACA,cAAA;ACHF;;ADMA;EACE,kBAAA;ACHF;;ADMA;;EAEE,kBAAA;EACA,mBAAA;ACHF;;ADMA;EACE,kBAAA;ACHF;;ADMA;EACE,qBAAA;EACA,eAAA;EAEA,oCAAA;ACJF;;ADOA;EACE,iCAAA;ACJF;;ADOA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;ACJF;;ADMA;EACE,oBAAA;ACHF;ADIE;EACE,eAAA;EACA,iCAAA;EACA,iBAAA;EACA,qBAAA;ACFJ;;ADKA;EACE;IACE,gBAAA;ECFF;AACF","sourcesContent":["ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n\n  margin-bottom: 18px;\n\n  color: #757575;\n\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.logo-container {\n  margin: 0 auto;\n  max-width: 200px;\n  text-align: center;\n}\n.logo-title {\n  margin: -10px 0 24px;\n  a {\n    font-size: 14px;\n    color: var(--ion-color-dark-tint);\n    line-height: 100%;\n    text-decoration: none;\n  }\n}\n@media (min-width: 992px) {\n  .max-w-400 {\n    max-width: 350px;\n  }\n}\n","ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.logo-container {\n  margin: 0 auto;\n  max-width: 200px;\n  text-align: center;\n}\n\n.logo-title {\n  margin: -10px 0 24px;\n}\n.logo-title a {\n  font-size: 14px;\n  color: var(--ion-color-dark-tint);\n  line-height: 100%;\n  text-decoration: none;\n}\n\n@media (min-width: 992px) {\n  .max-w-400 {\n    max-width: 350px;\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 40484:
/*!***********************************************************************!*\
  !*** ./src/app/map/map-leaflet/map-leaflet.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".map-container {\n  display: block;\n  height: 100%;\n}\n\n#mapId {\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/map/map-leaflet/map-leaflet.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/map/map-leaflet/map-leaflet.component.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;EACA,YAAA;ACCF;;ADEA;EACE,YAAA;ACCF","sourcesContent":[".map-container {\n  display: block;\n  height: 100%;\n}\n\n#mapId {\n  height: 100%;\n}\n",".map-container {\n  display: block;\n  height: 100%;\n}\n\n#mapId {\n  height: 100%;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 14911:
/*!*******************************************************************!*\
  !*** ./src/app/map/map-popup/map-popup.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popup-container {\n  min-width: 200px;\n  max-width: 300px;\n}\n\n.name {\n  font-size: 17px;\n  font-weight: bold;\n}\n\n.address {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  padding: 8px;\n}\n\n::ng-deep .leaflet-popup-content-wrapper,\n.leaflet-popup.tip {\n  background: var(--ion-color-light-tint);\n  color: var(--ion-color-dark);\n}\n\n::ng-deep .leaflet-popup-tip-container .leaflet-popup-tip {\n  background: var(--ion-color-light-tint);\n}", "",{"version":3,"sources":["webpack://./src/app/map/map-popup/map-popup.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/map/map-popup/map-popup.component.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;EACA,gBAAA;ACCF;;ADEA;EACE,eAAA;EACA,iBAAA;ACCF;;ADEA;EACE,eAAA;EACA,gBAAA;EACA,4BAAA;EACA,YAAA;ACCF;;ADEA;;EAEE,uCAAA;EACA,4BAAA;ACCF;;ADCA;EACE,uCAAA;ACEF","sourcesContent":[".popup-container {\n  min-width: 200px;\n  max-width: 300px;\n}\n\n.name {\n  font-size: 17px;\n  font-weight: bold;\n}\n\n.address {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  padding: 8px;\n}\n\n::ng-deep .leaflet-popup-content-wrapper,\n.leaflet-popup.tip {\n  background: var(--ion-color-light-tint);\n  color: var(--ion-color-dark);\n}\n::ng-deep .leaflet-popup-tip-container .leaflet-popup-tip {\n  background: var(--ion-color-light-tint);\n}\n",".popup-container {\n  min-width: 200px;\n  max-width: 300px;\n}\n\n.name {\n  font-size: 17px;\n  font-weight: bold;\n}\n\n.address {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  padding: 8px;\n}\n\n::ng-deep .leaflet-popup-content-wrapper,\n.leaflet-popup.tip {\n  background: var(--ion-color-light-tint);\n  color: var(--ion-color-dark);\n}\n\n::ng-deep .leaflet-popup-tip-container .leaflet-popup-tip {\n  background: var(--ion-color-light-tint);\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 25128:
/*!*********************************************************************************!*\
  !*** ./src/app/map/map-search-field/map-search-field.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search-container {\n  padding: 20px;\n  background: rgba(255, 255, 255, 0.185);\n  z-index: 500;\n  position: absolute;\n  top: 8px;\n  left: 4px;\n  right: 4px;\n  width: calc(100% - 8px);\n}\n.search-container .icon-container {\n  position: absolute;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.search-container .icon-container ion-icon {\n  min-width: 40px;\n  color: var(--ion-color-dark);\n  font-size: 20px;\n}\n.search-container input {\n  color: var(--ion-color-dark);\n  background: var(--ion-color-light);\n  width: 100%;\n  height: 40px;\n  padding-left: 36px;\n  border-radius: 8px;\n}\n.search-container input::placeholder {\n  font-size: 18px;\n  font-weight: 400;\n}\n\n@media (max-width: 992px) {\n  .search-container {\n    opacity: 0.7;\n    padding: 6px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/map/map-search-field/map-search-field.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/map/map-search-field/map-search-field.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sCAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,uBAAA;ACCF;ADAE;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;ACEJ;ADDI;EACE,eAAA;EACA,4BAAA;EACA,eAAA;ACGN;ADCE;EACE,4BAAA;EACA,kCAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;ACCJ;ADAI;EACE,eAAA;EACA,gBAAA;ACEN;;ADEA;EACE;IACE,YAAA;IACA,YAAA;ECCF;AACF","sourcesContent":[".search-container {\n  padding: 20px;\n  background: rgba(255, 255, 255, 0.185);\n  z-index: 500;\n  position: absolute;\n  top: 8px;\n  left: 4px;\n  right: 4px;\n  width: calc(100% - 8px);\n  .icon-container {\n    position: absolute;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    ion-icon {\n      min-width: 40px;\n      color: var(--ion-color-dark);\n      font-size: 20px;\n    }\n  }\n\n  input {\n    color: var(--ion-color-dark);\n    background: var(--ion-color-light);\n    width: 100%;\n    height: 40px;\n    padding-left: 36px;\n    border-radius: 8px;\n    &::placeholder {\n      font-size: 18px;\n      font-weight: 400;\n    }\n  }\n}\n@media (max-width: 992px) {\n  .search-container {\n    opacity: 0.7;\n    padding: 6px;\n  }\n}\n",".search-container {\n  padding: 20px;\n  background: rgba(255, 255, 255, 0.185);\n  z-index: 500;\n  position: absolute;\n  top: 8px;\n  left: 4px;\n  right: 4px;\n  width: calc(100% - 8px);\n}\n.search-container .icon-container {\n  position: absolute;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.search-container .icon-container ion-icon {\n  min-width: 40px;\n  color: var(--ion-color-dark);\n  font-size: 20px;\n}\n.search-container input {\n  color: var(--ion-color-dark);\n  background: var(--ion-color-light);\n  width: 100%;\n  height: 40px;\n  padding-left: 36px;\n  border-radius: 8px;\n}\n.search-container input::placeholder {\n  font-size: 18px;\n  font-weight: 400;\n}\n\n@media (max-width: 992px) {\n  .search-container {\n    opacity: 0.7;\n    padding: 6px;\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 24708:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/action-popup/action-popup.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".heading-popup {\n  font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/app/shared/components/action-popup/action-popup.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/shared/components/action-popup/action-popup.component.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;ACCF","sourcesContent":[".heading-popup {\n  font-weight: bold;\n}\n",".heading-popup {\n  font-weight: bold;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 78369:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/alert-card/alert-card.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".alert {\n  padding: 6px 16px;\n  color: var(--ion-color-dark);\n  border-radius: 8px;\n  border: 1px solid;\n  display: flex;\n}\n.alert div {\n  display: flex;\n  align-items: flex-start;\n  margin-right: 6px;\n}\n.alert div ion-icon {\n  font-size: 20px;\n}\n\n.danger {\n  border-color: var(--ion-color-danger);\n  background: rgba(237, 87, 107, 0.3647058824);\n  color: var(--ion-color-danger-shade);\n}\n\n.warning {\n  border-color: var(--ion-color-warning);\n  background: rgba(224, 174, 8, 0.3215686275);\n  color: var(--ion-color-warning-shade);\n}\n\n.success {\n  border-color: var(--ion-color-success);\n  background: rgba(40, 186, 98, 0.2745098039);\n  color: var(--ion-color-success-shade);\n}", "",{"version":3,"sources":["webpack://./src/app/shared/components/alert-card/alert-card.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/shared/components/alert-card/alert-card.component.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,4BAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;ACCF;ADAE;EACE,aAAA;EACA,uBAAA;EACA,iBAAA;ACEJ;ADDI;EACE,eAAA;ACGN;;ADEA;EACE,qCAAA;EACA,4CAAA;EACA,oCAAA;ACCF;;ADCA;EACE,sCAAA;EACA,2CAAA;EACA,qCAAA;ACEF;;ADAA;EACE,sCAAA;EACA,2CAAA;EACA,qCAAA;ACGF","sourcesContent":[".alert {\n  padding: 6px 16px;\n  color: var(--ion-color-dark);\n  border-radius: 8px;\n  border: 1px solid;\n  display: flex;\n  div {\n    display: flex;\n    align-items: flex-start;\n    margin-right: 6px;\n    ion-icon {\n      font-size: 20px;\n    }\n  }\n}\n\n.danger {\n  border-color: var(--ion-color-danger);\n  background: #ed576b5d;\n  color: var(--ion-color-danger-shade);\n}\n.warning {\n  border-color: var(--ion-color-warning);\n  background: #e0ae0852;\n  color: var(--ion-color-warning-shade);\n}\n.success {\n  border-color: var(--ion-color-success);\n  background: #28ba6246;\n  color: var(--ion-color-success-shade);\n}\n",".alert {\n  padding: 6px 16px;\n  color: var(--ion-color-dark);\n  border-radius: 8px;\n  border: 1px solid;\n  display: flex;\n}\n.alert div {\n  display: flex;\n  align-items: flex-start;\n  margin-right: 6px;\n}\n.alert div ion-icon {\n  font-size: 20px;\n}\n\n.danger {\n  border-color: var(--ion-color-danger);\n  background: rgba(237, 87, 107, 0.3647058824);\n  color: var(--ion-color-danger-shade);\n}\n\n.warning {\n  border-color: var(--ion-color-warning);\n  background: rgba(224, 174, 8, 0.3215686275);\n  color: var(--ion-color-warning-shade);\n}\n\n.success {\n  border-color: var(--ion-color-success);\n  background: rgba(40, 186, 98, 0.2745098039);\n  color: var(--ion-color-success-shade);\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 12648:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/contact-form/contact-form.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-card ion-card-title {\n  font-size: 32px;\n  font-weight: bold;\n}\nion-card ion-item {\n  --background: var(--ion-color-light);\n  margin: 0 0 8px;\n}\n\n.alert-errors {\n  width: 100%;\n  margin: 6px 0 0 0;\n}", "",{"version":3,"sources":["webpack://./src/app/shared/components/contact-form/contact-form.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/shared/components/contact-form/contact-form.component.scss"],"names":[],"mappings":"AACE;EACE,eAAA;EACA,iBAAA;ACAJ;ADEE;EACE,oCAAA;EACA,eAAA;ACAJ;;ADIA;EACE,WAAA;EACA,iBAAA;ACDF","sourcesContent":["ion-card {\n  ion-card-title {\n    font-size: 32px;\n    font-weight: bold;\n  }\n  ion-item {\n    --background: var(--ion-color-light);\n    margin: 0 0 8px;\n  }\n}\n\n.alert-errors {\n  width: 100%;\n  margin: 6px 0 0 0;\n}\n","ion-card ion-card-title {\n  font-size: 32px;\n  font-weight: bold;\n}\nion-card ion-item {\n  --background: var(--ion-color-light);\n  margin: 0 0 8px;\n}\n\n.alert-errors {\n  width: 100%;\n  margin: 6px 0 0 0;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 94487:
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/div-horizontal-slide/div-horizontal-slide.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".scrolling-wrapper-flexbox {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n\n.scrolling-wrapper-flexbox ::-webkit-scrollbar {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/app/shared/components/div-horizontal-slide/div-horizontal-slide.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/shared/components/div-horizontal-slide/div-horizontal-slide.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,wBAAA,EAAA,gBAAA;EACA,qBAAA,EAAA,YAAA;ACCF;;ADCA;EACE,aAAA;ACEF","sourcesContent":[".scrolling-wrapper-flexbox {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n.scrolling-wrapper-flexbox ::-webkit-scrollbar {\n  display: none;\n}\n",".scrolling-wrapper-flexbox {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n\n.scrolling-wrapper-flexbox ::-webkit-scrollbar {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2429:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/enquiry-badge/enquiry-badge.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 45023:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.footer-content .title {\n  color: var(--ion-color-dark);\n  font-size: 14px;\n}\n.footer-content .source a {\n  font-size: 12px;\n}", "",{"version":3,"sources":["webpack://./src/app/shared/components/footer/footer.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/shared/components/footer/footer.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;ACCF;ADAE;EACE,4BAAA;EACA,eAAA;ACEJ;ADCI;EACE,eAAA;ACCN","sourcesContent":[".footer-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  .title {\n    color: var(--ion-color-dark);\n    font-size: 14px;\n  }\n  .source {\n    a {\n      font-size: 12px;\n    }\n  }\n}\n",".footer-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.footer-content .title {\n  color: var(--ion-color-dark);\n  font-size: 14px;\n}\n.footer-content .source a {\n  font-size: 12px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 44400:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/modal-search/modal-search.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: var(--ion-color-light);\n}\n\nion-searchbar {\n  --box-shadow: none;\n  border-top: 1px solid rgba(12, 12, 12, 0.096);\n}\n\nion-toolbar {\n  --background: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n}", "",{"version":3,"sources":["webpack://./src/app/shared/components/modal-search/modal-search.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/shared/components/modal-search/modal-search.component.scss"],"names":[],"mappings":"AAAA;EACE,oCAAA;ACCF;;ADCA;EACE,kBAAA;EACA,6CAAA;ACEF;;ADAA;EACE,sCAAA;EACA,8BAAA;ACGF","sourcesContent":["ion-content {\n  --background: var(--ion-color-light);\n}\nion-searchbar {\n  --box-shadow: none;\n  border-top: 1px solid rgba(12, 12, 12, 0.096);\n}\nion-toolbar {\n  --background: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n}\n","ion-content {\n  --background: var(--ion-color-light);\n}\n\nion-searchbar {\n  --box-shadow: none;\n  border-top: 1px solid rgba(12, 12, 12, 0.096);\n}\n\nion-toolbar {\n  --background: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 52544:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/property-badge/property-badge.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu class=\"max-w-400\" contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-list-header>\n            <div class=\"logo-container\">\n              <img src=\"../assets/images/logo.png\" alt=\"logo\" />\n              <div class=\"logo-title\">\n\n              </div>\n            </div>\n          </ion-list-header>\n          <!-- <ion-note></ion-note> -->\n          <ion-menu-toggle\n            auto-hide=\"false\"\n            *ngFor=\"let p of appPages; let i = index\"\n          >\n            <ion-item\n              routerDirection=\"root\"\n              [routerLink]=\"[p.url]\"\n              lines=\"none\"\n              detail=\"false\"\n              routerLinkActive=\"selected\"\n            >\n              <ion-icon\n                slot=\"start\"\n                [ios]=\"p.icon + '-outline'\"\n                [md]=\"p.icon + '-sharp'\"\n              ></ion-icon>\n              <ion-label>{{ p.title || \"Menu Item\" }}</ion-label>\n              <!-- badge counter for unread messages -->\n              <ion-badge slot=\"end\" *ngIf=\"p.title === 'Enquiries' && unreadEnquiries\">\n                {{ unreadEnquiries }}\n              </ion-badge>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <ion-list id=\"labels-list\">\n          <ion-menu-toggle\n            auto-hide=\"false\"\n            *ngFor=\"let p of appLowerPages; let i = index\"\n            [hidden]=\"isHidden(p)\"\n          >\n            <ion-item\n              routerDirection=\"root\"\n              [routerLink]=\"[p.url]\"\n              lines=\"none\"\n              detail=\"false\"\n              routerLinkActive=\"selected\"\n            >\n              <ion-icon\n                slot=\"start\"\n                [ios]=\"p.icon + '-outline'\"\n                [md]=\"p.icon + '-sharp'\"\n              ></ion-icon>\n              <ion-label>{{ p.title || \"Menu Item\" }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle auto-hide=\"false\" [hidden]=\"!user\">\n            <ion-item button (click)=\"signOut()\" lines=\"none\" bu detail=\"false\">\n              <ion-icon\n                slot=\"start\"\n                [ios]=\"'log-out' + '-outline'\"\n                [md]=\"'log-out' + '-sharp'\"\n              ></ion-icon>\n              <ion-label>Sign Out</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";

/***/ }),

/***/ 18805:
/*!***********************************************************************!*\
  !*** ./src/app/map/map-leaflet/map-leaflet.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"map-container\">\n  <div id=\"mapId\"></div>\n</div>\n";

/***/ }),

/***/ 4683:
/*!*******************************************************************!*\
  !*** ./src/app/map/map-popup/map-popup.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"popup-container\">\n  <div *ngIf=\"property; else noProperty\">\n    <div class=\"name\">{{ property?.name }}</div>\n    <div class=\"type\">\n      <app-property-badge [type]=\"property.type\"></app-property-badge>\n    </div>\n    <div class=\"address\">\n      {{ property?.address }}\n    </div>\n    <ion-button\n      color=\"primary\"\n      expand=\"block\"\n      size=\"small\"\n      (click)=\"viewMore()\"\n    >\n      View More\n    </ion-button>\n  </div>\n\n  <ng-template #noProperty>\n    <strong>No Property Data</strong>\n  </ng-template>\n</div>\n";

/***/ }),

/***/ 55389:
/*!*********************************************************************************!*\
  !*** ./src/app/map/map-search-field/map-search-field.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"search-container\">\n  <div class=\"icon-container ion-justify-content-center ion-align-items-center\">\n    <ion-icon name=\"search-outline\"></ion-icon>\n  </div>\n  <input\n    type=\"text\"\n    placeholder=\"Search Cities..\"\n    (focus)=\"showSearchModal()\"\n    [(ngModel)]=\"field\"\n  />\n</div>\n";

/***/ }),

/***/ 62711:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/action-popup/action-popup.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list>\n  <ion-list-header class=\"heading-popup\">Select Action:</ion-list-header>\n  <ion-item *ngIf=\"message\">\n    <ion-button expand=\"block\" color=\"success\" (click)=\"close('message')\">\n      <ion-icon\n        name=\"chatbubble-ellipses-outline\"\n        style=\"margin: 0 8px 0 0\"\n      ></ion-icon>\n      Message\n    </ion-button>\n  </ion-item>\n\n  <ion-item *ngIf=\"edit\">\n    <ion-button expand=\"block\" color=\"primary\" (click)=\"close('edit')\">\n      <ion-icon name=\"pencil-outline\" style=\"margin: 0 8px 0 0\"></ion-icon>\n      Edit\n    </ion-button>\n  </ion-item>\n\n  <ion-item *ngIf=\"report\">\n    <ion-button expand=\"block\" color=\"warning\" (click)=\"close('report')\">\n      <ion-icon name=\"flag-outline\" style=\"margin: 0 8px 0 0\"></ion-icon>\n      Report\n    </ion-button>\n  </ion-item>\n\n  <ion-item *ngIf=\"delete\">\n    <ion-button expand=\"block\" color=\"danger\" (click)=\"close('delete')\">\n      <ion-icon name=\"trash-outline\" style=\"margin: 0 8px 0 0\"></ion-icon>\n      Delete\n    </ion-button>\n  </ion-item>\n\n  <ion-item lines=\"none\" detail=\"false\" button (click)=\"close()\">\n    Close\n  </ion-item>\n</ion-list>\n";

/***/ }),

/***/ 83919:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/alert-card/alert-card.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"alert\" [class]=\"color\">\n  <div><ion-icon name=\"alert-circle-outline\"></ion-icon></div>\n  <div #ngContent><ng-content></ng-content></div>\n  <span *ngIf=\"!ngContent.innerHTML.trim()\">{{ content }}</span>\n</div>\n";

/***/ }),

/***/ 21617:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/contact-form/contact-form.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card>\n  <ion-card-header>\n    <ion-card-title class=\"ion-text-capitalize\"> Contact Form </ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n    <form [formGroup]=\"contactForm\" (submit)=\"submit()\">\n      <ion-list>\n        <ion-item>\n          <ion-input\n            labelPlacement=\"floating\"\n            label=\"Email:\"\n            type=\"text\"\n            formControlName=\"email\"\n          ></ion-input>\n        </ion-item>\n\n        <div\n          class=\"alert-errors\"\n          *ngIf=\"error && contactForm.get('email').errors\"\n        >\n          <app-alert-card> Email is invalid. </app-alert-card>\n        </div>\n\n        <ion-item>\n          <ion-input\n            labelPlacement=\"floating\"\n            label=\"Name:\"\n            type=\"text\"\n            formControlName=\"name\"\n          ></ion-input>\n        </ion-item>\n\n        <div\n          class=\"alert-errors\"\n          *ngIf=\"error && contactForm.get('name').errors\"\n        >\n          <app-alert-card> Name must be filled correctly. </app-alert-card>\n        </div>\n\n        <ion-item>\n          <ion-textarea\n            formControlName=\"message\"\n            labelPlacement=\"floating\"\n            label=\"Message:\"\n            placeholder=\"Must be atleast 10 charters long\"\n          ></ion-textarea>\n        </ion-item>\n\n        <div\n          class=\"alert-errors\"\n          *ngIf=\"error && contactForm.get('message').errors\"\n        >\n          <app-alert-card>\n            Make sure the message are filled correctly.\n          </app-alert-card>\n        </div>\n      </ion-list>\n\n      <ion-button expand=\"block\" size=\"large\" type=\"submit\" [disabled]=\"sent\">\n        {{ sent ? \"Message Sent\" : \"Send message\" }}\n      </ion-button>\n    </form>\n  </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 72252:
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/div-horizontal-slide/div-horizontal-slide.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div\n  class=\"scrolling-wrapper-flexbox\"\n  #elemt\n  (mousedown)=\"startDragging($event, false, elemt)\"\n  (mouseup)=\"stopDragging($event, false)\"\n  (mouseleave)=\"stopDragging($event, false)\"\n  (mousemove)=\"moveEvent($event, elemt)\"\n>\n  <ng-content></ng-content>\n</div>\n";

/***/ }),

/***/ 99672:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/enquiry-badge/enquiry-badge.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-badge [color]=\"topicColor()\">\n  {{ topicLabel() }}\n</ion-badge>\n";

/***/ }),

/***/ 1933:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-footer>\n  <ion-toolbar>\n    <div class=\"footer-content\">\n      <div class=\"title\">Real Estate Management System</div>\n      <div class=\"source\">\n        <a href=\"https://github.com/eevan7a9/real-estate-management\">\n\n        </a>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ }),

/***/ 15099:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/modal-search/modal-search.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title color=\"light\">{{ title }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon\n          name=\"close-outline\"\n          color=\"light\"\n          style=\"font-size: 28px\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar\n      inputmode=\"text\"\n      spellcheck\n      animated\n      debounce=\"1000\"\n      #SearchField\n      (ionChange)=\"searching($event)\"\n      [placeholder]=\"placeholder\"\n    ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-progress-bar\n    class=\"ion-margin-top\"\n    type=\"indeterminate\"\n    *ngIf=\"progress\"\n  ></ion-progress-bar>\n\n  <ion-list *ngIf=\"!progress\">\n    <ion-item\n      button\n      lines=\"full\"\n      *ngFor=\"let item of itemsDisplayed\"\n      (click)=\"selected(item)\"\n    >\n      <ion-label>\n        {{ displayProperty ? item[displayProperty] : item }}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 85767:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/property-badge/property-badge.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-badge [color]=\"typeColor()\">\n  {{ typeLabel() }}\n</ion-badge>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map