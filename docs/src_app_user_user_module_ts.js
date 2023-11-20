(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user_user_module_ts"],{

/***/ 9668:
/*!**********************************************!*\
  !*** ./src/app/shared/enums/notification.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationType": () => (/* binding */ NotificationType)
/* harmony export */ });
var NotificationType;
(function (NotificationType) {
  NotificationType["enquiry"] = "enquiry";
  NotificationType["property"] = "property";
  NotificationType["app"] = "app";
})(NotificationType || (NotificationType = {}));

/***/ }),

/***/ 18218:
/*!******************************************!*\
  !*** ./src/app/user/auth-guest.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuestGuard": () => (/* binding */ AuthGuestGuard)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 1584);





let AuthGuestGuard = class AuthGuestGuard {
  constructor(user, router) {
    this.user = user;
    this.router = router;
  }
  canActivate() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = _this.user.user;
      // if user is guest in
      if (!user) {
        _this.router.navigate(['/map']);
        return false;
      }
      return true;
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _user_service__WEBPACK_IMPORTED_MODULE_1__.UserService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }];
};
AuthGuestGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], AuthGuestGuard);


/***/ }),

/***/ 32881:
/*!************************************!*\
  !*** ./src/app/user/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 1584);





let AuthGuard = class AuthGuard {
  constructor(user, router) {
    this.user = user;
    this.router = router;
  }
  canActivate() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = _this.user.user;
      // if user is signed in
      if (!!user) {
        _this.router.navigate(['/map']);
        return false;
      }
      return true;
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _user_service__WEBPACK_IMPORTED_MODULE_1__.UserService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }];
};
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], AuthGuard);


/***/ }),

/***/ 92384:
/*!*******************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.component.html?ngResource */ 89334);
/* harmony import */ var _change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.component.scss?ngResource */ 65985);
/* harmony import */ var _change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_directives_custom_validators_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/directives/custom-validators.directive */ 92414);






let ChangePasswordComponent = class ChangePasswordComponent {
  constructor(fb, customValidators) {
    this.fb = fb;
    this.customValidators = customValidators;
    this.error = false;
    this.changePassForm = this.fb.group({
      passwordCurrent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      passwordNew: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8), this.customValidators.patternValidator(/\d/, {
        hasNumber: true
      }), this.customValidators.patternValidator(/[A-Z]/, {
        hasCapitalCase: true
      }), this.customValidators.patternValidator(/[a-z]/, {
        hasSmallCase: true
      }), this.customValidators.patternValidator(/[!@#$%^&*(),.?":{}|<>]/, {
        hasSpecialCharacters: true
      })]],
      passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8), this.customValidators.patternValidator(/\d/, {
        hasNumber: true
      }), this.customValidators.patternValidator(/[A-Z]/, {
        hasCapitalCase: true
      }), this.customValidators.patternValidator(/[a-z]/, {
        hasSmallCase: true
      }), this.customValidators.patternValidator(/[!@#$%^&*(),.?":{}|<>]/, {
        hasSpecialCharacters: true
      })]]
    });
  }
  ngOnInit() {}
  submit() {
    if (this.changePassForm.invalid) {
      this.error = true;
      return;
    }
    console.log(this.changePassForm.value);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder
  }, {
    type: src_app_shared_directives_custom_validators_directive__WEBPACK_IMPORTED_MODULE_2__.CustomValidatorsDirective
  }];
};
ChangePasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-change-password',
  template: _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ChangePasswordComponent);


/***/ }),

/***/ 70873:
/*!***************************************************************!*\
  !*** ./src/app/user/notifications/notifications.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _notifications_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.component.html?ngResource */ 43774);
/* harmony import */ var _notifications_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.component.scss?ngResource */ 95732);
/* harmony import */ var _notifications_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notifications_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_enums_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/notification */ 9668);





let NotificationsComponent = class NotificationsComponent {
  constructor() {
    this.notifications = [{
      id: '01',
      title: 'Property have been added.',
      type: 'property',
      date: new Date()
    }, {
      id: '02',
      title: 'Property have been added.',
      type: 'property',
      date: new Date()
    }, {
      id: '03',
      title: 'Test@email.com have have sent you enquiries',
      type: 'enquiry',
      date: new Date('2021/8/6')
    }, {
      id: '04',
      title: 'Success, your Email have been verified!!!',
      type: 'app',
      date: new Date('2021/8/5')
    }, {
      id: '05',
      title: 'Welcome friend, Account created',
      type: 'app',
      date: new Date('2021/8/5')
    }];
  }
  ngOnInit() {}
  itemClicked() {
    console.log('item is clicked');
  }
  getItemBadge(type) {
    switch (type) {
      case src_app_shared_enums_notification__WEBPACK_IMPORTED_MODULE_2__.NotificationType.enquiry:
        return 'secondary';
      case src_app_shared_enums_notification__WEBPACK_IMPORTED_MODULE_2__.NotificationType.property:
        return 'success';
      default:
        return 'primary';
    }
  }
  static #_ = this.ctorParameters = () => [];
};
NotificationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-notifications',
  template: _notifications_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_notifications_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NotificationsComponent);


/***/ }),

/***/ 69080:
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component.html?ngResource */ 71959);
/* harmony import */ var _profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss?ngResource */ 22686);
/* harmony import */ var _profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ 1584);





let ProfileComponent = class ProfileComponent {
  constructor(userService) {
    this.userService = userService;
    this.imgUrl = './assets/images/avatar.png';
    this.userService.user$.subscribe(data => this.user = data);
  }
  ngOnInit() {}
  toggleUpload() {
    const input = document.getElementById('image-upload');
    input.click();
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = ev => {
        this.imgUrl = ev.target.result;
        console.log(this.imgUrl);
      };
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
  }];
};
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-profile',
  template: _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ProfileComponent);


