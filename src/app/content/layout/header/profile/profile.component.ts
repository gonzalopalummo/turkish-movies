import { Component, Input, OnInit } from '@angular/core';

import { MenuConfigService } from '../../../../core/services/menu-config.service';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  @Input() user: any = {};

  userMenu: any = [];

  constructor(
    private searchService: SearchService,
    private menuConfigService: MenuConfigService
  ) {
    this.userMenu = this.menuConfigService.userMenuItems;
  }

  ngOnInit() {}

  closeSearchResult() {
    this.searchService.hideSearchResult();
  }
}
