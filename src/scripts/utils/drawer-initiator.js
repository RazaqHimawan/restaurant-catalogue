const DrawerInitiator = {
  init({ button, drawer, main }) {
    button.addEventListener('click', (e) => {
      this._toggleDrawer(e, drawer);
    });

    main.addEventListener('click', (e) => {
      this._closeDrawer(e, drawer);
    });
  },

  _toggleDrawer(e, drawer) {
    e.stopPropagation();
    drawer.classList.toggle('show');
  },

  _closeDrawer(e, drawer) {
    e.stopPropagation();
    drawer.classList.remove('show');
  },
};

export default DrawerInitiator;
