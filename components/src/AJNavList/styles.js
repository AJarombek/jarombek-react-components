/**
 * Stylesheet for the AJNavList component using JSS.
 * Author: Andrew Jarombek
 * Date: 2/18/2020
 */

export default {
  ajNavList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ajNavListItem: {
    width: '100%',

    '& > div': {
      display: 'flex',
      width: '90%',
      height: '40px',
      margin: '0 5%',
      borderBottom: '1px solid #ccc',

      textDecoration: 'none',
      color: '#777',
      transition: 'color 0.5s ease',
      cursor: 'pointer',

      '&:hover': {
        textDecoration: 'underline'
      },

      '& > div': {
        margin: '0 auto',
        alignSelf: 'center'
      }
    }
  },
  ajNavListLastItem: {
    '& > div': {
      borderBottom: 'none'
    }
  }
};
