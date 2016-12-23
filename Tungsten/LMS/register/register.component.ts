﻿import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from '../classes/registration';
import { OperationResult } from '../classes//operationResult';
import { MembershipService } from '../services/membership.service';

@Component({
    selector: 'register',
    providers: [MembershipService], 
    templateUrl: './lms/register/RegisterPage.html'
})
export class RegisterPage implements OnInit {

    private _newUser: Registration;

    constructor( @Inject(MembershipService) public membershipService: MembershipService,
        @Inject(Router) public router: Router) { }

    ngOnInit() {
        this._newUser = new Registration('', '', '');
    }

    register(): void {
        var _registrationResult: OperationResult = new OperationResult(false, '');
        this.membershipService.register(this._newUser)
            .subscribe(res => {
                _registrationResult.Succeeded = res.Succeeded;
                _registrationResult.Message = res.Message;

            },
            error => console.error('Error: ' + error),
            () => {
                if (_registrationResult.Succeeded) {
                    this.router.navigate(['account/login']);
                }
                else {

                }
            });
    };
}