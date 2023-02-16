import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant';
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurant.getAllRestaurants()).forEach(async (resto) => {
      await FavoriteRestaurant.deleteRestaurant(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurant);
});
