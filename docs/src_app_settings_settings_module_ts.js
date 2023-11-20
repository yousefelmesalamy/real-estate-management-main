(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 44737:
/*!*********************************************************************************************!*\
  !*** ./src/app/properties/properties-coordinates-modal/properties-coordinates.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesCoordinatesComponent": () => (/* binding */ PropertiesCoordinatesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _properties_coordinates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties-coordinates.component.html?ngResource */ 98369);
/* harmony import */ var _properties_coordinates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-coordinates.component.scss?ngResource */ 81981);
/* harmony import */ var _properties_coordinates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_properties_coordinates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 32124);





let PropertiesCoordinatesComponent = class PropertiesCoordinatesComponent {
  constructor(modalCtrl) {
    this.modalCtrl = modalCtrl;
    this.title = 'Set Property Marker';
  }
  ngOnInit() {}
  setCoord(event) {
    this.coord = event;
  }
  confirmed() {
    this.modalCtrl.dismiss(this.coord);
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
  }];
  static #_2 = this.propDecorators = {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  };
};
PropertiesCoordinatesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-properties-coordinates',
  template: _properties_coordinates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_properties_coordinates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PropertiesCoordinatesComponent);


/***/ }),

/***/ 35144:
/*!*************************************************************************************!*\
  !*** ./src/app/settings/settings-coord-default/settings-coord-default.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsCoordDefaultComponent": () => (/* binding */ SettingsCoordDefaultComponent)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _settings_coord_default_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-coord-default.component.html?ngResource */ 25734);
/* harmony import */ var _settings_coord_default_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-coord-default.component.scss?ngResource */ 12582);
/* harmony import */ var _settings_coord_default_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_settings_coord_default_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var src_app_properties_properties_coordinates_modal_properties_coordinates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/properties/properties-coordinates-modal/properties-coordinates.component */ 44737);
/* harmony import */ var src_app_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/storage/storage.service */ 53328);








let SettingsCoordDefaultComponent = class SettingsCoordDefaultComponent {
  constructor(toastController, storageService, modalCtrl) {
    this.toastController = toastController;
    this.storageService = storageService;
    this.modalCtrl = modalCtrl;
    this.coord = {
      lat: 8.947416086535465,
      lng: 125.5451552207221
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.storageService.init();
      const coord = yield _this.storageService.getCoord();
      if (coord) {
        _this.coord = coord;
      }
    })();
  }
  setCoord() {
    var _this2 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.storageService.setCoord(_this2.coord);
      const toast = yield _this2.toastController.create({
        color: 'success',
        message: 'Your settings have been saved.',
        duration: 2000
      });
      ;
      toast.present();
    })();
  }
  resetCoord() {
    var _this3 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.coord = {
        lat: 8.947416086535465,
        lng: 125.5451552207221
      };
      _this3.storageService.setCoord(_this3.coord);
      const toast = yield _this3.toastController.create({
        color: 'success',
        message: 'Your settings have been Reset.',
        duration: 2000
      });
      ;
      toast.present();
    })();
  }
  openMap() {
    var _this4 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalCtrl.create({
        component: src_app_properties_properties_coordinates_modal_properties_coordinates_component__WEBPACK_IMPORTED_MODULE_3__.PropertiesCoordinatesComponent,
        componentProps: {
          title: 'Select desired location.'
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        const {
          lat,
          lng
        } = data;
        _this4.coord = {
          lat,
          lng
        };
      }
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
  }, {
    type: src_app_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }];
};
SettingsCoordDefaultComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-settings-coord-default',
  template: _settings_coord_default_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_settings_coord_default_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SettingsCoordDefaultComponent);


/***/ }),

/***/ 91836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 7162);




const routes = [{
  path: '',
  component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
}];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SettingsPageRoutingModule);


/***/ }),

/***/ 9561:
/*!*********************************************************************!*\
  !*** ./src/app/settings/settings-theme/settings-theme.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsThemeComponent": () => (/* binding */ SettingsThemeComponent)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _settings_theme_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-theme.component.html?ngResource */ 56511);
/* harmony import */ var _settings_theme_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-theme.component.scss?ngResource */ 39197);
/* harmony import */ var _settings_theme_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_settings_theme_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var src_app_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/storage/storage.service */ 53328);







let SettingsThemeComponent = class SettingsThemeComponent {
  constructor(platform, storage) {
    this.platform = platform;
    this.storage = storage;
    this.darkTheme = false;
  }
  ngAfterViewInit() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.storage.init();
      _this.darkTheme = yield _this.storage.getDartTheme();
    })();
  }
  switchDarkMode(event) {
    if (event.detail.checked) {
      document.body.classList.add('dark');
      this.storage.setDarkTheme(true);
    } else {
      document.body.classList.remove('dark');
      this.storage.setDarkTheme(false);
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform
  }, {
    type: src_app_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
  }];
};
SettingsThemeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-settings-theme',
  template: _settings_theme_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_settings_theme_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SettingsThemeComponent);


/***/ }),

