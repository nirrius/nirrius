import {recordsByList} from "resources/users"

export default [
  {
    component: "Directory",
    applicationProps: {
      entries: recordsByList
    }
  }
]
