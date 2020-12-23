module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5a09c4ab6a1ef7ce3b7e05e96c16e0f5'),
    },
  },
});
