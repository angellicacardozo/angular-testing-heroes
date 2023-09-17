import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '../model/hero';

@Component({
  selector: 'dashboard-hero',
  template: `
    <div class="flex flex-row items-center p-2 justify-between cursor-pointer">
        <div class="flex flex-row gap-4 items-center">
          <div class="rounded-full border-4 border-orange-100 w-12 h-12 flex items-center justify-center">
            <span>B</span>
          </div>
          <span>{{ hero.name | uppercase }}</span>
        </div>
        <a class="border-4 border-orange-100 rounded-full p-2 text-xs uppercase tracking-wide text-stone-600 font-semibold" (click)="click()">
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