import RestaurantSource from '../../data/data-source';
import FavoriteRestaurant from '../../data/favorite-restaurant';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import submitNewReview from '../../utils/submit-review';
import {
  createDescriptionTemplate,
  createDrinks,
  createFoods,
  createMenusTemplate,
  createRestaurantDetail,
  createReviewFormTemplate,
  errorTemplate,
  showReviews,
  spinner,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="loading"></div>

      <div id="main__container">
        <section>
          <div class="title__container">
            <h2 class="title">Detail Restaurant</h2>
          </div>
          <div class="resto-detail__container">
          </div>
        </section>

        <section>
          <div class="title__container">
            <h2 class="title">MENUS</h2>
          </div>
          <div class="resto-detail__menu">
          </div>
        </section>

        <section>
          <div class="title__container">
            <h2 class="title">DESCRIPTION</h2>
          </div>
          <div class="resto-detail__desc__container">
          </div>
        </section>


        <section>
          <div class="title__container">
            <h2 class="title">REVIEWS</h2>
          </div>
          <div class="resto-detail__reviews">
          </div>
        </section>

        <section>
          <div class="title__container">
            <h2 class="title">Your Review</h2>
          </div>
          <div class="resto-detail__review-form">
          </div>
        </section>
      </div>

      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const loading = document.querySelector('#loading');
    const mainContainer = document.querySelector('#main__container');

    mainContainer.style.display = 'none';
    loading.innerHTML = spinner();

    try {
      const { restaurant } = await RestaurantSource.getDetailedList(url.id);

      createRestaurantDetail(restaurant);
      createMenusTemplate();
      createFoods(restaurant);
      createDrinks(restaurant);
      createDescriptionTemplate(restaurant);
      createReviewFormTemplate();
      showReviews(restaurant);
      submitNewReview.init({
        id: restaurant.id,
      });

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurant,
        resto: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
        },
      });

      mainContainer.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      console.error(err);
      mainContainer.style.display = 'block';
      loading.style.display = 'none';
      mainContainer.innerHTML = errorTemplate(err.message);
    }
  },
};

export default Detail;
