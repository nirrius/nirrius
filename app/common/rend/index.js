import "./rend.styl"

import React from "react"
import classnames from "classnames"
import {requestInterval, clearRequestInterval} from "helpers/interval-animation"

const TORN_CHANCE_OFFSET = 1.5

// Displays text along with potential fragments from other universes.
class Rend extends React.Component {
  componentDidMount() {
    this.interval = requestInterval(this.forceUpdate.bind(this), this.props.interval)
  }

  componentWillUnmount() {
    clearRequestInterval(this.interval)
  }

  getPossibility() {
    const {possibilities} = this.props
    const index = Math.floor(Math.random() * possibilities.length * TORN_CHANCE_OFFSET)

    return possibilities[index]
  }

  render() {
    const possibility = this.getPossibility()

    return <span className={classnames({torn: possibility})} data-component="rend" data-possibility={possibility}>
      {this.props.children}
    </span>
  }
}

Rend.defaultProps = {
  interval: 2000
}

Rend.propTypes = {
  children: React.PropTypes.node,
  interval: React.PropTypes.number,
  possibilities: React.PropTypes.array
}

export default Rend
