import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list-view',
  templateUrl: './song-list-view.component.html',
})
export class SongListViewComponent implements OnInit {
  @HostBinding('class') classes = 'song-list--item';

  @Input() song: any = {};
  @Input() imageBorderRadiusClass = 'card-img--radius-sm';
  @Input() icon = 'la-ellipsis-v';

  constructor() {}

  ngOnInit() {}
}
