import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoContainerComponent } from './todocontainer.component';

describe('TodocontainerComponent', () => {
  let component: TodoContainerComponent;
  let fixture: ComponentFixture<TodoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
