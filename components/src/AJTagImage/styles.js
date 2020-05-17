/**
 * Stylesheet for the AJTagImage component using JSS.
 * Author: Andrew Jarombek
 * Date: 5/17/2020
 */

export default {
  ajTagImage: ({backgroundColor}) => ({
    backgroundColor,
    display: 'flex',
    cursor: 'pointer',
    padding: '0 10px',
    borderRadius: '3px',
    boxShadow: '0 1px 3px rgba(170, 170, 170, 0.1)',
    transition: 'all .4s ease',

    '&:hover': {
      boxShadow: '0 1px 3px rgba(170, 170, 170, 0.5)'
    }
  }),
  picture: {
    height: '40px',
    maxWidth: '45px',
    margin: '5px'
  },
  content: {
    marginLeft: '10px'
  }
}
