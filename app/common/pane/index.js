import "./pane.styl"

import React from "react"
import * as applications from "applications"
import SynchronizeBar from "common/synchronize-bar"
import {CrossIcon, MinusIcon, PlusIcon} from "./icons"
import Draggable from "react-draggable"

const DRAGGING_CLASS = "dragging"
const SYNCHRONIZED_DELAY = 3000
const UNSYNCHRONIZED_DELAY = 100

class Pane extends React.Component {
  getTitle() {
    const {component, applicationProps} = this.props
    const {applicationTitle = ""} = applications[component]

    if (applicationProps.contentTitle) {
      return `${applicationProps.contentTitle} - ${applicationTitle.toUpperCase()}`
    }

    return applicationTitle.toUpperCase()
  }

  handleDrag(event, ui) {
    this.setState({
      position: ui.position
    })
  }

  handleDragStart() {
    document.body.classList.add(DRAGGING_CLASS)
    this.props.onFocus()
  }

  handleDragStop() {
    document.body.classList.remove(DRAGGING_CLASS)
  }

  render() {
    const {props} = this
    let actions

    if (props.dismissible) {
      actions = <aside className="actions">
        <MinusIcon className="action" onClick={props.onMinimize} />
        <PlusIcon className="action" onClick={props.onMaximize} />
        <CrossIcon className="action" onClick={props.onClose} />
      </aside>
    }

    return <Draggable
      bounds={"parent"}
      enableUserSelectHack={false}
      handle="[data-component='pane']:not(.maximized) [data-handle]"
      onStart={this.handleDragStart.bind(this)}
      onStop={this.handleDragStop.bind(this)}
      start={props.position}>
      <section
        data-component="pane"
        data-component-name={props.component.toLowerCase()}
        data-dismissable={props.dismissible ? "" : null}
        data-focused={props.focused ? "" : null}
        data-maximized={props.maximized ? "" : null}
        data-minimized={props.minimized ? "" : null}
        data-prominent={props.prominent ? "" : null}
        onClick={props.onFocus}>
        <header>
          <div className="primary-details" data-handle onDoubleClick={props.onMaximize}>
            <span className="title" data-handle>{this.getTitle()}</span>
          </div>

          {actions}
        </header>

        {this.renderBody()}

        <footer className="connection-status">
          <SynchronizeBar refreshDelay={props.synched ? SYNCHRONIZED_DELAY : UNSYNCHRONIZED_DELAY} />
        </footer>
      </section>
    </Draggable>
  }

  renderBody() {
    const {component, applicationProps} = this.props
    const element = React.createElement(applications[component], applicationProps)

    return <section className="body">
      {element}
    </section>
  }
}

Pane.defaultProps = {
  applicationTitle: "Spectra",
  dismissible: true,
  focused: false,
  maximized: false,
  position: {
    x: 0,
    y: 0
  },
  synched: true
}

Pane.propTypes = {
  applicationProps: React.PropTypes.object,
  applicationTitle: React.PropTypes.string,
  component: React.PropTypes.string,
  dismissible: React.PropTypes.bool,
  focused: React.PropTypes.bool,
  maximized: React.PropTypes.bool,
  onFocus: React.PropTypes.func,
  position: React.PropTypes.object,
  synched: React.PropTypes.bool
}

export default Pane
