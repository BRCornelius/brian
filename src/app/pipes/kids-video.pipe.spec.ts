import { KidsVideoPipe } from './kids-video.pipe';

describe('KidsVideoPipe', () => {
  let pipe: KidsVideoPipe;
  const mockVideos = [
    {
      TITLE: { S: 'threat' },
      THUMBNAIL: { S: 'tht' },
      URL: { S: 'www.threat.com' }
    }, {
      TITLE: { S: 'level' },
      THUMBNAIL: { S: 'lvl' },
      URL: { S: 'www.level.com' }
    }, {
      TITLE: { S: 'midnight' },
      THUMBNAIL: { S: 'mdn' },
      URL: { S: 'www.midnight.com' }
    }
  ];
  beforeEach(() => {
    pipe = new KidsVideoPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms kids videos', () => {
    const values = pipe.transform(mockVideos);
    const keys = Object.keys(values[0]);
    expect(keys[0]).toBe('title');
    expect(keys[1]).toBe('thumbnail');
    expect(keys[2]).toBe('url');
  })
});
