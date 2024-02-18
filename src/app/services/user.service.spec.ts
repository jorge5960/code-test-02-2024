import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IUserState } from '../store/user/user.model';
import { HttpClientModule } from '@angular/common/http';

describe('UserService', () => {

  let service: UserService;
  let store: MockStore<IUserState>;
  const initialState: IUserState = { isLoading: false, users: [] };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        provideMockStore({ initialState })
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

