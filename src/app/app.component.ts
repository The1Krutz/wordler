import { Component, OnInit } from '@angular/core';
import { Letter } from './types/letter';
import { WordlistService } from './wordlist/wordlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Wordler Solver';

  letters: string[] = []

  filter: Letter[] = [];

  public wordSuggestionList: string[] = [];

  constructor(private wordlistService: WordlistService) { }

  ngOnInit(): void {
    this.updateSuggestions();
  }

  public updateSuggestions() {
    this.wordSuggestionList = this.wordlistService.getFilteredWordList(this.filter)
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

  public tryWord(word: string) {
    for (const letter of word) {
      if (!this.letters.includes(letter)) {
        this.letters.push(letter);
      }
    }
  }
}
