import {clear as clearLocal, set as saveLocal} from "local-preferences"
import * as desktopActions from "./desktop"

export function login(tree, username) {
  tree.set("username", username)
  saveLocal("username", username)

  const welcomePaneIndex = tree
    .get("panes")
    .findIndex(pane => pane.component === "Welcome")

  desktopActions.closePane(tree, welcomePaneIndex)
}

export function logout() {
  if (!confirm("Delete user data?")) return

  clearLocal()
  window.location.reload()
}
