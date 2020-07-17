import { trigger, transition, style, animate, state } from '@angular/animations';

export const openCloseRecipes = trigger('openClose', [
    state('open', style({
      backgroundColor: 'gold',
      color: 'darkslateblue',
      fontSize: '1.25rem',
      fontWeight: 800
    })),
    state('closed', style({
      backgroundColor: 'darkslateblue',
      fontSize: '1rem',
      fontWeight: 400
    })),
    transition('open => closed', [
      animate('0.3s')
    ]),
    transition('closed => open', [
      animate('0.3s')
    ])
  ]);
