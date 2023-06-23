import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardArtistService {
  constructor(private http: HttpClient) {}

  updateLayout: boolean = false;

  getArtistById(ArtistIds: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getArtist`, {
      params: new HttpParams().set('spotifyArtistIdList', ArtistIds),
    });
  }
}
