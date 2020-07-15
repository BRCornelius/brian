import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core/services';
import { INavLink } from 'src/app/core/models';

@Component({
  selector: 'common-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {

  constructor(private nav: NavigationService) {}

  activeNavLink = this.nav.currentLabel;
  navLinks: INavLink[] = this.nav.navLinks;

  updateActiveNavLink: Function = (new_label): void => this.activeNavLink = new_label;
  checkActiveNavLink: Function = (test): boolean => this.activeNavLink === test;
}
