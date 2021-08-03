module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '100779c3f2fd6c8d7b1bf7a1a3e0dd18'),
    },
  },
});
