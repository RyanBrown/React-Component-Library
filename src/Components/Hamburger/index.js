import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.scss'

const propTypes = {
  id: PropTypes.string,
}

const defaultProps = {}

/** Hamburger Component  */
class Hamburger extends React.Component {
  constructor() {
    super()
    this.state = { active: false }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(event) {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <button
        className={classNames(
          styles.hamburger,
          this.state.active && styles['is-active'],
        )}
        id={this.props.id}
        onClick={this.toggleMenu}
        onKeyPress={this.toggleMenu}
      >
        <span className={styles['hamburger-box']}>
          <span className={styles['hamburger-inner']} />
        </span>
      </button>
    )
  }
}

Hamburger.displayName = 'Hamburger'
Hamburger.propTypes = propTypes
Hamburger.defaultProps = defaultProps

export default Hamburger