/***/ 27075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 91836);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 7162);
/* harmony import */ var _settings_theme_settings_theme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-theme/settings-theme.component */ 9561);
/* harmony import */ var _settings_coord_default_settings_coord_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-coord-default/settings-coord-default.component */ 35144);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 44466);










let SettingsPageModule = class SettingsPageModule {};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
  declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage, _settings_theme_settings_theme_component__WEBPACK_IMPORTED_MODULE_2__.SettingsThemeComponent, _settings_coord_default_settings_coord_default_component__WEBPACK_IMPORTED_MODULE_3__.SettingsCoordDefaultComponent]
})], SettingsPageModule);


/***/ }),

/***/ 7162:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 75375);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 96339);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let SettingsPage = class SettingsPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-settings',
  template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SettingsPage);


/***/ }),

/***/ 81981:
/*!**********************************************************************************************************!*\
  !*** ./src/app/properties/properties-coordinates-modal/properties-coordinates.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-fab {\n  margin-top: 90px;\n}\n\n.notice-container {\n  width: 200px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  color: var(--ion-color-dark);\n  background: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n}\n.notice-container ion-icon {\n  font-size: 24px;\n  margin-left: 8px;\n}\n\n.page-container {\n  background-color: var(--ion-color-light-tint);\n  height: 100%;\n}\n\n.btn-contianer {\n  z-index: 400;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.btn-contianer ion-button {\n  --padding-end: 24px;\n  --padding-start: 24px;\n  margin: 0 0 32px 0;\n}", "",{"version":3,"sources":["webpack://./src/app/properties/properties-coordinates-modal/properties-coordinates.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/properties/properties-coordinates-modal/properties-coordinates.component.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;ACCF;;ADCA;EACE,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4BAAA;EACA,oCAAA;EAEA,aAAA;EACA,mBAAA;ACCF;ADAE;EACE,eAAA;EACA,gBAAA;ACEJ;;ADEA;EACE,6CAAA;EACA,YAAA;ACCF;;ADCA;EACE,YAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;ACEF;ADDE;EACE,mBAAA;EACA,qBAAA;EACA,kBAAA;ACGJ","sourcesContent":["ion-fab {\n  margin-top: 90px;\n}\n.notice-container {\n  width: 200px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  color: var(--ion-color-dark);\n  background: var(--ion-color-primary);\n\n  display: flex;\n  align-items: center;\n  ion-icon {\n    font-size: 24px;\n    margin-left: 8px;\n  }\n}\n\n.page-container {\n  background-color: var(--ion-color-light-tint);\n  height: 100%;\n}\n.btn-contianer {\n  z-index: 400;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  ion-button {\n    --padding-end: 24px;\n    --padding-start: 24px;\n    margin: 0 0 32px 0;\n  }\n}\n","ion-fab {\n  margin-top: 90px;\n}\n\n.notice-container {\n  width: 200px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  color: var(--ion-color-dark);\n  background: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n}\n.notice-container ion-icon {\n  font-size: 24px;\n  margin-left: 8px;\n}\n\n.page-container {\n  background-color: var(--ion-color-light-tint);\n  height: 100%;\n}\n\n.btn-contianer {\n  z-index: 400;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.btn-contianer ion-button {\n  --padding-end: 24px;\n  --padding-start: 24px;\n  margin: 0 0 32px 0;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 12582:
/*!**************************************************************************************************!*\
  !*** ./src/app/settings/settings-coord-default/settings-coord-default.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".heading {\n  font-size: 24px;\n  line-height: 150%;\n  margin-top: 50px 0 0 0;\n  font-weight: bold;\n}\n\nion-item {\n  --background: var(--ion-color-light);\n}\n\nion-button {\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-button.reset {\n  --background: transparent;\n  --background-hover: transparent;\n  --box-shadow: none;\n  --color: var(--ion-color-dark);\n}", "",{"version":3,"sources":["webpack://./src/app/settings/settings-coord-default/settings-coord-default.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/settings/settings-coord-default/settings-coord-default.component.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,iBAAA;EACA,sBAAA;EACA,iBAAA;ACCF;;ADGA;EACE,oCAAA;ACAF;;ADEA;EACE,qBAAA;EACA,mBAAA;EACA,mBAAA;EACA,sBAAA;ACCF;ADAE;EACE,yBAAA;EACA,+BAAA;EACA,kBAAA;EACA,8BAAA;ACEJ","sourcesContent":[".heading {\n  font-size: 24px;\n  line-height: 150%;\n  margin-top: 50px 0 0 0;\n  font-weight: bold;\n  // background-color: var(--ion-color-light);\n}\n\nion-item {\n  --background: var(--ion-color-light);\n}\nion-button {\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  &.reset {\n    --background: transparent;\n    --background-hover: transparent;\n    --box-shadow: none;\n    --color: var(--ion-color-dark);\n  }\n}\n",".heading {\n  font-size: 24px;\n  line-height: 150%;\n  margin-top: 50px 0 0 0;\n  font-weight: bold;\n}\n\nion-item {\n  --background: var(--ion-color-light);\n}\n\nion-button {\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-button.reset {\n  --background: transparent;\n  --background-hover: transparent;\n  --box-shadow: none;\n  --color: var(--ion-color-dark);\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 39197:
/*!**********************************************************************************!*\
  !*** ./src/app/settings/settings-theme/settings-theme.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".heading {\n  font-size: 24px;\n  line-height: 150%;\n  margin-top: 50px 0 0 0;\n  font-weight: bold;\n}\n\nion-item {\n  --background: var(--ion-color-light);\n}", "",{"version":3,"sources":["webpack://./src/app/settings/settings-theme/settings-theme.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/settings/settings-theme/settings-theme.component.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,iBAAA;EACA,sBAAA;EACA,iBAAA;ACCF;;ADEA;EACE,oCAAA;ACCF","sourcesContent":[".heading {\n  font-size: 24px;\n  line-height: 150%;\n  margin-top: 50px 0 0 0;\n  font-weight: bold;\n  // background-color: var(--ion-color-light-shade);\n}\nion-item {\n  --background: var(--ion-color-light);\n}\n",".heading {\n  font-size: 24px;\n  line-height: 150%;\n  margin-top: 50px 0 0 0;\n  font-weight: bold;\n}\n\nion-item {\n  --background: var(--ion-color-light);\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 96339:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".settings-container {\n  max-width: 1600px;\n  margin: 0 auto;\n}", "",{"version":3,"sources":["webpack://./src/app/settings/settings.page.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/settings/settings.page.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,cAAA;ACCF","sourcesContent":[".settings-container {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n",".settings-container {\n  max-width: 1600px;\n  margin: 0 auto;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 98369:
/*!**********************************************************************************************************!*\
  !*** ./src/app/properties/properties-coordinates-modal/properties-coordinates.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon name=\"close-outline\" style=\"font-size: 28px\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"page-container\">\n    <app-map-search-field\n      (selectedLocation)=\"mapLeaflet.setMapCenter($event)\"\n    ></app-map-search-field>\n    <app-map-leaflet\n      #mapLeaflet\n      [showPropertyMarkers]=\"false\"\n      [clickAddMarker]=\"true\"\n      (clickedAt)=\"setCoord($event)\"\n    ></app-map-leaflet>\n  </div>\n\n  <div class=\"btn-contianer\" *ngIf=\"coord\">\n    <ion-button color=\"success\" (click)=\"confirmed()\">Confirm</ion-button>\n  </div>\n\n  <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"help-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <div class=\"notice-container\">\n        <ion-text color=\"light\">\n          Click/Tap at the map to place the marker.\n        </ion-text>\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </div>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n";

/***/ }),

