
import {recordsByUsername} from "../users"
import sonata from "../users/nirrius/holographs/sonata.md"
import teffen from "../users/nirrius/holographs/teffen.md"

export default [
  {
    component: "Spectra",
    applicationProps: {
      contentTitle: "About Me",
      body: teffen
    }
  },
  {
    component: "Spectra",
    href: "https://twitter.com/SleepySheikha",
    applicationProps: {
      contentTitle: "Twitter"
    }
  },
  {
    component: "Spectra",
    href: "https://ko-fi.com/nirrius",
    applicationProps: {
      contentTitle: "Ko-fi"
    }
  },
  {
    component: "Entries",
    applicationProps: {
      contentTitle: "Writing",
      ...recordsByUsername.writing
    }
  },
  {
    component: "Entries",
    applicationProps: {
      contentTitle: "Fiction",
      ...recordsByUsername.fiction
    }
  },
  {
    component: "Spectra",
    applicationProps: {
      contentTitle: "Sonata",
      body: sonata
    }
  }
]
