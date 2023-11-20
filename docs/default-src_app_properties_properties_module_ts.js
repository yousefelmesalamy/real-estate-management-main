(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_properties_properties_module_ts"],{

/***/ 78089:
/*!*************************************************************************!*\
  !*** ./src/app/properties/properties-card/properties-card.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesCardComponent": () => (/* binding */ PropertiesCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _properties_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties-card.component.html?ngResource */ 33740);
/* harmony import */ var _properties_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-card.component.scss?ngResource */ 59244);
/* harmony import */ var _properties_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_properties_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_properties_properties_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/properties/properties.service */ 83638);
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user/user.service */ 1584);







let PropertiesCardComponent = class PropertiesCardComponent {
  constructor(propertiesService, router, userService) {
    this.propertiesService = propertiesService;
    this.router = router;
    this.userService = userService;
  }
  ngOnInit() {}
  selectProperty(property) {
    this.propertiesService.property = property;
    this.router.navigate(['/properties', property.property_id]);
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_properties_properties_service__WEBPACK_IMPORTED_MODULE_2__.PropertiesService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
  }];
  static #_2 = this.propDecorators = {
    property: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  };
};
PropertiesCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-properties-card',
  template: _properties_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_properties_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PropertiesCardComponent);


/***/ }),

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

/***/ 56770:
/*!*****************************************************************************!*\
  !*** ./src/app/properties/properties-detail/properties-detail.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesDetailComponent": () => (/* binding */ PropertiesDetailComponent)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _properties_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-detail.component.html?ngResource */ 86399);
/* harmony import */ var _properties_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties-detail.component.scss?ngResource */ 41113);
/* harmony import */ var _properties_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_properties_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var _properties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../properties.service */ 83638);
/* harmony import */ var src_app_shared_components_action_popup_action_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/action-popup/action-popup.component */ 79310);
/* harmony import */ var _properties_edit_modal_properties_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../properties-edit-modal/properties-edit.component */ 41456);
/* harmony import */ var _properties_uploads_modal_properties_uploads_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../properties-uploads-modal/properties-uploads.component */ 26930);
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/user/user.service */ 1584);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);















let PropertiesDetailComponent = class PropertiesDetailComponent {
  constructor(location, userService, router, propertiesService, popoverCtrl, modalController, toastCtrl, route) {
    this.location = location;
    this.userService = userService;
    this.router = router;
    this.propertiesService = propertiesService;
    this.popoverCtrl = popoverCtrl;
    this.modalController = modalController;
    this.toastCtrl = toastCtrl;
    this.route = route;
    this.isOwner = false;
    this.ready = false;
    this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  }
  ngOnInit() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const paramId = _this.route.snapshot.paramMap.get('id');
      _this.propertiesService.property$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(_this.unsubscribe$)).subscribe( /*#__PURE__*/function () {
        var _ref = (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (property) {
          _this.property = property;
          if (!_this.property) {
            yield _this.propertiesService.fetchProperty(paramId);
          }
          _this.ready = true;
          _this.isOwner = _this.userService.user?.user_id === _this.property?.user_id;
          if (_this.propertiesGallery && _this.property) {
            _this.propertiesGallery.setImage();
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  actionPopup() {
    var _this2 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this2.popoverCtrl.create({
        component: src_app_shared_components_action_popup_action_popup_component__WEBPACK_IMPORTED_MODULE_4__.ActionPopupComponent,
        componentProps: {
          message: false,
          edit: _this2.isOwner,
          delete: _this2.isOwner
        },
        translucent: true
      });
      yield popover.present();
      const {
        data
      } = yield popover.onDidDismiss();
      if (!data) {
        return;
      }
      if (data.action === 'delete') {
        _this2.propertiesService.removeProperty(_this2.property.property_id);
        _this2.presentToast('Success,property deleted');
        _this2.router.navigate(['/properties']);
      }
      if (data.action === 'edit') {
        _this2.editModal();
      }
      if (data.action === 'report') {
        _this2.presentToast('Success, we will take a look at this property.');
      }
    })();
  }
  findInMap() {
    const {
      lat,
      lng
    } = this.property.position;
    this.router.navigate(['/map'], {
      queryParams: {
        lat,
        lng
      }
    });
  }
  editImages() {
    var _this3 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _properties_uploads_modal_properties_uploads_component__WEBPACK_IMPORTED_MODULE_6__.PropertiesUploadsComponent,
        componentProps: {
          property: _this3.property
        }
      });
      modal.present();
    })();
  }
  editModal() {
    var _this4 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalController.create({
        component: _properties_edit_modal_properties_edit_component__WEBPACK_IMPORTED_MODULE_5__.PropertiesEditComponent
      });
      return yield modal.present();
    })();
  }
  presentToast(message, color = 'success', duration = 3000) {
    var _this5 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this5.toastCtrl.create({
        message,
        duration,
        color
      });
      toast.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location
  }, {
    type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
  }, {
    type: _properties_service__WEBPACK_IMPORTED_MODULE_3__.PropertiesService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
  }];
  static #_2 = this.propDecorators = {
    propertiesGallery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
      args: ['propertiesGallery']
    }]
  };
};
PropertiesDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-properties-detail',
  template: _properties_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_properties_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PropertiesDetailComponent);


/***/ }),

/***/ 41456:
/*!*******************************************************************************!*\
  !*** ./src/app/properties/properties-edit-modal/properties-edit.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesEditComponent": () => (/* binding */ PropertiesEditComponent)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _properties_edit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-edit.component.html?ngResource */ 9033);
/* harmony import */ var _properties_edit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties-edit.component.scss?ngResource */ 22295);
/* harmony import */ var _properties_edit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_properties_edit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/property */ 14750);
/* harmony import */ var _properties_coordinates_modal_properties_coordinates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../properties-coordinates-modal/properties-coordinates.component */ 44737);
/* harmony import */ var _properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../properties.service */ 83638);










let PropertiesEditComponent = class PropertiesEditComponent {
  constructor(modalCtrl, formBuilder, propertiesService, toastCtrl) {
    this.modalCtrl = modalCtrl;
    this.formBuilder = formBuilder;
    this.propertiesService = propertiesService;
    this.toastCtrl = toastCtrl;
    this.propertyTypes = [{
      label: 'residential',
      value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_3__.PropertyType.residential
    }, {
      label: 'commercial',
      value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_3__.PropertyType.commercial
    }, {
      label: 'industrial',
      value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_3__.PropertyType.industrial
    }, {
      label: 'land',
      value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_3__.PropertyType.land
    }];
    this.propertyForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      description: [''],
      type: [src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_3__.PropertyType.residential],
      price: [''],
      currency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(3)],
      features: [''],
      lat: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      lng: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  ngOnInit() {
    this.propertiesService.property$.subscribe(property => {
      this.property = property;
      if (property) {
        const {
          name,
          address,
          description,
          type,
          price,
          currency,
          features,
          position
        } = property;
        this.propertyForm.patchValue({
          name,
          address,
          description,
          type,
          price,
          currency,
          features: features ? features.join(', ').trim() : '',
          lat: position.lat,
          lng: position.lng
        });
      }
    });
  }
  update() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.propertyForm.valid) {
        return;
      }
      const {
        name,
        address,
        description,
        type,
        updatedAt,
        price,
        currency,
        features,
        lat,
        lng
      } = _this.propertyForm.value;
      const editedProperty = {
        property_id: _this.property.property_id,
        name,
        address,
        description,
        type,
        price,
        currency,
        updatedAt,
        features: features.split(',').filter(item => item.trim() !== ''),
        position: {
          lat,
          lng
        },
        user_id: _this.property.user_id
      };
      const updatedProperty = {
        ..._this.property,
        ...editedProperty
      };
      const res = yield _this.propertiesService.updateProperty(updatedProperty);
      if (res) {
        const toast = yield _this.toastCtrl.create({
          message: res.message,
          duration: 3000,
          color: 'success'
        });
        yield toast.present();
      }
      _this.modalCtrl.dismiss();
    })();
  }
  close() {
    this.modalCtrl.dismiss();
  }
  openMap() {
    var _this2 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: _properties_coordinates_modal_properties_coordinates_component__WEBPACK_IMPORTED_MODULE_4__.PropertiesCoordinatesComponent
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
        _this2.propertyForm.patchValue({
          lat,
          lng
        });
      }
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder
  }, {
    type: _properties_service__WEBPACK_IMPORTED_MODULE_5__.PropertiesService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
  }];
};
PropertiesEditComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-properties-edit',
  template: _properties_edit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_properties_edit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PropertiesEditComponent);


/***/ }),

/***/ 66221:
/*!*******************************************************************************!*\
  !*** ./src/app/properties/properties-gallery/properties-gallery.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesGalleryComponent": () => (/* binding */ PropertiesGalleryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _properties_gallery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties-gallery.component.html?ngResource */ 84406);
/* harmony import */ var _properties_gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-gallery.component.scss?ngResource */ 12759);
/* harmony import */ var _properties_gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_properties_gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let PropertiesGalleryComponent = class PropertiesGalleryComponent {
  constructor() {
    this.images = [];
    this.showEdit = false;
    this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.imagePresented = 'assets/images/no-image.jpeg';
  }
  ngOnInit() {
    this.setImage();
  }
  getImage(image) {
    image = image || 'assets/images/no-image.jpeg';
    return `url(${image})`;
  }
  setSelected(image) {
    this.imagePresented = image || 'assets/images/no-image.jpeg';
  }
  setImage() {
    this.imagePresented = this.images[0] || 'assets/images/no-image.jpeg';
  }
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    images: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    showEdit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    edit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  };
};
PropertiesGalleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-properties-gallery',
  template: _properties_gallery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_properties_gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PropertiesGalleryComponent);


/***/ }),

/***/ 46596:
/*!*************************************************************************!*\
  !*** ./src/app/properties/properties-list/properties-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesListComponent": () => (/* binding */ PropertiesListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _properties_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties-list.component.html?ngResource */ 82648);
/* harmony import */ var _properties_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-list.component.scss?ngResource */ 94003);
/* harmony import */ var _properties_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_properties_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var src_app_shared_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utility */ 77666);
/* harmony import */ var _properties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../properties.service */ 83638);








