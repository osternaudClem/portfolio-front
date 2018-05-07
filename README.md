# Porfolio - Blog

This is my main website to show my stuffs and articles I wrote.

This project use React and Redux for the front side, and I use Ghost as an admin to write my blog posts.

If wou want to use this project, you must rename the `src/config.default.js` to `src/config.js`, and field with your data.

```
module.exports = {
  // API
  api: {
    ghost: {
      url: 'GHOST_ADMIN_URL',
      port: 'GHOST_ADMIN_PORT',
      endpoint: 'GHOST_API_ENDPOINT',
      clientId: 'ghost-frontend',
      clientSecret: 'GHOST_CLIENT_SECRET',
    },
  },
};
```