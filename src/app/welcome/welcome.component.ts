import { Component, OnInit } from '@angular/core';
import { UserService } from '../model/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  constructor(private userService: UserService) { }

  ngOnInit() {}

  get isLoggedIn() {
    return this.userService.isLoggedIn;
  }

  get userName() {
    return this.userService.user.name;
  }
}
