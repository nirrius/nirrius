import * as Users from "resources/users"
import calculatePanePosition from "helpers/calculate-pane-position"
import uniqueID from "helpers/unique-id"

export function createPane(tree, data) {
  const panesCreated = tree.get("panesCreated")
  const panesCursor = tree.select("panes")
  const attributes = Object.assign({
    synched: true
  }, data, {
    paneID: uniqueID(),
    position: calculatePanePosition(panesCursor.get().length),
    creationOrder: panesCreated
  })

  panesCursor.push(attributes)
  tree.set("panesCreated", panesCreated + 1)
  tree.commit()
}

export function bringPaneToFront(tree, index) {
  const panesCursor = tree.select("panes")
  const panes = panesCursor.get()
  const pane = Object.assign({}, panesCursor.get(index))

  pane.minimized = false
  panesCursor.set(index, pane)

  // Skip panes that are already at the top.
  if (index !== panes.length - 1) {
    panesCursor.splice([index, 1])
    panesCursor.push(pane)
  }

  tree.commit()
}

export function closePane(tree, index) {
  tree.select("panes").splice([index, 1])

  tree.commit()
}

export function getPaneFromRoute(tree, username, entryID) {
  const create = createPane.bind(null, tree)
  const user = Users.recordsByUsername[username]

  if (typeof user === "undefined") {
    return create({
      component: "Catastrophe",
      synched: false,
      applicationProps: {
        contentTitle: "SYNCHRONIZE ERROR"
      }
    })
  }

  const entry = user.entries.find(e => e.id === entryID)

  if (typeof entry !== "undefined") {
    // Show entry.
    return create({
      component: "Spectra",
      applicationProps: {
        prominent: true,
        body: entry.body,
        contentTitle: entry.contentTitle
      }
    })
  }

  // Show entries index.
  create({
    component: "Entries",
    applicationProps: {
      contentTitle: `${user.firstName}'s Holographs`,
      header: user.fullName,
      subHeader: user.description,
      entries: user.entries,
      username
    }
  })
}

export function setPaneAttributes(tree, index, attributes) {
  const panesCursor = tree.select("panes")
  const panesCount = panesCursor.get().length
  const paneCursor = panesCursor.select(index)

  paneCursor.merge(attributes)
  tree.commit()

  function bringFirstVisiblePaneToFront(pane, index) {
    if (pane.minimized) return false

    bringPaneToFront(tree, index)
    return true
  }

  if (paneCursor.get("maximized")) {
    return bringPaneToFront(tree, index)
  }

  // The previous pane should take focus if this pane isn't visible.
  if (panesCount - 1 === index && panesCount > 1 && paneCursor.get("minimized")) {
    panesCursor.get()
      .slice()
      .reverse() // Reverse because the next desired pane is behind this one.
      .some(bringFirstVisiblePaneToFront)
  }
}