let PropertiesListComponent = class PropertiesListComponent {
  constructor(propertiesService, changeDetector) {
    this.propertiesService = propertiesService;
    this.changeDetector = changeDetector;
    this.singleCol = false;
    this.horizontalSlide = false;
    this.limit = 0;
    this.isLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.displayedItems = [];
    this.maxDisplayed = 8;
    this.filterBy = [];
    this.sortBy = 'latest';
    this.searchText = '';
    this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.getProperties();
  }
  ngOnDestroy() {
    this.unSubscribed();
  }
  loadData() {
    this.maxDisplayed = this.maxDisplayed + 4;
    setTimeout(() => {
      this.displayedItems = this.properties.slice(0, this.maxDisplayed);
      this.infinityScroll.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.displayedItems.length >= this.properties.length) {
        console.log('everything is loaded');
        this.infinityScroll.disabled = true;
      }
    }, 1500);
  }
  setFilters(filters) {
    this.filterBy = filters;
    this.getProperties();
  }
  setSort(sort) {
    this.sortBy = sort;
    this.getProperties();
  }
  setSearch(text) {
    text = text.trim().toLowerCase();
    if (this.searchText !== text) {
      this.searchText = text;
      this.getProperties();
    }
  }
  searchProperties() {
    this.properties = this.properties.filter(item => {
      const name = item.name.toLowerCase();
      const address = item.address.toLowerCase();
      return name.includes(this.searchText) || address.includes(this.searchText);
    });
  }
  sortProperties() {
    switch (this.sortBy) {
      case 'name':
        this.properties = (0,src_app_shared_utility__WEBPACK_IMPORTED_MODULE_2__.sortListByName)(this.properties, {
          property: 'name'
        });
        break;
      case 'price':
        this.properties = (0,src_app_shared_utility__WEBPACK_IMPORTED_MODULE_2__.sortListByNumber)(this.properties, {
          property: 'price'
        });
        break;
      default:
        this.properties = (0,src_app_shared_utility__WEBPACK_IMPORTED_MODULE_2__.sortListByDate)(this.properties, {
          property: 'updatedAt'
        });
        break;
    }
  }
  getProperties() {
    this.isLoading.emit(true);
    this.unSubscribed();
    this.maxDisplayed = 8;
    this.displayedItems = [];
    this.properties = [];
    if (this.infinityScroll) {
      // we enable infinity scroll
      this.infinityScroll.disabled = false;
    }
    this.propertiesService.properties$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unsubscribe$)).subscribe(v => {
      this.properties = this.limit ? v.slice(0, this.limit) : v;
      this.sortProperties();
      if (this.searchText) {
        this.searchProperties();
      }
      ;
      if (this.filterBy.length) {
        this.properties = this.properties.filter(item => this.filterBy.includes(item.type));
      }
      this.displayedItems = this.properties.slice(0, this.maxDisplayed);
    });
    this.changeDetector.detectChanges();
  }
  unSubscribed() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _properties_service__WEBPACK_IMPORTED_MODULE_3__.PropertiesService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef
  }];
  static #_2 = this.propDecorators = {
    infinityScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
      args: ['IonInfiniteScroll', {
        static: false
      }]
    }],
    singleCol: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    horizontalSlide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    limit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    isLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  };
};
PropertiesListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-properties-list',
  template: _properties_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_properties_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PropertiesListComponent);


/***/ }),

/***/ 63598:
/*!*****************************************************************************!*\
  !*** ./src/app/properties/properties-new-modal/properties-new.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesNewComponent": () => (/* binding */ PropertiesNewComponent)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _properties_new_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-new.component.html?ngResource */ 77562);
/* harmony import */ var _properties_new_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties-new.component.scss?ngResource */ 85512);
/* harmony import */ var _properties_new_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_properties_new_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/property */ 14750);
/* harmony import */ var _properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../properties.service */ 83638);
/* harmony import */ var _properties_coordinates_modal_properties_coordinates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../properties-coordinates-modal/properties-coordinates.component */ 44737);










let PropertiesNewComponent = class PropertiesNewComponent {
  constructor(modalCtrl, formBuilder, propertiesService, toastCtrl) {
    this.modalCtrl = modalCtrl;
    this.formBuilder = formBuilder;
    this.propertiesService = propertiesService;
    this.toastCtrl = toastCtrl;
    this.propertyTypes = [{
      label: 'residential',
      value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_3__.PropertyType.residential
    }, {
      label: 'commercial',
      value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_3__.PropertyType.commercial
    }, {
      label: 'industrial',
      value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_3__.PropertyType.industrial
    }, {
      label: 'land',
      value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_3__.PropertyType.land
    }];
    this.step = 1;
    this.error = false;
    this.isSubmit = false;
    this.propertyForm = this.formBuilder.group({
      id: 'test',
      // Step 1
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(4)]],
      address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10)]],
      type: [src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_3__.PropertyType.residential],
      // Step 2
      price: [''],
      currency: ['PHP', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z ]*$')]],
      features: [''],
      lat: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      lng: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  ngOnInit() {}
  submit() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.step === 1 && _this.validateStepOne()) {
        _this.step = 2;
        return;
      }
      if (_this.step === 2 && _this.validateStepTwo()) {
        _this.isSubmit = true;
        const ft = _this.propertyForm.get('features').value;
        _this.propertyForm.patchValue({
          features: ft.split(',').filter(item => item.trim() !== '')
        });
        const {
          lat,
          lng
        } = _this.propertyForm.value;
        const newProperty = {
          ..._this.propertyForm.value,
          ...{
            position: {
              lat,
              lng
            },
            date: new Date()
          }
        };
        const {
          data,
          message
        } = yield _this.propertiesService.addProperty(newProperty);
        if (data) {
          _this.modalCtrl.dismiss(data);
          _this.presentToast(message);
          return;
        }
        _this.presentToast('Error:' + message, 'danger');
        return;
      }
      _this.presentToast('Error: Invalid, please fill the form properly', 'danger');
    })();
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  openMap() {
    var _this2 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: _properties_coordinates_modal_properties_coordinates_component__WEBPACK_IMPORTED_MODULE_5__.PropertiesCoordinatesComponent
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
        _this2.propertyForm.patchValue({
          lat,
          lng
        });
      }
    })();
  }
  validateStepOne() {
    if (this.propertyForm.get('name').valid && this.propertyForm.get('address').valid && this.propertyForm.get('description').valid && this.propertyForm.get('type').valid) {
      return true;
    }
    this.error = true;
  }
  validateStepTwo() {
    if (this.propertyForm.get('price').valid && this.propertyForm.get('currency').valid && this.propertyForm.get('lat').valid && this.propertyForm.get('lng').valid) {
      return true;
    }
    this.error = true;
  }
  presentToast(message, color = 'success', duration = 3000) {
    var _this3 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastCtrl.create({
        message,
        duration,
        color
      });
      toast.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder
  }, {
    type: _properties_service__WEBPACK_IMPORTED_MODULE_4__.PropertiesService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
  }];
};
PropertiesNewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-properties-new',
  template: _properties_new_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_properties_new_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PropertiesNewComponent);


/***/ }),

/***/ 65160:
/*!*********************************************************!*\
  !*** ./src/app/properties/properties-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesPageRoutingModule": () => (/* binding */ PropertiesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _properties_detail_properties_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties-detail/properties-detail.component */ 56770);
/* harmony import */ var _properties_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties.page */ 7814);





const routes = [{
  path: '',
  component: _properties_page__WEBPACK_IMPORTED_MODULE_1__.PropertiesPage
}, {
  path: ':id',
  component: _properties_detail_properties_detail_component__WEBPACK_IMPORTED_MODULE_0__.PropertiesDetailComponent
}];
let PropertiesPageRoutingModule = class PropertiesPageRoutingModule {};
PropertiesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], PropertiesPageRoutingModule);


/***/ }),

/***/ 37382:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/properties/properties-uploads-modal/properties-current-images/properties-current-images.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesCurrentImagesComponent": () => (/* binding */ PropertiesCurrentImagesComponent)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _properties_current_images_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-current-images.component.html?ngResource */ 31725);
/* harmony import */ var _properties_current_images_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties-current-images.component.scss?ngResource */ 74178);
/* harmony import */ var _properties_current_images_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_properties_current_images_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var _properties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../properties.service */ 83638);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/element/bundle */ 5732);








(0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_4__.register)();
let PropertiesCurrentImagesComponent = class PropertiesCurrentImagesComponent {
  constructor(propertyService, toastCtrl) {
    this.propertyService = propertyService;
    this.toastCtrl = toastCtrl;
    this.images = [];
    this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.slideOpts = {
      initialSlide: 0,
      speed: 400,
      spaceBetween: 15,
      freeMode: true,
      slidesPerView: 'auto'
    };
    this.selectedImages = [];
  }
  ngOnInit() {}
  getImage(image) {
    image = image || 'assets/images/no-image.jpeg';
    return `url(${image})`;
  }
  setSelected(selected) {
    if (this.isSelected(selected)) {
      this.selectedImages = this.selectedImages.filter(img => img !== selected);
      return;
    }
    this.selectedImages.push(selected);
  }
  isSelected(image) {
    return this.selectedImages.includes(image);
  }
  deleteSelected() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        data,
        message
      } = yield _this.propertyService.deletePropertyImage(_this.selectedImages, _this.id);
      if (data.length) {
        const toast = yield _this.toastCtrl.create({
          message,
          duration: 3000,
          color: 'success'
        });
        toast.present();
        // we remove the current images that was deleted
        const property = _this.propertyService.property;
        _this.propertyService.property = {
          ...property,
          images: property.images.filter(currentImg => !data.includes(currentImg))
        };
      }
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _properties_service__WEBPACK_IMPORTED_MODULE_3__.PropertiesService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
  }];
  static #_2 = this.propDecorators = {
    images: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    delete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }]
  };
};
PropertiesCurrentImagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-properties-current-images',
  template: _properties_current_images_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewEncapsulation.None,
  styles: [(_properties_current_images_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PropertiesCurrentImagesComponent);


/***/ }),

/***/ 26930:
/*!*************************************************************************************!*\
  !*** ./src/app/properties/properties-uploads-modal/properties-uploads.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesUploadsComponent": () => (/* binding */ PropertiesUploadsComponent)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _properties_uploads_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-uploads.component.html?ngResource */ 27396);
/* harmony import */ var _properties_uploads_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties-uploads.component.scss?ngResource */ 62329);
/* harmony import */ var _properties_uploads_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_properties_uploads_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var _properties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../properties.service */ 83638);







let PropertiesUploadsComponent = class PropertiesUploadsComponent {
  constructor(modalCtrl, propertiesService, toastCtrl) {
    this.modalCtrl = modalCtrl;
    this.propertiesService = propertiesService;
    this.toastCtrl = toastCtrl;
    this.previews = [];
  }
  ngOnInit() {}
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  onSelectFile(event) {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const target = event.target;
      const files = target.files;
      if (files) {
        // We set preview images
        _this.selectedFiles = Array.from(files);
        for (const file of _this.selectedFiles) {
          const img = yield _this.getPreviewImage(file);
          _this.previews.push(img);
        }
        // Scroll into upload button
        const uploadBtn = document.querySelector('#uploadBtn');
        setTimeout(() => {
          uploadBtn.scrollIntoView({
            behavior: 'smooth'
          });
        }, 500);
      }
    })();
  }
  upload() {
    var _this2 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.selectedFiles) {
        return _this2.presentToast('Please, select images to upload.', 300, 'danger');
      }
      const res = yield _this2.propertiesService.addPropertyImage(_this2.selectedFiles, _this2.property.property_id);
      if (!res || res.status !== 201) {
        const msg = 'Error: Something went wrong, please try again later.';
        _this2.presentToast(`Error: ${res.message || msg}`, 3000, 'danger');
        _this2.modalCtrl.dismiss();
        return;
      }
      _this2.property.images = res.data;
      _this2.propertiesService.updateProperty(_this2.property);
      _this2.presentToast(res.message || 'Success: Image uploaded');
      _this2.modalCtrl.dismiss();
    })();
  }
  removeFile(index) {
    this.previews.splice(index, 1);
    this.selectedFiles.splice(index, 1);
  }
  getPreviewImage(file) {
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = e => {
          resolve(e.target.result);
        };
        fr.onerror = e => {
          reject(e);
        };
        fr.readAsDataURL(file);
      });
    })();
  }
  presentToast(message, duration = 3000, color = 'success') {
    var _this3 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastCtrl.create({
        message,
        duration,
        color
      });
      toast.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
  }, {
    type: _properties_service__WEBPACK_IMPORTED_MODULE_3__.PropertiesService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
  }];
  static #_2 = this.propDecorators = {
    property: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  };
};
PropertiesUploadsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-properties-uploads',
  template: _properties_uploads_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_properties_uploads_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PropertiesUploadsComponent);


