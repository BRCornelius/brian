import { trigger, state, style, transition, animate } from '@angular/animations';

export const poof = trigger('poof', [
  state('loading', style({
    opacity: '0%'
  })),
  state('stable', style({
    opacity: '80%'
  })),
  transition('loading => stable', [
    animate('0.3s')
  ]),
  transition('stable => loading', [
    animate('0s')
  ])
]);
