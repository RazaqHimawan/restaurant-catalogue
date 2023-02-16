class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
        <picture>
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
          <img
            class="hero__img"
            src="./images/heros/hero-image_2-large.jpg"
            alt=""
          />
        </picture>
        </div>`;
  }
}

customElements.define('nav-hero', Hero);
