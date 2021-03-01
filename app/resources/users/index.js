import teffen from "./teffen"
import nirrius from "./nirrius"

export const recordsByUsername = {
  nirrius,
  teffen,
  writing: {
    fullName: "Writing",
    firstName: "Writing",
    lastName: "",
    username: "writing",
    description: "Non-Fiction writing",
    entries: [
      {
        id: "splenda",
        contentTitle: "Splenda love",
        description: "Depression, narcissists, and a tran looking for love in all the wrong places.",
        href: "https://www.inherentmag.com/opinion-1/splenda-love"
      }
    ]
  },
  fiction: {
    fullName: "Fiction",
    firstName: "Fiction",
    lastName: "",
    username: "fiction",
    description: "Fic",
    entries: [
      {
        id: "sonata",
        contentTitle: "Sonata",
        description: "Coming soon",
        href: "#"
      }
    ]
  }
}

export const recordsByList = Object.keys(recordsByUsername).map(key => recordsByUsername[key])
