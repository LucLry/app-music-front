import { Component, Input } from '@angular/core';
import { Artist } from '../models/card-artist.model';

@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
  styleUrls: ['./card-artist.component.scss'],
})
export class CardArtistComponent {
  @Input() artist!: Artist;
  isHidden: boolean = false;
}
