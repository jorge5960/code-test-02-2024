import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { UserEffects } from './user.effects';
import { userReducer } from './user.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('user', userReducer),
        EffectsModule.forFeature([UserEffects]),
        HttpClientModule
    ],
    providers: [UserService]
})
export class UserStoreModule {}
