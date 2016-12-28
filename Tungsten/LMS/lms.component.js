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
var GroupService_1 = require('./services/GroupService');
var membership_service_1 = require('./services/membership.service');
var Login_1 = require('./components/Login/Login');
var User_1 = require('./classes/User');
var IndexPage = (function () {
    function IndexPage(elementRef, membershipService, changeDetectorRef) {
        this.elementRef = elementRef;
        this.membershipService = membershipService;
        this.changeDetectorRef = changeDetectorRef;
        this.user = this.membershipService.getLoggedInUser() || new User_1.User('', '', '', '', []);
        this.isuserloggedin = this.isUserLoggedIn();
    }
    IndexPage.prototype.isUserLoggedIn = function () {
        return this.membershipService.isUserAuthenticated();
    };
    IndexPage.prototype.logout = function () {
        var _this = this;
        this.membershipService.logout()
            .subscribe(function (res) {
            localStorage.removeItem('user');
        }, function (error) { return console.error('Error: ' + error); }, function () {
            _this.isuserloggedin = false;
            _this.user = new User_1.User('', '', '', '', []);
        });
    };
    IndexPage.prototype.ngAfterViewChecked = function () {
        if (this.LoginView && this.LoginView.LoggedIn && this.isuserloggedin != this.LoginView.LoggedIn)
            this.isuserloggedin = this.LoginView.LoggedIn;
        this.changeDetectorRef.detectChanges();
    };
    IndexPage.prototype.userUpdated = function (updatedUser) {
        this.user = updatedUser;
    };
    IndexPage.prototype.getUser = function () {
        return this.user;
    };
    //console.log(this.isuserloggedin);
    IndexPage.prototype.ngOnInit = function () {
        // this is the antiforgery token DON't REMOVE
        console.log('Anti Forgery Token passed from the razor Home/Index View');
        console.log(document.getElementById('antiForgeryForm').childNodes[1].attributes.getNamedItem("value").nodeValue);
    };
    __decorate([
        core_1.ViewChild(Login_1.Login)
    ], IndexPage.prototype, "LoginView", void 0);
    IndexPage = __decorate([
        core_1.Component({
            selector: 'lms-index',
            templateUrl: './LMS/index.html',
            styleUrls: ['./LMS/index.css'],
            providers: [GroupService_1.GroupService]
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(membership_service_1.MembershipService)),
        __param(2, core_1.Inject(core_1.ChangeDetectorRef))
    ], IndexPage);
    return IndexPage;
}());
exports.IndexPage = IndexPage;
//# sourceMappingURL=lms.component.js.map