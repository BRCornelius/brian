import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services';
import { INavLink } from 'src/app/utilities/types';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private nav: NavigationService) {}

  ngOnInit() {
  }

  navLinks: INavLink[] = [
    { label: 'Home', path: ''},
    { label: 'Recipes', path: 'recipes'},
    { label: 'Kids', path: 'kids'},
    { label: 'Workouts', path: 'workouts'}
  ];
  activeNavLink: string;

  updateActiveNavLink: Function = (new_label): void => {
    this.activeNavLink = new_label;
  }
  checkActiveNavLink: Function = (test): boolean => this.activeNavLink === test;
}
