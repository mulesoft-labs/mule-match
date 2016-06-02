module.exports = {
  CONFIG: {
    ENVIRONMENT:  process.env.NODE_ENV || 'development',
    PORT:         process.env.PORT || 3000,
    BACKEND:      {
      URI: 'http://mulesoft-info.cloudhub.io'
    }
  }
};
