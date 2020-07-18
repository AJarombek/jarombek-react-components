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

/**
 * Component representing a snippet of code from one of multiple different languages.  The code is
 * syntax highlighted with the help of highlight.js.
 * @param children The code the is displayed in the code snippet.
 * @param language The language that the code is written in.  The language determines how the code
 * is syntax highlighted.
 * @param className Custom class attribute(s) attached to the component.
 * @return {*} React elements that represent a snippet of code.
 * @constructor
 */
const AJCodeSnippet = ({children, language, className}) => {
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

  if (!language) {
    lang.title = "";
  }

  let highlightedCode;

  useEffect(() => {
    hljs.initHighlightingOnLoad();
    hljs.highlightBlock(highlightedCode);
  });

  return (
    <div className={classnames("aj-code-snippet", className)}>
      <code title={lang.title} className={classnames(lang.className, classes.hljs)}
            ref={element => highlightedCode = element}>
        {children}
      </code>
    </div>
  );
};

AJCodeSnippet.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.oneOf(['java', 'javascript']),
  className: PropTypes.string,
};

export default AJCodeSnippet;
