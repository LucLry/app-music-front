import { Component, OnInit } from '@angular/core';
import { CardArtistService } from '../services/card-artist.service';


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
  }

  splitArrayIntoChunks(arr: any[], nbColumns: number): any[][] {
    const chunkLists: any[][] = [];
    // split the list into sublist, 1 for every columns

    // get the remainder of the euclidean division of array size by nb of columns
    const remainder: number = arr.length % nbColumns;
    const quotient: number = (arr.length - remainder) / nbColumns;
    let remainder_counter: number = 0;

    for (let i = 0; i < arr.length - remainder; i += quotient) {
      console.log(' i : ', i);
      let chunk: any[] = [];
      if (remainder > 0) {
        if (i === 0) {
          chunk = arr.slice(i, i + quotient + 1);
          remainder_counter++;
        } else if (remainder_counter < remainder) {
          chunk = arr.slice(
            i + remainder_counter,
            i + quotient + remainder_counter + 1
          );
          remainder_counter++;
        } else {
          chunk = arr.slice(
            i + remainder_counter,
            i + quotient + remainder_counter
          );
        }
      } else {
        chunk = arr.slice(i, i + quotient);
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
    console.log('input array ', arr);
    // re-order the array so the "cards" order is left-right
    // cols === CSS column-count value
    const reorderedArray: any[] = this.reorderArray(arr, columns);

    // split the list into sublist, 1 for every columns
    const reorderedAndSplittedArray : any[][] = this.splitArrayIntoChunks(
      reorderedArray,
      columns
    );
    return reorderedAndSplittedArray;
  }
}
