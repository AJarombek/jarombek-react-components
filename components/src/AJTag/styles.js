/**
 * Stylesheet for the AJTag component using JSS.
 * Author: Andrew Jarombek
 * Date: 5/17/2020
 */

export default {
  ajTag: ({ backgroundColor }) => ({
    backgroundColor,
    display: 'inline-block',
    cursor: 'pointer',
    padding: '0 10px',
    borderRadius: '3px',
    boxShadow: '0 1px 3px rgba(170, 170, 170, 0.1)',
    transition: 'all .4s ease',

    '&:hover': {
      boxShadow: '0 1px 3px rgba(170, 170, 170, 0.5)',
    },
  }),
};
