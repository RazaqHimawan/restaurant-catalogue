const assert = require('assert');

Feature('Review Restaurant');

Scenario('Review one restaurant', async ({ I }) => {
  const text = 'abc';
  I.amOnPage('/');

  I.waitForElement('#resto-item');
  I.seeElement('#resto-item');
  I.click(locate('#resto-item').first());

  I.waitForElement('#form');
  I.seeElement('#form');
  I.fillField('name', 'tes');
  I.fillField('review', text);
  I.click('.submit');

  const lastReview = locate('.resto-detail__reviews__item p').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(text, lastReviewText);
});
