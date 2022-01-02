import { Accuracy } from './accuracy';
import { Letter } from './letter';

describe('Letter', () => {
  it('should create an instance', () => {
    expect(new Letter()).toBeTruthy();
  });
  it('should create an instance', () => {
    expect(new Letter('a')).toBeTruthy();
  });
  it('should create an instance', () => {
    expect(new Letter('a', 2,)).toBeTruthy();
  });
  it('should create an instance', () => {
    expect(new Letter('a', 2, Accuracy.Grey)).toBeTruthy();
  });
});
