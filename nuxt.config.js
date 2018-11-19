module.exports = {
  head: {
    title: "Themable website",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "We are testing a themable website" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Ubuntu" }
    ]
  },
  loading: { color: "#812747" },
  build: {
    extend(config, { isDev, isClient }){
      config.node = { fs: "empty", child_process: "empty" }
    }
  },
  router: {
    base: "/"
  },
  mode: "spa"
}
