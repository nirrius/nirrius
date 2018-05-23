import teffen from "./teffen"
import nirrius from "./nirrius"

export const recordsByUsername = {
  nirrius,
  teffen
}

export const recordsByList = Object.keys(recordsByUsername).map(key => recordsByUsername[key])
