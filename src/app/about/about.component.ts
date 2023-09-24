import { Component } from '@angular/core';
@Component({
  template: `
    <div class="flex flex-col gap-4 bg-white h-full pl-4">
      <h2 class="text-blue-950 font-bold text-2xl mt-2 mb-4">About</h2>
      <h3>Quote of the day:</h3>
      <twain-quote></twain-quote>
    </div>
  `
})
export class AboutComponent { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/