/***/ }),

/***/ 11199:
/*!*************************************************!*\
  !*** ./src/app/properties/properties.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesPageModule": () => (/* binding */ PropertiesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _properties_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-routing.module */ 65160);
/* harmony import */ var _properties_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties.page */ 7814);
/* harmony import */ var _properties_new_modal_properties_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties-new-modal/properties-new.component */ 63598);
/* harmony import */ var _properties_list_properties_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties-list/properties-list.component */ 46596);
/* harmony import */ var _properties_card_properties_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties-card/properties-card.component */ 78089);
/* harmony import */ var _properties_detail_properties_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties-detail/properties-detail.component */ 56770);
/* harmony import */ var _properties_edit_modal_properties_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./properties-edit-modal/properties-edit.component */ 41456);
/* harmony import */ var _properties_coordinates_modal_properties_coordinates_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./properties-coordinates-modal/properties-coordinates.component */ 44737);
/* harmony import */ var _enquiries_enquiries_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enquiries/enquiries.module */ 85609);
/* harmony import */ var _mortgage_calc_mortgage_calc_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mortgage-calc/mortgage-calc.module */ 7130);
/* harmony import */ var _properties_uploads_modal_properties_uploads_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./properties-uploads-modal/properties-uploads.component */ 26930);
/* harmony import */ var _properties_gallery_properties_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./properties-gallery/properties-gallery.component */ 66221);
/* harmony import */ var _properties_uploads_modal_properties_current_images_properties_current_images_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./properties-uploads-modal/properties-current-images/properties-current-images.component */ 37382);



















let PropertiesPageModule = class PropertiesPageModule {};
PropertiesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule, _properties_routing_module__WEBPACK_IMPORTED_MODULE_1__.PropertiesPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _enquiries_enquiries_module__WEBPACK_IMPORTED_MODULE_9__.EnquiriesPageModule, _mortgage_calc_mortgage_calc_module__WEBPACK_IMPORTED_MODULE_10__.MortgageCalcPageModule],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_15__.CUSTOM_ELEMENTS_SCHEMA],
  declarations: [_properties_page__WEBPACK_IMPORTED_MODULE_2__.PropertiesPage, _properties_new_modal_properties_new_component__WEBPACK_IMPORTED_MODULE_3__.PropertiesNewComponent, _properties_list_properties_list_component__WEBPACK_IMPORTED_MODULE_4__.PropertiesListComponent, _properties_card_properties_card_component__WEBPACK_IMPORTED_MODULE_5__.PropertiesCardComponent, _properties_detail_properties_detail_component__WEBPACK_IMPORTED_MODULE_6__.PropertiesDetailComponent, _properties_edit_modal_properties_edit_component__WEBPACK_IMPORTED_MODULE_7__.PropertiesEditComponent, _properties_coordinates_modal_properties_coordinates_component__WEBPACK_IMPORTED_MODULE_8__.PropertiesCoordinatesComponent, _properties_uploads_modal_properties_uploads_component__WEBPACK_IMPORTED_MODULE_11__.PropertiesUploadsComponent, _properties_gallery_properties_gallery_component__WEBPACK_IMPORTED_MODULE_12__.PropertiesGalleryComponent, _properties_uploads_modal_properties_current_images_properties_current_images_component__WEBPACK_IMPORTED_MODULE_13__.PropertiesCurrentImagesComponent],
  exports: [_properties_list_properties_list_component__WEBPACK_IMPORTED_MODULE_4__.PropertiesListComponent]
})], PropertiesPageModule);


/***/ }),

/***/ 7814:
/*!***********************************************!*\
  !*** ./src/app/properties/properties.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesPage": () => (/* binding */ PropertiesPage)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _properties_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties.page.html?ngResource */ 29814);
/* harmony import */ var _properties_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties.page.scss?ngResource */ 72939);
/* harmony import */ var _properties_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_properties_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var _shared_enums_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/enums/property */ 14750);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ 1584);
/* harmony import */ var _properties_new_modal_properties_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties-new-modal/properties-new.component */ 63598);
/* harmony import */ var _properties_uploads_modal_properties_uploads_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties-uploads-modal/properties-uploads.component */ 26930);











let PropertiesPage = class PropertiesPage {
  constructor(modalController, userService, router, toastCtrl) {
    this.modalController = modalController;
    this.userService = userService;
    this.router = router;
    this.toastCtrl = toastCtrl;
    this.progressBar = false;
    this.search = '';
    this.properties = [];
    this.filterBy = [];
    this.filters = [{
      value: _shared_enums_property__WEBPACK_IMPORTED_MODULE_3__.PropertyType.residential,
      label: 'Residential'
    }, {
      value: _shared_enums_property__WEBPACK_IMPORTED_MODULE_3__.PropertyType.commercial,
      label: 'Commercial'
    }, {
      value: _shared_enums_property__WEBPACK_IMPORTED_MODULE_3__.PropertyType.industrial,
      label: 'Industrial'
    }, {
      value: _shared_enums_property__WEBPACK_IMPORTED_MODULE_3__.PropertyType.land,
      label: 'Land'
    }];
    this.sortBy = 'latest';
    this.sorts = [{
      value: 'latest',
      label: 'Latest'
    }, {
      value: 'name',
      label: 'Name'
    }, {
      value: 'price',
      label: 'Price'
    }];
  }
  ngOnInit() {
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  presentModal() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = _this.userService.user;
      if (!user) {
        _this.router.navigateByUrl('/user/signin');
        _this.toastCtrl.create({
          message: 'Please sign in, to continue',
          duration: 3000,
          color: 'danger'
        }).then(toast => toast.present());
        return;
      }
      const modalPropertiesNew = yield _this.modalController.create({
        component: _properties_new_modal_properties_new_component__WEBPACK_IMPORTED_MODULE_5__.PropertiesNewComponent
      });
      yield modalPropertiesNew.present();
      const {
        data
      } = yield modalPropertiesNew.onDidDismiss();
      if (data) {
        _this.presentUploadModal(data);
      }
    })();
  }
  presentLoading() {
    var _this2 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.progressBar = true;
      setTimeout(() => _this2.progressBar = false, 1500);
    })();
  }
  presentUploadModal(property) {
    var _this3 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modalUploads = yield _this3.modalController.create({
        component: _properties_uploads_modal_properties_uploads_component__WEBPACK_IMPORTED_MODULE_6__.PropertiesUploadsComponent,
        componentProps: {
          property
        }
      });
      yield modalUploads.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
  }, {
    type: _user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
  }];
};
PropertiesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-properties',
  template: _properties_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_properties_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PropertiesPage);


/***/ }),

