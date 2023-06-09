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

  response!: any;
  ngOnInit(): void {
    this.cardArtistService
      .getArtistById('3THqHCN7gq2Z9hLleof9uv,1dfeR4HaWDbWqFHLkxsg1d')
      .subscribe((res) => (this.response = res));
  }

  logResponse() {
    console.log('type : ', typeof this.response, ' response', this.response);
  }
}
