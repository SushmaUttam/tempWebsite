import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlightboxComponent } from './projectlightbox.component';

describe('ProjectlightboxComponent', () => {
  let component: ProjectlightboxComponent;
  let fixture: ComponentFixture<ProjectlightboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectlightboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectlightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
