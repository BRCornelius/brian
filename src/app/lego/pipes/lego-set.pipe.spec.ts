import { LegoSetPipe } from './lego-set.pipe';
import { ILegoSet } from '../../interfaces';

describe('LegoSetPipe', () => {
  let pipe: LegoSetPipe;
  const mockSets: ILegoSet[] = [
    {
      name: 'set01',
      setID: 1,
      image: { thumbnailURL: 'www.set01.com' }
    },
    {
      name: 'set02',
      setID: 2,
      image: { thumbnailURL: 'www.set02.com' }
    }
  ];
  beforeEach(() => {
    pipe = new LegoSetPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms lego sets to dropdown options', () => {
    const newSets = pipe.transform(mockSets);
    const keys = Object.keys(newSets[0]);
    expect(keys[0]).toBe('title');
    expect(keys[1]).toBe('value');
    expect(keys[2]).toBe('image');
  });
});
