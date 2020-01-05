/**
 * Stylesheet for the AJModal component using JSS.
 * Author: Andrew Jarombek
 * Date: 1/5/2020
 */

export default {
  ajModal: {
    background: 'white',
    borderRadius: '3px',
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
  },
  ajModalBackdrop: {
    width: '100vw',
    height: '100vh',
    zIndex: 1,
    top: 0,
    left: 0,
    overflow: 'hidden',
    position: 'fixed',
    cursor: 'pointer'
  },
  ajModalColorBackdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
}
