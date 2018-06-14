import "./desktop.styl"

import * as desktopActions from "actions/desktop"
import React from "react"
import Pane from "common/pane"
import Taskbar from "common/taskbar"
import Icons from "common/icons"
import SystemStatus from "common/system-status"
import {branch} from "baobab-react/higher-order"

class Desktop extends React.Component {
  bringPaneToFront(index) {
    // Skip panes that are already in focus.
    if (this.props.panes.length - 1 === index) return

    this.props.actions.bringPaneToFront(index)
  }

  closePane(index, event) {
    // Prevent pane rearrangement.
    event.stopPropagation()

    this.props.actions.closePane(index)
  }

  getTaskbarItems() {
    const {panes} = this.props

    return panes.map((pane, storeIndex) => {
      return Object.assign({
        storeIndex,
        focused: storeIndex === panes.length - 1
      }, pane)
    })
  }

  minimizePane(index, event) {
    event.stopPropagation()

    this.props.actions.setPaneAttributes(index, {minimized: true})
  }

  render() {
    const {storyEnded, username} = this.props
    let chapter = "main"

    if (storyEnded) chapter = "goodbye"
    else if (!username) chapter = "welcome"

    const hasIcons = chapter === "main"
    const hasSystemStatus = chapter === "main"
    const hasTaskbar = chapter === "main"

    return <section data-chapter={chapter} data-component="desktop">
      <div className="scanlines" />

      {hasSystemStatus && <SystemStatus />}
      {hasIcons && <Icons applications={this.props.applications} />}

      {this.renderPanes()}

      {hasTaskbar && <Taskbar items={this.getTaskbarItems()} />}
    </section>
  }

  renderPanes() {
    const {panes} = this.props
    const lastPaneIndex = panes.length - 1

    return panes.map((attributes, i) => {
      return <Pane
        {...attributes}
        focused={i === lastPaneIndex}
        key={attributes.paneID}
        onClose={this.closePane.bind(this, i)}
        onFocus={this.bringPaneToFront.bind(this, i)}
        onMaximize={this.togglePaneMaximization.bind(this, i, attributes)}
        onMinimize={this.minimizePane.bind(this, i)} />
    })
  }

  togglePaneMaximization(index, attributes, event) {
    event.stopPropagation()

    this.props.actions.setPaneAttributes(index, {
      maximized: !attributes.maximized
    })
  }
}

Desktop.propTypes = {
  applications: React.PropTypes.array,
  panes: React.PropTypes.array,
  storyEnded: React.PropTypes.bool,
  username: React.PropTypes.string
}

export default branch(Desktop, {
  actions: {
    bringPaneToFront: desktopActions.bringPaneToFront,
    closePane: desktopActions.closePane,
    setPaneAttributes: desktopActions.setPaneAttributes
  },
  cursors: {
    applications: ["applications"],
    panes: ["panes"],
    storyEnded: ["storyEnded"],
    username: ["username"]
  }
})
