/**
 * Reusable code snippet component for displaying code with syntax highlighting.
 * @author Andrew Jarombek
 * @since 12/30/2019
 */

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import hljs from 'highlight.js';

import javascript from 'highlight.js/lib/languages/javascript';
import java from 'highlight.js/lib/languages/java';

import styles from './styles';

const useStyles = createUseStyles(styles);

const AJCodeSnippet = ({children, language}) => {
  const classes = useStyles();

  const languages = {
    javascript: {
      title: "JavaScript",
      name: "javascript",
      language: javascript
    },
    java: {
      title: "Java",
      name: "java",
      language: java
    }
  };

  const lang = languages[language] || languages.javascript;

  useEffect(() => {
    hljs.registerLanguage(lang.name, lang.language);
    hljs.initHighlightingOnLoad();
  });

  return (
    <div>
      <code title={lang.title}>
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
