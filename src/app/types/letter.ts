import { Accuracy } from './accuracy';

export class Letter {
  public letter: string;
  public position: number; // 0-indexed
  public accuracy: Accuracy;

  constructor(_letter = 'default', _position = -1, _accuracy = Accuracy.Unknown) {
    this.letter = _letter;
    this.position = _position;
    this.accuracy = _accuracy;
  }
}
