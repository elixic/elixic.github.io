require.config({
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
