import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HighlightDirective } from './highlight.directive';
import { TitleCasePipe } from './title-case.pipe';
import { CanvasComponent } from './canvas.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RouterModule } from '@angular/router';

import { BadgeDirective } from './directives/badge.directive';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  exports: [
    CommonModule,
    // SharedModule importers won't have to import FormsModule too
    FormsModule,
    RouterModule,
    HighlightDirective,
    BadgeDirective,
    TitleCasePipe,
    CanvasComponent
  ],
  declarations: [ HighlightDirective, BadgeDirective, TitleCasePipe, CanvasComponent, MenuItemComponent ]
})
export class SharedModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/