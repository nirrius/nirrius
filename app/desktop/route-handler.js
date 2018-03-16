import React from "react"
import Desktop from "./index"
import {root} from "baobab-react/higher-order"
import tree from "resources/tree"

class DesktopRouteHandler extends React.Component {
  render() {
    return <Desktop />
  }
}

export default root(DesktopRouteHandler, tree)
