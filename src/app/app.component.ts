import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Letter } from './types/letter';
import { WordlistService } from './wordlist/wordlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Wordler - A Wordle Solver';

  control = new FormControl('');
  letters: string[] = [];
  filter: Letter[] = [];

  mostLikelyWordsList: string[] = [];
  rulesOutMostLettersList: string[] = [];
  wordListAutocomplete: Observable<string[]> = new Observable<string[]>();

  constructor(private wordlistService: WordlistService) { }

  ngOnInit(): void {
    this.updateSuggestions();

    this.wordListAutocomplete = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLocaleLowerCase();
    return this.mostLikelyWordsList.filter(word => word.includes(filterValue));
  }

  public updateSuggestions() {
    this.mostLikelyWordsList = this.wordlistService.getMostLikelyWordsList(this.filter);
    this.rulesOutMostLettersList = this.wordlistService.getRulesOutMostWordsList(this.filter);
  }

  public onLetterUpdate(update: Letter) {
    const temp = this.filter.filter(z => z.letter === update.letter)[0];
    if (temp) {
      temp.accuracy = update.accuracy;
      temp.position = update.position;
    } else {
      this.filter.push(update);
    }
    this.updateSuggestions();
  }

  public onSubmit() {
    if (this.control.value.length > 0) {
      this.tryWord(this.control.value);
    }
  }

  public tryWord(word: string) {
    for (const letter of word) {
      if (!this.letters.includes(letter)) {
        this.letters.push(letter);
      }
    }

    this.letters.sort((a, b) => a.localeCompare(b));
  }
}
