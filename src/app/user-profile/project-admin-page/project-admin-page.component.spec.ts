import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAdminPageComponent } from './project-admin-page.component';

describe('ProjectAdminPageComponent', () => {
  let component: ProjectAdminPageComponent;
  let fixture: ComponentFixture<ProjectAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
