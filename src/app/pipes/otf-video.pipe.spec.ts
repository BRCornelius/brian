import { OtfVideoPipe } from './otf-video.pipe';
import { IOTFVideo } from '../interfaces';

describe('OtfVideoPipe', () => {
  let pipe: OtfVideoPipe;
  const mockVideos: IOTFVideo[] = [
    {
      TITLE: { S: 'threat' },
      CAT: { S: 'tht' },
      GRP: { S: 'www.threat.com' }
    }, {
      TITLE: { S: 'level' },
      CAT: { S: 'lvl' },
      GRP: { S: 'www.level.com' }
    }, {
      TITLE: { S: 'midnight' },
      CAT: { S: 'mdn' },
      GRP: { S: 'www.midnight.com' }
    }
  ];
  beforeEach(() => {
    pipe = new OtfVideoPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms videos', () => {
    const updatedVideos = pipe.transform(mockVideos);
    const keys = Object.keys(updatedVideos[0]);
    expect(keys[0]).toBe('title');
    expect(keys[1]).toBe('category');
    expect(keys[2]).toBe('group');
  })
});
