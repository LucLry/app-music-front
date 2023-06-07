import { Component } from '@angular/core';

@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
  styleUrls: ['./card-artist.component.scss'],
})
export class CardArtistComponent {
  list_genre = [
    'beatlesque',
    'british invasion',
    'classic rock',
    'merseybeat',
    'psychedelic rock',
    'rock',
  ];
}
