import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: '[appNavButton]'
})
export class NavButtonDirective {
  @HostBinding('class') get classes() {
    return 'inline-block pt-2 pb-2 pl-4 pr-4 text-xs uppercase tracking-wide text-stone-600 font-semibold';
  }
}
