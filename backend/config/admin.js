module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'caf6210fa81ba1c6e1bb8dad2d558e0b'),
  },
});
