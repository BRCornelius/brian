import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { inject, TestBed } from '@angular/core/testing';
import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
  let pipe: SafePipe
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule
      ]
    });
  });

  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    pipe = new SafePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));

  it('sanitizes urls', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    pipe = new SafePipe(domSanitizer);
    const safeUrl = pipe.transform('https://www.google.com', 'url');
    expect(typeof safeUrl).toBe('object');
  }));
});