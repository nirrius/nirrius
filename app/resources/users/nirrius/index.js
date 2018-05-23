import cloudflareApps from "./holographs/cloudflare-apps.md"
import one4 from "./holographs/one-one-one-one.md"
import ceregoJapan from "./holographs/cerego-japan.md"
import prelude from "./holographs/prelude.md"
import daemon from "./holographs/daemon.md"

export default {
  fullName: "Nirrius Creative Studio",
  firstName: "Nirrius",
  lastName: "",
  username: "nirrius",
  description: "Highlighted projects",
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
      id: "cerego-japan",
      contentTitle: "Cerego Japan",
      description: "Learning technologies",
      body: ceregoJapan
    }
  ]
}
