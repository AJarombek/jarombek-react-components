export default {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '100%',
  },
  circle: {
    backgroundColor: '#333',
    width: 40,
    height: 40,
    borderRadius: '50%',
    margin: 5,
    opacity: 0,
    animation: '$fade 1s infinite',
  },
  first: {
    animationDelay: '0s',
  },
  second: {
    animationDelay: '0.25s',
  },
  third: {
    animationDelay: '0.5s',
  },
  '@keyframes fade': {
    '0%': { opacity: 0 },
    '20%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
};
