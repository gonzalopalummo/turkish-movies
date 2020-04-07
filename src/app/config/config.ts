export class Config {
  static CURRENT_USER = 'currentUser';
  static STAR = 'la-star';
  static HALF_STAR = 'la-star-half-empty';
  static THEME_CLASSES = [
    'primary',
    'danger',
    'success',
    'warning',
    'info',
    'brand',
    'dark',
  ];
  static THEME_SKIN = 'themeSkin';

  static classes = {
    show: 'show',
    openSearch: 'open-search',
    openSidebar: 'open-sidebar',
    iconicSidebar: 'iconic-sidebar',
  };

  public config: any = {};

  constructor() {
    this.config = {
      // Brand config
      brand: {
        logo: './assets/images/logos/logo.png',
        name: 'Turkish Movies',
      },

      // Theme skin config
      themeSkin: {
        theme: 'dark',
        header: 6,
        sidebar: 6,
        player: 6,
      },
    };
  }
}
