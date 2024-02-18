import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { UserStoreModule } from 'src/app/store/user/user-store.module';
import { IUserState } from 'src/app/store/user/user.model';
import { UserFormComponent } from './user-form.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';


describe('UserFormComponent', () => {
  let store: MockStore<IUserState>;
  const initialState:IUserState = { isLoading: false, users: [] };

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [UserFormComponent],
    imports: [ HttpClientModule, UserStoreModule, StoreModule.forRoot(), EffectsModule.forRoot()],
    providers: [
      provideMockStore({ initialState })
      
    ]
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(UserFormComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