/***/ }),

/***/ 42859:
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.html?ngResource */ 48740);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.scss?ngResource */ 42308);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var src_app_shared_directives_custom_validators_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/directives/custom-validators.directive */ 92414);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ 1584);










let RegisterComponent = class RegisterComponent {
  constructor(fb, customValidators, toastCtrl, loadingController, router, user) {
    this.fb = fb;
    this.customValidators = customValidators;
    this.toastCtrl = toastCtrl;
    this.loadingController = loadingController;
    this.router = router;
    this.user = user;
    this.error = false;
    this.registerForm = this.fb.group({
      fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, customValidators.emailValidation()]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8), this.customValidators.patternValidator(/\d/, {
        hasNumber: true
      }), this.customValidators.patternValidator(/[A-Z]/, {
        hasCapitalCase: true
      }), this.customValidators.patternValidator(/[a-z]/, {
        hasSmallCase: true
      }), this.customValidators.patternValidator(/[!@#$%^&*(),.?":{}|<>]/, {
        hasSpecialCharacters: true
      })]],
      confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      termService: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    }, {
      validators: this.customValidators.isDifferent('password', 'confirm', 'notConfirmed')
    });
  }
  ngOnInit() {}
  submit() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.registerForm.invalid) {
        _this.error = true;
        return;
      }
      const loading = yield _this.presentLoading();
      loading.present();
      const {
        fullName,
        email,
        password
      } = _this.registerForm.value;
      const result = yield _this.user.register(fullName, email, password);
      if (!result.error) {
        loading.dismiss();
        yield _this.showToast('Success, registration is complete.');
        yield _this.router.navigateByUrl('/user/account/profile');
        return;
      }
      yield _this.showToast('Error:' + result.error.message, 'danger');
      loading.dismiss();
    })();
  }
  presentLoading() {
    var _this2 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this2.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...'
      });
    })();
  }
  showToast(message, color = 'success') {
    var _this3 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastCtrl.create({
        message,
        duration: 2000,
        color
      });
      toast.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder
  }, {
    type: src_app_shared_directives_custom_validators_directive__WEBPACK_IMPORTED_MODULE_3__.CustomValidatorsDirective
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
  }];
};
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-register',
  template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], RegisterComponent);


/***/ }),

/***/ 77973:
/*!*************************************************!*\
  !*** ./src/app/user/signin/signin.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninComponent": () => (/* binding */ SigninComponent)
/* harmony export */ });
/* harmony import */ var D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _signin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.component.html?ngResource */ 15169);
/* harmony import */ var _signin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin.component.scss?ngResource */ 27476);
/* harmony import */ var _signin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ 1584);










let SigninComponent = class SigninComponent {
  constructor(fb, user, toastCtrl, loadingController, router, platform) {
    this.fb = fb;
    this.user = user;
    this.toastCtrl = toastCtrl;
    this.loadingController = loadingController;
    this.router = router;
    this.platform = platform;
    this.error = false;
    this.authFailed = false;
    this.showSocial = false;
    this.signinForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  ngOnInit() {
    this.showSocial = !!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.api.googleAuthClientId;
  }
  ngAfterViewInit() {
    if (!this.platform.is('capacitor')) {
      this.initializeGoogleSigninWeb();
    }
  }
  submit() {
    var _this = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.signinForm.invalid) {
        _this.error = true;
        return;
      }
      const loading = yield _this.presentLoading();
      loading.present();
      const {
        email,
        password
      } = _this.signinForm.value;
      const errMssg = 'Something went wrong, try again later.';
      try {
        const result = yield _this.user.signIn(email, password);
        yield loading.dismiss();
        if (result.error) {
          yield _this.showToast(result.error.message || errMssg, 'danger');
          return;
        }
        yield _this.showToast('Success, You are logged in');
        _this.router.navigateByUrl('/map');
      } catch (error) {
        yield loading.dismiss();
        yield _this.showToast(errMssg, 'danger');
      }
    })();
  }
  initializeGoogleSigninWeb() {
    if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.api.googleAuthClientId) {
      return;
    }
    google.accounts.id.initialize({
      client_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.api.googleAuthClientId,
      callback: this.handleCredentialResponse.bind(this),
      auto_select: false,
      cancel_on_tap_outside: true
    });
    google.accounts.id.renderButton(document.getElementById('web-google-button'), {
      theme: 'outline',
      size: 'large',
      width: '330px'
    });
    google.accounts.id.prompt( /*#__PURE__*/function () {
      var _ref = (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (notification) {
        console.log(notification);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  handleCredentialResponse(response) {
    var _this2 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Here will be your response from Google.
      const loading = yield _this2.presentLoading();
      loading.present();
      const user = yield _this2.user.googleAuth(response);
      if (user) {
        yield _this2.showToast('Success, You are logged in');
        _this2.router.navigateByUrl('/map');
        loading.dismiss();
      }
    })();
  }
  presentLoading() {
    var _this3 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this3.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...'
      });
    })();
  }
  showToast(message, color = 'success') {
    var _this4 = this;
    return (0,D_Angular_workspace_real_estate_management_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this4.toastCtrl.create({
        message,
        duration: 2000,
        color
      });
      toast.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder
  }, {
    type: _user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
  }];
};
SigninComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-signin',
  template: _signin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_signin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SigninComponent);


/***/ }),

/***/ 20454:
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageRoutingModule": () => (/* binding */ UserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _auth_guest_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-guest.guard */ 18218);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ 32881);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password/change-password.component */ 92384);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications/notifications.component */ 70873);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ 69080);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ 42859);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin/signin.component */ 77973);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.page */ 18169);











