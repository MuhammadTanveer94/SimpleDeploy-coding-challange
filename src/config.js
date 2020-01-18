let Config = {
  ENVIRONMENT: "DEVELOPMENT",
  ENVIRONMENTS: {
    LOCAL: {
      API_URL: "https://todo-backend-rails.herokuapp.com"
    },
    DEVELOPMENT: {
      API_URL: "https://todo-backend-rails.herokuapp.com"
    },
    PRODUCTION: {
      API_URL: "https://todo-backend-rails.herokuapp.com"
    }
  }
};

Config.env = () => {
  return Config.ENVIRONMENTS[Config.ENVIRONMENT];
};

export default Config;
