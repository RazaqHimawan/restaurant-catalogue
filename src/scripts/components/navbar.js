class AppNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
        <div class="nav-head">
          <a
            href="/"
            class="logo"
          >
            <h1>KloudBret</h1>
          </a>
          <button
            class="hamburger__button"
            href="#"
            aria-label="Open Navigation Menu"
          >
            ☰
          </button>

          <ul class="navbar-xl">
            <li><a href="/">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li>
              <a href="https://www.linkedin.com/in/razaq-himawan/">About Us</a>
            </li>
          </ul>
        </div>

        <ul class="navbar">
          <li><a href="/">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li>
            <a href="https://www.linkedin.com/in/razaq-himawan/">About Us</a>
          </li>
        </ul>
      </nav>
      `;
  }
}

customElements.define('nav-bar', AppNavbar);
