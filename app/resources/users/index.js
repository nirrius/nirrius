import teffen from "./teffen"

export const recordsByUsername = {
  teffen
}

export const recordsByList = Object.keys(recordsByUsername).map(key => recordsByUsername[key])
