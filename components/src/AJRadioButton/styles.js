/**
 * Stylesheet for the AJRadioButton component using JSS.
 * Author: Andrew Jarombek
 * Date: 12/8/2020
 */

export default {
  radio: {
    '& > label': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  inputWrapper: {
    display: 'flex',
  },
  input: {
    opacity: 0,
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,

    '& + div:before': {
      content: '""',
      display: 'block',
      height: 10,
      width: 10,
      borderRadius: '50%',
      transition: '180ms transform ease-in-out',
      transform: 'scale(0)',
      boxShadow: 'inset 10px 10px #990000',
    },

    '&:checked + div:before': {
      transform: 'scale(1)',
    },
  },
  customRadio: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: '50%',
    border: '2px solid #990000',
    cursor: 'pointer',
  },
  customLabel: {
    marginLeft: 10,
    cursor: 'text',
  },
};
