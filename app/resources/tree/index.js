import applications from "./applications"
import Baobab from "baobab"
import {get} from "local-preferences"
import uniqueID from "helpers/unique-id"

const username = get("username", "")
const storyEnded = get("storyEnded", false)
const defaultPanes = []

if (storyEnded) {
  defaultPanes.push({
    applicationProps: {
      username,
      contentTitle: "Goodbye"
    },
    component: "Goodbye",
    dismissible: false,
    paneID: uniqueID(),
    synched: false
  })
}
else if (!username) {
  defaultPanes.push({
    applicationProps: {
      contentTitle: "Login"
    },
    dismissible: false,
    component: "Welcome",
    paneID: uniqueID()
  })
}

const tree = new Baobab({
  applications,
  panes: get("panes", defaultPanes),
  panesCreated: 0,
  system: {
    bootTime: "2010-09-01T08:00:00.000Z",
    currentTime: Date.now()
  },
  cryogenics: {
    actual: Math.floor(Math.random() * 100) + 1,
    capacity: "???",
    status: "ONLINE"
  },
  // cryogenics: {
  //   actual: "???",
  //   capacity: 100,
  //   status: "DAMAGED"
  // },
  storyEnded,
  username
}, {autoCommit: false})

export default tree
