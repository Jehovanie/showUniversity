import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isShowMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

}
