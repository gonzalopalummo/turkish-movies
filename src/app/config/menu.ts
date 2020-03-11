export class MenuConfig {
  public config: any = {}

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
          {
            title: 'Settings',
            icon: 'ion-md-settings',
            page: '/settings',
          },
        ],
      },
      userMenu: {
        items: [
          {
            title: 'Profile',
            icon: 'ion-md-contact',
            page: '/profile',
          },
          {
            title: 'Your Plan',
            icon: 'ion-md-radio-button-off',
            page: '/plan',
          },
          {
            title: 'Settings',
            icon: 'ion-md-settings',
            page: '/settings',
          },
        ],
      },
    }
  }
}
