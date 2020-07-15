import { trigger, transition, style, animate, state } from '@angular/animations';

export const openCloseRecipes = trigger('openClose', [
    state('open', style({
      backgroundColor: 'gold',
      color: 'darkslateblue'
    })),
    state('closed', style({
      backgroundColor: 'darkslateblue'
    })),
    transition('open => closed', [
      animate('0.3s')
    ]),
    transition('closed => open', [
      animate('0.3s')
    ])
  ]);