/***/ 25734:
/*!**************************************************************************************************!*\
  !*** ./src/app/settings/settings-coord-default/settings-coord-default.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"ion-margin-top\">\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <div class=\"heading ion-padding\">\n          <ion-text color=\"dark\">Change Default Coordinates</ion-text>\n          <ion-button size=\"small\" class=\"ion-margin-start\" (click)=\"openMap()\">\n            open map <ion-icon name=\"map-outline\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"12\" sizeLg=\"6\">\n        <ion-item>\n          <ion-input label=\"Latitude:\" [(ngModel)]=\"coord.lat\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\" sizeLg=\"6\">\n        <ion-item>\n          <ion-input label=\"Longitude:\" [(ngModel)]=\"coord.lng\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-button color=\"primary\" (click)=\"setCoord()\">\n          set Coordinates</ion-button\n        >\n        <ion-button class=\"reset ion-margin-start\" (click)=\"resetCoord()\">\n          Reset Coordinates\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n";

/***/ }),

/***/ 56511:
/*!**********************************************************************************!*\
  !*** ./src/app/settings/settings-theme/settings-theme.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"ion-margin-top\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <div class=\"heading ion-padding\">\n          <ion-text color=\"dark\">Change Application Theme -</ion-text>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-icon\n            style=\"margin: 0 6px 0 0\"\n            name=\"moon\"\n            color=\"dark\"\n            *ngIf=\"darkTheme; else sunny\"\n          ></ion-icon>\n          <ion-label color=\"dark\"> Theme Switcher</ion-label>\n\n          <ion-item-option color=\"light\" slot=\"end\">\n            <ion-toggle\n            [(ngModel)]=\"darkTheme\"\n            (ionChange)=\"switchDarkMode($event)\"\n            aria-label=\"change theme\"\n          ></ion-toggle>\n          </ion-item-option>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<ng-template #sunny>\n  <ion-icon style=\"margin: 0 6px 0 0\" name=\"sunny\" color=\"warning\"></ion-icon\n></ng-template>\n";

/***/ }),

/***/ 75375:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Settings Page</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"settings-container ion-padding-vertical\">\n    <app-settings-theme></app-settings-theme>\n    <app-settings-coord-default></app-settings-coord-default>\n  </div>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map