/***/ 59244:
/*!**************************************************************************************!*\
  !*** ./src/app/properties/properties-card/properties-card.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-card {\n  position: relative;\n  width: 100%;\n  margin: 0;\n}\n\n.tag {\n  position: absolute;\n  padding: 8px 16px;\n  font-size: 20px;\n  font-weight: 900;\n  color: var(--ion-color-primary-contrast);\n  border-bottom-right-radius: 12px;\n  background: var(--ion-color-success);\n}\n\n.name {\n  overflow: hidden;\n  width: 100%;\n  font-size: 24px;\n  height: 28px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  text-overflow: ellipsis;\n}\n\n.desc {\n  overflow: hidden;\n  width: 100%;\n  min-height: 80px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.price {\n  margin: 16px 0 0 0;\n  font-size: 18px;\n  font-weight: bold;\n  color: var(--ion-color-dark);\n}\n\n.profile-image {\n  height: 200px;\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/properties/properties-card/properties-card.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/properties/properties-card/properties-card.component.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,WAAA;EACA,SAAA;ACCF;;ADEA;EACE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,wCAAA;EACA,gCAAA;EACA,oCAAA;ACCF;;ADEA;EACE,gBAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,oBAAA;EACA,qBAAA;EACA,4BAAA;EACA,uBAAA;ACCF;;ADCA;EACE,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,oBAAA;EACA,qBAAA;EACA,4BAAA;ACEF;;ADCA;EACE,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,4BAAA;ACEF;;ADAA;EACE,aAAA;EACA,WAAA;ACGF","sourcesContent":["ion-card {\n  position: relative;\n  width: 100%;\n  margin: 0;\n}\n\n.tag {\n  position: absolute;\n  padding: 8px 16px;\n  font-size: 20px;\n  font-weight: 900;\n  color: var(--ion-color-primary-contrast);\n  border-bottom-right-radius: 12px;\n  background: var(--ion-color-success);\n}\n\n.name {\n  overflow: hidden;\n  width: 100%;\n  font-size: 24px;\n  height: 28px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  text-overflow: ellipsis;\n}\n.desc {\n  overflow: hidden;\n  width: 100%;\n  min-height: 80px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.price {\n  margin: 16px 0 0 0;\n  font-size: 18px;\n  font-weight: bold;\n  color: var(--ion-color-dark);\n}\n.profile-image {\n  height: 200px;\n  width: 100%;\n}\n","ion-card {\n  position: relative;\n  width: 100%;\n  margin: 0;\n}\n\n.tag {\n  position: absolute;\n  padding: 8px 16px;\n  font-size: 20px;\n  font-weight: 900;\n  color: var(--ion-color-primary-contrast);\n  border-bottom-right-radius: 12px;\n  background: var(--ion-color-success);\n}\n\n.name {\n  overflow: hidden;\n  width: 100%;\n  font-size: 24px;\n  height: 28px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  text-overflow: ellipsis;\n}\n\n.desc {\n  overflow: hidden;\n  width: 100%;\n  min-height: 80px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.price {\n  margin: 16px 0 0 0;\n  font-size: 18px;\n  font-weight: bold;\n  color: var(--ion-color-dark);\n}\n\n.profile-image {\n  height: 200px;\n  width: 100%;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


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

/***/ 41113:
/*!******************************************************************************************!*\
  !*** ./src/app/properties/properties-detail/properties-detail.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: var(--ion-color-light);\n}\n\nion-grid {\n  height: 100%;\n}\n\nion-row {\n  height: 100%;\n}\n\n.details-container {\n  height: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n.enquire-container {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n}\n\n.property-identity {\n  box-shadow: none;\n  margin: 12px 0 16px 0;\n}\n.property-identity .name {\n  font-size: 24px;\n  font-weight: bold;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.property-identity .name .action-btn {\n  --box-shadow: none;\n}\n.property-identity .type {\n  margin-top: 8px;\n  font-size: 18px;\n}\n\n.property-description {\n  box-shadow: none;\n  margin: 16px 0;\n}\n.property-description ion-card-content {\n  font-size: 16px;\n}\n\n.property-features {\n  box-shadow: none;\n  margin: 16px 0;\n}\n.property-features ion-card-content .item {\n  font-size: 14px;\n  font-weight: 400;\n  margin-right: 8px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\n.property-features ion-card-content .item div {\n  display: flex;\n  align-items: center;\n}\n\n.property-address {\n  box-shadow: none;\n  margin: 16px 0;\n}\n.property-address ion-card-content {\n  font-size: 18px;\n  font-weight: normal;\n}\n\n.property-price {\n  box-shadow: none;\n  margin: 16px 0;\n}\n.property-price .price {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n\n.enquiry-section {\n  margin: 36px 0;\n  padding: 16px 0 0 0;\n  box-shadow: none;\n  border-top: 3px solid var(--ion-color-primary);\n}\n\n.find-map-card {\n  margin-top: 24px;\n  box-shadow: none;\n}\n.find-map-card ion-card-header {\n  background: var(--ion-color-primary);\n}\n.find-map-card ion-card-content p {\n  padding: 24px 16px 16px;\n}\n.find-map-card ion-card-content ion-button {\n  text-transform: capitalize;\n  --color: var(--ion-color-light);\n}\n.find-map-card ion-card-content ion-button ion-icon {\n  margin-right: 8px;\n}", "",{"version":3,"sources":["webpack://./src/app/properties/properties-detail/properties-detail.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/properties/properties-detail/properties-detail.component.scss"],"names":[],"mappings":"AAAA;EACE,oCAAA;ACCF;;ADCA;EACE,YAAA;ACEF;;ADAA;EACE,YAAA;ACGF;;ADAA;EACE,YAAA;EACA,iBAAA;EACA,cAAA;EACA,YAAA;ACGF;;ADAA;EACE,YAAA;EACA,WAAA;EACA,SAAA;ACGF;;ADAA;EACE,gBAAA;EACA,qBAAA;ACGF;ADFE;EACE,eAAA;EACA,iBAAA;EAEA,aAAA;EACA,8BAAA;EACA,mBAAA;ACGJ;ADFI;EACE,kBAAA;ACIN;ADDE;EACE,eAAA;EACA,eAAA;ACGJ;;ADCA;EACE,gBAAA;EACA,cAAA;ACEF;ADDE;EACE,eAAA;ACGJ;;ADCA;EACE,gBAAA;EACA,cAAA;ACEF;ADAI;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;ACEN;ADDM;EACE,aAAA;EACA,mBAAA;ACGR;;ADGA;EACE,gBAAA;EACA,cAAA;ACAF;ADCE;EACE,eAAA;EACA,mBAAA;ACCJ;;ADGA;EACE,gBAAA;EACA,cAAA;ACAF;ADCE;EACE,eAAA;EACA,gBAAA;EACA,4BAAA;ACCJ;;ADGA;EACE,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,8CAAA;ACAF;;ADGA;EACE,gBAAA;EACA,gBAAA;ACAF;ADCE;EACE,oCAAA;ACCJ;ADEI;EACE,uBAAA;ACAN;ADEI;EACE,0BAAA;EACA,+BAAA;ACAN;ADCM;EACE,iBAAA;ACCR","sourcesContent":["ion-content {\n  --background: var(--ion-color-light);\n}\nion-grid {\n  height: 100%;\n}\nion-row {\n  height: 100%;\n}\n\n.details-container {\n  height: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n.enquire-container {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n}\n\n.property-identity {\n  box-shadow: none;\n  margin: 12px 0 16px 0;\n  .name {\n    font-size: 24px;\n    font-weight: bold;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    .action-btn {\n      --box-shadow: none;\n    }\n  }\n  .type {\n    margin-top: 8px;\n    font-size: 18px;\n  }\n}\n\n.property-description {\n  box-shadow: none;\n  margin: 16px 0;\n  ion-card-content {\n    font-size: 16px;\n  }\n}\n\n.property-features {\n  box-shadow: none;\n  margin: 16px 0;\n  ion-card-content {\n    .item {\n      font-size: 14px;\n      font-weight: 400;\n      margin-right: 8px;\n      --padding-start: 4px;\n      --padding-end: 4px;\n      --padding-top: 6px;\n      --padding-bottom: 6px;\n      div {\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n}\n\n.property-address {\n  box-shadow: none;\n  margin: 16px 0;\n  ion-card-content {\n    font-size: 18px;\n    font-weight: normal;\n  }\n}\n\n.property-price {\n  box-shadow: none;\n  margin: 16px 0;\n  .price {\n    font-size: 24px;\n    font-weight: 600;\n    color: var(--ion-color-dark);\n  }\n}\n\n.enquiry-section {\n  margin: 36px 0;\n  padding: 16px 0 0 0;\n  box-shadow: none;\n  border-top: 3px solid var(--ion-color-primary);\n}\n\n.find-map-card {\n  margin-top: 24px;\n  box-shadow: none;\n  ion-card-header {\n    background: var(--ion-color-primary);\n  }\n  ion-card-content {\n    p {\n      padding: 24px 16px 16px;\n    }\n    ion-button {\n      text-transform: capitalize;\n      --color: var(--ion-color-light);\n      ion-icon {\n        margin-right: 8px;\n      }\n    }\n  }\n}\n","ion-content {\n  --background: var(--ion-color-light);\n}\n\nion-grid {\n  height: 100%;\n}\n\nion-row {\n  height: 100%;\n}\n\n.details-container {\n  height: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n.enquire-container {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n}\n\n.property-identity {\n  box-shadow: none;\n  margin: 12px 0 16px 0;\n}\n.property-identity .name {\n  font-size: 24px;\n  font-weight: bold;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.property-identity .name .action-btn {\n  --box-shadow: none;\n}\n.property-identity .type {\n  margin-top: 8px;\n  font-size: 18px;\n}\n\n.property-description {\n  box-shadow: none;\n  margin: 16px 0;\n}\n.property-description ion-card-content {\n  font-size: 16px;\n}\n\n.property-features {\n  box-shadow: none;\n  margin: 16px 0;\n}\n.property-features ion-card-content .item {\n  font-size: 14px;\n  font-weight: 400;\n  margin-right: 8px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\n.property-features ion-card-content .item div {\n  display: flex;\n  align-items: center;\n}\n\n.property-address {\n  box-shadow: none;\n  margin: 16px 0;\n}\n.property-address ion-card-content {\n  font-size: 18px;\n  font-weight: normal;\n}\n\n.property-price {\n  box-shadow: none;\n  margin: 16px 0;\n}\n.property-price .price {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n\n.enquiry-section {\n  margin: 36px 0;\n  padding: 16px 0 0 0;\n  box-shadow: none;\n  border-top: 3px solid var(--ion-color-primary);\n}\n\n.find-map-card {\n  margin-top: 24px;\n  box-shadow: none;\n}\n.find-map-card ion-card-header {\n  background: var(--ion-color-primary);\n}\n.find-map-card ion-card-content p {\n  padding: 24px 16px 16px;\n}\n.find-map-card ion-card-content ion-button {\n  text-transform: capitalize;\n  --color: var(--ion-color-light);\n}\n.find-map-card ion-card-content ion-button ion-icon {\n  margin-right: 8px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 22295:
/*!********************************************************************************************!*\
  !*** ./src/app/properties/properties-edit-modal/properties-edit.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  padding-bottom: 100px;\n}\n\n.divider {\n  background: var(--ion-color-success);\n  padding: 2px 0;\n  width: 100px;\n  margin: 16px 0;\n  border-radius: 2px;\n}\n\n.note-helper {\n  color: var(--ion-color-dark-shade);\n  font-size: 13px;\n  font-weight: 300;\n}\n\n.coord-heading {\n  padding: 8px;\n  display: flex;\n  align-items: center;\n}\n.coord-heading ion-text {\n  text-transform: capitalize;\n  font-weight: 600;\n  margin-right: 8px;\n}\n\n.coord-input {\n  display: flex;\n}\n.coord-input ion-item {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/properties/properties-edit-modal/properties-edit.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/properties/properties-edit-modal/properties-edit.component.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;ACCF;;ADCA;EACE,oCAAA;EACA,cAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;ACEF;;ADAA;EACE,kCAAA;EACA,eAAA;EACA,gBAAA;ACGF;;ADAA;EACE,YAAA;EACA,aAAA;EACA,mBAAA;ACGF;ADFE;EACE,0BAAA;EACA,gBAAA;EACA,iBAAA;ACIJ;;ADDA;EACE,aAAA;ACIF;ADHE;EACE,WAAA;ACKJ","sourcesContent":["ion-content {\n  padding-bottom: 100px;\n}\n.divider {\n  background: var(--ion-color-success);\n  padding: 2px 0;\n  width: 100px;\n  margin: 16px 0;\n  border-radius: 2px;\n}\n.note-helper {\n  color: var(--ion-color-dark-shade);\n  font-size: 13px;\n  font-weight: 300;\n}\n\n.coord-heading {\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  ion-text {\n    text-transform: capitalize;\n    font-weight: 600;\n    margin-right: 8px;\n  }\n}\n.coord-input {\n  display: flex;\n  ion-item {\n    width: 100%;\n  }\n}\n","ion-content {\n  padding-bottom: 100px;\n}\n\n.divider {\n  background: var(--ion-color-success);\n  padding: 2px 0;\n  width: 100px;\n  margin: 16px 0;\n  border-radius: 2px;\n}\n\n.note-helper {\n  color: var(--ion-color-dark-shade);\n  font-size: 13px;\n  font-weight: 300;\n}\n\n.coord-heading {\n  padding: 8px;\n  display: flex;\n  align-items: center;\n}\n.coord-heading ion-text {\n  text-transform: capitalize;\n  font-weight: 600;\n  margin-right: 8px;\n}\n\n.coord-input {\n  display: flex;\n}\n.coord-input ion-item {\n  width: 100%;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 12759:
/*!********************************************************************************************!*\
  !*** ./src/app/properties/properties-gallery/properties-gallery.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".gallery-container .selected-image {\n  display: flex;\n  justify-content: center;\n  height: 550px;\n}\n.gallery-container .selected-image img {\n  width: 100%;\n  background-color: var(--ion-color-light-tint);\n  object-fit: contain;\n}\n\nswiper-container {\n  width: 100%;\n  height: 250px;\n}\n\nswiper-slide {\n  max-width: 300px;\n  padding: 0;\n}\nswiper-slide .swipers-image {\n  width: 100%;\n  height: 100%;\n}\nswiper-slide .swipers-image img {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n  -webkit-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\nswiper-slide .swipers-image .cover-img {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(51, 51, 51, 0.63);\n  background-size: cover;\n}\nswiper-slide .swipers-image .cover-img.selected {\n  background-color: rgba(11, 114, 211, 0.219);\n  opacity: 0.7;\n}\n\nswiper-slide img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\nion-card {\n  box-shadow: none;\n}\nion-card .edit-btn {\n  margin: 8px 16px 0px;\n}\nion-card .edit-btn ion-text {\n  margin-right: 4px;\n}\n\n@media (max-width: 500px) {\n  ion-card {\n    box-shadow: none;\n  }\n  ion-card .gallery-container .selected-image {\n    height: 350px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/properties/properties-gallery/properties-gallery.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/properties/properties-gallery/properties-gallery.component.scss"],"names":[],"mappings":"AAKE;EACE,aAAA;EACA,uBAAA;EACA,aAAA;ACJJ;ADKI;EACE,WAAA;EACA,6CAAA;EACA,mBAAA;ACHN;;ADQA;EACE,WAAA;EACA,aAAA;ACLF;;ADQA;EACE,gBAAA;EACA,UAAA;ACLF;ADME;EACE,WAAA;EACA,YAAA;ACJJ;ADKI;EACE,YAAA;EACA,WAAA;EACA,sBAAA;EACA,2BAAA;EAEA,yBAAA;EAGA,oBAAA;EACA,iBAAA;ACJN;ADMI;EACE,kBAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,wCAAA;EACA,sBAAA;ACJN;ADKM;EACE,2CAAA;EACA,YAAA;ACHR;;ADSA;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;ACNF;;ADSA;EACE,gBAAA;ACNF;ADOE;EACE,oBAAA;ACLJ;ADMI;EACE,iBAAA;ACJN;;ADSA;EACE;IACE,gBAAA;ECNF;EDQI;IACE,aAAA;ECNN;AACF","sourcesContent":["// @import \"~swiper/scss\";\n// @import \"~@ionic/angular/css/ionic-swiper\";\n\n.gallery-container {\n  // background-color: var(--ion-color-medium-shade);\n  .selected-image {\n    display: flex;\n    justify-content: center;\n    height: 550px;\n    img {\n      width: 100%;\n      background-color: var(--ion-color-light-tint);\n      object-fit: contain;\n    }\n  }\n}\n\nswiper-container {\n  width: 100%;\n  height: 250px;\n}\n\nswiper-slide {\n  max-width: 300px;\n  padding: 0;\n  .swipers-image {\n    width: 100%;\n    height: 100%;\n    img {\n      height: 100%;\n      width: 100%;\n      background-size: cover;\n      background-position: center;\n\n      -webkit-user-select: none;\n      -khtml-user-select: none;\n      -moz-user-select: none;\n      -o-user-select: none;\n      user-select: none;\n    }\n    .cover-img {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(51, 51, 51, 0.63);\n      background-size: cover;\n      &.selected {\n        background-color: rgba(11, 114, 211, 0.219);\n        opacity: 0.7;\n      }\n    }\n  }\n}\n\nswiper-slide img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\nion-card {\n  box-shadow: none;\n  .edit-btn {\n    margin: 8px 16px 0px;\n    ion-text {\n      margin-right: 4px;\n    }\n  }\n}\n\n@media (max-width: 500px) {\n  ion-card {\n    box-shadow: none;\n    .gallery-container {\n      .selected-image {\n        height: 350px;\n      }\n    }\n  }\n}\n",".gallery-container .selected-image {\n  display: flex;\n  justify-content: center;\n  height: 550px;\n}\n.gallery-container .selected-image img {\n  width: 100%;\n  background-color: var(--ion-color-light-tint);\n  object-fit: contain;\n}\n\nswiper-container {\n  width: 100%;\n  height: 250px;\n}\n\nswiper-slide {\n  max-width: 300px;\n  padding: 0;\n}\nswiper-slide .swipers-image {\n  width: 100%;\n  height: 100%;\n}\nswiper-slide .swipers-image img {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\nswiper-slide .swipers-image .cover-img {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(51, 51, 51, 0.63);\n  background-size: cover;\n}\nswiper-slide .swipers-image .cover-img.selected {\n  background-color: rgba(11, 114, 211, 0.219);\n  opacity: 0.7;\n}\n\nswiper-slide img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\nion-card {\n  box-shadow: none;\n}\nion-card .edit-btn {\n  margin: 8px 16px 0px;\n}\nion-card .edit-btn ion-text {\n  margin-right: 4px;\n}\n\n@media (max-width: 500px) {\n  ion-card {\n    box-shadow: none;\n  }\n  ion-card .gallery-container .selected-image {\n    height: 350px;\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 94003:
/*!**************************************************************************************!*\
  !*** ./src/app/properties/properties-list/properties-list.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card-slider {\n  flex: 0 0 auto;\n  max-width: 250px;\n  height: 100%;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */ /* Konqueror HTML */ /* Old versions of Firefox */ /* Internet Explorer/Edge */\n  user-select: none; /* Non-pr */\n}\n.card-slider .property-card {\n  padding: 0.3rem 0.5rem;\n}\n\n.card-view-all ion-card {\n  background: var(--ion-color-light-shade);\n}\n.card-view-all ion-card ion-card-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 506px;\n}\n\n.view-all {\n  --background: var(--ion-color-dark);\n}\n.view-all span {\n  color: var(--ion-color-light);\n  text-transform: capitalize;\n}", "",{"version":3,"sources":["webpack://./src/app/properties/properties-list/properties-list.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/properties/properties-list/properties-list.component.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;EACA,gBAAA;EACA,YAAA;EACA,2BAAA,EAAA,eAAA;EACA,yBAAA,EAAA,WAAA,EACA,mBAAA,EACA,4BAAA,EACA,2BAAA;EACA,iBAAA,EAAA,WAAA;ACCF;ADAE;EACE,sBAAA;ACEJ;;ADGE;EACE,wCAAA;ACAJ;ADCI;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;ACCN;;ADIA;EACE,mCAAA;ACDF;ADEE;EACE,6BAAA;EACA,0BAAA;ACAJ","sourcesContent":[".card-slider {\n  flex: 0 0 auto;\n  max-width: 250px;\n  height: 100%;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Old versions of Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-pr */\n  .property-card {\n    padding: 0.3rem 0.5rem;\n  }\n}\n\n.card-view-all {\n  ion-card {\n    background: var(--ion-color-light-shade);\n    ion-card-content {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      min-height: 506px;\n    }\n  }\n}\n\n.view-all {\n  --background: var(--ion-color-dark);\n  span {\n    color: var(--ion-color-light);\n    text-transform: capitalize;\n  }\n}\n",".card-slider {\n  flex: 0 0 auto;\n  max-width: 250px;\n  height: 100%;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Old versions of Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-pr */\n}\n.card-slider .property-card {\n  padding: 0.3rem 0.5rem;\n}\n\n.card-view-all ion-card {\n  background: var(--ion-color-light-shade);\n}\n.card-view-all ion-card ion-card-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 506px;\n}\n\n.view-all {\n  --background: var(--ion-color-dark);\n}\n.view-all span {\n  color: var(--ion-color-light);\n  text-transform: capitalize;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 85512:
