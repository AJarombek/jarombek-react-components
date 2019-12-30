/**
 * Reusable generic card component which displays text.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';

import AJTextButton from '../AJTextButton/AJTextButton';
import styles from './styles';

const useStyles = createUseStyles(styles);

/**
 * Component representing a card that displays text and has an action button.
 * @param title Main title of the card.  Can be text or additional React elements.
 * @param subtitle Subtitle of the card.  Can be text or additional React elements.
 * @param content Text content of the card.  Can be text or additional React elements.
 * @param action Function that is called when the action button is clicked.
 * @param actionText Text of the action button in the footer of the card.  Can be text or
 * additional React elements.
 * @param actionDisabled Whether the action button is disabled from being clicked or not.
 * @return {*} React elements that make up a text card.
 */
const AJTextCard = ({title, subtitle, content, action, actionText, actionDisabled=false}) => {
  const classes = useStyles();

  return (
    <div className={classes.ajTextCard}>
      <div className="aj-text-card-header">
        <h2 className="aj-text-card-title">{title}</h2>
        <p className="aj-text-card-subtitle">{subtitle}</p>
      </div>
      <div className="aj-text-card-body">
        <p className="aj-text-card-content">{content}</p>
      </div>
      <div className="aj-text-card-footer">
        <AJTextButton onClick={action} disabled={actionDisabled}>{actionText}</AJTextButton>
      </div>
    </div>
  );
};

AJTextCard.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  content: PropTypes.node.isRequired,
  action: PropTypes.func.isRequired,
  actionText: PropTypes.node.isRequired,
  actionDisabled: PropTypes.bool
};

export default AJTextCard;
