

const fetch = () => (
  Promise.resolve({
    json: () => Promise.resolve([{
      _id: 48,
      url:
      'https://s3-us-west-1.amazonaws.com/photosformockzalloproject/49.jpg',
      __v: 0,
    },
    {
      _id: 60,
      url:
      'https://s3-us-west-1.amazonaws.com/photosformockzalloproject/61.jpg',
      __v: 0,
    }]),
  })
);

export default fetch;
