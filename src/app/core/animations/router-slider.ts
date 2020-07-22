import { trigger, transition, query, style, group, animate } from '@angular/animations';

const slideTo: Function = (direction: string): any[] => {
  const optional = { optional: true }
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ [direction]: '100%' }))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({ [direction]: '0%' }))
      ], optional)
    ])
  ]
}

export const slider =
  trigger('routeAnimation', [
    transition('home => *', slideTo('right')),
    transition('lego => *', slideTo('left')),
    transition('recipes => home', slideTo('left')),
    transition('recipes => kids', slideTo('right')),
    transition('recipes => workouts', slideTo('right')),
    transition('recipes => lego', slideTo('right')),
    transition('kids => home', slideTo('left')),
    transition('kids => recipes', slideTo('left')),
    transition('kids => workouts', slideTo('right')),
    transition('kids => lego', slideTo('right')),
    transition('workouts => lego', slideTo('right')),
    transition('workouts => *', slideTo('left')),
  ])
