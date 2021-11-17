import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecommponentComponent } from './tablecommponent.component';

describe('TablecommponentComponent', () => {
  let component: TablecommponentComponent;
  let fixture: ComponentFixture<TablecommponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablecommponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablecommponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
