import cloudflareApps from "./holographs/cloudflare-apps.md"
import one4 from "./holographs/one-one-one-one.md"
import ceregoJapan from "./holographs/cerego-japan.md"
import prelude from "./holographs/prelude.md"
import daemon from "./holographs/daemon.md"
import sonata from "./holographs/sonata.md"
import brands from "./holographs/brands.md"

export default {
  fullName: "Nirrius Creative Studio",
  firstName: "Nirrius",
  lastName: "",
  username: "nirrius",
  description: "A collective of passionate humans that build great products and unforgettable experiences.",
  entries: [
    {
      id: "cloudflare-apps",
      contentTitle: "Cloudflare Apps",
      description: "SaaS delivery platform",
      body: cloudflareApps
    },
    {
      id: "one-one-one-one",
      contentTitle: "1.1.1.1 Open DNS",
      description: "Private, performant DNS",
      body: one4
    },
    {
      id: "prelude",
      contentTitle: "Prelude",
      description: "Apps platform visual",
      body: prelude
    },
    {
      id: "daemon",
      contentTitle: "Daemon",
      description: "Argo Tunnel visual",
      body: daemon
    },
    {
      id: "sonata",
      contentTitle: "Sonata",
      description: "A VR game about sisters who dance with ghosts",
      body: sonata
    },
    {
      id: "cerego-japan",
      contentTitle: "Cerego Japan",
      description: "Learning technologies",
      body: ceregoJapan
    },
    {
      id: "brands",
      contentTitle: "Brands",
      description: "Some of our favorite creators",
      body: brands
    }
  ]
}
