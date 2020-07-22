import {
    trigger,
    transition,
    style,
    query,
    animate,
  } from '@angular/animations';

export const fader =
// must match name in html
trigger('routeAnimations', [
  // transition from any route to any route
  transition('* <=> *', [
    // searches for the elements called leave and enter
    query(':enter, :leave', [
      // sets them both up to be able to be animated in/out
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)'
      })
    ]),
    // searches for the new page
    query(':enter', [
      animate('600ms ease',
        style({ opacity: 1, transform: 'scale(1) translateY(0)' })
      )
    ])
  ])
])
