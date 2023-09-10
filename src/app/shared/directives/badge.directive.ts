import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBadge]'
})
export class BadgeDirective {
  @HostBinding('class') get classes() {
    return 'inline-block pt-2 pb-2 pl-4 pr-4 rounded-full bg-sky-500 text-white font-semibold';
  }
}
