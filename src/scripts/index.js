import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/navbar';
import './components/hero';
import './components/footer-content';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  button: document.querySelector('.hamburger__button'),
  drawer: document.querySelector('.navbar'),
  main: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();

  await swRegister();
});
