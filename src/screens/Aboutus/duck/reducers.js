const initialState = {
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
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer