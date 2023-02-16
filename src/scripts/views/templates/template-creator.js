import CONFIG from '../../globals/config';

const createRestaurantDetail = (resto) => {
  const restaurantContainer = document.querySelector(
    '.resto-detail__container'
  );

  restaurantContainer.innerHTML = `
    <img class="resto-detail__img" src=${
      CONFIG.BASE_IMAGE_URL + resto.pictureId
    } alt="${resto.name}" />
      <table class="resto-detail__table">
        <tbody>
          <tr>
            <th>Name</th>
            <td>:</td>
            <td>${resto.name}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>:</td>
            <td>${resto.city}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>:</td>
            <td>${resto.address}</td>
          </tr>
        </tbody>
      </table>
    `;
};

const createMenusTemplate = () => {
  const menuContainer = document.querySelector('.resto-detail__menu');

  menuContainer.innerHTML = `
      <div class="resto-detail__foods__container">
        <div class="resto-detail__title__container">
          <h2 class="resto-detail__menu__title">Foods</h2>
        </div>
        <div class="resto-detail__foods">
        </div>
      </div>

      <div class="resto-detail__drinks__container">
          <div class="resto-detail__title__container">
            <h2 class="resto-detail__menu__title">Drinks</h2>
          </div>
        <div class="resto-detail__drinks">
        </div>
      </div>
    `;
};

const createFoods = (resto) => {
  const { foods } = resto.menus;
  const container = document.querySelector('.resto-detail__foods');

  foods.forEach((food) => {
    container.innerHTML += `<h3>${food.name}</h3>`;
  });
};

const createDrinks = (resto) => {
  const { drinks } = resto.menus;
  const drinksContainer = document.querySelector('.resto-detail__drinks');

  drinks.forEach((drink) => {
    drinksContainer.innerHTML += `<h3>${drink.name}</h3>`;
  });
};

const createDescriptionTemplate = (resto) => {
  const descriptionContainer = document.querySelector(
    '.resto-detail__desc__container'
  );

  descriptionContainer.innerHTML = `
    <p class="resto-detail__desc">${resto.description}</p>
  `;
};

const createCustomerReviews = (resto) => `
      <div class="resto-detail__reviews__item card">
        <div class="resto-detail__reviews__namedate">
          <h2>${resto.name}</h2>
          <h3>${resto.date}</h3>
        </div>
        <p>${resto.review}</h3>
      </div>
      `;

const showReviews = (resto) => {
  const reviewContainer = document.querySelector('.resto-detail__reviews');

  const reviews = resto.customerReviews
    ?.map((review) => {
      return createCustomerReviews(review);
    })
    .join('');
  reviewContainer.innerHTML = reviews;
};

const createRestaurantItemTemplate = (resto) => `
  <a id="resto-item" class="resto__link" href="/#/detail/${resto.id}">
      <div class="resto card">
        <img class="resto__img lazyload" data-src=${
          CONFIG.BASE_IMAGE_URL + resto.pictureId
        } alt="${resto.name}" />
        <div class="resto__cityname">
          <h2 class="resto__name">${resto.name}</h2>
          <h3 class="resto__city">${resto.city}</h3>
        </div>
        <h3 class="resto__rating">⭐ ${resto.rating}</h3>
      </div>
    </a>
  `;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createReviewFormTemplate = () => {
  const reviewFormContainer = document.querySelector(
    '.resto-detail__review-form'
  );

  reviewFormContainer.innerHTML = `
  <form id="form" class="review-form card">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Your name" />

    <label for="review">Review:</label>
    <textarea name="review" id="review" placeholder="Your review"></textarea>

    <input class="submit" type="submit" value="Submit" />
  </form>
`;
};

const spinner = () => `
<div class="loader"></div>
`;

const errorTemplate = (errorMessage) => `
  <div class="err-message">
    <h2>${errorMessage}</h2>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetail,
  createMenusTemplate,
  createFoods,
  createDrinks,
  createDescriptionTemplate,
  showReviews,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewFormTemplate,
  spinner,
  errorTemplate,
};
