import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { select, Store } from '@ngrx/store';
import * as fromUsers from 'src/app/store/user/index';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html',
    styles: [':host{display:block}']
})
export class UserFormComponent implements OnInit, OnChanges {

    @Input()
    selected: IUser;

    formGroup: FormGroup;

    constructor(private readonly store: Store, private formBuilder: FormBuilder) {

        this.formGroup = this.formBuilder.group({
            id: [''],
            userId: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['selected']) {
            this.formGroup.reset();
            if (changes['selected'].currentValue) {
                this.formGroup.setValue({
                    'id': this.selected.id,
                    'userId': this.selected.userId,
                    'firstName': this.selected.firstName,
                    'lastName': this.selected.lastName,
                    'email': this.selected.email
                });
            }

        }
    }


    ngOnInit(): void {
        this.selected = this.selected ?? {} as IUser;
    }

    createUser(): void {
        if (this._validateForm()) {
            this.store.dispatch(fromUsers.createUser({
                user: {...this._getUser(),id:undefined}
            }));
        }
    }

    updateUser(): void {
        if (this._validateForm()) {
            this.store.dispatch(fromUsers.updateUser({ user: this._getUser() }));
        }
    }

    deleteUser(): void {
        if (this._validateForm()) {
            this.store.dispatch(fromUsers.deleteUser({ user: this._getUser() }));
        }
    }

    _validateForm(): boolean {
        this.formGroup.markAllAsTouched();
        return this.formGroup.valid;
    }
    hasErrors(formGroupName: string): boolean {
        return this.formGroup.get(formGroupName).touched && this.formGroup.get(formGroupName).invalid;
    }
    _getUser(): IUser {
        return {
            id: this.formGroup.get('id').value,
            userId: this.formGroup.get('userId').value,
            firstName: this.formGroup.get('firstName').value,
            lastName: this.formGroup.get('lastName').value,
            email: this.formGroup.get('email').value
        };
    }

}
