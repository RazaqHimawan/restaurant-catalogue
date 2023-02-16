import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import RestaurantSource from '../../data/data-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Explore = {
  async render() {
    return `
        <section class="container">
          <div class="title__container">
            <h2 class="title">Explore Restaurant</h2>
          </div>
          <div class="resto__list"></div>
        </section>
        `;
  },

  async afterRender() {
    const { restaurants } = await RestaurantSource.getAllList();
    const restaurantContainer = document.querySelector('.resto__list');

    restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default Explore;
