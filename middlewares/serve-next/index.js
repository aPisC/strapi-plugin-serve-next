const path = require("path");
const next = require("next");
const connect = require("koa-connect");

module.exports = (strapi) => {
  return {
    initialize: () => {
      const config =
        (strapi.config.middleware &&
          strapi.config.middleware.settings &&
          strapi.config.middleware.settings["serve-next"]) ||
        {};

      const contentPath = config.path || "next";

      const nextDir = path.resolve(path.join(strapi.dir, contentPath));

      const nextApp = next({
        dev: process.env.NODE_ENV !== "production",
        dir: nextDir,
      });
      const handle = nextApp.getRequestHandler();

      function nextMiddleware(req, res, next) {
        handle(req, res, req.url).then(() => {
          next();
        });
      }

      strapi.router.use(connect(nextMiddleware));
      nextApp.prepare();
    },
  };
};