/*!******************************************************************************************!*\
  !*** ./src/app/properties/properties-new-modal/properties-new.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".coord-heading {\n  padding: 24px 0 16px 0;\n  display: flex;\n  align-items: center;\n}\n.coord-heading ion-text {\n  text-transform: capitalize;\n  font-weight: 600;\n  margin-right: 8px;\n}\n\n.coord-input {\n  display: flex;\n}\n.coord-input ion-item {\n  width: 95%;\n}\n\nion-list-header {\n  --color: #8794a4;\n}\n\nion-item {\n  --padding-end: 8px;\n  --padding-start: 8px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  margin: 0 0 16px 0;\n}\nion-item ion-label {\n  --color: #8794a4;\n}\nion-item ion-input,\nion-item ion-textarea {\n  --padding-start: 12px !important;\n  padding: 6px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 8px;\n}\nion-item ion-input::placeholder,\nion-item ion-textarea::placeholder {\n  font-size: 15px;\n}\n\n.alert-errors {\n  width: 100%;\n  margin: 6px 0 0 0;\n}", "",{"version":3,"sources":["webpack://./src/app/properties/properties-new-modal/properties-new.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/properties/properties-new-modal/properties-new.component.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,aAAA;EACA,mBAAA;ACCF;ADAE;EACE,0BAAA;EACA,gBAAA;EACA,iBAAA;ACEJ;;ADCA;EACE,aAAA;ACEF;ADDE;EACE,UAAA;ACGJ;;ADAA;EACE,gBAAA;ACGF;;ADAA;EACE,kBAAA;EACA,oBAAA;EACA,kBAAA;EACA,qBAAA;EACA,kBAAA;ACGF;ADFE;EACE,gBAAA;ACIJ;ADFE;;EAEE,gCAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;ACIJ;ADHI;;EACE,eAAA;ACMN;;ADDA;EACE,WAAA;EACA,iBAAA;ACIF","sourcesContent":[".coord-heading {\n  padding: 24px 0 16px 0;\n  display: flex;\n  align-items: center;\n  ion-text {\n    text-transform: capitalize;\n    font-weight: 600;\n    margin-right: 8px;\n  }\n}\n.coord-input {\n  display: flex;\n  ion-item {\n    width: 95%;\n  }\n}\nion-list-header {\n  --color: #8794a4;\n}\n\nion-item {\n  --padding-end: 8px;\n  --padding-start: 8px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  margin: 0 0 16px 0;\n  ion-label {\n    --color: #8794a4;\n  }\n  ion-input,\n  ion-textarea {\n    --padding-start: 12px !important;\n    padding: 6px;\n    box-sizing: border-box;\n    border-radius: 4px;\n    margin-top: 8px;\n    &::placeholder {\n      font-size: 15px;\n    }\n  }\n}\n\n.alert-errors {\n  width: 100%;\n  margin: 6px 0 0 0;\n}\n",".coord-heading {\n  padding: 24px 0 16px 0;\n  display: flex;\n  align-items: center;\n}\n.coord-heading ion-text {\n  text-transform: capitalize;\n  font-weight: 600;\n  margin-right: 8px;\n}\n\n.coord-input {\n  display: flex;\n}\n.coord-input ion-item {\n  width: 95%;\n}\n\nion-list-header {\n  --color: #8794a4;\n}\n\nion-item {\n  --padding-end: 8px;\n  --padding-start: 8px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  margin: 0 0 16px 0;\n}\nion-item ion-label {\n  --color: #8794a4;\n}\nion-item ion-input,\nion-item ion-textarea {\n  --padding-start: 12px !important;\n  padding: 6px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 8px;\n}\nion-item ion-input::placeholder,\nion-item ion-textarea::placeholder {\n  font-size: 15px;\n}\n\n.alert-errors {\n  width: 100%;\n  margin: 6px 0 0 0;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 74178:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/properties/properties-uploads-modal/properties-current-images/properties-current-images.component.scss?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".swiper .swiper-slide {\n  width: auto;\n  background-color: red;\n}\n\n.current-images {\n  margin: 16px 0;\n  height: 100%;\n  width: 100%;\n}\n.current-images header {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 16px;\n}\n.current-images swiper-container {\n  width: 100%;\n  height: 200px;\n}\n.current-images swiper-slide {\n  max-width: 200px;\n  padding: 0;\n}\n.current-images swiper-slide .swipers-image {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  background-size: contain;\n}\n.current-images swiper-slide .swipers-image img {\n  -webkit-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.current-images swiper-slide .swipers-image .checkbox {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  height: 16px;\n  width: 16px;\n  z-index: 2;\n}\n.current-images swiper-slide .swipers-image .checkbox.showOutline {\n  outline: 3px solid var(--ion-color-primary);\n}\n.current-images swiper-slide .swipers-image .cover-img {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(51, 51, 51, 0.63);\n}\n.current-images swiper-slide .swipers-image .cover-img.selected {\n  background-color: rgba(11, 114, 211, 0.219);\n  opacity: 0.7;\n}\n.current-images ion-button {\n  margin-top: 16px;\n}", "",{"version":3,"sources":["webpack://./src/app/properties/properties-uploads-modal/properties-current-images/properties-current-images.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/properties/properties-uploads-modal/properties-current-images/properties-current-images.component.scss"],"names":[],"mappings":"AACA;EACE,WAAA;EACA,qBAAA;ACAF;;ADGA;EACE,cAAA;EACA,YAAA;EACA,WAAA;ACAF;ADCE;EACE,eAAA;EACA,gBAAA;EACA,4BAAA;EACA,mBAAA;ACCJ;ADEE;EACE,WAAA;EACA,aAAA;ACAJ;ADGE;EACE,gBAAA;EACA,UAAA;ACDJ;ADEI;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,wBAAA;ACAN;ADCM;EACE,yBAAA;EAGA,oBAAA;EACA,iBAAA;ACCR;ADCM;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;ACCR;ADAQ;EACE,2CAAA;ACEV;ADCM;EACE,kBAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,wCAAA;ACCR;ADAQ;EACE,2CAAA;EACA,YAAA;ACEV;ADGE;EACE,gBAAA;ACDJ","sourcesContent":["\n.swiper .swiper-slide {\n  width: auto;\n  background-color: red;\n}\n\n.current-images {\n  margin: 16px 0;\n  height: 100%;\n  width: 100%;\n  header {\n    font-size: 24px;\n    font-weight: 600;\n    color: var(--ion-color-dark);\n    margin-bottom: 16px;\n  }\n\n  swiper-container {\n    width: 100%;\n    height: 200px;\n  }\n  \n  swiper-slide {\n    max-width: 200px;\n    padding: 0;\n    .swipers-image {\n      width: 100%;\n      height: 100%;\n      object-fit: contain;\n      background-size: contain;\n      img {\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -o-user-select: none;\n        user-select: none;\n      }\n      .checkbox {\n        position: absolute;\n        top: 12px;\n        right: 12px;\n        height: 16px;\n        width: 16px;\n        z-index: 2;\n        &.showOutline {\n          outline: 3px solid var(--ion-color-primary);\n        }\n      }\n      .cover-img {\n        position: absolute;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(51, 51, 51, 0.63);\n        &.selected {\n          background-color: rgba(11, 114, 211, 0.219);\n          opacity: 0.7;\n        }\n      }\n    }\n  }\n  ion-button {\n    margin-top: 16px;\n  }\n}\n",".swiper .swiper-slide {\n  width: auto;\n  background-color: red;\n}\n\n.current-images {\n  margin: 16px 0;\n  height: 100%;\n  width: 100%;\n}\n.current-images header {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 16px;\n}\n.current-images swiper-container {\n  width: 100%;\n  height: 200px;\n}\n.current-images swiper-slide {\n  max-width: 200px;\n  padding: 0;\n}\n.current-images swiper-slide .swipers-image {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  background-size: contain;\n}\n.current-images swiper-slide .swipers-image img {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.current-images swiper-slide .swipers-image .checkbox {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  height: 16px;\n  width: 16px;\n  z-index: 2;\n}\n.current-images swiper-slide .swipers-image .checkbox.showOutline {\n  outline: 3px solid var(--ion-color-primary);\n}\n.current-images swiper-slide .swipers-image .cover-img {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(51, 51, 51, 0.63);\n}\n.current-images swiper-slide .swipers-image .cover-img.selected {\n  background-color: rgba(11, 114, 211, 0.219);\n  opacity: 0.7;\n}\n.current-images ion-button {\n  margin-top: 16px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 62329:
/*!**************************************************************************************************!*\
  !*** ./src/app/properties/properties-uploads-modal/properties-uploads.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 32px;\n}\n\n.previews {\n  text-align: center;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  padding-bottom: 24px;\n}\n.previews .preview-img {\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  border: 2px dashed var(--ion-color-medium);\n  position: relative;\n}\n.previews .preview-img .cover-hover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(54, 54, 54, 0.753);\n  z-index: 1;\n  opacity: 0;\n  cursor: pointer;\n  transition: opacity ease-out 0.5s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: aliceblue;\n}\n.previews .preview-img .cover-hover p {\n  margin: 0;\n  font-weight: 900;\n}\n.previews .preview-img .cover-hover:hover {\n  opacity: 1;\n}\n\n.upload-form-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 16px;\n}\n.upload-form-container .input-contianer {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  border: 4px dashed var(--ion-color-light-shade);\n  position: relative;\n  margin-bottom: 16px;\n}\n.upload-form-container .input-contianer p {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  line-height: 170px;\n  color: var(--ion-color-dark-shade);\n  font-family: Arial;\n}\n.upload-form-container .input-contianer input {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  outline: none;\n  opacity: 0;\n}\n.upload-form-container ion-button {\n  border: none;\n  transition: all 0.2s ease;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}", "",{"version":3,"sources":["webpack://./src/app/properties/properties-uploads-modal/properties-uploads.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/properties/properties-uploads-modal/properties-uploads.component.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,oBAAA;ACCF;;ADCA;EACE,kBAAA;EACA,aAAA;EACA,qCAAA;EACA,SAAA;EACA,oBAAA;ACEF;ADDE;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,0CAAA;EACA,kBAAA;ACGJ;ADFI;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,mCAAA;EACA,UAAA;EACA,UAAA;EACA,eAAA;EACA,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;ACIN;ADHM;EACE,SAAA;EACA,gBAAA;ACKR;ADHM;EACE,UAAA;ACKR;;ADAA;EACE,aAAA;EACA,sBAAA;EACA,oBAAA;ACGF;ADFE;EACE,WAAA;EACA,YAAA;EACA,cAAA;EACA,+CAAA;EACA,kBAAA;EACA,mBAAA;ACIJ;ADHI;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,kCAAA;EACA,kBAAA;ACKN;ADHI;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,UAAA;ACKN;ADDE;EACE,YAAA;EACA,yBAAA;EACA,mBAAA;EACA,sBAAA;ACGJ","sourcesContent":[".wrapper {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 32px;\n}\n.previews {\n  text-align: center;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  padding-bottom: 24px;\n  .preview-img {\n    padding: 8px;\n    width: 100%;\n    height: 100%;\n    border: 2px dashed var(--ion-color-medium);\n    position: relative;\n    .cover-hover {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(54, 54, 54, 0.753);\n      z-index: 1;\n      opacity: 0;\n      cursor: pointer;\n      transition: opacity ease-out 0.5s;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      color: aliceblue;\n      p {\n        margin: 0;\n        font-weight: 900;\n      }\n      &:hover {\n        opacity: 1;\n      }\n    }\n  }\n}\n.upload-form-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 16px;\n  .input-contianer {\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n    border: 4px dashed var(--ion-color-light-shade);\n    position: relative;\n    margin-bottom: 16px;\n    p {\n      width: 100%;\n      height: 100%;\n      text-align: center;\n      line-height: 170px;\n      color: var(--ion-color-dark-shade);\n      font-family: Arial;\n    }\n    input {\n      position: absolute;\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      height: 100%;\n      outline: none;\n      opacity: 0;\n    }\n  }\n\n  ion-button {\n    border: none;\n    transition: all 0.2s ease;\n    --padding-top: 16px;\n    --padding-bottom: 16px;\n  }\n}\n",".wrapper {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 32px;\n}\n\n.previews {\n  text-align: center;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  padding-bottom: 24px;\n}\n.previews .preview-img {\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  border: 2px dashed var(--ion-color-medium);\n  position: relative;\n}\n.previews .preview-img .cover-hover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(54, 54, 54, 0.753);\n  z-index: 1;\n  opacity: 0;\n  cursor: pointer;\n  transition: opacity ease-out 0.5s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: aliceblue;\n}\n.previews .preview-img .cover-hover p {\n  margin: 0;\n  font-weight: 900;\n}\n.previews .preview-img .cover-hover:hover {\n  opacity: 1;\n}\n\n.upload-form-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 16px;\n}\n.upload-form-container .input-contianer {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  border: 4px dashed var(--ion-color-light-shade);\n  position: relative;\n  margin-bottom: 16px;\n}\n.upload-form-container .input-contianer p {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  line-height: 170px;\n  color: var(--ion-color-dark-shade);\n  font-family: Arial;\n}\n.upload-form-container .input-contianer input {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  outline: none;\n  opacity: 0;\n}\n.upload-form-container ion-button {\n  border: none;\n  transition: all 0.2s ease;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 72939:
/*!************************************************************!*\
  !*** ./src/app/properties/properties.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: var(--ion-color-light-tint);\n  --height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.properties-container {\n  height: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\nion-searchbar {\n  --box-shadow: none;\n}\n\n.heading {\n  font-size: 24px;\n  font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/app/properties/properties.page.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/properties/properties.page.scss"],"names":[],"mappings":"AAAA;EACE,yCAAA;EACA,cAAA;EACA,SAAA;EACA,UAAA;ACCF;;ADCA;EACE,YAAA;EACA,iBAAA;EACA,cAAA;ACEF;;ADAA;EACE,kBAAA;ACGF;;ADDA;EACE,eAAA;EACA,iBAAA;ACIF","sourcesContent":["ion-content {\n  --background: var(--ion-color-light-tint);\n  --height: 100%;\n  margin: 0;\n  padding: 0;\n}\n.properties-container {\n  height: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n}\nion-searchbar {\n  --box-shadow: none;\n}\n.heading {\n  font-size: 24px;\n  font-weight: bold;\n}\n","ion-content {\n  --background: var(--ion-color-light-tint);\n  --height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.properties-container {\n  height: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\nion-searchbar {\n  --box-shadow: none;\n}\n\n.heading {\n  font-size: 24px;\n  font-weight: bold;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 33740:
/*!**************************************************************************************!*\
  !*** ./src/app/properties/properties-card/properties-card.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card>\n  <div class=\"tag\" *ngIf=\"userService.user?.user_id === property.user_id\">\n    Owned\n  </div>\n\n  <img\n    class=\"profile-image\"\n    [src]=\"property?.images[0]\"\n    *ngIf=\"property?.images?.length\"\n  />\n  <img\n    class=\"profile-image ion-padding-vertical\"\n    [src]=\"'assets/images/no-image.jpeg'\"\n    *ngIf=\"!property?.images || !property?.images.length\"\n  />\n\n  <ion-card-header>\n    <app-property-badge [type]=\"property?.type\"></app-property-badge>\n    <ion-card-title class=\"name\">\n      {{ property?.name }}\n    </ion-card-title>\n\n    <div>\n      {{ property?.createdAt | date }}\n    </div>\n  </ion-card-header>\n\n  <ion-card-content>\n    <div class=\"desc\">\n      {{ property?.description }}\n    </div>\n\n    <div class=\"price\">\n      {{ property?.price | currency: \"PHP\" }}\n    </div>\n    <ion-button\n      (click)=\"selectProperty(property)\"\n      expand=\"block\"\n      class=\"ion-margin-top\"\n      color=\"primary\"\n    >\n      View property\n    </ion-button>\n  </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 98369:
/*!**********************************************************************************************************!*\
  !*** ./src/app/properties/properties-coordinates-modal/properties-coordinates.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon name=\"close-outline\" style=\"font-size: 28px\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"page-container\">\n    <app-map-search-field\n      (selectedLocation)=\"mapLeaflet.setMapCenter($event)\"\n    ></app-map-search-field>\n    <app-map-leaflet\n      #mapLeaflet\n      [showPropertyMarkers]=\"false\"\n      [clickAddMarker]=\"true\"\n      (clickedAt)=\"setCoord($event)\"\n    ></app-map-leaflet>\n  </div>\n\n  <div class=\"btn-contianer\" *ngIf=\"coord\">\n    <ion-button color=\"success\" (click)=\"confirmed()\">Confirm</ion-button>\n  </div>\n\n  <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"help-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <div class=\"notice-container\">\n        <ion-text color=\"light\">\n          Click/Tap at the map to place the marker.\n        </ion-text>\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </div>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n";

/***/ }),

