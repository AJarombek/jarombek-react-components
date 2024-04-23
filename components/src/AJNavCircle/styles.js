/**
 * Stylesheet for the AJNavCircle component using JSS.
 * Author: Andrew Jarombek
 * Date: 12/28/2019
 */

export default {
  ajNavCircle: {
    height: ({ height }) => `calc(${height} * 1.2)`,
    width: ({ height }) => `calc(${height} * 1.2)`,
    borderRadius: '50%',
    '& > figure': {
      display: 'flex',
      height: '100%',
      width: '100%',
      margin: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  active: {
    backgroundColor: '#ccc',
    '&:hover': {
      backgroundColor: '#d9d9d9',
    },
    cursor: 'pointer',
  },
  inactive: {
    backgroundColor: '#eee',
    '& image': {
      filter: 'opacity(0.5)',
    },
  },
  img: {
    height: ({ height }) => height,
    width: ({ height }) => height,
  },
  up: {
    transform: 'rotate(180deg)',
    margin: '0 0 5% 0',
  },
  down: {
    margin: '5% 0 0 0',
  },
  left: {
    transform: 'rotate(90deg)',
    margin: '0 5% 0 0',
  },
  right: {
    transform: 'rotate(270deg)',
    margin: '0 0 0 5%',
  },
};
