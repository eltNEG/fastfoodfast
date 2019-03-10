const cardItems = (items, button) => items.map(item => ({
  image: item.url,
  header: item.foodname,
  description: 'Buy this now...',
  meta: 'Price: ₦1,200.00',
  extra: button,
  key: item.foodid,
}));

export default cardItems;