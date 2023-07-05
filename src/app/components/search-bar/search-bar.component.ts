import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  constructor(private router: Router, private searchService: SearchService) {}

  public searchTerm: string = '';

  onSearchInputChange() {
    this.searchService.updateSearchTerm(this.searchTerm);
  }
}
