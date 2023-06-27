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
        error: (e) => {
          console.log('error : ', e);
        },
      });

    // PROBLEME ICI
    console.log(
      'reorder and split : ',
      this.reorderAndSplit(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        3
      )
    );
  }

  splitArrayIntoChunks(arr: any[], nbColumns: number): any[][] {
    const chunkLists: any[][] = [];
    // split the list into sublist, 1 for every columns

    // get the remainder of the euclidean division of array size by nb of columns
    const remainder: number = arr.length % nbColumns;

    let remainder_counter: number = 0;

    console.log('input array ', arr);

    for (let i = 0; i < arr.length - remainder; i += nbColumns) {
      let chunk: any[] = [];
      if (remainder > 0) {
        if (i === 0) {
          chunk = arr.slice(i, i + nbColumns + 1);
          remainder_counter++;
        } else if (remainder_counter < remainder) {
          chunk = arr.slice(
            i + remainder_counter,
            i + nbColumns + remainder_counter + 1
          );
          remainder_counter++;
        } else {
          chunk = arr.slice(
            i + remainder_counter,
            i + nbColumns + remainder_counter
          );
        }
      } else {
        chunk = arr.slice(i, i + nbColumns);
      }

      chunkLists.push(chunk);
    }

    return chunkLists;
  }

  reorderArray(arr: any[], columns: number): any[] {
    const reorderedArray: any[] = [];
    let col = 0;
    while (col < columns) {
      for (let i = 0; i < arr.length; i += columns) {
        let _val = arr[i + col];
        if (_val !== undefined) reorderedArray.push(_val);
      }
      col++;
    }
    return reorderedArray;
  }

  reorderAndSplit(arr: any[], columns: number): any[][] {
    // re-order the array so the "cards" order is left-right
    // cols === CSS column-count value
    const reorderedArray: any[] = this.reorderArray(arr, columns);

    // split the list into sublist, 1 for every columns
    const reorderedAndSplittedArray = this.splitArrayIntoChunks(
      reorderedArray,
      columns
    );
    return reorderedAndSplittedArray;
  }
}
