(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_map_map_module_ts"],{

/***/ 41024:
/*!************************************************************************!*\
  !*** ./src/app/map/map-markers-legend/map-markers-legend.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapMarkersLegendComponent": () => (/* binding */ MapMarkersLegendComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _map_markers_legend_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-markers-legend.component.html?ngResource */ 20204);
/* harmony import */ var _map_markers_legend_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-markers-legend.component.scss?ngResource */ 42285);
/* harmony import */ var _map_markers_legend_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_map_markers_legend_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/property */ 14750);





let MapMarkersLegendComponent = class MapMarkersLegendComponent {
  constructor() {
    this.toggledMarker = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.markers = [{
      label: 'Residential',
      value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.residential,
      isChecked: true,
      icon: 'marker-residential.svg'
    }, {
      label: 'Commercial',
      value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.commercial,
      isChecked: true,
      icon: 'marker-commercial.svg'
    }, {
      label: 'Industrial',
      value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.industrial,
      isChecked: true,
      icon: 'marker-industrial.svg'
    }, {
      label: 'Land',
      value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.land,
      isChecked: true,
      icon: 'marker-land.svg'
    }];
  }
  ngOnInit() {}
  markerSelected(marker) {
    this.toggledMarker.emit({
      type: marker.value,
      isChecked: marker.isChecked
    });
  }
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    toggledMarker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  };
};
MapMarkersLegendComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-map-markers-legend',
  template: _map_markers_legend_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_map_markers_legend_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MapMarkersLegendComponent);


/***/ }),

/***/ 81216:
/*!*******************************************!*\
  !*** ./src/app/map/map-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageRoutingModule": () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 69510);




const routes = [{
  path: '',
  component: _map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage
}];
let MapPageRoutingModule = class MapPageRoutingModule {};
MapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], MapPageRoutingModule);


/***/ }),

/***/ 42622:
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageModule": () => (/* binding */ MapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-routing.module */ 81216);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page */ 69510);
/* harmony import */ var _map_popup_map_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-popup/map-popup.component */ 29804);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _map_markers_legend_map_markers_legend_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-markers-legend/map-markers-legend.component */ 41024);
/* harmony import */ var _shared_components_modal_search_modal_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/modal-search/modal-search.component */ 96455);
/* harmony import */ var _properties_properties_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../properties/properties.module */ 11199);












let MapPageModule = class MapPageModule {};
MapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _properties_properties_module__WEBPACK_IMPORTED_MODULE_6__.PropertiesPageModule],
  declarations: [_map_page__WEBPACK_IMPORTED_MODULE_1__.MapPage, _map_popup_map_popup_component__WEBPACK_IMPORTED_MODULE_2__.MapPopupComponent, _map_markers_legend_map_markers_legend_component__WEBPACK_IMPORTED_MODULE_4__.MapMarkersLegendComponent, _shared_components_modal_search_modal_search_component__WEBPACK_IMPORTED_MODULE_5__.ModalSearchComponent]
})], MapPageModule);


/***/ }),

/***/ 69510:
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPage": () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page.html?ngResource */ 7122);
/* harmony import */ var _map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page.scss?ngResource */ 96399);
/* harmony import */ var _map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_enums_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/enums/property */ 14750);





let MapPage = class MapPage {
  constructor() {
    this.visibleType = [_shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.residential.toString(), _shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.commercial.toString(), _shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.industrial.toString(), _shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.land.toString()];
  }
  ngOnInit() {}
  setVisibleMarkerType(event) {
    if (!event.isChecked) {
      this.visibleType = this.visibleType.filter(v => v !== event.type);
    } else {
      this.visibleType = [...this.visibleType, event.type];
    }
  }
  static #_ = this.ctorParameters = () => [];
};
MapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-map',
  template: _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MapPage);


/***/ }),

