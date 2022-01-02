import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Accuracy } from '../types/accuracy';
import { Letter } from '../types/letter';

@Component({
  selector: 'app-letter-picker',
  templateUrl: './letter-picker.component.html',
  styleUrls: ['./letter-picker.component.scss'],
  inputs: ['letter']

})
export class LetterPickerComponent implements OnInit {
  @Input() letter = '';
  @Output() updateLetter = new EventEmitter<Letter>();

  public options: {
    label: string,
    value: Letter
  }[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.options = [
      { label: 'Unknown', value: new Letter(this.letter, -1, Accuracy.Unknown) },
      { label: 'Grey', value: new Letter(this.letter, -1, Accuracy.Grey) },
      { label: 'Yellow', value: new Letter(this.letter, -1, Accuracy.Yellow) },
      // { label: 'Yellow-1', value: new Letter(this.letter, 0, Accuracy.Yellow) },
      // { label: 'Yellow-2', value: new Letter(this.letter, 1, Accuracy.Yellow) },
      // { label: 'Yellow-3', value: new Letter(this.letter, 2, Accuracy.Yellow) },
      // { label: 'Yellow-4', value: new Letter(this.letter, 3, Accuracy.Yellow) },
      // { label: 'Yellow-5', value: new Letter(this.letter, 4, Accuracy.Yellow) },
      { label: 'Green-1', value: new Letter(this.letter, 0, Accuracy.Green) },
      { label: 'Green-2', value: new Letter(this.letter, 1, Accuracy.Green) },
      { label: 'Green-3', value: new Letter(this.letter, 2, Accuracy.Green) },
      { label: 'Green-4', value: new Letter(this.letter, 3, Accuracy.Green) },
      { label: 'Green-5', value: new Letter(this.letter, 4, Accuracy.Green) },
    ]
  }

  public onChange(option: string) {
    this.updateLetter.emit(this.options.filter(z => z.label === option)[0].value)
  }
}
