import cloudflareApps from "../users/nirrius/holographs/cloudflare-apps.md"
import one4 from "../users/nirrius/holographs/one-one-one-one.md"
// import ceregoJapan from "../users/nirrius/holographs/cerego-japan.md"
import prelude from "../users/nirrius/holographs/prelude.md"
// import daemon from "../users/nirrius/holographs/daemon.md"
import embedBox from "../users/nirrius/holographs/embed-box.md"
// import sonata from "../users/nirrius/holographs/sonata.md"

import {recordsByList} from "resources/users"

export default [
  {
    component: "Spectra",
    applicationProps: {
      contentTitle: "Prelude",
      body: prelude
    }
  },
  {
    component: "Spectra",
    applicationProps: {
      contentTitle: "1.1.1.1",
      body: one4
    }
  },
  {
    component: "Spectra",
    applicationProps: {
      contentTitle: "Embed Box",
      body: embedBox
    }
  },
  {
    component: "Spectra",
    applicationProps: {
      contentTitle: "Cloudflare Apps",
      body: cloudflareApps
    }
  },
  {
    component: "Directory",
    applicationProps: {
      contentTitle: "Directory",
      entries: recordsByList
    }
  }
]
