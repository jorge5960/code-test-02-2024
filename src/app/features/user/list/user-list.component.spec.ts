import { TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [UserListComponent]
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(UserListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


});
