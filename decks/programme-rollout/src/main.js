// The programme rollout: the framework's core on its scene (src/scene.js: the keynote's engine and sets, its own lists)
import { boot } from "../../../framework/core/boot.js";
import scene from "./scene.js";
import config from "../deck.config.mjs";

boot(scene, config);
