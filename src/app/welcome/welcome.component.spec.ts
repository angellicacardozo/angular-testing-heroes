import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { UserService } from '../model/user.service';
import { WelcomeComponent } from './welcome.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BadgeDirective } from '../shared/directives/badge.directive';

class MockUserService {
  isLoggedIn = true;
  user = { name: 'Test User'};
}

describe('WelcomeComponent (class only)', () => {
  let comp: WelcomeComponent;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        WelcomeComponent,
        { provide: UserService, useClass: MockUserService }
      ]
    });
    // inject both the component and the dependent service.
    comp = TestBed.inject(WelcomeComponent);
    userService = TestBed.inject(UserService);
  });

  it('should provide a getter for the evaluated logged in user condition', () => {
    expect(comp.isLoggedIn).toBeDefined();
  });

  it('should provide a getter for the user name', () => {
    expect(comp.userName).toBeDefined();
  });
});

describe('WelcomeComponent', () => {
  let fixture: ComponentFixture<WelcomeComponent>;
  let badge: DebugElement;

  let userService: UserService;
  let userServiceStub: Partial<UserService> = {
    isLoggedIn: true,
    user: {
      name: 'John Doe'
    },
  };
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent, BadgeDirective ],
      providers: [{
        provide: UserService,
        useValue: userServiceStub,
      }]
    });

    fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();

    badge = fixture.debugElement.query(By.directive(BadgeDirective));
    userService = fixture.debugElement.injector.get(UserService);
  });

  it('should render badge', () => {
    expect(badge).not.toBeNull();
  });

  it('should welcome "John Doe"', () => {
    const content = badge.nativeElement.textContent;
    expect(content).toContain(userService.user.name);
  });
});
