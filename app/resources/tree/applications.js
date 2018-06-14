import prelude from "../users/nirrius/holographs/prelude.md"

import {recordsByList} from "resources/users"

export default [
  {
    component: "Directory",
    applicationTitle: "Directory",
    applicationProps: {
      entries: recordsByList
    }
  },
  {
    component: "Spectra",
    applicationTitle: "Prelude",
    applicationProps: {
      body: prelude
    }
  }
]
