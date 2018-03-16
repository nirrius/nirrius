const fs = require("fs")
const ghpages = require("gh-pages")
const path = require("path")

fs.writeFileSync(path.join(__dirname, "../dist/CNAME"), "nirri.us")

ghpages.publish(path.join(__dirname, "../dist"), error => {
  if (error) console.error(error)
})