const routes = [{
  path: '',
  redirectTo: '/user/account',
  pathMatch: 'full'
}, {
  path: 'account',
  component: _user_page__WEBPACK_IMPORTED_MODULE_7__.UserPage,
  children: [{
    path: '',
    redirectTo: '/user/account/profile',
    pathMatch: 'full'
  }, {
    path: 'profile',
    component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent
  }, {
    path: 'change-password',
    component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__.ChangePasswordComponent
  }, {
    path: 'notifications',
    component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__.NotificationsComponent
  }],
  canActivate: [_auth_guest_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuestGuard]
}, {
  path: 'register',
  component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'signin',
  component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__.SigninComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}];
let UserPageRoutingModule = class UserPageRoutingModule {};
UserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
})], UserPageRoutingModule);


/***/ }),

/***/ 88524:
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageModule": () => (/* binding */ UserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 20454);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.page */ 18169);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ 77973);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ 42859);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password/change-password.component */ 92384);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ 69080);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notifications/notifications.component */ 70873);













let UserPageModule = class UserPageModule {};
UserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
  declarations: [_user_page__WEBPACK_IMPORTED_MODULE_2__.UserPage, _register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent, _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__.SigninComponent, _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__.ChangePasswordComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__.ProfileComponent, _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__.NotificationsComponent]
})], UserPageModule);


/***/ }),

/***/ 18169:
/*!***********************************!*\
  !*** ./src/app/user/user.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPage": () => (/* binding */ UserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.page.html?ngResource */ 87493);
/* harmony import */ var _user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page.scss?ngResource */ 51376);
/* harmony import */ var _user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let UserPage = class UserPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
UserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-user',
  template: _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserPage);


/***/ }),

