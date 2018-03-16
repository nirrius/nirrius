import "./spectra.styl"

import React from "react"

class Spectra extends React.Component {
  render() {
    return <section
      dangerouslySetInnerHTML={{
        __html: this.props.body
      }}
      data-component="applications/spectra"
      data-selectable />
  }
}

Spectra.applicationTitle = "Spectra"

Spectra.defaultProps = {
  body: ""
}

Spectra.propTypes = {
  body: React.PropTypes.string
}

export default Spectra
