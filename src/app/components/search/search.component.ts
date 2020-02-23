import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  search(term: string) {
    this.spotify.getArtist(term).subscribe( (data: any) => {
      this.artists = data.artists.items;
    });
  }
}
