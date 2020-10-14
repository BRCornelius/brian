import { trigger, transition, query, style, group, animate } from '@angular/animations';

export const slider = trigger('routeAnimation', [
  transition('home => *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ right: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ right: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ right: '0%' }))
      ], { optional: true })
    ])
  ]),
  transition('recipes => kids', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ right: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ right: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ right: '0%' }))
      ], { optional: true })
    ])
  ]),
  transition('recipes => workouts', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ right: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ right: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ right: '0%' }))
      ], { optional: true })
    ])
  ]),
  transition('recipes => lego', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ right: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ right: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ right: '0%' }))
      ], { optional: true })
    ])
  ]),
  transition('kids => workouts', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ right: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ right: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ right: '0%' }))
      ], { optional: true })
    ])
  ]),
  transition('kids => lego', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ right: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ right: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ right: '0%' }))
      ], { optional: true })
    ])
  ]),
  transition('workouts => lego', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ right: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ right: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ right: '0%' }))
      ], { optional: true })
    ])
  ]),
  transition('lego => *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ left: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ left: '0%' }))
      ], { optional: true })
    ])
  ]),
  transition('recipes => home', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ left: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ left: '0%' }))
      ], { optional: true })
    ])
  ]),
  transition('kids => home', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ left: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ left: '0%' }))
      ], { optional: true })
    ])
  ]),
  transition('kids => recipes', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ left: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ left: '0%' }))
      ], { optional: true })
    ])
  ]),
  transition('workouts => *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ left: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ left: '0%' }))
      ], { optional: true })
    ])
  ]),
]);
