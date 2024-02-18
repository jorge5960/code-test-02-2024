import { TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

describe('UserComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ StoreModule.forRoot(), EffectsModule.forRoot()],
    declarations: [UserComponent]
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


});
