"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var membership_service_1 = require('../../services/membership.service');
var AccountPage = (function () {
    function AccountPage(_MembershipService) {
        this._MembershipService = _MembershipService;
    }
    AccountPage.prototype.ngOnInit = function () {
        this.user = this._MembershipService.getLoggedInUser();
    };
    AccountPage.prototype.Save = function () {
    };
    AccountPage = __decorate([
        core_1.Component({
            templateUrl: './lms/pages/account/AccountPage.html'
        }),
        __param(0, core_1.Inject(membership_service_1.MembershipService))
    ], AccountPage);
    return AccountPage;
}());
exports.AccountPage = AccountPage;
//# sourceMappingURL=AccountPage.component.js.map