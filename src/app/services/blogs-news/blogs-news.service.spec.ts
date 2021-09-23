import { TestBed } from '@angular/core/testing';

import { BlogsNewsService } from './blogs-news.service';

describe('BlogsNewsService', () => {
  let service: BlogsNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogsNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
