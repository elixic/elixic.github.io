require.config({
    shim: {
        "angular.min": {
            exports: "angular"
        },
        "angular-route.min": {
            exports: "angular-route"
        }
    },
    deps: ["./app/bootstrap"]
});
