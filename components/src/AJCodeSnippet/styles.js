/**
 * Stylesheet for the AJCodeSnippet component using JSS.
 * Author: Andrew Jarombek
 * Date: 12/30/2019
 */

export default {
  hljs: {
    display: 'block',
    overflowX: 'auto',
    padding: '16px 8px 16px 16px',
    color: '#ddd',
    fontSize: '18px',
    whiteSpace: 'pre',
    lineHeight: 1.4,
    borderRadius: '2px',
    backgroundColor: '#333',
    transition: 'all .4s ease',
    boxShadow: '0 1px 3px rgba(170, 170, 170, 0.1)',
    '-webkit-overflow-scrolling': 'touch',
    '-webkit-transition': 'revert',

    '&:hover': {
      boxShadow: '0 1px 3px rgba(170, 170, 170, 0.8)',
    },

    '&:before': {
      content: 'attr(title)',
      display: 'block',
      fontSize: '14px',
      color: '#aaa',
      position: 'sticky',
      left: '90%',
      float: 'right',

      [`@media screen and (max-width: 700px)`]: {
        marginRight: '5px',
        left: '88%',
      },

      [`@media screen and (max-width: 480px)`]: {
        marginRight: '10px',
        left: '85%',
      },
    },

    '& .hljs-comment, & .hljs-quote': {
      color: '#5c6370',
      fontStyle: 'italic',
    },

    '& .hljs-doctag, & .hljs-keyword, & .hljs-formula': {
      color: '#c678dd',
    },

    '& .hljs-section, & .hljs-name, & .hljs-selector-tag, & .hljs-deletion, & .hljs-subst': {
      color: '#e06c75',
    },

    '& .hljs-literal': {
      color: '#56b6c2',
    },

    '& .hljs-string, & .hljs-regexp, & .hljs-addition, & .hljs-attribute, & .hljs-meta-string': {
      color: '#98c379',
    },

    '& .hljs-built_in, & .hljs-class .hljs-title': {
      color: '#e6c07b',
    },

    '& .hljs-attr, & .hljs-variable, & .hljs-template-variable, & .hljs-type': {
      color: '#d19a66',
    },
    '& .hljs-selector-class, & .hljs-selector-attr, & .hljs-selector-pseudo, & .hljs-number': {
      color: '#d19a66',
    },

    '& .hljs-symbol, & .hljs-bullet, & .hljs-link, & .hljs-meta, & .hljs-selector-id': {
      color: '#61aeee',
    },
    '& .hljs-title': {
      color: '#61aeee',
    },

    '& .hljs-emphasis': {
      fontStyle: 'italic',
    },

    '& .hljs-strong': {
      fontWeight: 'bold',
    },

    '& .hljs-link': {
      textDecoration: 'underline',
    },
  },
};
