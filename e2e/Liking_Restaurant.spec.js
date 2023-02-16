const assert = require('assert');
const { async } = require('regenerator-runtime');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#resto-favorite');
  I.waitForElement('.nofavorite', 10);
  I.see('Tidak ada restaurant untuk ditampilkan', '.nofavorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForElement('.nofavorite', 10);
  I.see('Tidak ada restaurant untuk ditampilkan', '.nofavorite');
  I.amOnPage('/');

  I.waitForElement('#resto-item');
  I.seeElement('#resto-item');

  const firstItem = locate('#resto-item .resto__name').first();
  const firstItemTitle = await I.grabTextFrom(firstItem);
  I.click(firstItem);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.waitForElement('#resto-item');
  I.seeElement('#resto-item');
  const likedItemTitle = await I.grabTextFrom('#resto-item .resto__name');

  assert.strictEqual(firstItemTitle, likedItemTitle);
});
