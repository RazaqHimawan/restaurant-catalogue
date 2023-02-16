import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getAllList() {
    const res = await fetch(API_ENDPOINT.ALL_LIST);
    const data = res.json();
    return data;
  }

  static async getDetailedList(id) {
    const res = await fetch(API_ENDPOINT.DETAIL(id));
    const data = res.json();
    return data;
  }

  static async addReview({ id, name, reviewText }) {
    const res = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        name,
        review: reviewText,
      }),
    });
    const data = await res.json();
    return data;
  }
}

export default RestaurantSource;
