import { TestBed } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [LoaderComponent]
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(LoaderComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
