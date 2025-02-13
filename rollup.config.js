import resolve from "@rollup/plugin-commonjs";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import peerDepsExternalPlugin from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      peerDepsExternalPlugin(),
      postcss(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.tsx",
    output: [{
      file: packageJson.types,
    }],
    plugins: [dts.default()],
    external: [/\.css/]
  }
];
