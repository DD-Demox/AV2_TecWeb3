import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCatsComponentComponent } from './lista-cats-component.component';

describe('ListaCatsComponentComponent', () => {
  let component: ListaCatsComponentComponent;
  let fixture: ComponentFixture<ListaCatsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaCatsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCatsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
