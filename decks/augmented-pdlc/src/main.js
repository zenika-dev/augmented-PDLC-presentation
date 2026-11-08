// The PDLC deck: the framework's core on the engine scene (src/scene.js), with the deck's config
import { boot } from "../../../framework/core/boot.js";
import scene from "./scene.js";
import config from "../deck.config.mjs";

boot(scene, config);
