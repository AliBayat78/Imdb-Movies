import { Component, Input } from '@angular/core';
import { UpcomingMovies } from 'src/app/models/movies.models';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  @Input() movie: UpcomingMovies = {
    id: 0,
    image: '',
    imdb_url: '',
    movie: '',
    rating: 0,
    year: 0,
    metacritic: 0,
  };
}
