const noFavoriteTemplate = {
  init({ container, restoItem }) {
    this._container = container;
    this._restoItem = restoItem;

    this._render();
  },

  _render() {
    if (this._restoItem.length === 0) {
      this._container.style.display = 'block';
      this._container.innerHTML = `
      <div class="nofavorite">
        <h2>Tidak ada restaurant untuk ditampilkan</h2>
      </div>`;
    }
  },
};

export default noFavoriteTemplate;
