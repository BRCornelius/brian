import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NavigationService } from 'src/app/services';
import { INavLink } from 'src/app/interfaces';

@Component({
  selector: 'common-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {

  constructor(private nav: NavigationService) {}

  activeNavLink: string;
  navLinks: INavLink[] = this.nav.navLinks;

  ngOnInit() {}

  updateActiveNavLink: Function = (new_label): void => {
    this.activeNavLink = new_label;
  }
  checkActiveNavLink: Function = (test): boolean => this.activeNavLink === test;
}
