import cdActorSheet from "./modules/myActorSheet.js";

Hooks.once("init", function(){

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("vds", cdActorSheet, {makeDefault: true, types: ["Investigator"]});
});