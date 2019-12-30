/**
 * Stylesheet for the AJTextCard component using JSS.
 * Author: Andrew Jarombek
 * Date: 12/30/2019
 */

import globalStyles from '../globalStyles';

export default {
  ajTextCard: {
    ...globalStyles.robotoThin,
    display: 'inline-block',
    width: '100%',
    height: '500px',
    padding: '5px 10px',
    borderRadius: '3px',
    boxShadow: '0 1px 3px rgba(170, 170, 170, 0.5)'
  }
};
