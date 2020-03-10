import { AfterViewInit, Component, OnInit } from "@angular/core";

import { SongsConfigService } from "../../../../core/services/songs-config.service";
import { LoadingService } from "../../../../core/services/loading.service";
import { ArtistsConfigService } from "../../../../core/services/artists-config.service";
import { PlaylistConfigService } from "../../../../core/services/playlist-config.service";
import { RadioConfigService } from "../../../../core/services/radio-config.service";
import { GenresConfigService } from "../../../../core/services/genres-config.service";
import { EventsConfigService } from "../../../../core/services/events-config.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, AfterViewInit {
  carouselArrowPosClass1 = "arrow-pos-1";
  carouselArrowPosClass2 = "arrow-pos-2";
  carouselArrowPosClass3 = "arrow-pos-3";

  songsList: any = [];
  topCharts: any = {};
  newRelease: any = {};
  artists: any = {};
  retro: any = {};
  playlist: any = {};
  radio: any = {};
  genres: any = {};

  events: any = {};
  secondaryEvents: any = [];
  sliderConfig: any = {};
  classes: string;
  constructor(
    private loadingService: LoadingService,
    private artistsConfigService: ArtistsConfigService,
    private songsConfigService: SongsConfigService,
    private playlistConfigService: PlaylistConfigService,
    private radioConfigService: RadioConfigService,
    private genresConfigService: GenresConfigService,
    private eventsConfigService: EventsConfigService
  ) {}

  ngOnInit() {
    this.songsList = this.songsConfigService.songsList;
    // Just takes first 6 index of array for ui
    this.songsList = this.songsList.slice(0, 6);

    this.initTopCharts();
    this.initNewRelease();
    this.initEvents();
    this.initArtists();
    this.initRetro();
    this.initPlaylist();
    this.initRadio();
    this.initGenres();

    const prev =
      '<button class="btn-prev btn btn-pill btn-air btn-default btn-icon-only"><i class="la la-angle-left"></i></button>';
    const next =
      '<button class="btn-next btn btn-pill btn-air btn-default btn-icon-only"><i class="la la-angle-right"></i></button>';

    this.sliderConfig = {
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      speed: 500,
      prevArrow: prev,
      nextArrow: next,
      autoplay: true,
      // Breakpoints
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    };

    this.classes = "carousel " + "arrow-pos-1";
  }

  ngAfterViewInit() {
    this.loadingService.stopLoading();
  }

  // Initialize top charts object for section
  initTopCharts() {
    this.topCharts = {
      title: "Top Movies",
      subTitle: "",
      page: "/songs",
      items: this.songsConfigService.songsList
    };
  }

  // Initialize new release music object for section
  initNewRelease() {
    this.newRelease = {
      title: "New Releases",
      subTitle: "",
      page: "/songs",
      items: this.songsConfigService.songsList
    };
  }

  // Initialize music events object for section
  initEvents() {
    this.events = this.eventsConfigService.eventsList;
  }

  // Initialize music artists object for section
  initArtists() {
    this.artists = {
      title: "Featured Artists",
      subTitle: "Select you best to listen",
      page: "/artists",
      items: this.artistsConfigService.artistsList
    };
  }

  // Initialize retro music object for section
  initRetro() {
    this.retro = {
      title: "Retro Classic",
      subTitle: "Old is gold",
      page: "/songs",
      items: this.songsConfigService.songsList
    };
  }

  // Initialize music playlist object for section
  initPlaylist() {
    this.playlist = {
      title: "Your Playlist",
      subTitle: "You best to listen",
      page: "/playlist",
      items: this.playlistConfigService.playlist
    };

    // Add songs in playlist
    const playlistItems = this.playlist.items;
    for (const playlistItem of playlistItems) {
      playlistItem.songs = this.songsConfigService.songsList;
    }
  }

  // Initialize radio object for section
  initRadio() {
    this.radio = {
      title: "Radio",
      subTitle: "Listen live now",
      page: "/stations",
      items: this.radioConfigService.radioList
    };
  }

  // Initialize music genres object for section
  initGenres() {
    this.genres = {
      title: "Genres",
      subTitle: "",
      page: "/genres",
      items: this.genresConfigService.genresList
    };
  }
}
