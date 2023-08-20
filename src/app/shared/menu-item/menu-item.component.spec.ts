import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemComponent } from './menu-item.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  template: `
  <app-menu-item link="/dashboard">Dashboard</app-menu-item>
  `
})
class TestMenuItemComponent {}

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<TestMenuItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MenuItemComponent, TestMenuItemComponent]
    });
    fixture = TestBed.createComponent(TestMenuItemComponent);
    //component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render an anchor', () => {
    const itemElement: HTMLElement = fixture.nativeElement;
    const a = itemElement.querySelector('a');
    expect(a).toBeTruthy();
  });

  it('should render text node as content', () => {
    const itemElement: HTMLElement = fixture.nativeElement;
    expect(itemElement.textContent).toContain('Dashboard');
  });

  it('should set one routerLink', () => {
    const attachedRouterLink = fixture.debugElement.queryAll(By.directive(RouterLink));
    expect(attachedRouterLink.length).toBe(1);
  })
});
