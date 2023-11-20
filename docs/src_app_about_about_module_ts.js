(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_about_about_module_ts"],{

/***/ 88057:
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 44518);




const routes = [{
  path: '',
  component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
}];
let AboutPageRoutingModule = class AboutPageRoutingModule {};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AboutPageRoutingModule);


/***/ }),

/***/ 46985:
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 88057);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page */ 44518);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);








let AboutPageModule = class AboutPageModule {};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
  declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage]
})], AboutPageModule);


/***/ }),

/***/ 44518:
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _about_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page.html?ngResource */ 4687);
/* harmony import */ var _about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss?ngResource */ 11063);
/* harmony import */ var _about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AboutPage = class AboutPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-about',
  template: _about_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AboutPage);


/***/ }),

/***/ 11063:
/*!**************************************************!*\
  !*** ./src/app/about/about.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: var(--ion-color-light);\n  padding: 0;\n  margin: 0;\n}\n\nion-card {\n  box-shadow: none;\n}\nion-card.pb-32 {\n  padding-bottom: 32px;\n}\n\np.text {\n  font-size: 17px;\n  letter-spacing: 0.4px;\n}\np.text.pt-32 {\n  padding-top: 32px;\n}\n\n.about-container {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\n.heading-card {\n  font-size: 42px;\n  font-weight: bold;\n  color: black;\n  -webkit-text-fill-color: var(--ion-color-light-tint); /* Will override color (regardless of order) */\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: var(--ion-color-primary-shade);\n}\n\n.separator-line {\n  padding: 3px;\n  width: 250px;\n  border-radius: 2px;\n  background: var(--ion-color-primary);\n}\n\n.map-container {\n  display: flex;\n  justify-content: center;\n}\n\n.try-us-section {\n  display: flex;\n  justify-content: center;\n  padding: 100px 0;\n  margin: 52px 0 0 0;\n  background: url('about-bg-contact.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.feature-section ion-card-title {\n  font-size: 18px;\n}\n.feature-section ion-card-title.heading-card {\n  font-size: 42px;\n  font-weight: bold;\n}\n.feature-section ion-card-title ion-text {\n  font-weight: bold;\n  font-size: 32px;\n}\n.feature-section .features {\n  display: flex;\n  justify-content: center;\n  height: 300px;\n}\n\n.contact-section {\n  background: var(--ion-color-primary);\n  background: url('about-bg-contact.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: left;\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 16px 0;\n}\n.contact-section .left-side {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.contact-section .left-side .heading {\n  font-size: 32px;\n  color: aliceblue;\n  font-weight: 700;\n}\n.contact-section .left-side .sub-heading {\n  color: rgb(201, 204, 206);\n  letter-spacing: 0.8px;\n}", "",{"version":3,"sources":["webpack://./src/app/about/about.page.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/about/about.page.scss"],"names":[],"mappings":"AAAA;EACE,oCAAA;EACA,UAAA;EACA,SAAA;ACCF;;ADCA;EACE,gBAAA;ACEF;ADDE;EACE,oBAAA;ACGJ;;ADAA;EACE,eAAA;EACA,qBAAA;ACGF;ADFE;EACE,iBAAA;ACIJ;;ADDA;EACE,iBAAA;EACA,cAAA;ACIF;;ADDA;EACE,eAAA;EACA,iBAAA;EAEA,YAAA;EACA,oDAAA,EAEG,8CAAA;EACH,8BAAA;EACA,yDAAA;ACCF;;ADEA;EACE,YAAA;EACA,YAAA;EACA,kBAAA;EACA,oCAAA;ACCF;;ADCA;EACE,aAAA;EACA,uBAAA;ACEF;;ADCA;EACE,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,kBAAA;EAEA,uCAAA;EACA,sBAAA;EACA,4BAAA;EACA,2BAAA;ACCF;;ADGE;EACE,eAAA;ACAJ;ADCI;EACE,eAAA;EACA,iBAAA;ACCN;ADCI;EACE,iBAAA;EACA,eAAA;ACCN;ADEE;EACE,aAAA;EACA,uBAAA;EACA,aAAA;ACAJ;;ADIA;EACE,oCAAA;EACA,uCAAA;EACA,sBAAA;EACA,4BAAA;EACA,yBAAA;EAEA,iBAAA;EACA,cAAA;EACA,eAAA;ACFF;ADGE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;ACDJ;ADEI;EACE,eAAA;EACA,gBAAA;EACA,gBAAA;ACAN;ADEI;EACE,yBAAA;EACA,qBAAA;ACAN","sourcesContent":["ion-content {\n  --background: var(--ion-color-light);\n  padding: 0;\n  margin: 0;\n}\nion-card {\n  box-shadow: none;\n  &.pb-32 {\n    padding-bottom: 32px;\n  }\n}\np.text {\n  font-size: 17px;\n  letter-spacing: 0.4px;\n  &.pt-32 {\n    padding-top: 32px;\n  }\n}\n.about-container {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\n.heading-card {\n  font-size: 42px;\n  font-weight: bold;\n\n  color: black;\n  -webkit-text-fill-color: var(\n    --ion-color-light-tint\n  ); /* Will override color (regardless of order) */\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: var(--ion-color-primary-shade);\n}\n\n.separator-line {\n  padding: 3px;\n  width: 250px;\n  border-radius: 2px;\n  background: var(--ion-color-primary);\n}\n.map-container {\n  display: flex;\n  justify-content: center;\n}\n\n.try-us-section {\n  display: flex;\n  justify-content: center;\n  padding: 100px 0;\n  margin: 52px 0 0 0;\n\n  background: url(../../assets/images/about/about-bg-contact.svg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.feature-section {\n  ion-card-title {\n    font-size: 18px;\n    &.heading-card {\n      font-size: 42px;\n      font-weight: bold;\n    }\n    ion-text {\n      font-weight: bold;\n      font-size: 32px;\n    }\n  }\n  .features {\n    display: flex;\n    justify-content: center;\n    height: 300px;\n  }\n}\n\n.contact-section {\n  background: var(--ion-color-primary);\n  background: url(../../assets/images/about/about-bg-contact.svg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: left;\n\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 16px 0;\n  .left-side {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    .heading {\n      font-size: 32px;\n      color: aliceblue;\n      font-weight: 700;\n    }\n    .sub-heading {\n      color: rgb(201, 204, 206);\n      letter-spacing: 0.8px;\n    }\n  }\n}\n","ion-content {\n  --background: var(--ion-color-light);\n  padding: 0;\n  margin: 0;\n}\n\nion-card {\n  box-shadow: none;\n}\nion-card.pb-32 {\n  padding-bottom: 32px;\n}\n\np.text {\n  font-size: 17px;\n  letter-spacing: 0.4px;\n}\np.text.pt-32 {\n  padding-top: 32px;\n}\n\n.about-container {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\n.heading-card {\n  font-size: 42px;\n  font-weight: bold;\n  color: black;\n  -webkit-text-fill-color: var(--ion-color-light-tint); /* Will override color (regardless of order) */\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: var(--ion-color-primary-shade);\n}\n\n.separator-line {\n  padding: 3px;\n  width: 250px;\n  border-radius: 2px;\n  background: var(--ion-color-primary);\n}\n\n.map-container {\n  display: flex;\n  justify-content: center;\n}\n\n.try-us-section {\n  display: flex;\n  justify-content: center;\n  padding: 100px 0;\n  margin: 52px 0 0 0;\n  background: url(../../assets/images/about/about-bg-contact.svg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.feature-section ion-card-title {\n  font-size: 18px;\n}\n.feature-section ion-card-title.heading-card {\n  font-size: 42px;\n  font-weight: bold;\n}\n.feature-section ion-card-title ion-text {\n  font-weight: bold;\n  font-size: 32px;\n}\n.feature-section .features {\n  display: flex;\n  justify-content: center;\n  height: 300px;\n}\n\n.contact-section {\n  background: var(--ion-color-primary);\n  background: url(../../assets/images/about/about-bg-contact.svg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: left;\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 16px 0;\n}\n.contact-section .left-side {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.contact-section .left-side .heading {\n  font-size: 32px;\n  color: aliceblue;\n  font-weight: 700;\n}\n.contact-section .left-side .sub-heading {\n  color: rgb(201, 204, 206);\n  letter-spacing: 0.8px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4687:
/*!**************************************************!*\
  !*** ./src/app/about/about.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>About Page</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"about-container\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card color=\"light\" class=\"ion-margin-top pb-32\">\n            <ion-card-header>\n              <ion-card-title class=\"heading-card\">Application</ion-card-title>\n            </ion-card-header>\n            <div class=\"separator-line\"></div>\n            <ion-card-content class=\"ion-padding-horizontal\">\n              <p class=\"text\">\n                <ion-text color=\"dark\">\n                  A online property management solution for real estate and\n                  physical property management. This can include residential,\n                  commercial, and land real estate. a software developed to\n                  connect property managers and potential buyers.\n                </ion-text>\n              </p>\n              <p class=\"text ion-padding-top\">\n                <ion-text color=\"dark\">\n                  Whether you operate 1 to 100 properties this app will help you\n                  advertise, manage and sell your properties to potential\n                  buyers.\n                </ion-text>\n              </p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" sizeLg=\"6\" class=\"map-container\">\n          <img src=\"assets/images/about/about-map.svg\" alt=\"map image\" />\n        </ion-col>\n        <ion-col size=\"12\" sizeLg=\"6\">\n          <ion-card color=\"light\" class=\"pb-32\">\n            <ion-card-header>\n              <ion-card-title class=\"heading-card\">MAP VIEW</ion-card-title>\n            </ion-card-header>\n            <div class=\"separator-line\"></div>\n            <ion-card-content class=\"ion-padding-bottom\">\n              <p class=\"text\">\n                <ion-text color=\"dark\">\n                  Maps can be a useful tool for viewing properties location &\n                  filter them by types. this also help us to know distances so\n                  that we know how far away one thing is from another.\n                </ion-text>\n              </p>\n              <p class=\"text ion-padding-top\">\n                <ion-text color=\"dark\">\n                  You might not necessarily want to find the fastest route from\n                  property A to property B, you might want to take the scenic\n                  route. Knowing how to spot mountains, lakes, coastline and\n                  historic sites on a map helps you to plan which property to\n                  visit.\n                </ion-text>\n              </p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"try-us-section\">\n    <ion-button color=\"success\" size=\"large\" routerLink=\"/user/register\"\n      >TRY US NOW</ion-button\n    >\n  </div>\n  <div class=\"about-container\">\n    <ion-grid class=\"feature-section\">\n      <ion-row>\n        <ion-col>\n          <ion-card color=\"light\" class=\"pb-32\">\n            <ion-card-header>\n              <ion-card-title class=\"heading-card\"> PROPERTIES </ion-card-title>\n            </ion-card-header>\n            <div class=\"separator-line\"></div>\n            <ion-card-content class=\"ion-padding-bottom\">\n              <p class=\"text\">\n                <ion-text color=\"dark\">\n                  <strong>\n                    Do you spend way too much time looking for a Real Estate\n                    Property to buy?\n                  </strong>\n                  <br />\n                  dont worry we have you covered, We have hundreds of high\n                  quality properties ready to sell. you can use the search field\n                  to find properties and to see basic information(price,\n                  address, types, etc...) about the desired property.\n                </ion-text>\n              </p>\n              <p class=\"text ion-padding-top\">\n                <ion-text color=\"dark\">\n                  <strong>Do you own a property you wanted to sell?</strong>\n                  <br />\n                  Our application will help advertise your property to potential\n                  buyers.\n                </ion-text>\n              </p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" sizeLg=\"4\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>\n                <ion-text color=\"primary\">Connect</ion-text> with people\n              </ion-card-title>\n            </ion-card-header>\n            <ion-card-content class=\"features\">\n              <img src=\"assets/images/about/about-connection.svg\" alt=\"image\" />\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"12\" sizeLg=\"4\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>\n                <ion-text color=\"primary\">Buy</ion-text> new properties\n              </ion-card-title>\n            </ion-card-header>\n            <ion-card-content class=\"features\">\n              <img src=\"assets/images/about/about-buy.svg\" alt=\"image\" />\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"12\" sizeLg=\"4\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>\n                <ion-text color=\"primary\">Sell</ion-text> your properties\n              </ion-card-title>\n            </ion-card-header>\n            <ion-card-content class=\"features\">\n              <img src=\"assets/images/about/about-sell.svg\" alt=\"image\" />\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div style=\"height: 100px\"></div>\n  </div>\n\n  <div class=\"contact-section\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" sizeLg=\"5\" sizeXl=\"6\" class=\"left-side\">\n          <div class=\"heading\">Let's get in touch</div>\n          <div class=\"sub-heading\">\n            Have an inquiry or some feedback for us?\n          </div>\n        </ion-col>\n        <ion-col size=\"12\" sizeLg=\"7\" sizeXl=\"6\">\n          <app-contact-form> </app-contact-form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_about_about_module_ts.js.map