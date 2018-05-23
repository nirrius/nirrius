import "./entries.styl"

import * as desktopActions from "actions/desktop"
import {branch} from "baobab-react/higher-order"
import React, {Component} from "react"

class Entries extends Component {
  defaultProps = {
    entries: []
  };

  static propTypes = {
    entries: React.PropTypes.array,
    username: React.PropTypes.string,
    header: React.PropTypes.string,
    subHeader: React.PropTypes.string
  };

  handleNavigate(params, event) {
    event.stopPropagation()

    this.props.actions.getPaneFromRoute(params.username, params.entryID)
  }

  render() {
    return <section data-component="applications/entries">
      <header>
        <h1 className="slim-header">{this.props.header}</h1>
        {this.props.subHeader}
      </header>

      {this.renderTable()}
    </section>
  }

  renderEntries() {
    return this.props.entries.map((entry, i) => {
      let entryContent

      if (entry.href) {
        entryContent = <a href={entry.href} target="_blank">{entry.contentTitle}</a>
      }
      else {
        entryContent = <span className="link"
          onClick={this.handleNavigate.bind(this, {
            username: this.props.username,
            entryID: entry.id
          })}>
          {entry.contentTitle}
        </span>
      }

      return <tr key={i}>
        {/* <td className="entry-number">{i + 1}.</td> */}
        <td className="entry">
          {entryContent}
        </td>
        <td>
          {entry.description}
        </td>
      </tr>
    })
  }

  renderTable() {
    return <table>
      <thead>
        <tr>
          {/* <th className="entry-number">#</th> */}
          <th>Entry</th>
          <th>Details</th>
        </tr>
      </thead>

      <tbody>
        {this.renderEntries()}
      </tbody>
    </table>
  }
}

export default Object.assign(branch(Entries, {
  actions: {
    getPaneFromRoute: desktopActions.getPaneFromRoute
  }
}), {applicationTitle: "Directory"})

