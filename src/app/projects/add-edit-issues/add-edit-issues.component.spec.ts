import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditIssuesComponent } from './add-edit-issues.component';

describe('AddEditIssuesComponent', () => {
  let component: AddEditIssuesComponent;
  let fixture: ComponentFixture<AddEditIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditIssuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
