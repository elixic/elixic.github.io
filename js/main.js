require.config({
    shim: {
        "angular.ming": {
            exports: "angular"
        },
        "angular-route.min": {
            exports: "angular-route"
        }
    },
    deps: ["./app/bootstrap"]
});
