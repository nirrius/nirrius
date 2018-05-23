import "./status.styl"

import React from "react"
import baobabReact from "baobab-react"
import moment from "moment"
import {requestInterval, clearRequestInterval} from "helpers/interval-animation"

class SystemStatus extends React.Component {
  componentDidMount() {
    this.interval = requestInterval(this.updateClock.bind(this), 3600000)
  }

  componentWillUnmount() {
    clearRequestInterval(this.interval)
  }

  getUptime() {
    const bootTime = moment(this.props.bootTime)
    const now = moment()
    const duration = moment.duration(now.diff(bootTime))

    const increments = [
      [duration.years(), "Y"],
      [duration.months(), "M"],
      [duration.days(), "D"],
      [duration.hours(), "H"]
    ]

    return increments.reduce((acc, increment) => {
      acc.push(increment[0] + increment[1])
      return acc
    }, []).join(" ")
  }

  render() {
    return <section data-component="system-status">
      <h1 className="slim-header">NIRRIUS</h1>
      <span>Creative Studio</span>
      <h2>SYSTEM</h2>
      {this.renderSystemStatus()}

      <h2>USERS</h2>
      {this.renderCryogenicsStatus()}
    </section>
  }

  renderSystemStatus() {
    const {status} = this.props.cryogenics

    return <ul>
      <li>Uptime: {this.getUptime()}</li>
      <li>Status: {status}</li>
    </ul>
  }

  renderCryogenicsStatus() {
    const {actual, capacity} = this.props.cryogenics

    return <ul>
      <li>Actual: {actual}</li>
      <li>Capacity: {capacity}</li>
    </ul>
  }

  updateClock() {
    this.forceUpdate()
  }
}

SystemStatus.contextTypes = {
  tree: baobabReact.PropTypes.baobab
}

SystemStatus.propTypes = {
  bootTime: React.PropTypes.string,
  cryogenics: React.PropTypes.object
}

export default baobabReact.higherOrder.branch(SystemStatus, {
  cursors: {
    bootTime: ["system", "bootTime"],
    cryogenics: ["cryogenics"]
  }
})
