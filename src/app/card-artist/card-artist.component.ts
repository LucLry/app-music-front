import { Component, Input } from '@angular/core';
import { Artist } from '../models/card-artist.model';

import { CardArtistService } from '../services/card-artist.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
  styleUrls: ['./card-artist.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)',
        }),
        animate(400),
      ]),
    ]),
  ],
})
export class CardArtistComponent {
  constructor(public cardArtistService: CardArtistService) {}
  @Input() artist!: Artist;
  isCardHovered: boolean = false;

  toggleHover() {
    this.cardArtistService.updateLayout = !this.cardArtistService.updateLayout;
    this.isCardHovered = !this.isCardHovered;
  }
}
