import RestaurantSource from '../data/data-source';
import { showReviews } from '../views/templates/template-creator';

const submitNewReview = {
  init({ id }) {
    this._id = id;

    const formElem = document.querySelector('#form');
    formElem.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this._addReview(this._id);
    });
  },

  async _addReview(id) {
    const res = await RestaurantSource.addReview({
      id,
      name: document.querySelector('#name').value,
      reviewText: document.querySelector('#review').value,
    });
    showReviews(res);
  },
};

export default submitNewReview;
