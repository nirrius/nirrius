import "./welcome.styl"

import React, {Component} from "react"
import * as sessionActions from "actions/session"
import * as keymap from "resources/key-map"
import {branch} from "baobab-react/higher-order"

class Welcome extends Component {
  state = {
    username: ""
  };

  handleKeyUp({keyCode}) {
    if (keyCode !== keymap.ENTER) return

    this.login()
  }

  handleUsernameChange({target: {value}}) {
    this.setState({username: value.trim().toLowerCase()})
  }

  login() {
    const {username} = this.state

    if (username.length === 0) return this.refs.username.focus()

    this.props.actions.login(this.state.username)
  }

  render() {
    const {username} = this.state

    return <section data-component="welcome">
      <h1>Hello there!</h1>

      <section className="content">
        <input
          autoFocus
          onChange={this.handleUsernameChange.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
          placeholder="What is your username?"
          ref="username"
          value={username} />
      </section>

      <section className="actions">
        <div className="button button-primary" onClick={this.login.bind(this)}>
          Login
        </div>
      </section>
    </section>
  }
}

export default Object.assign(branch(Welcome, {
  actions: {
    login: sessionActions.login
  }
}), {applicationTitle: "Nirrius"})
