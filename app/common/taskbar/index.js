import "./index.styl"

import * as desktopActions from "actions/desktop"
import * as applications from "applications"
import {branch} from "baobab-react/higher-order"
import classnames from "classnames"
import {requestInterval, clearRequestInterval} from "helpers/interval-animation"
import moment from "moment"
import React, {Component} from "react"

const DATE_TIME_FORMAT = "YYYY-MM-DD HH:ss:SSSS"

class Taskbar extends Component {
  defaultProps = {
    items: []
  };

  state = {
    systemTime: moment(Date.now())
  };

  static propTypes = {
    items: React.PropTypes.array
  };

  bringPaneToFront(index) {
    this.props.actions.bringPaneToFront(index)
  }

  componentDidMount() {
    this.interval = requestInterval(this.updateClock.bind(this), 1000)
  }

  componentWillUnmount() {
    clearRequestInterval(this.interval)
  }

  getTitle(item) {
    const component = applications[item.component]

    return item.applicationProps.contentTitle || component.applicationTitle
  }

  renderClock() {
    return <div className="clock">
      {this.state.systemTime.format(DATE_TIME_FORMAT)}
    </div>
  }

  renderItems() {
    const {items} = this.props
    const creationOrder = (a, b) => a.creationOrder - b.creationOrder

    return items.sort(creationOrder).map((item, i) =>
      <div
        className={classnames("task-item", {
          focused: item.focused,
          minimized: item.minimized
        })}
        key={i}
        onClick={this.bringPaneToFront.bind(this, item.storeIndex)}>
        <span className="inner">{this.getTitle(item)}</span>
      </div>
    )
  }

  render() {
    return <section data-component="taskbar">
      <section className="tasks">
        {this.renderItems()}
      </section>

      <aside className="secondary-information">
        {this.renderClock()}
      </aside>
    </section>
  }

  updateClock() {
    this.setState({
      systemTime: this.state.systemTime.add(1)
    })
  }
}

export default branch(Taskbar, {
  actions: {
    bringPaneToFront: desktopActions.bringPaneToFront
  }
})

