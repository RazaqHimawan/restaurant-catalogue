import routes from '../routes/routes';
import urlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, drawer, main }) {
    this._button = button;
    this._drawer = drawer;
    this._main = main;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      main: this._main,
    });
  }

  async renderPage() {
    const url = urlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._main.innerHTML = await page.render();
    await page.afterRender();

    const skip = document.querySelector('.skip');
    skip.addEventListener('click', (e) => {
      e.preventDefault();
      const content = document.querySelector('#mainContent');
      content.focus();
    });
  }
}

export default App;
