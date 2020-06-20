import { OtfUrlPipe } from './otf-url.pipe';

describe('OtfUrlPipe', () => {
  let pipe: OtfUrlPipe;
  beforeEach(() => {
    pipe = new OtfUrlPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('generates video urls', () => {
    const updatedUrl = pipe.transform('betaMax');
    expect(updatedUrl).toBe('https://assets.corneliuses.com/videos/OTF/betaMax.mp4');
  });
});
