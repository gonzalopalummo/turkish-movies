import { Injectable } from '@angular/core';
import * as Amplitude from 'amplitudejs';

@Injectable({
    providedIn: 'root'
})
export class AudioPlayerService {

    constructor() { }

    playSong(song) {
        Amplitude.removeSong(0);
        Amplitude.playNow(song);
    }

    playlistKayName(playlistName) {
        return playlistName.toLowerCase().replace(' ', '_');
    }

    playNowPlaylist(playlist, songIndex = 0) {
        const listName = this.playlistKayName(playlist.name);
        Amplitude.removeSong(0);
        Amplitude.addPlaylist(listName, {name: listName}, playlist.songs);
        Amplitude.playPlaylistSongAtIndex(songIndex, listName);
    }
}
