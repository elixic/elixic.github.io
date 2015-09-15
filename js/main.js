require.config({
  paths: {
    "angular": "./lib/angular.min",
    "angular-route": "./lib/angular-route.min"
  },
  shim: {
    "lib/angular.min": {
      exports: "angular"
    },
    "lib/angular-route.min": {
      exports: "angular-route"
    }
  },
  deps: ["./app/bootstrap"]
});
