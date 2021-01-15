# Strapi plugin serve-next

This plugin will redirect fallback requests to a next server running under strapi.

## Configuration
- Enable `serve-next` middleware and put it to the end of the loading order.
- Customize settings in /config/middleware.js (section: settings["serve-next"])
  - `path`: the path of next project folder, relative to strapi project directory. (default: 'next')

# Additional Configuration
I recomment to add next folder admin.watchIgnoredFiles section to avoid unnecessary strapi restarts during development (`path.join(process.cwd, "<next_folder>/**")`)