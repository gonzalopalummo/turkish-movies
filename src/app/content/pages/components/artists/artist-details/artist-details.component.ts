import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { LoadingService } from '../../../../../core/services/loading.service';
import { SongsConfigService } from '../../../../../core/services/songs-config.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
})
export class ArtistDetailsComponent
  implements OnInit, AfterViewInit, OnDestroy {
  songId: number;
  songDetails: any;

  routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private songsConfigService: SongsConfigService
  ) {
    this.routeSubscription = this.route.params.subscribe(param => {
      if (param.id) {
        this.songId = parseInt(param.id, 10);
        this.getSongDetails();
      }
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadingService.stopLoading();
  }

  getSongDetails() {
    this.songDetails = this.songsConfigService.getSongByIb(this.songId);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