/***/ 42285:
/*!*************************************************************************************!*\
  !*** ./src/app/map/map-markers-legend/map-markers-legend.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".map-marker-info {\n  z-index: 400;\n  position: absolute;\n  right: 0;\n  bottom: 24px;\n  background-color: transparent;\n  padding: 4px;\n}\n.map-marker-info ion-item {\n  --background: rgba(255, 255, 255, 0.185);\n  --inner-padding-top: 0;\n  --inner-padding-bottom: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 4px;\n  --padding-end: 0;\n  --color: var(--ion-color-dark);\n  -webkit-text-stroke: 1px var(--ion-color-dark);\n  font-size: 13px;\n  line-height: 15px;\n}\n.map-marker-info ion-item img {\n  height: 30px;\n  width: 30px;\n}\n.map-marker-info ion-item ion-checkbox {\n  margin-right: 6px;\n}\n\n@media (max-width: 992px) {\n  .text {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/map/map-markers-legend/map-markers-legend.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/map/map-markers-legend/map-markers-legend.component.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,kBAAA;EACA,QAAA;EACA,YAAA;EACA,6BAAA;EACA,YAAA;ACCF;ADAE;EACE,wCAAA;EACA,sBAAA;EACA,yBAAA;EACA,gBAAA;EACA,mBAAA;EACA,oBAAA;EACA,gBAAA;EACA,8BAAA;EACA,8CAAA;EACA,eAAA;EACA,iBAAA;ACEJ;ADDI;EACE,YAAA;EACA,WAAA;ACGN;ADDI;EACE,iBAAA;ACGN;;ADCA;EACE;IACE,aAAA;ECEF;AACF","sourcesContent":[".map-marker-info {\n  z-index: 400;\n  position: absolute;\n  right: 0;\n  bottom: 24px;\n  background-color: transparent;\n  padding: 4px;\n  ion-item {\n    --background: rgba(255, 255, 255, 0.185);\n    --inner-padding-top: 0;\n    --inner-padding-bottom: 0;\n    --padding-top: 0;\n    --padding-bottom: 0;\n    --padding-start: 4px;\n    --padding-end: 0;\n    --color: var(--ion-color-dark);\n    -webkit-text-stroke: 1px var(--ion-color-dark);\n    font-size: 13px;\n    line-height: 15px;\n    img {\n      height: 30px;\n      width: 30px;\n    }\n    ion-checkbox {\n      margin-right: 6px;\n    }\n  }\n}\n@media (max-width: 992px) {\n  .text {\n    display: none;\n  }\n}\n",".map-marker-info {\n  z-index: 400;\n  position: absolute;\n  right: 0;\n  bottom: 24px;\n  background-color: transparent;\n  padding: 4px;\n}\n.map-marker-info ion-item {\n  --background: rgba(255, 255, 255, 0.185);\n  --inner-padding-top: 0;\n  --inner-padding-bottom: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 4px;\n  --padding-end: 0;\n  --color: var(--ion-color-dark);\n  -webkit-text-stroke: 1px var(--ion-color-dark);\n  font-size: 13px;\n  line-height: 15px;\n}\n.map-marker-info ion-item img {\n  height: 30px;\n  width: 30px;\n}\n.map-marker-info ion-item ion-checkbox {\n  margin-right: 6px;\n}\n\n@media (max-width: 992px) {\n  .text {\n    display: none;\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 96399:
/*!**********************************************!*\
  !*** ./src/app/map/map.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-grid {\n  height: 100%;\n  min-height: 100%;\n}\n\nion-row.h-100 {\n  height: 100%;\n  min-height: 100%;\n}\n\n.map-section {\n  background-color: var(--ion-color-light-shade);\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n.horizontal-slides-container {\n  margin-bottom: 60px;\n  width: 100%;\n}\n\n.extra-section {\n  background-color: var(--ion-color-light);\n  overflow: hidden;\n  overflow-y: scroll;\n  height: 100%;\n  width: 100%;\n}\n.extra-section .properties-list {\n  max-width: 500px;\n}\n\n@media (max-width: 992px) {\n  .map-section {\n    height: 70%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/map/map.page.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/map/map.page.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,gBAAA;ACCF;;ADCA;EACE,YAAA;EACA,gBAAA;ACEF;;ADCA;EACE,8CAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;ACEF;;ADCA;EACE,mBAAA;EACA,WAAA;ACEF;;ADCA;EACE,wCAAA;EACA,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;ACEF;ADDE;EACE,gBAAA;ACGJ;;ADCA;EACE;IACE,WAAA;ECEF;AACF","sourcesContent":["ion-grid {\n  height: 100%;\n  min-height: 100%;\n}\nion-row.h-100 {\n  height: 100%;\n  min-height: 100%;\n}\n\n.map-section {\n  background-color: var(--ion-color-light-shade);\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n.horizontal-slides-container {\n  margin-bottom: 60px;\n  width: 100%;\n}\n\n.extra-section {\n  background-color: var(--ion-color-light);\n  overflow: hidden;\n  overflow-y: scroll;\n  height: 100%;\n  width: 100%;\n  .properties-list {\n    max-width: 500px;\n  }\n}\n\n@media (max-width: 992px) {\n  .map-section {\n    height: 70%;\n  }\n}\n","ion-grid {\n  height: 100%;\n  min-height: 100%;\n}\n\nion-row.h-100 {\n  height: 100%;\n  min-height: 100%;\n}\n\n.map-section {\n  background-color: var(--ion-color-light-shade);\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n.horizontal-slides-container {\n  margin-bottom: 60px;\n  width: 100%;\n}\n\n.extra-section {\n  background-color: var(--ion-color-light);\n  overflow: hidden;\n  overflow-y: scroll;\n  height: 100%;\n  width: 100%;\n}\n.extra-section .properties-list {\n  max-width: 500px;\n}\n\n@media (max-width: 992px) {\n  .map-section {\n    height: 70%;\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 20204:
/*!*************************************************************************************!*\
  !*** ./src/app/map/map-markers-legend/map-markers-legend.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list class=\"map-marker-info\">\n  <ion-item\n    lines=\"none\"\n    *ngFor=\"let marker of markers\"\n    (click)=\"markerSelected(marker)\"\n  >\n    <img [src]=\"'./assets/images/map/' + marker.icon\" alt=\"marker\" srcset=\"\" />\n    <ion-checkbox color=\"primary\" [(ngModel)]=\"marker.isChecked\"></ion-checkbox>\n    <span class=\"text\">{{ marker.label }}</span>\n  </ion-item>\n</ion-list>\n";

/***/ }),

