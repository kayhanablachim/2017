// @flow

import React from 'react';
import classNames from 'classnames';

/* eslint-disable */
type Props = {
  className: string,
  col: number,
  modal?: string,
  target?: string,
  children?: React.Component<*>,
  href?: string,
}

/* eslint-enable */

export default function GridCell(props: Props, context: {openModal: Function}) {
  const classes = classNames(props.className, 's12', `m${props.col > 2 ? 6 : 12}`, `l${Math.max(Math.floor(10 / props.col), 2)}`, 'col');
  const modal = props.modal;
  if (typeof modal === 'string') {
    /* eslint-disable */
    return (
      <a className={classes} onClick={(e) => { e.preventDefault(); context.openModal('topic', modal); }} href={`#/${modal}`}>
        {props.children}
      </a>
    );
    /* eslint-enable */
  }
  if (props.href) {
    const target = props.target || '_blank';
    return (
      <a className={classes} href={props.href} target={target} rel="noopener noreferrer">
        {props.children}
      </a>
    );
  }
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}

GridCell.contextTypes = {
  openModal: React.PropTypes.func,
};
