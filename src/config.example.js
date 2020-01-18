let Config = {
  ENVIRONMENT: "DEVELOPMENT",
  ENVIRONMENTS: {
    LOCAL: {
      API_URL: "SIMPLE_DEPLOY_API_URL"
    },
    DEVELOPMENT: {
      API_URL: "SIMPLE_DEPLOY_API_URL"
    },
    PRODUCTION: {
      API_URL: "SIMPLE_DEPLOY_API_URL"
    }
  }
};

Config.env = () => {
  return Config.ENVIRONMENTS[Config.ENVIRONMENT];
};

export default Config;
