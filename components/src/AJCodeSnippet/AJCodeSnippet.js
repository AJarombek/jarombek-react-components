/**
 * Reusable code snippet component for displaying code with syntax highlighting.
 * @author Andrew Jarombek
 * @since 12/30/2019
 */

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import hljs from 'highlight.js';
import classnames from 'classnames';

import styles from './styles';

const useStyles = createUseStyles(styles);

const AJCodeSnippet = ({children, language}) => {
  const classes = useStyles();

  const languages = {
    javascript: {
      title: "JavaScript",
      name: "javascript",
      className: "javascript"
    },
    java: {
      title: "Java",
      name: "java",
      className: "java"
    }
  };

  const lang = languages[language] || languages.javascript;
  let highlightedCode;

  useEffect(() => {
    hljs.initHighlightingOnLoad();
    hljs.highlightBlock(highlightedCode);
  });

  return (
    <div>
      <code title={lang.title} className={classnames(lang.className, classes.hljs)}
            ref={element => highlightedCode = element}>
        {children}
      </code>
    </div>
  );
};

AJCodeSnippet.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.oneOf(['javascript']).isRequired
};

export default AJCodeSnippet;
