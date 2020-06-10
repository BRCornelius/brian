import { Injectable } from '@angular/core';
import { INavLink } from '../../utilities';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  navLinks: INavLink[] = [
    { label: 'Home', path: '' },
    { label: 'Recipes', path: 'recipes' },
    { label: 'Kids', path: 'kids' },
    { label: 'Workouts', path: 'workouts' },
    { label: 'Lego', path: 'lego' },
  ];
}
