export const loadPrayerRequest = () => ({type: 'LOAD_PRAYER_REQUEST'});

export const postPrayerRequest = (payload: string) => ({
  type: 'POST_PRAYER_REQUEST',
  payload,
});