/***/ 7122:
/*!**********************************************!*\
  !*** ./src/app/map/map.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Map Page</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"h-100\">\n      <ion-col size=\"12\" sizeLg=\"8\" sizeXl=\"9\" class=\"map-section\">\n        <app-map-search-field\n          (selectedLocation)=\"mapLeaflet.setMapCenter($event)\"\n        ></app-map-search-field>\n        <app-map-leaflet\n          #mapLeaflet\n          [visibleMarkerType]=\"visibleType\"\n        ></app-map-leaflet>\n        <app-map-markers-legend\n          (toggledMarker)=\"setVisibleMarkerType($event)\"\n        ></app-map-markers-legend>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"ion-hide-lg-up\">\n        <div class=\"horizontal-slides-container\">\n          <app-properties-list [horizontalSlide]=\"true\"></app-properties-list>\n        </div>\n      </ion-col>\n\n      <ion-col\n        size=\"0\"\n        sizeLg=\"4\"\n        sizeXl=\"3\"\n        class=\"extra-section ion-hide-lg-down\"\n      >\n        <div class=\"properties-list\">\n          <app-properties-list\n            class=\"properties-list\"\n            [singleCol]=\"true\"\n            [limit]=\"10\"\n          ></app-properties-list>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"ion-no-padding ion-hide-lg-up\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_map_map_module_ts.js.map