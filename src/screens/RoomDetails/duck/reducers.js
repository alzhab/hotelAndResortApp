const initialState = {
  selectList: [
    {
      id: '1',
      label: 'Single Rooms'
    },
    {
      id: '2',
      label: 'Double Rooms'
    },
    {
      id: '3',
      label: 'Luxury Rooms'
    },
    {
      id: '4',
      label: 'Family Rooms'
    },
    {
      id: '5',
      label: 'Suite Rooms'
    }
  ],
  facilities: [
    {
      label: 'WiFi',
      icon: 'wifi'
    },
    {
      label: 'Pool',
      icon: 'droplet'
    },
    {
      label: 'TV',
      icon: 'tv'
    },
    {
      label: 'Garden',
      icon: 'wifi'
    },
    {
      label: 'Coffee',
      icon: 'x'
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