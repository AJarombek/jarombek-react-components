/**
 * Stylesheet for the AJSwitch component using JSS.
 * Author: Andrew Jarombek
 * Date: 12/31/2019
 */

export default {
  ajSwitch: {
    display: 'flex',
    height: '20px',
    width: '36px',
    cursor: 'pointer',
  },
  ajSwitchDisabled: {
    cursor: 'default',
  },
  ajSwitchActive: {
    flexDirection: 'row-reverse',
  },
  ajSwitchInactive: {
    flexDirection: 'row',
  },
  ajSwitchHead: {
    position: 'absolute',
    height: '20px',
    width: '20px',
    borderRadius: '50%',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  ajSwitchHeadActive: {
    backgroundColor: '#4b6cc9',
  },
  ajSwitchHeadInactive: {
    backgroundColor: '#f5f5f5',
  },
  ajSwitchTail: {
    height: '100%',
    width: '100%',
    borderRadius: '10px',
  },
  ajSwitchTailActive: {
    backgroundColor: 'rgba(75, 108, 201, 0.5)',
  },
  ajSwitchTailInactive: {
    backgroundColor: '#ccc',
  },
};
