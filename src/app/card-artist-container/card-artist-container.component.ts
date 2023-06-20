import { Component, OnInit } from '@angular/core';
import { CardArtistService } from '../services/card-artist.service';

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
        '3WrFJ7ztbogyGnTHbHJFl2,4tZwfgrHOc3mvqYlEYSvVi,' +
          '1dfeR4HaWDbWqFHLkxsg1d,2m62cc253Xvd9qYQ8d2X3d,' +
          '22bE4uQ6baNwSHPVcDxLCe,1l2oLiukA9i5jEtIyNWIEP,' +
          '7FIoB5PHdrMZVC3q2HE5MS,4STHEaNw4mPZ2tzheohgXB,' +
          '3PhoLpVuITZKcymswpck5b,3THqHCN7gq2Z9hLleof9uv,' +
          '3QVolfxko2UyCOtexhVTli,5VTWoYYizcOY3uIKnxeCGI,' +
          '5Ho1vKl1Uz8bJlk4vbmvmf,40dlsb5MBbRdrB2hf8XnvU'
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
