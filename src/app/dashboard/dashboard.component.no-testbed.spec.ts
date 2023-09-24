import { Router } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { Hero } from '../model/hero';

import { addMatchers } from '../../testing';
import { TestHeroService } from '../model/testing/test-hero.service';
import { switchMap, from, tap, catchError } from 'rxjs';

class FakeRouter {
  navigateByUrl(url: string) { return url;  }
}

describe('DashboardComponent class only', () => {
  let comp: DashboardComponent;
  let heroService: TestHeroService;
  let router: Router;

  beforeEach(() => {
    addMatchers();
    router = new FakeRouter() as any as Router;
    heroService = new TestHeroService();
    comp = new DashboardComponent(router, heroService);
  });

  it('should NOT have heroes before calling OnInit', () => {
    comp.heroes$.subscribe((heroes) => {
      expect(heroes.length)
      .withContext('should not have heroes before OnInit')
      .toBe(0);
    });
  });

  it('should NOT have heroes immediately after OnInit', () => {
    comp.ngOnInit(); // ngOnInit -> getHeroes
    comp.heroes$.subscribe((heroes) => {
      expect(heroes.length)
      .withContext('should not have heroes until service promise resolves')
      .toBe(0);
    });
  });

  it('should HAVE heroes after HeroService gets them', (done: DoneFn) => {
    comp.ngOnInit(); // ngOnInit -> getHeroes
    from(heroService.lastResult)
    .pipe(
      switchMap(() => comp.heroes$),
      tap((heroes) => {
        expect(heroes.length)
        .withContext('should have heroes after service promise resolves')
        .toBeGreaterThan(0);
        done();
      }),
      catchError(async () => done.fail)
    );
  });

  it('should tell ROUTER to navigate by hero id', () => {
    const hero: Hero = {id: 42, name: 'Abbracadabra' };
    const spy = spyOn(router, 'navigateByUrl');

    comp.gotoDetail(hero);

    const navArgs = spy.calls.mostRecent().args[0];
    expect(navArgs)
      .withContext('should nav to HeroDetail for Hero 42')
      .toBe('/heroes/42');
  });

});


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/