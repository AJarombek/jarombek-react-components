/**
 * Stylesheet for the AJContainedButton component using JSS.
 * Author: Andrew Jarombek
 * Date: 1/12/2020
 */

export default {
  ajContainedButton: {
    padding: '10px',
    transition: 'background-color 0.25s ease',
    borderRadius: '4px',

    '& button': {
      backgroundColor: 'transparent',
    },
  },
  ajContainedButtonEnabled: {
    backgroundColor: '#bbb',

    '&:active': {
      backgroundColor: '#ccc',
    },

    '& button': {
      color: '#555',
      transition: 'color 0.25s ease',

      '&:active': {
        color: '#222',
      },
    },
  },
  ajContainedButtonDisabled: {
    backgroundColor: '#eee',

    '& button': {
      color: '#999',
    },
  },
};
