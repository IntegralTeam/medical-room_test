// @flow

import React from 'react';
import cx from 'classnames';
import styles from './card.module.scss';

type Props = {
  children: React$Node,
  className?: string,
};

const Card = ({ children, className = '' }: Props) => (
  <section className={cx(styles.card, className)}>{children}</section>
);

export default Card;
