import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.scss'

const propTypes = {
  cssClass: '',
  id: PropTypes.string,
  rank: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'display-1',
    'display-2',
    'display-3',
    'display-4',
    'headline',
    'subtitle',
    'title',
  ]),
}

const Heading = React.forwardRef(
  ({ className, rank = 1, text, type = '', id = '' }) => {
    const Tag = rank > 6 ? 'h6' : `h${rank}`
    return (
      <Tag id={id} className={classNames(type, className && styles[className])}>
        {text}
      </Tag>
    )
  },
)

Heading.displayName = 'Heading'
Heading.propTypes = propTypes

export default Heading