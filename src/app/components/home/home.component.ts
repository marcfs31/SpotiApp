import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor( private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
  }

  ngOnInit() {
    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      this.newSongs = data;
      this.loading = false;
    }, (errorService) => {
      this.error = true;
      this.loading = false;
      console.log(errorService);
      this.errorMessage = errorService.error.error.message;
    });
  }

}
