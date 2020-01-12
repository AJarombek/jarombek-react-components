/**
 * Stylesheet for the AJBaseButton component using JSS.
 * Author: Andrew Jarombek
 * Date: 1/10/2020
 */

export default {
  ajBaseButton: {
    display: 'inline-block',
    cursor: 'pointer',

    '& button': {
      border: 'none'
    },

    '&:focus, & > button:focus': {
      outline: 'none'
    }
  },
  ajBaseButtonEnabled: {
    cursor: 'pointer',

    '& button': {
      cursor: 'pointer'
    }
  },
  ajBaseButtonDisabled: {
    cursor: 'not-allowed',

    '& button': {
      cursor: 'not-allowed'
    }
  }
};
