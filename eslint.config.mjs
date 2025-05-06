import xoConfig from "eslint-config-xo";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "@eslint/config-helpers";

export default defineConfig(/** @type {any} */ ([...xoConfig, prettierConfig]));
