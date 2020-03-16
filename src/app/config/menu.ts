export class MenuConfig {
  public config: any = {};

  constructor() {
    this.config = {
      aside: {
        items: [
          { section: 'Browse Movies' },
          {
            title: 'Home',
            icon: 'la la-home',
            page: '/home',
          },
          {
            title: 'Profile',
            icon: 'ion-md-contact',
            page: '/profile',
          },
        ],
      },
    };
  }
}
