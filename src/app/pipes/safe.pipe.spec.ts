import { SafePipe } from './safe.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { inject } from '@angular/core/testing';

describe('SafePipe', () => {
  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => { 
    const pipe = new SafePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));
});
