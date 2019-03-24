import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpDataComponentComponent } from './ip-data-component.component';

describe('IpDataComponentComponent', () => {
  let component: IpDataComponentComponent;
  let fixture: ComponentFixture<IpDataComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpDataComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
