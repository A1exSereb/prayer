export const getPrayerRequest = () => ({type: 'GET_PRAYER_REQUEST'});

export const postPrayerRequest = (payload: string) => ({
  type: 'POST_PRAYER_REQUEST',
  payload,
});
