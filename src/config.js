let config;

if (window.location.hostname === "localhost") {
  config = {
    apiBaseUrl: "http://localhost:3000",
  };
} else {
  config = {
    apiBaseUrl: "https://api.example.com",
  };
}

export default config;
