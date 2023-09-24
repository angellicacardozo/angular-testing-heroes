import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

let fixture: ComponentFixture<AboutComponent>;

describe('AboutComponent', () => {
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .createComponent(AboutComponent);
    fixture.detectChanges(); // initial binding
  });

  it('should have <h2> element', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    expect(h2).toBeDefined();
  });
});


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/