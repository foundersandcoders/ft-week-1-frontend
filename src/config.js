let config;

if (window.location.hostname === "localhost") {
  config = {
    apiBaseUrl: "http://localhost:3000",
  };
} else {
  config = {
    apiBaseUrl: "http://18.168.254.104:3000",
  };
}

export default config;
