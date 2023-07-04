import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { UpcomingMovies } from 'src/app/models/movies.models';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public sort: string = '';
  public movies: any;
  public filteredMovies: any;
  public searchTerm: string = '';

  url: string = '';

  constructor(
    private movieService: HttpService,
    private searchService: SearchService
  ) {}

  filterMovies() {
    if (this.searchTerm.trim().length > 0) {
      this.filteredMovies = this.movies.filter((movie: UpcomingMovies) =>
        movie.movie.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredMovies = this.movies;
    }
  }

  ngOnInit(): void {
    this.movieService.getUpcomingMovies().subscribe({
      next: (response) => {
        this.movies = response;
        this.filteredMovies = response;
        this.url = response.imdb_url;
      },
    });

    this.searchService.searchTerm$.subscribe({
      next: (term) => {
        this.searchTerm = term;
        this.filterMovies();
      },
    });
  }
}