/***/ 65985:
/*!********************************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: var(--ion-color-light);\n}\n\nion-card {\n  box-shadow: none;\n}\n\n.change-pass-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo-container {\n  margin: 30px auto 0;\n  max-width: 200px;\n  text-align: center;\n}\n\n.change-pass-card {\n  width: 100%;\n  max-width: 450px;\n}\n.change-pass-card .title {\n  font-size: 20px;\n  font-weight: bold;\n  color: var(--ion-color-dark);\n}\n.change-pass-card ion-item {\n  margin-top: 8px;\n  --background: var(--ion-color-light);\n}\n\n@media (max-width: 600px) {\n  .change-pass-card {\n    box-shadow: none;\n    min-height: 100%;\n    width: 100%;\n    max-width: 400px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/user/change-password/change-password.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/user/change-password/change-password.component.scss"],"names":[],"mappings":"AAAA;EACE,oCAAA;ACCF;;ADEA;EACE,gBAAA;ACCF;;ADEA;EACE,iBAAA;EACA,cAAA;EACA,WAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ACCF;;ADEA;EACE,mBAAA;EACA,gBAAA;EACA,kBAAA;ACCF;;ADEA;EACE,WAAA;EACA,gBAAA;ACCF;ADAE;EACE,eAAA;EACA,iBAAA;EACA,4BAAA;ACEJ;ADAE;EACE,eAAA;EACA,oCAAA;ACEJ;;ADCA;EACE;IACE,gBAAA;IACA,gBAAA;IACA,WAAA;IACA,gBAAA;ECEF;AACF","sourcesContent":["ion-content {\n  --background: var(--ion-color-light);\n}\n\nion-card {\n  box-shadow: none;\n}\n\n.change-pass-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo-container {\n  margin: 30px auto 0;\n  max-width: 200px;\n  text-align: center;\n}\n\n.change-pass-card {\n  width: 100%;\n  max-width: 450px;\n  .title {\n    font-size: 20px;\n    font-weight: bold;\n    color: var(--ion-color-dark);\n  }\n  ion-item {\n    margin-top: 8px;\n    --background: var(--ion-color-light);\n  }\n}\n@media (max-width: 600px) {\n  .change-pass-card {\n    box-shadow: none;\n    min-height: 100%;\n    width: 100%;\n    max-width: 400px;\n  }\n}\n","ion-content {\n  --background: var(--ion-color-light);\n}\n\nion-card {\n  box-shadow: none;\n}\n\n.change-pass-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo-container {\n  margin: 30px auto 0;\n  max-width: 200px;\n  text-align: center;\n}\n\n.change-pass-card {\n  width: 100%;\n  max-width: 450px;\n}\n.change-pass-card .title {\n  font-size: 20px;\n  font-weight: bold;\n  color: var(--ion-color-dark);\n}\n.change-pass-card ion-item {\n  margin-top: 8px;\n  --background: var(--ion-color-light);\n}\n\n@media (max-width: 600px) {\n  .change-pass-card {\n    box-shadow: none;\n    min-height: 100%;\n    width: 100%;\n    max-width: 400px;\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 95732:
/*!****************************************************************************!*\
  !*** ./src/app/user/notifications/notifications.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: var(--ion-color-light);\n}\n\nion-card {\n  box-shadow: none;\n}\n\n.notification-container {\n  min-height: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\nion-item {\n  --inner-padding-bottom: 16px;\n  --inner-padding-top: 16px;\n}\nion-item .item-right-side {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\nion-item .item-right-side ion-badge {\n  margin: 0 8px 0 0;\n}", "",{"version":3,"sources":["webpack://./src/app/user/notifications/notifications.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/user/notifications/notifications.component.scss"],"names":[],"mappings":"AAAA;EACE,oCAAA;ACCF;;ADCA;EACE,gBAAA;ACEF;;ADAA;EACE,gBAAA;EACA,iBAAA;EACA,cAAA;ACGF;;ADAA;EACE,4BAAA;EACA,yBAAA;ACGF;ADFE;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;ACIJ;ADHI;EACE,iBAAA;ACKN","sourcesContent":["ion-content {\n  --background: var(--ion-color-light);\n}\nion-card {\n  box-shadow: none;\n}\n.notification-container {\n  min-height: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\nion-item {\n  --inner-padding-bottom: 16px;\n  --inner-padding-top: 16px;\n  .item-right-side {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    ion-badge {\n      margin: 0 8px 0 0;\n    }\n  }\n}\n","ion-content {\n  --background: var(--ion-color-light);\n}\n\nion-card {\n  box-shadow: none;\n}\n\n.notification-container {\n  min-height: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\nion-item {\n  --inner-padding-bottom: 16px;\n  --inner-padding-top: 16px;\n}\nion-item .item-right-side {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\nion-item .item-right-side ion-badge {\n  margin: 0 8px 0 0;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 22686:
/*!****************************************************************!*\
  !*** ./src/app/user/profile/profile.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: var(--ion-color-light);\n}\n\nion-card {\n  box-shadow: none;\n}\n\n.profile-container {\n  min-height: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\n.profile-img-container {\n  padding: 16px 0;\n}\n.profile-img-container img {\n  border-radius: 16px;\n  height: auto;\n  width: 100%;\n  max-height: 300px;\n  max-width: 300px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.image-input {\n  background-color: var(--ion-color-primary);\n  color: var(--ion-colo-light);\n}\n\n.app-use-info {\n  padding: 16px 0;\n}\n.app-use-info .item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0 12px 0;\n}\n.app-use-info .item ion-icon {\n  font-size: 24px;\n  margin-right: 4px;\n}\n.app-use-info .item ion-text {\n  font-size: 16px;\n  margin-right: 4px;\n}\n\n.form-information ion-item {\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin: 0 0 16px 0;\n}\n.form-information ion-item ion-label {\n  --color: #8794a4;\n}\n.form-information ion-item ion-input,\n.form-information ion-item ion-textarea {\n  --padding-start: 12px;\n  padding: 6px;\n  border: 1px solid rgba(0, 57, 100, 0.418);\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n.form-information ion-item ion-input::placeholder,\n.form-information ion-item ion-textarea::placeholder {\n  font-size: 15px;\n}\n\n.activities-section {\n  margin: 90px 0 0 0;\n}\n.activities-section .heading {\n  font-size: 30px;\n  font-weight: bold;\n  text-align: center;\n  padding: 0 0 24px 0;\n  border-bottom: 5px solid var(--ion-color-primary);\n}\n.activities-section .activities-empty {\n  height: 300px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.activities-section .activities-empty h1 {\n  display: flex;\n  align-items: center;\n  font-size: 35px;\n  letter-spacing: 1.5px;\n}\n.activities-section .activities-empty h1 ion-icon {\n  font-size: 50px;\n}", "",{"version":3,"sources":["webpack://./src/app/user/profile/profile.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/user/profile/profile.component.scss"],"names":[],"mappings":"AAAA;EACE,oCAAA;ACCF;;ADCA;EACE,gBAAA;ACEF;;ADAA;EACE,gBAAA;EACA,iBAAA;EACA,cAAA;ACGF;;ADDA;EACE,eAAA;ACIF;ADHE;EACE,mBAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;ACKJ;;ADFA;EACE,0CAAA;EACA,4BAAA;ACKF;;ADHA;EACE,eAAA;ACMF;ADLE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;ACOJ;ADNI;EACE,eAAA;EACA,iBAAA;ACQN;ADNI;EACE,eAAA;EACA,iBAAA;ACQN;;ADHE;EACE,sBAAA;EACA,wBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;ACMJ;ADLI;EACE,gBAAA;ACON;ADLI;;EAEE,qBAAA;EACA,YAAA;EACA,yCAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;ACON;ADNM;;EACE,eAAA;ACSR;;ADHA;EACE,kBAAA;ACMF;ADLE;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iDAAA;ACOJ;ADLE;EACE,aAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ACOJ;ADNI;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,qBAAA;ACQN;ADPM;EACE,eAAA;ACSR","sourcesContent":["ion-content {\n  --background: var(--ion-color-light);\n}\nion-card {\n  box-shadow: none;\n}\n.profile-container {\n  min-height: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.profile-img-container {\n  padding: 16px 0;\n  img {\n    border-radius: 16px;\n    height: auto;\n    width: 100%;\n    max-height: 300px;\n    max-width: 300px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n.image-input {\n  background-color: var(--ion-color-primary);\n  color: var(--ion-colo-light);\n}\n.app-use-info {\n  padding: 16px 0;\n  .item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 0 12px 0;\n    ion-icon {\n      font-size: 24px;\n      margin-right: 4px;\n    }\n    ion-text {\n      font-size: 16px;\n      margin-right: 4px;\n    }\n  }\n}\n.form-information {\n  ion-item {\n    --inner-padding-end: 0;\n    --inner-padding-start: 0;\n    --padding-end: 0;\n    --padding-start: 0;\n    --padding-top: 0;\n    --padding-bottom: 0;\n    margin: 0 0 16px 0;\n    ion-label {\n      --color: #8794a4;\n    }\n    ion-input,\n    ion-textarea {\n      --padding-start: 12px;\n      padding: 6px;\n      border: 1px solid rgba(0, 57, 100, 0.418);\n      box-sizing: border-box;\n      border-radius: 4px;\n      margin-top: 8px;\n      &::placeholder {\n        font-size: 15px;\n      }\n    }\n  }\n}\n\n.activities-section {\n  margin: 90px 0 0 0;\n  .heading {\n    font-size: 30px;\n    font-weight: bold;\n    text-align: center;\n    padding: 0 0 24px 0;\n    border-bottom: 5px solid var(--ion-color-primary);\n  }\n  .activities-empty {\n    height: 300px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    h1 {\n      display: flex;\n      align-items: center;\n      font-size: 35px;\n      letter-spacing: 1.5px;\n      ion-icon {\n        font-size: 50px;\n      }\n    }\n  }\n}\n@media (max-width: 600px) {\n}\n","ion-content {\n  --background: var(--ion-color-light);\n}\n\nion-card {\n  box-shadow: none;\n}\n\n.profile-container {\n  min-height: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\n.profile-img-container {\n  padding: 16px 0;\n}\n.profile-img-container img {\n  border-radius: 16px;\n  height: auto;\n  width: 100%;\n  max-height: 300px;\n  max-width: 300px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.image-input {\n  background-color: var(--ion-color-primary);\n  color: var(--ion-colo-light);\n}\n\n.app-use-info {\n  padding: 16px 0;\n}\n.app-use-info .item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0 12px 0;\n}\n.app-use-info .item ion-icon {\n  font-size: 24px;\n  margin-right: 4px;\n}\n.app-use-info .item ion-text {\n  font-size: 16px;\n  margin-right: 4px;\n}\n\n.form-information ion-item {\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin: 0 0 16px 0;\n}\n.form-information ion-item ion-label {\n  --color: #8794a4;\n}\n.form-information ion-item ion-input,\n.form-information ion-item ion-textarea {\n  --padding-start: 12px;\n  padding: 6px;\n  border: 1px solid rgba(0, 57, 100, 0.418);\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n.form-information ion-item ion-input::placeholder,\n.form-information ion-item ion-textarea::placeholder {\n  font-size: 15px;\n}\n\n.activities-section {\n  margin: 90px 0 0 0;\n}\n.activities-section .heading {\n  font-size: 30px;\n  font-weight: bold;\n  text-align: center;\n  padding: 0 0 24px 0;\n  border-bottom: 5px solid var(--ion-color-primary);\n}\n.activities-section .activities-empty {\n  height: 300px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.activities-section .activities-empty h1 {\n  display: flex;\n  align-items: center;\n  font-size: 35px;\n  letter-spacing: 1.5px;\n}\n.activities-section .activities-empty h1 ion-icon {\n  font-size: 50px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 42308:
/*!******************************************************************!*\
  !*** ./src/app/user/register/register.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: var(--ion-color-light);\n}\n\n.register-container {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  min-height: calc(100% - 56px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.register-card {\n  width: 100%;\n  max-width: 400px;\n}\n.register-card ion-item {\n  margin-top: 8px;\n  --background: var(--ion-color-light);\n}\n\n.logo-container {\n  margin: 30px auto 0;\n  max-width: 200px;\n  text-align: center;\n}\n\n.alert-errors {\n  width: 100%;\n  margin: 6px 0 0 0;\n}\n\n.ask-signin {\n  width: 100%;\n  margin-top: 36px;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n}\n.ask-signin a {\n  margin-left: 6px;\n}\n\n@media (max-width: 600px) {\n  ion-content {\n    --background: var(--ion-color-dark-contrast);\n  }\n  .register-card {\n    margin: 0;\n    box-shadow: none;\n    min-height: 100%;\n    width: 100%;\n    max-width: 400px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/user/register/register.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/user/register/register.component.scss"],"names":[],"mappings":"AAAA;EACE,oCAAA;ACCF;;ADCA;EACE,kBAAA;EACA,iBAAA;EACA,cAAA;EACA,WAAA;EACA,6BAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ACEF;;ADCA;EACE,WAAA;EACA,gBAAA;ACEF;ADDE;EACE,eAAA;EACA,oCAAA;ACGJ;;ADCA;EACE,mBAAA;EACA,gBAAA;EACA,kBAAA;ACEF;;ADCA;EACE,WAAA;EACA,iBAAA;ACEF;;ADCA;EACE,WAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,yBAAA;ACEF;ADDE;EACE,gBAAA;ACGJ;;ADAA;EACE;IACE,4CAAA;ECGF;EDDA;IACE,SAAA;IACA,gBAAA;IACA,gBAAA;IACA,WAAA;IACA,gBAAA;ECGF;AACF","sourcesContent":["ion-content {\n  --background: var(--ion-color-light);\n}\n.register-container {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  min-height: calc(100% - 56px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.register-card {\n  width: 100%;\n  max-width: 400px;\n  ion-item {\n    margin-top: 8px;\n    --background: var(--ion-color-light);\n  }\n}\n\n.logo-container {\n  margin: 30px auto 0;\n  max-width: 200px;\n  text-align: center;\n}\n\n.alert-errors {\n  width: 100%;\n  margin: 6px 0 0 0;\n}\n\n.ask-signin {\n  width: 100%;\n  margin-top: 36px;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n  a {\n    margin-left: 6px;\n  }\n}\n@media (max-width: 600px) {\n  ion-content {\n    --background: var(--ion-color-dark-contrast);\n  }\n  .register-card {\n    margin: 0;\n    box-shadow: none;\n    min-height: 100%;\n    width: 100%;\n    max-width: 400px;\n  }\n}\n","ion-content {\n  --background: var(--ion-color-light);\n}\n\n.register-container {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  min-height: calc(100% - 56px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.register-card {\n  width: 100%;\n  max-width: 400px;\n}\n.register-card ion-item {\n  margin-top: 8px;\n  --background: var(--ion-color-light);\n}\n\n.logo-container {\n  margin: 30px auto 0;\n  max-width: 200px;\n  text-align: center;\n}\n\n.alert-errors {\n  width: 100%;\n  margin: 6px 0 0 0;\n}\n\n.ask-signin {\n  width: 100%;\n  margin-top: 36px;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n}\n.ask-signin a {\n  margin-left: 6px;\n}\n\n@media (max-width: 600px) {\n  ion-content {\n    --background: var(--ion-color-dark-contrast);\n  }\n  .register-card {\n    margin: 0;\n    box-shadow: none;\n    min-height: 100%;\n    width: 100%;\n    max-width: 400px;\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 27476:
/*!**************************************************************!*\
  !*** ./src/app/user/signin/signin.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: var(--ion-color-light);\n}\n\n.signin-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  min-height: calc(100% - 56px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.signin-card {\n  width: 100%;\n  max-width: 400px;\n}\n.signin-card ion-item {\n  margin-top: 8px;\n  --background: var(--ion-color-light);\n}\n\n.logo-container {\n  margin: 30px auto 0;\n  max-width: 200px;\n  text-align: center;\n}\n\n.alert-errors {\n  width: 100%;\n  margin: 6px 0 0 0;\n}\n\n.ask-register {\n  width: 100%;\n  margin-top: 36px;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n}\n.ask-register a {\n  margin-left: 6px;\n}\n\n.social-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n@media (max-width: 600px) {\n  ion-content {\n    --background: var(--ion-color-dark-contrast);\n  }\n  .signin-card {\n    margin: 0;\n    box-shadow: none;\n    min-height: 100%;\n    width: 100%;\n    max-width: 400px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/user/signin/signin.component.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/user/signin/signin.component.scss"],"names":[],"mappings":"AAAA;EACE,oCAAA;ACCF;;ADCA;EACE,iBAAA;EACA,cAAA;EACA,WAAA;EACA,6BAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ACEF;;ADCA;EACE,WAAA;EACA,gBAAA;ACEF;ADDE;EACE,eAAA;EACA,oCAAA;ACGJ;;ADCA;EACE,mBAAA;EACA,gBAAA;EACA,kBAAA;ACEF;;ADCA;EACE,WAAA;EACA,iBAAA;ACEF;;ADCA;EACE,WAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,yBAAA;ACEF;ADDE;EACE,gBAAA;ACGJ;;ADCA;EACE,WAAA;EACA,aAAA;EACA,uBAAA;ACEF;;ADAA;EACE;IACE,4CAAA;ECGF;EDDA;IACE,SAAA;IACA,gBAAA;IACA,gBAAA;IACA,WAAA;IACA,gBAAA;ECGF;AACF","sourcesContent":["ion-content {\n  --background: var(--ion-color-light);\n}\n.signin-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  min-height: calc(100% - 56px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.signin-card {\n  width: 100%;\n  max-width: 400px;\n  ion-item {\n    margin-top: 8px;\n    --background: var(--ion-color-light);\n  }\n}\n\n.logo-container {\n  margin: 30px auto 0;\n  max-width: 200px;\n  text-align: center;\n}\n\n.alert-errors {\n  width: 100%;\n  margin: 6px 0 0 0;\n}\n\n.ask-register {\n  width: 100%;\n  margin-top: 36px;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n  a {\n    margin-left: 6px;\n  }\n}\n\n.social-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n@media (max-width: 600px) {\n  ion-content {\n    --background: var(--ion-color-dark-contrast);\n  }\n  .signin-card {\n    margin: 0;\n    box-shadow: none;\n    min-height: 100%;\n    width: 100%;\n    max-width: 400px;\n  }\n}\n","ion-content {\n  --background: var(--ion-color-light);\n}\n\n.signin-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  min-height: calc(100% - 56px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.signin-card {\n  width: 100%;\n  max-width: 400px;\n}\n.signin-card ion-item {\n  margin-top: 8px;\n  --background: var(--ion-color-light);\n}\n\n.logo-container {\n  margin: 30px auto 0;\n  max-width: 200px;\n  text-align: center;\n}\n\n.alert-errors {\n  width: 100%;\n  margin: 6px 0 0 0;\n}\n\n.ask-register {\n  width: 100%;\n  margin-top: 36px;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n}\n.ask-register a {\n  margin-left: 6px;\n}\n\n.social-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n@media (max-width: 600px) {\n  ion-content {\n    --background: var(--ion-color-dark-contrast);\n  }\n  .signin-card {\n    margin: 0;\n    box-shadow: none;\n    min-height: 100%;\n    width: 100%;\n    max-width: 400px;\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 51376:
/*!************************************************!*\
  !*** ./src/app/user/user.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-tab-bar {\n  --border: 1px solid\n    var(\n      --ion-item-border-color,\n      var(--ion-border-color, var(--ion-color-step-250, rgba(0, 0, 0, 0.13)))\n    );\n  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.12);\n}", "",{"version":3,"sources":["webpack://./src/app/user/user.page.scss","webpack://./../../Angular%20workspace/real-estate-management-main/src/app/user/user.page.scss"],"names":[],"mappings":"AAAA;EACE;;;;KAAA;EAKA,2CAAA;ACCF","sourcesContent":["ion-tab-bar {\n  --border: 1px solid\n    var(\n      --ion-item-border-color,\n      var(--ion-border-color, var(--ion-color-step-250, rgba(0, 0, 0, 0.13)))\n    );\n  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.12);\n}\n","ion-tab-bar {\n  --border: 1px solid\n    var(\n      --ion-item-border-color,\n      var(--ion-border-color, var(--ion-color-step-250, rgba(0, 0, 0, 0.13)))\n    );\n  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.12);\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 89334:
/*!********************************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div class=\"change-pass-container\">\n    <ion-card class=\"change-pass-card\">\n      <ion-card-header class=\"ion-text-center\">\n        <div class=\"logo-container\">\n          <img src=\"../assets/images/logo.png\" alt=\"logo\" />\n          <div class=\"source\"></div>\n        </div>\n      </ion-card-header>\n      <ion-card-content>\n        <div class=\"title\">Change Passowrd</div>\n        <div class=\"sub-title\">\n          Your new Password must be different from your previous Password\n        </div>\n        <form [formGroup]=\"changePassForm\" (submit)=\"submit()\">\n          <ion-list>\n            <ion-item>\n              <ion-input\n                labelPlacement=\"floating\"\n                label=\"Password Current\"\n                type=\"password\"\n                formControlName=\"passwordCurrent\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input\n                labelPlacement=\"floating\"\n                label=\"Password New\"\n                type=\"password\"\n                formControlName=\"passwordNew\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input\n                labelPlacement=\"floating\"\n                label=\"Password Confirm\"\n                type=\"password\"\n                formControlName=\"passwordConfirm\"\n              ></ion-input>\n            </ion-item>\n\n            <div>\n              <ul>\n                <li>Passwords must be atleast 8 characters log.</li>\n                <li>New Password and Confirm Password must be the same.</li>\n                <li>\n                  Passowrd must contain a number, special charaters, cappitalize\n                  & small case\n                </li>\n              </ul>\n            </div>\n\n            <ion-button\n              size=\"large\"\n              class=\"ion-margin-top\"\n              expand=\"full\"\n              color=\"primary\"\n              type=\"submit\"\n            >\n              Submit\n            </ion-button>\n          </ion-list>\n        </form>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 43774:
/*!****************************************************************************!*\
  !*** ./src/app/user/notifications/notifications.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div class=\"notification-container ion-padding-vertical\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title> My Notifications </ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n              <ion-list>\n                <ion-item\n                  *ngFor=\"let item of notifications\"\n                  button\n                  (click)=\"itemClicked()\"\n                >\n                  <ion-label>{{ item.title }}</ion-label>\n                  <div class=\"item-right-side\">\n                    <ion-badge [color]=\"getItemBadge(item.type)\">{{\n                      item.type\n                    }}</ion-badge>\n                    {{ item.date | date }}\n                  </div>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 71959:
/*!****************************************************************!*\
  !*** ./src/app/user/profile/profile.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div class=\"profile-container ion-padding-vertical\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" sizeMd=\"4\">\n          <ion-card>\n            <ion-card-header class=\"ion-no-padding\">\n              <ion-card-title class=\"ion-padding\"> My Profile, </ion-card-title>\n              <div class=\"profile-img-container\">\n                <img [src]=\"imgUrl\" />\n              </div>\n            </ion-card-header>\n\n            <ion-card-content>\n              <input\n                type=\"file\"\n                (change)=\"onSelectFile($event)\"\n                accept=\"image/*\"\n                [hidden]=\"true\"\n                id=\"image-upload\"\n              />\n              <ion-button\n                color=\"primary\"\n                expand=\"block\"\n                (click)=\"toggleUpload()\"\n              >\n                Upload Image\n              </ion-button>\n\n              <div class=\"app-use-info\">\n                <div class=\"item\">\n                  <ion-icon name=\"flame-outline\"></ion-icon>\n                  <ion-text>Joined {{ user?.created | date }}</ion-text>\n                </div>\n                <div class=\"item\">\n                  <ion-icon name=\"calendar-outline\"></ion-icon>\n                  <ion-text>Visited For 1 day</ion-text>\n                </div>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <ion-col size=\"12\" sizeMd=\"8\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title> My Information </ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n              <form class=\"form-information\">\n                <ion-item lines=\"none\">\n                  <ion-input\n                    labelPlacement=\"floating\"\n                    label=\"Email *\"\n                    type=\"email\"\n                    [value]=\"user?.email\"\n                  ></ion-input>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-input\n                    labelPlacement=\"floating\"\n                    label=\"Full Name *\"\n                    type=\"text\"\n                    [value]=\"user?.fullName\"\n                  ></ion-input>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-textarea\n                    placeholder=\"...\"\n                    labelPlacement=\"floating\"\n                    label=\"About Me:\"\n                    [value]=\"user?.aboutMe\"\n                  ></ion-textarea>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-input\n                    labelPlacement=\"floating\"\n                    label=\"Location\"\n                    type=\"text\"\n                    [value]=\"user?.location\"\n                  ></ion-input>\n                </ion-item>\n\n                <div class=\"ion-text-end ion-padding-vertical\">\n                  <ion-button>SAVE CHANGES</ion-button>\n                </div>\n              </form>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"activities-section\">\n          <div class=\"heading\">My Activities</div>\n          <div class=\"activities-empty\">\n            <h1>EMPTY<ion-icon name=\"alert-circle-outline\"></ion-icon></h1>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 48740:
/*!******************************************************************!*\
  !*** ./src/app/user/register/register.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Register Page</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"register-container\">\n    <ion-card class=\"register-card\">\n      <ion-card-header class=\"ion-text-center\">\n        <div class=\"logo-container\">\n          <img src=\"../assets/images/logo.png\" alt=\"logo\" />\n          <div class=\"source\"></div>\n        </div>\n      </ion-card-header>\n      <ion-card-content>\n        <form [formGroup]=\"registerForm\" (submit)=\"submit()\">\n          <ion-list>\n            <ion-item>\n              <ion-input\n                type=\"text\"\n                labelPlacement=\"floating\"\n                label=\"Full Name\"\n                formControlName=\"fullName\"\n              ></ion-input>\n            </ion-item>\n\n            <div\n              class=\"alert-errors\"\n              *ngIf=\"registerForm.get('fullName').errors\"\n            >\n              <app-alert-card\n                content=\"Full Name is too short.\"\n              ></app-alert-card>\n            </div>\n\n            <ion-item>\n              <ion-input\n                type=\"email\"\n                labelPlacement=\"floating\"\n                label=\"Email\"\n                formControlName=\"email\"\n              ></ion-input>\n            </ion-item>\n\n            <div\n              class=\"alert-errors\"\n              *ngIf=\"registerForm.get('email').errors\"\n            >\n              <app-alert-card content=\"Email is not valid. ex: name@email.com\"></app-alert-card>\n            </div>\n\n            <ion-item>\n              <ion-input\n                label=\"Password\"\n                labelPlacement=\"floating\"\n                type=\"password\"\n                formControlName=\"password\"\n              ></ion-input>\n            </ion-item>\n\n            <div\n              class=\"alert-errors\"\n              *ngIf=\"registerForm.get('password').errors\"\n            >\n              <app-alert-card\n                content=\"Length needs to be 8+ long & contain a\n                (number, special characters, small case & capitalize).\"\n              ></app-alert-card>\n            </div>\n\n            <ion-item>\n              <ion-input\n                type=\"password\"\n                labelPlacement=\"floating\"\n                label=\"Confirm Password\"\n                formControlName=\"confirm\"\n              ></ion-input>\n            </ion-item>\n\n            <div\n              class=\"alert-errors\"\n              *ngIf=\"registerForm.errors?.notConfirmed\"\n            >\n              <app-alert-card\n                content=\"Password not confirmed.\"\n              ></app-alert-card>\n            </div>\n\n            <div class=\"ion-padding-vertical\">\n              By continuing, you agree to our <a>User Agreement</a> and\n              <a>Privacy Policy</a>.\n            </div>\n\n            <ion-button\n              size=\"large\"\n              class=\"ion-margin-top\"\n              expand=\"full\"\n              color=\"primary\"\n              type=\"submit\"\n            >\n              Sign Up\n            </ion-button>\n\n            <div class=\"ask-signin\">\n              Already have an Account?\n              <a [routerLink]=\"['/user/signin']\">Sign in</a>\n            </div>\n          </ion-list>\n        </form>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 15169:
/*!**************************************************************!*\
  !*** ./src/app/user/signin/signin.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Sign In Page</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"signin-container\">\n    <ion-card class=\"signin-card\">\n      <ion-card-header class=\"ion-text-center\">\n        <div class=\"logo-container\">\n          <img src=\"../assets/images/logo.png\" alt=\"logo\" />\n          <div class=\"source\"></div>\n        </div>\n      </ion-card-header>\n      <ion-card-content>\n        <form [formGroup]=\"signinForm\" (submit)=\"submit()\">\n          <ion-list>\n            <ion-item>\n              <ion-input\n                labelPlacement=\"floating\"\n                label=\"Email\"\n                type=\"email\"\n                formControlName=\"email\"\n              ></ion-input>\n            </ion-item>\n            <div\n              class=\"alert-errors\"\n              *ngIf=\"error && signinForm.get('email').errors\"\n            >\n              <app-alert-card content=\"Email is not valid.\"></app-alert-card>\n            </div>\n            <ion-item>\n              <ion-input\n                labelPlacement=\"floating\"\n                label=\"Password\"\n                type=\"password\"\n                formControlName=\"password\"\n              ></ion-input>\n            </ion-item>\n            <div class=\"alert-errors\" *ngIf=\"authFailed\">\n              <app-alert-card\n                content=\"Wrong Email or Password.\"\n              ></app-alert-card>\n            </div>\n\n            <ion-button\n              size=\"large\"\n              class=\"ion-margin-top\"\n              expand=\"full\"\n              color=\"primary\"\n              type=\"submit\"\n            >\n              Sign In\n            </ion-button>\n\n            <div class=\"ion-margin-vertical ion-text-center\" *ngIf=\"showSocial\">\n              OR\n            </div>\n\n            <div class=\"social-container\" *ngIf=\"showSocial\">\n              <!--\n              <div\n                id=\"g_id_onload\"\n                data-client_id=\"GOOGLE.AUTH.CLIENT.ID\"\n                data-context=\"signin\"\n                data-ux_mode=\"popup\"\n                data-login_uri=\"http://localhost:8100/user/signin\"\n                data-auto_prompt=\"false\"\n              ></div>\n              -->\n              <div\n                class=\"g_id_signin\"\n                data-type=\"standard\"\n                data-shape=\"rectangular\"\n                data-theme=\"outline\"\n                data-text=\"signin_with\"\n                data-size=\"large\"\n                data-logo_alignment=\"left\"\n                id=\"web-google-button\"\n                data-width=\"300px\"\n              ></div>\n            </div>\n\n            <div class=\"ask-register\">\n              First time here? <a [routerLink]=\"['/user/register']\">Register</a>\n            </div>\n          </ion-list>\n        </form>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 87493:
/*!************************************************!*\
  !*** ./src/app/user/user.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>Account Page</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-router-outlet></ion-router-outlet>\n  </div>\n\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button tab=\"profile\">\n        <ion-icon name=\"person-circle-outline\"></ion-icon>\n        <ion-label>Profile</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"change-password\">\n        <ion-icon name=\"lock-closed-outline\"></ion-icon>\n        <ion-label>Change Password</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"notifications\">\n        <ion-icon name=\"notifications-outline\"></ion-icon>\n        <ion-label>Notifications</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_user_user_module_ts.js.map