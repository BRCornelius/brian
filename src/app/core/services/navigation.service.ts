import { Injectable } from '@angular/core';
import { INavLink } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  isLoading = false;
  splitURL: string[] = window.location.href.split('/');
  currentPath: string = this.splitURL[this.splitURL.length - 1];
  // tslint:disable-next-line:max-line-length
  currentLabel: string = this.currentPath[0] ? this.currentPath[0].toUpperCase() + this.currentPath.substring(1) : 'Home';
  navLinks: INavLink[] = [
    { label: 'Home', path: '' },
    { label: 'Recipes', path: 'recipes' },
    { label: 'Kids', path: 'kids' },
    { label: 'Workouts', path: 'workouts' },
    { label: 'Lego', path: 'lego' },
  ];

  toggleLoading: Function = (): void => {
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 600);
  }
}
