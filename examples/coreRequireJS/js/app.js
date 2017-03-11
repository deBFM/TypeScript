// Config
requirejs.config({
    baseUrl: 'js/modules',
});

// Start the main modules logic.
requirejs(["mod1","mod2"],
    function(mod1, mod2) {
        //Proof that the mods are singeltons
        console.log(mod1);
        console.log(mod2);
});