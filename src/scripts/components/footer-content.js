class FooterContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<p>Copyright © 2023 - KloudBret</p>`;
  }
}
customElements.define('footer-content', FooterContent);
