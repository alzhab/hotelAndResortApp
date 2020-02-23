const initialState = {
  user: {
    avatar: require('assets/images/avatar.jpg'),
    name: 'Ali Fayyaad',
    location: 'New York, US',
    statistic: [
      {
        data: 21,
        label: 'Reviews'
      },
      {
        data: 65,
        label: 'Favorites'
      },
      {
        data: 40,
        label: 'Booking'
      }
    ],
    history: [
      {
        id: 1,
        title: 'Single Rooms',
        rating: 5,
        price: 125,
        image: require('assets/images/room.jpg')
      },
      {
        id: 2,
        title: 'Family Rooms',
        rating: 5,
        price: 160,
        image: require('assets/images/room2.jpg')
      },
      {
        id: 3,
        title: 'Suite Rooms',
        rating: 5,
        price: 141,
        image: require('assets/images/room3.jpg')
      }
    ]
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer