const initialState = {
  categories: [
    {
      id: 1,
      title: 'Single Rooms',
      image: require('assets/images/room.jpg')
    },
    {
      id: 2,
      title: 'Family Rooms',
      image: require('assets/images/room2.jpg')
    },
    {
      id: 3,
      title: 'Suite Rooms',
      image: require('assets/images/room3.jpg')
    }
  ],
  selectList: [
    {
      id: 1,
      label: 'Single Rooms'
    },
    {
      id: 2,
      label: 'Double Rooms'
    },
    {
      id: 3,
      label: 'Luxury Rooms'
    },
    {
      id: 4,
      label: 'Family Rooms'
    },
    {
      id: 5,
      label: 'Suite Rooms'
    }
  ],
  services: [
    {
      id: 1,
      title: 'Restaurant',
      image: require('assets/images/room.jpg')
    },
    {
      id: 2,
      title: 'Sports Center',
      image: require('assets/images/room2.jpg')
    },
    {
      id: 3,
      title: 'Private Pool',
      image: require('assets/images/room3.jpg')
    },
    {
      id: 4,
      title: 'Health',
      image: require('assets/images/room3.jpg')
    }
  ],
  favorites: [
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer