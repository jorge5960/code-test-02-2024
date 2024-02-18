import { TestBed, async, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IUser } from './interfaces/user.interface';
import { IUserState } from './store/user/user.model';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './features/user/user.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

describe('AppComponent', () => {

  let store: MockStore<IUserState>;
  
  beforeEach(() => {
    const initialState:IUserState = { isLoading: false, users: [] };

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule, HttpClientModule, UserModule,CoreModule, StoreModule.forRoot(), EffectsModule.forRoot()],
      providers: [
        provideMockStore({ initialState })
      ],
    });
  });
  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});

