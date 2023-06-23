import { Component, OnInit } from '@angular/core';
import { CardArtistService } from '../services/card-artist.service';

import { NgxMasonryOptions } from 'ngx-masonry';
import { Artist } from '../models/card-artist.model';

@Component({
  selector: 'app-card-artist-container',
  templateUrl: './card-artist-container.component.html',
  styleUrls: ['./card-artist-container.component.scss'],
})
export class CardArtistContainerComponent implements OnInit {
  constructor(public cardArtistService: CardArtistService) {}

  numberOfCols: number = 4;
  listArtistsId: string[] = [];
  listArtists!: Artist[];
  splittedList!: Artist[][];

  public cardArtistMasonryOptions: NgxMasonryOptions = {
    horizontalOrder: true,
    columnWidth: '.masonry-item',
  };

  ngOnInit(): void {
    this.listArtistsId = this.listArtistsId.concat([
      '3WrFJ7ztbogyGnTHbHJFl2',
      '4tZwfgrHOc3mvqYlEYSvVi',
      '1dfeR4HaWDbWqFHLkxsg1d',
      '2m62cc253Xvd9qYQ8d2X3d',
      '22bE4uQ6baNwSHPVcDxLCe',
      '1l2oLiukA9i5jEtIyNWIEP',
      '7FIoB5PHdrMZVC3q2HE5MS',
      '4STHEaNw4mPZ2tzheohgXB',
      '3PhoLpVuITZKcymswpck5b',
      '3THqHCN7gq2Z9hLleof9uv',
      '3QVolfxko2UyCOtexhVTli',
      '5VTWoYYizcOY3uIKnxeCGI',
      '5Ho1vKl1Uz8bJlk4vbmvmf',
      '40dlsb5MBbRdrB2hf8XnvU',
    ]);

    this.cardArtistService
      .getArtistById(this.listArtistsId.join(','))
      .subscribe({
        next: (res) => {
          this.listArtists = res;
          this.splittedList = this.reorderAndSplit(res, this.numberOfCols);
        },
      });
  }

  reorderAndSplit(arr: any[], columns: number): any[][] {
    // re-order the array so the "cards" read left-right
    // cols === CSS column-count value

    const outSubList: any[][] = [];
    const cols = columns;
    const fullList: any[] = [];
    let col = 0;
    while (col < cols) {
      for (let i = 0; i < arr.length; i += cols) {
        let _val = arr[i + col];
        if (_val !== undefined) fullList.push(_val);
      }
      col++;
    }

    // split the list into sublist, 1 for every columns

    for (let i = 0; i < fullList.length; i += cols) {
      const chunk = fullList.slice(i, i + cols);
      outSubList.push(chunk);
    }
    console.log('reorderAndSplit ', outSubList);
    return outSubList;
  }
}
