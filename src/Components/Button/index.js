import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.scss'

const propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset', null]),
  variant: PropTypes.string,
}

const defaultProps = {
  active: false,
  block: false,
  disabled: false,
  size: '',
  type: 'button',
  variant: 'secondary',
}

const Button = props => (
  <button
    className={classNames(styles.btn, styles[`btn-${props.variant}`], {
      [styles.active]: props.active,
      [styles['btn-block']]: props.block,
      [styles[`btn-${props.size}`]]: styles[`btn-${props.size}`],
    })}
    disabled={props.disabled}
    id={props.id}
    type={props.type}
    onClick={props.onClick}
  >
    {props.children}
  </button>
)

Button.displayName = 'Button'
Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