/***/ 86399:
/*!******************************************************************************************!*\
  !*** ./src/app/properties/properties-detail/properties-detail.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Property Detail</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"location.back()\">\n        <ion-icon name=\"arrow-back-outline\" style=\"font-size: 28px\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" *ngIf=\"property\">\n  <div class=\"details-container\" *ngIf=\"ready\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" sizeXl=\"8\">\n          <ion-card class=\"property-identity\">\n            <ion-card-content>\n              <div class=\"name\">\n                <ion-text color=\"dark\">{{ property.name }}</ion-text>\n\n                <ion-button\n                  class=\"action-btn\"\n                  color=\"light\"\n                  (click)=\"actionPopup()\"\n                >\n                  <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n                </ion-button>\n              </div>\n              <div class=\"type\">\n                <app-property-badge [type]=\"property.type\"></app-property-badge>\n              </div>\n              <div class=\"price\"></div>\n            </ion-card-content>\n          </ion-card>\n\n          <app-properties-gallery\n            [images]=\"property.images\"\n            [showEdit]=\"isOwner\"\n            (edit)=\"editImages()\"\n            *ngIf=\"property.images\"\n            #propertiesGallery\n          ></app-properties-gallery>\n\n          <ion-card class=\"property-description\">\n            <ion-card-header> Description </ion-card-header>\n            <ion-card-content>\n              {{ property.description }}\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea\n              impedit alias laborum corrupti magnam in repellat! Corrupti\n              temporibus ut eos.\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card\n            class=\"property-features\"\n            *ngIf=\"property.features && property.features.length\"\n          >\n            <ion-card-header> Features </ion-card-header>\n            <ion-card-content>\n              <ion-badge\n                color=\"primary\"\n                class=\"item\"\n                *ngFor=\"let item of property.features\"\n              >\n                <div>\n                  <ion-icon name=\"bookmark-outline\"></ion-icon>\n                  {{ item }}\n                </div>\n              </ion-badge>\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card class=\"property-address\">\n            <ion-card-header> Address </ion-card-header>\n            <ion-card-content>\n              {{ property.address }}\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card class=\"property-price\" *ngIf=\"property.price\">\n            <ion-card-header> Price </ion-card-header>\n            <ion-card-content class=\"price\">\n              {{ property.price | currency: property.currency:\"symbol\" }}\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card class=\"enquiry-section\" *ngIf=\"!isOwner\">\n            <ion-card-header>\n              <ion-card-title color=\"dark\">\n                Enquire for more Information\n              </ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n              <app-enquiries-new-form\n                [property]=\"property\"\n                [userTo]=\"property.user_id\"\n              ></app-enquiries-new-form>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <ion-col size=\"12\" sizeXl=\"4\">\n          <div class=\"mortgage-container\">\n            <app-mortgage-core-calc\n              [simpleMode]=\"true\"\n              [boxShadow]=\"false\"\n            ></app-mortgage-core-calc>\n\n            <ion-card class=\"find-map-card\">\n              <ion-card-header>\n                <ion-card-title color=\"light\">Map View</ion-card-title>\n              </ion-card-header>\n\n              <ion-card-content>\n                <p>\n                  Maps can be a useful tool for viewing properties location &\n                  filter them by types. this also help us to know distances so\n                  that we know how far away one thing is from another.\n                </p>\n\n                <ion-button expand=\"block\" size=\"large\" (click)=\"findInMap()\">\n                  <ion-icon name=\"locate-outline\"></ion-icon>\n                  Find in Map\n                </ion-button>\n              </ion-card-content>\n            </ion-card>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 9033:
/*!********************************************************************************************!*\
  !*** ./src/app/properties/properties-edit-modal/properties-edit.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Add new property</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon name=\"close-outline\" style=\"font-size: 28px\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"form ion-padding\">\n  <form [formGroup]=\"propertyForm\">\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Name:</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Address:</ion-label>\n      <ion-input type=\"text\" formControlName=\"address\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Description</ion-label>\n      <ion-textarea\n        formControlName=\"description\"\n        placeholder=\"...\"\n      ></ion-textarea>\n    </ion-item>\n\n    <div class=\"divider\"></div>\n\n    <ion-list>\n      <ion-radio-group formControlName=\"type\">\n        <ion-list-header>\n          <ion-label color=\"primary\">Type</ion-label>\n        </ion-list-header>\n\n        <ion-item *ngFor=\"let type of propertyTypes\">\n          <ion-label color=\"dark\">{{ type.label }}</ion-label>\n          <ion-radio slot=\"start\" [value]=\"type.value\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n    <div class=\"divider\"></div>\n\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Price:</ion-label>\n      <ion-input type=\"text\" formControlName=\"price\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Currency:</ion-label>\n      <ion-input type=\"text\" formControlName=\"currency\"></ion-input>\n    </ion-item>\n\n    <div class=\"divider\"></div>\n\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\"> Features: </ion-label>\n      <ion-textarea\n        formControlName=\"features\"\n        placeholder=\"bedroom, kitchen, ...\"\n      ></ion-textarea>\n      <span class=\"note-helper\">\n        For multiple features separate with comma( , )\n      </span>\n    </ion-item>\n\n    <div class=\"divider\"></div>\n\n    <div class=\"coord-heading\">\n      <ion-text color=\"dark\">Set Marker Position:</ion-text>\n      <ion-button size=\"small\" color=\"primary\" (click)=\"openMap()\">\n        Open Map\n      </ion-button>\n    </div>\n    <div class=\"coord-input\">\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Latitude:</ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"lat\"\n          placeholder=\"Latitude\"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Longitude:</ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"lng\"\n          placeholder=\"Longitude\"\n        ></ion-input>\n      </ion-item>\n    </div>\n\n    <ion-button\n      expand=\"block\"\n      size=\"large\"\n      (click)=\"update()\"\n      class=\"ion-margin\"\n      color=\"success\"\n    >\n      Update\n    </ion-button>\n  </form>\n</ion-content>\n";

/***/ }),

