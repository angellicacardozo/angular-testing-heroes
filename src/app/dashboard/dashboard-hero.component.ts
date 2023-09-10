import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '../model/hero';

@Component({
  selector: 'dashboard-hero',
  template: `
    <div class="flex flex-row gap-2 items-center">
        <span>{{ hero.name | uppercase }}</span>
        <a class="border-4 border-white rounded-full p-2 text-xs uppercase tracking-wide text-stone-600 font-semibold" (click)="click()">
          Details
        </a>
    </div>
  `,
  styleUrls: [ './dashboard-hero.component.css' ]
})
export class DashboardHeroComponent {
  @Input() hero!: Hero;
  @Output() selected = new EventEmitter<Hero>();
  click() { this.selected.emit(this.hero); }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/