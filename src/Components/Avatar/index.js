import './styles.scss'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  bordered: PropTypes.oneOf(['borderLight', 'borderDark', '']),
  character: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  id: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  variant: PropTypes.oneOf([
    'dark',
    'light',
    'blue',
    'indigo',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'cyan',
  ]),
}

const defaultProps = {
  bordered: '',
  character: '',
  size: 'md',
  variant: 'purple',
}

const Avatar = props => (
  <div
    styleName={classNames('Avatar', props.size, props.variant, props.bordered)}
    id={props.id}
  >
    <div styleName="content">
      <span>{props.character}</span>
      {props.children}
    </div>
  </div>
)

Avatar.displayName = 'Avatar'
Avatar.propTypes = propTypes
Avatar.defaultProps = defaultProps

export default Avatar
