export const items = [
  {
    foodid: 15,
    foodname: 'Akara',
    url: 'https://www.dropbox.com/s/k8iqulpg2w7nlgn/akara.jpg?raw=1'
  },
  {
    foodid: 16,
    foodname: 'Garri',
    url: 'https://www.dropbox.com/s/89nxf7ehakiorya/Garri-and-groundnut.jpg?raw=1'
  },
  {
    foodid: 17,
    foodname: 'Pancake',
    url: 'https://www.dropbox.com/s/fgt9obc0tdrx5hd/pancake.jpeg?raw=1'
  },
  {
    foodid: 18,
    foodname: 'Shawarma',
    url: 'https://www.dropbox.com/s/zze8nto1uiiakd5/shawarma.jpeg?raw=1'
  }
];

export const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjY1LCJ1c2VybmFtZSI6InVzZXI1NTUiLCJyb2xlIjoidXNlciIsImlhdCI6MTU1MjI1MDYyMSwiZXhwIjoxNTUyMjU0MjIxfQ.BYSeeU8xgPdgt77ayxm2vnC8CXA1gJRfzjTJoXREEQ4';

export const user = {
  userid: 65,
  username: 'user555',
  role: 'user'
};

export const fetchFoodItemsResponse = {
  data: {
    data: { menu: items }
  }
};
