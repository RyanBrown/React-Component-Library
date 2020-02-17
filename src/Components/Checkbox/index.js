import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.scss'

const propTypes = {
  block: PropTypes.bool,
  hasError: PropTypes.bool,
  id: PropTypes.string,
  indeterminate: PropTypes.bool,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(['left', 'right']),
  truncate: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'switch']),
}

const defaultProps = {
  block: false,
  hasError: false,
  indeterminate: false,
  labelPosition: 'right',
  truncate: false,
  type: 'default',
}

/** Checkbox Component */
class Checkbox extends React.Component {
  render() {
    const {
      block,
      hasError,
      id,
      indeterminate,
      label,
      labelPosition,
      truncate,
      type,
      ...inputProps
    } = this.props

    const checkboxWrapperClassname = `
      ${styles.checkbox}
      ${truncate && styles.truncate}
      ${block && `${styles.block}`}
    `

    const checkboxClassname = `
      ${type === 'switch' && `${styles['checkbox-switch']}`}
      ${hasError && `${styles['checkbox-has-error']}`}
    `

    const inputClassname = `
      ${styles['checkbox-input']}
      ${type === 'switch' && `${styles['checkbox-switch-input']}`}
      ${hasError && `${styles['checkbox-has-error']}`}
    `

    const labelClassname = `
      ${(styles['checkbox-label'], styles['label-text'])}
      ${type === 'switch' && `${styles['checkbox-switch-label']}`}
    `

    return (
      <div className={checkboxWrapperClassname}>
        <label className={checkboxClassname} htmlFor={id}>
          <input
            type="checkbox"
            className={inputClassname}
            // eslint-disable-next-line
            ref={el => el && (el.indeterminate = indeterminate)}
            id={id}
            {...inputProps}
          />

          {label && (
            <span className={classNames(labelClassname, styles[labelPosition])}>
              {label}
            </span>
          )}
        </label>
      </div>
    )
  }
}

Checkbox.displayName = 'Checkbox'
Checkbox.propTypes = propTypes
Checkbox.defaultProps = defaultProps

export default Checkbox
