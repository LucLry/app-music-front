import { Component, OnInit } from '@angular/core';
import { CardArtistService } from '../services/card-artist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-artist-container',
  templateUrl: './card-artist-container.component.html',
  styleUrls: ['./card-artist-container.component.scss'],
})
export class CardArtistContainerComponent implements OnInit {
  constructor(private cardArtistService: CardArtistService) {}

  listArtists!: any;
  ngOnInit(): void {
    this.cardArtistService
      .getArtistById(
        '3WrFJ7ztbogyGnTHbHJFl2,4tZwfgrHOc3mvqYlEYSvVi,1dfeR4HaWDbWqFHLkxsg1d,2m62cc253Xvd9qYQ8d2X3d'
      )
      .subscribe((res) => (this.listArtists = res));
  }

  logResponse() {
    console.log(
      'type : ',
      typeof this.listArtists,
      ' listArtists',
      this.listArtists,
      '\n artist => type : ',
      typeof this.listArtists[0],
      ' object : ',
      this.listArtists[0]
    );
  }
}
