import "./index.styl"

import React from "react"
import {requestInterval, clearRequestInterval} from "helpers/interval-animation"

const labels = {
  0: "◷",
  1: "◴",
  2: "◴",
  3: "◷",
  4: "◶",
  5: "◵",
  6: "◶",
  7: "◵",
  8: "◷",
  9: "◷"
}

class SynchronizeBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      strength: 1
    }
  }

  componentDidMount() {
    this.interval = requestInterval(this.refresh.bind(this), this.props.refreshDelay)
  }

  componentWillUnmount() {
    clearRequestInterval(this.interval)
  }

  refresh() {
    const resynch = Math.random() > this.state.strength * 0.1

    if (resynch) {
      this.setState({
        strength: Math.ceil(Math.random() * 10) - 1
      })
    }
  }

  render() {
    return <section data-component="synchronize-bar" data-strength={this.state.strength}>
      <span className="label">
        {labels[this.state.strength]}
      </span>

      <span className="bar"></span>
    </section>
  }
}

SynchronizeBar.defaultProps = {
  refreshDelay: 3000
}

SynchronizeBar.propTypes = {
  refreshDelay: React.PropTypes.number
}

export default SynchronizeBar