/***/ 84406:
/*!********************************************************************************************!*\
  !*** ./src/app/properties/properties-gallery/properties-gallery.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card class=\"ion-no-padding ion-no-margin\">\n  <div class=\"ion-text-right\" *ngIf=\"showEdit\">\n    <ion-button\n      size=\"small\"\n      fill=\"clear\"\n      class=\"edit-btn\"\n      (click)=\"edit.emit(true)\"\n    >\n      <ion-text>Edit</ion-text>\n      <ion-icon name=\"images-outline\"></ion-icon>\n    </ion-button>\n  </div>\n\n  <ion-card-content class=\"gallery-container\">\n    <div class=\"selected-image ion-padding-vertical death\">\n      <img [src]=\"imagePresented\" alt=\"image\" />\n    </div>\n\n    <swiper-container\n      pagination=\"true\"\n      pagination-clickable=\"true\"\n      space-between=\"30\"\n      slides-per-view=\"auto\"\n      *ngIf=\"images?.length > 1\"\n    >\n      <swiper-slide *ngFor=\"let image of images\" class=\"swiper\">\n        <div class=\"swipers-image\" (click)=\"setSelected(image)\">\n          <img\n            [style.backgroundImage]=\"getImage(image)\"\n            src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"\n            alt=\"image\"\n          />\n          <div\n            class=\"cover-img\"\n            [ngClass]=\"{ selected: imagePresented === image }\"\n          ></div>\n        </div>\n      </swiper-slide>\n    </swiper-container>\n  </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 82648:
/*!**************************************************************************************!*\
  !*** ./src/app/properties/properties-list/properties-list.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- Lists of Propertis Cards -->\n<ion-row *ngIf=\"!horizontalSlide\">\n  <ion-col\n    size=\"12\"\n    [sizeSm]=\"singleCol ? 12 : 6\"\n    [sizeMd]=\"singleCol ? 12 : 4\"\n    [sizeLg]=\"singleCol ? 12 : 6\"\n    [sizeXl]=\"singleCol ? 12 : 3\"\n    *ngFor=\"let item of displayedItems\"\n  >\n    <app-properties-card [property]=\"item\"></app-properties-card>\n  </ion-col>\n\n  <ion-col\n    size=\"12\"\n    [sizeMd]=\"singleCol ? 12 : 6\"\n    [sizeLg]=\"singleCol ? 12 : 4\"\n    [sizeXl]=\"singleCol ? 12 : 3\"\n    class=\"card-view-all\"\n    *ngIf=\"limit\"\n  >\n    <ion-card style=\"height: 100%\">\n      <ion-card-content>\n        <ion-button color=\"primary\" fill=\"outline\" routerLink=\"/properties\">\n          View All\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n</ion-row>\n\n<ion-row *ngIf=\"!horizontalSlide\">\n  <ion-infinite-scroll\n    #IonInfiniteScroll\n    threshold=\"80px\"\n    (ionInfinite)=\"loadData()\"\n  >\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-row>\n\n<app-div-horizontal-slide\n  *ngIf=\"horizontalSlide\"\n  style=\"background-color: aqua; height: 100%\"\n>\n  <div\n    *ngFor=\"let item of properties.slice(0, 6)\"\n    class=\"card-slider ion-margin-vertical\"\n  >\n    <div class=\"property-card\">\n      <app-properties-card [property]=\"item\"></app-properties-card>\n    </div>\n  </div>\n\n  <div class=\"card-slider card-view-all ion-margin-vertical\">\n    <ion-card style=\"height: 100%\">\n      <ion-card-content style=\"width: 230px\">\n        <div>\n          <ion-button color=\"primary\" fill=\"outline\" routerLink=\"/properties\">\n            View All\n          </ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</app-div-horizontal-slide>\n";

/***/ }),

