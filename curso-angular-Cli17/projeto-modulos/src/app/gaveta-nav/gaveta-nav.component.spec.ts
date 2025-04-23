import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GavetaNavComponent } from './gaveta-nav.component';

describe('GavetaNavComponent', () => {
  let component: GavetaNavComponent;
  let fixture: ComponentFixture<GavetaNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GavetaNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GavetaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
