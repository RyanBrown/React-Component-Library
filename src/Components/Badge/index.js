import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.scss'

const propTypes = {
  as: PropTypes.elementType,
  bordered: PropTypes.oneOf(['borderLight', 'borderDark', '']),
  pill: PropTypes.bool.isRequired,
  prefix: PropTypes.string,
  variant: PropTypes.string,
}

const defaultProps = {
  bordered: '',
  pill: true,
  variant: 'primary',
}

const Badge = React.forwardRef(
  (
    { variant, pill, bordered, className, as: Component = 'span', ...props },
    ref,
  ) => {
    const prefix = 'badge'
    return (
      <Component
        ref={ref}
        {...props}
        className={classNames(
          className,
          styles[prefix],
          pill && styles[`${prefix}-pill`],
          variant && styles[`${prefix}-${variant}`],
          bordered && styles[`${bordered}`],
        )}
      />
    )
  },
)

Badge.displayName = 'Badge'
Badge.propTypes = propTypes
Badge.defaultProps = defaultProps

export default Badge
