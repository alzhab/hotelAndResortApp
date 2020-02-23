const initialState = {
  links: [
    {
      title: 'About Us',
      route: 'Aboutus',
      icon: "book-open"
    },
    {
      title: 'Contact Us',
      route: 'Contactus',
      icon: "mail"
    },
    {
      title: 'Sign In',
      route: 'Signin',
      icon: "log-in"
    },
    {
      title: 'Sign Up',
      route: 'Signup',
      icon: "log-out"
    }, {
      title: "Logout",
      event: () => { },
      icon: "power"
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