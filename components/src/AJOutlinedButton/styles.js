/**
 * Stylesheet for the AJOutlinedButton component using JSS.
 * Author: Andrew Jarombek
 * Date: 1/6/2020
 */

export default {
  ajOutlinedButton: {
    padding: '8px',
    transition: 'background-color 0.25s ease',
    border: '2px solid #ddd',
    borderRadius: '4px',

    '& button': {
      backgroundColor: 'transparent'
    }
  },
  ajOutlinedButtonEnabled: {
    '&:active': {
      backgroundColor: '#f5f5f5'
    },

    '& button': {
      color: '#555',
      transition: 'color 0.25s ease',

      '&:active': {
        color: '#222'
      }
    }
  },
  ajOutlinedButtonDisabled: {
    '& button': {
      color: '#999'
    }
  }
};
