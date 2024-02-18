import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserStoreModule } from 'src/app/store/user/user-store.module';
import { UserFormComponent } from './form/user-form.component';
import { UserListComponent } from './list/user-list.component';
import { UserComponent } from './user.component';

@NgModule({
    declarations: [
        UserComponent,
        UserListComponent,
        UserFormComponent
    ],
    imports: [
        CommonModule,
        UserStoreModule,
        ReactiveFormsModule,
        SharedModule,
        NgbModule
    ],
    providers: [],
    exports: [UserComponent]
})
export class UserModule {
}
