import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {

  @Output() searchTerm: EventEmitter<string> = new EventEmitter<string>();

  faSearch = faSearch;

  constructor() { }

  ngOnInit() {
  }

  onEnter(term: string): void {
    this.searchTerm.emit(term);
  }

}
