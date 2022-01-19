import { TestBed } from '@angular/core/testing';
import { Accuracy } from '../types/accuracy';
import { Letter } from '../types/letter';

import { WordlistService } from './wordlist.service';

describe('WordlistService', () => {
  let service: WordlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getFilteredWordList', () => {
    [
      {
        title: 'no filters are given',
        filters: undefined,
        expectedLength: 15918
      },
      {
        title: 'no filters are given',
        filters: [],
        expectedLength: 15918
      },
      {
        title: 'a grey filter is given',
        filters: [
          new Letter('a', 0, Accuracy.Grey)
        ],
        expectedLength: 8671
      },
      {
        title: 'a yellow filter is given',
        filters: [
          new Letter('a', 0, Accuracy.Yellow)
        ],
        expectedLength: 7247
      },
      {
        title: 'a green filter is given',
        filters: [
          new Letter('a', 0, Accuracy.Green)
        ],
        expectedLength: 1173
      },
      {
        title: 'all filters are given at once',
        filters: [
          new Letter('a', 0, Accuracy.Green),
          new Letter('b', 1, Accuracy.Yellow),
          new Letter('c', 2, Accuracy.Grey),
        ],
        expectedLength: 114
      },
    ].forEach(e => {
      it(`should return a filtered list when ${e.title}`, () => {
        const result = service.getMostLikelyWordsList(e.filters);
        expect(result.length).toEqual(e.expectedLength);
      })
    });
  });
});
