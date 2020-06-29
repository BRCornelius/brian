import { TestBed } from '@angular/core/testing';

import { MediaService } from './media.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

describe('MediaService', () => {

  const mockVideos = [
    {title: 'Funny Movie', category: 'comedy', count: 3},
    {title: 'Sad Movie', category: 'drama', count: 2},
    {title: 'Sappy Movie', category: 'romance', count: 1}
  ];

  let service: MediaService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ MediaService ]
    });
    service = TestBed.get(MediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all kids videos', (done: DoneFn) => {
    service.kidsVideos.subscribe(response => {
      expect(response.data.Items.length).toBeGreaterThanOrEqual(1);
      done();
    });
  });

  it('should get all OrangeTheory videos', (done: DoneFn) => {
    service.otfVideos.subscribe(response => {
      expect(response.data.Items.length).toBeGreaterThanOrEqual(1);
      done();
    });
  });

  it('should sort videos', () => {
    const sortedVideos = service.sortVideos(mockVideos, 'count');
    expect(sortedVideos[0].category).toBe('romance');
  });
});
