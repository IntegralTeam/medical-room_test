// @flow

import React from 'react';
import styles from './content.module.scss';

type Props = {
  children: React$Node,
};

const Content = ({ children }: Props) => (
  <main className={styles.content}>{children}</main>
);

export default Content;
