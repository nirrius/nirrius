import "./Goodbye.styl"

import * as sessionActions from "actions/session"
import {capitalize} from "lodash"
import React from "react"
import Rend from "common/rend"

class Goodbye extends React.Component {
  constructor(props) {
    super(props)
  }

  logout() {
    sessionActions.logout()
  }

  render() {
    const {username} = this.props

    return <section>
      <h1>In every universe...</h1>

      <p>{capitalize(username)},</p>

      <p>With every <Rend possibilities={["goodbye"]}>hello</Rend> we're fated to <Rend possibilities={["remember."]}>forget.</Rend></p>
      <p>With every <Rend possibilities={["hello"]}>goodbye</Rend> we're fated to <Rend possibilities={["forget."]}>remember.</Rend></p>
      <p>Until next time, love.</p>
      <p>~Honey &lt;3</p>

      <section className="actions">
        <div className="button button-primary" onClick={this.logout.bind(this)}>
          Logout
        </div>
      </section>
    </section>
  }
}

Goodbye.applicationTitle = "Nirrius"

Goodbye.propTypes = {
  username: React.PropTypes.string
}

export default Goodbye