/***/ 77562:
/*!******************************************************************************************!*\
  !*** ./src/app/properties/properties-new-modal/properties-new.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"step === 2\">\n      <ion-button (click)=\"step = 1\">\n        <ion-icon name=\"arrow-back-outline\" style=\"font-size: 24px\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Add new property</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon name=\"close-outline\" style=\"font-size: 28px\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"form ion-padding\">\n  <form [formGroup]=\"propertyForm\">\n    <!-- STEP ONE -->\n    <section *ngIf=\"step === 1\">\n      <ion-item lines=\"none\">\n        <ion-input\n          type=\"text\"\n          label=\"Name:\"\n          labelPlacement=\"floating\"\n          formControlName=\"name\"\n          fill=\"outline\"\n          helperText=\"Enter property name\"\n          errorText=\"Invalid Name\"\n        ></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-input\n          type=\"text\"\n          label=\"Address:\"\n          labelPlacement=\"floating\"\n          formControlName=\"address\"\n          fill=\"outline\"\n          helperText=\"Enter property physical address\"\n          errorText=\"Invalid address, address is required\"\n        ></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-textarea\n          formControlName=\"description\"\n          labelPlacement=\"floating\"\n          label=\"Description:\"\n          placeholder=\"...\"\n          fill=\"outline\"\n          helperText=\"Enter property description\"\n          errorText=\"Invalid description, too short\"\n        ></ion-textarea>\n      </ion-item>\n\n      <ion-list>\n        <ion-radio-group formControlName=\"type\">\n          <ion-list-header>\n            <ion-label>Type</ion-label>\n          </ion-list-header>\n\n          <ion-item lines=\"none\" *ngFor=\"let type of propertyTypes\">\n            <label for=\"radio\">{{ type.label }}</label>\n            <ion-radio\n              slot=\"start\"\n              id=\"radio\"\n              [label]=\"type.label\"\n              [value]=\"type.value\"\n            ></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n    </section>\n    <!-- STEP TWO -->\n    <section *ngIf=\"step === 2\">\n      <ion-item lines=\"none\">\n        <ion-input\n          type=\"number\"\n          label=\"Price:\"\n          labelPlacement=\"floating\"\n          formControlName=\"price\"\n          fill=\"outline\"\n          helperText=\"Enter property price\"\n          errorText=\"Invalid price\"\n        ></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-input\n          type=\"text\"\n          placeholder=\"USD, PHP, SGD\"\n          labelPlacement=\"floating\"\n          label=\"Currency:\"\n          formControlName=\"currency\"\n          fill=\"outline\"\n          helperText=\"Enter property currency\"\n          errorText=\"Currency is not valid\"\n        ></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-textarea\n          formControlName=\"features\"\n          label=\"Features:\"\n          labelPlacement=\"floating\"\n          placeholder=\"bedroom, kitchen, ...\"\n          fill=\"outline\"\n          helperText=\"For multiple features separate with comma( , )\"\n        ></ion-textarea>\n      </ion-item>\n\n      <div class=\"coord-heading\">\n        <ion-text color=\"dark\">Set Marker Position:</ion-text>\n        <ion-button size=\"small\" color=\"primary\" (click)=\"openMap()\">\n          Open Map\n        </ion-button>\n      </div>\n      <div class=\"coord-input\">\n        <ion-item lines=\"none\">\n          <ion-input\n            type=\"text\"\n            label=\"Latitude:\"\n            labelPlacement=\"floating\"\n            formControlName=\"lat\"\n            placeholder=\"Latitude\"\n            fill=\"outline\"\n          ></ion-input>\n        </ion-item>\n        <div class=\"ion-margin\"></div>\n        <ion-item lines=\"none\">\n          <ion-input\n            type=\"text\"\n            label=\"Longitude:\"\n            labelPlacement=\"floating\"\n            formControlName=\"lng\"\n            placeholder=\"Longitude\"\n            fill=\"outline\"\n          ></ion-input>\n        </ion-item>\n      </div>\n    </section>\n\n    <ion-button\n      expand=\"block\"\n      size=\"large\"\n      (click)=\"submit()\"\n      class=\"ion-margin\"\n      color=\"success\"\n      [disabled]=\"isSubmit\"\n    >\n      {{ step === 2 ? \"Submit\" : \"Next\" }}\n    </ion-button>\n  </form>\n</ion-content>\n\n<ion-footer translucent>\n  <ion-toolbar>\n    <div class=\"ion-padding-horizontal\">Step {{ step }} / 2</div>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ }),

/***/ 31725:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/properties/properties-uploads-modal/properties-current-images/properties-current-images.component.html?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section title=\"current-images\" class=\"current-images\">\n  <header>Current Images:</header>\n\n  <swiper-container\n    pagination=\"true\"\n    pagination-clickable=\"true\"\n    space-between=\"30\"\n    slides-per-view=\"auto\"\n    class=\"slides\"\n  >\n    <swiper-slide *ngFor=\"let image of images\">\n      <div\n        class=\"swipers-image\"\n        (click)=\"setSelected(image)\"\n        [style.backgroundImage]=\"getImage(image)\"\n      >\n        <img\n          src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"\n          alt=\"image\"\n        />\n\n        <input\n          type=\"checkbox\"\n          class=\"checkbox\"\n          [ngClass]=\"{ showOutline: !isSelected(image) }\"\n          [checked]=\"isSelected(image)\"\n        />\n\n        <div\n          class=\"cover-img\"\n          [ngClass]=\"{ selected: isSelected(image) }\"\n        ></div>\n      </div>\n    </swiper-slide>\n  </swiper-container>\n\n  <ion-button\n    color=\"primary\"\n    expand=\"block\"\n    class=\"\"\n    color=\"danger\"\n    [disabled]=\"!selectedImages.length\"\n    (click)=\"deleteSelected()\"\n  >\n    Delete Selected\n  </ion-button>\n</section>\n";

/***/ }),

/***/ 27396:
/*!**************************************************************************************************!*\
  !*** ./src/app/properties/properties-uploads-modal/properties-uploads.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Property Uploads</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon name=\"close-outline\" style=\"font-size: 28px\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"wrapper\">\n    <section title=\"preview-section\" class=\"previews\" *ngIf=\"previews.length\">\n      <div\n        *ngFor=\"let preview of previews; let i = index\"\n        class=\"preview-img\"\n        (click)=\"removeFile(i)\"\n      >\n        <img [src]=\"preview\" class=\"\" alt=\"preview\" />\n        <div class=\"cover-hover\">\n          <p>Click to remove!</p>\n          <small>{{ selectedFiles[i].name }}</small>\n        </div>\n      </div>\n    </section>\n\n    <section title=\"upload-section\" class=\"upload-form-container\">\n      <div class=\"input-contianer\" *ngIf=\"!previews.length\">\n        <div>\n          <input\n            type=\"file\"\n            name=\"imageUpload\"\n            (change)=\"onSelectFile($event)\"\n            id=\"imageUpload\"\n            multiple\n          />\n          <p>Drag your files here or click in this area.</p>\n        </div>\n      </div>\n      <ion-button\n        color=\"primary\"\n        expand=\"block\"\n        class=\"\"\n        id=\"uploadBtn\"\n        (click)=\"upload()\"\n      >\n        Upload Image\n      </ion-button>\n    </section>\n\n    <app-properties-current-images\n      [images]=\"property.images\"\n      [id]=\"property.property_id\"\n      [hidden]=\"!property.images.length\"\n    ></app-properties-current-images>\n  </div>\n</ion-content>\n\n<ion-footer translucent>\n  <ion-toolbar> </ion-toolbar>\n</ion-footer>\n";

/***/ }),

/***/ 29814:
/*!************************************************************!*\
  !*** ./src/app/properties/properties.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title> Properties Page </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar\n      inputmode=\"text\"\n      clearIcon\n      debounce=\"1300\"\n      [(ngModel)]=\"search\"\n      animated\n      (ionChange)=\"propertyLists.setSearch(search)\"\n      placeholder=\"Search Property\"\n    ></ion-searchbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" sizeMd=\"6\">\n          <ion-item lines=\"none\">\n            <ion-select\n              multiple=\"true\"\n              [(ngModel)]=\"filterBy\"\n              okText=\"Confirm\"\n              cancelText=\"Dismiss\"\n              label=\"Filter by:\"\n              (ionChange)=\"propertyLists.setFilters(filterBy)\"\n            >\n              <ion-select-option\n                *ngFor=\"let filter of filters\"\n                [value]=\"filter.value\"\n              >\n                {{filter.label}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"12\" sizeMd=\"6\">\n          <ion-item lines=\"none\">\n            <ion-select\n              [(ngModel)]=\"sortBy\"\n              okText=\"Confirm\"\n              cancelText=\"Dismiss\"\n              label=\"Sort by:\"\n              (ionChange)=\"propertyLists.setSort(sortBy)\"\n            >\n              <ion-select-option\n                *ngFor=\"let sort of sorts\"\n                [value]=\"sort.value\"\n              >\n                {{ sort.label}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-fab\n  slot=\"fixed\"\n  vertical=\"bottom\"\n  horizontal=\"end\"\n  class=\"ion-margin-end show-on-mobile\"\n>\n  <ion-fab-button (click)=\"presentModal()\" color=\"success\">\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-content>\n  <div class=\"properties-container\">\n    <ion-progress-bar\n      style=\"margin: 4px 0 0 0\"\n      type=\"indeterminate\"\n      *ngIf=\"progressBar\"\n    ></ion-progress-bar>\n\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center ion-margin-top hide-on-mobile\">\n        <ion-col class=\"heading ion-padding-horizontal\">\n          List of Properties\n        </ion-col>\n\n        <ion-col class=\"ion-padding-horizontal\">\n          <ion-button\n            color=\"success\"\n            class=\"ion-float-right\"\n            (click)=\"presentModal()\"\n          >\n            New Property\n            <ion-icon name=\"add-circle-outline\"></ion-icon\n          ></ion-button>\n        </ion-col>\n      </ion-row>\n      <!-- Card List of Properties -->\n      <app-properties-list\n        #propertyLists\n        (isLoading)=\"presentLoading()\"\n      ></app-properties-list>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_properties_properties_module_ts.js.map