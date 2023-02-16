import FavoriteRestaurant from '../../data/favorite-restaurant';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import noFavoriteTemplate from './liked-resto/favorite-empty';

const Favorite = {
  async render() {
    return `
      <section>
        <div class="title__container">
          <h2 class="title">Your Favorite Restaurant</h2>
        </div>
        <div id="resto-favorite" class="resto__list">
        </div>
      </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    const restaurantContainer = document.querySelector('#resto-favorite');

    restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
    });

    noFavoriteTemplate.init({
      container: restaurantContainer,
      restoItem: document.querySelectorAll('#resto-favorite .resto'),
    });
  },
};

export default Favorite;
