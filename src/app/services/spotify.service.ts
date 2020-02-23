import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBX7a3RQROkRhzbOUCGWSdWUl-WvTicNckXUOaddnbFKgZ59VB8R6j5m4jTEGlAYsrO0W393E6KYMGR6-c'
    });

    return this.http.get('	https://api.spotify.com/v1/browse/new-releases', {headers}).pipe(map(data => {
      return data['albums'].items;
    }));
  }

  getArtist(term: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBX7a3RQROkRhzbOUCGWSdWUl-WvTicNckXUOaddnbFKgZ59VB8R6j5m4jTEGlAYsrO0W393E6KYMGR6-c'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, {headers});
  }
}
