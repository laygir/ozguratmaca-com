module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'eslint:recommended',
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [
    'vue',
  ],
  settings: {
    'prettier-vue': {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        /**
         * Use prettier to process `<template>` blocks or not
         *
         * If set to `false`, remember not to `extends: ['prettier/vue']`,
         * as you need the rules from `eslint-plugin-vue` to lint `<template>` blocks
         *
         * @default true
         */
        template: false,

        /**
         * Use prettier to process `<script>` blocks or not
         *
         * @default true
         */
        script: true,

        /**
         * Use prettier to process `<style>` blocks or not
         *
         * @default true
         */
        style: true,

        // Settings for how to process custom blocks
        customBlocks: {
          // Treat the `<docs>` block as a `.markdown` file
          docs: { lang: 'markdown' },

          // Treat the `<config>` block as a `.json` file
          config: { lang: 'json' },

          // Treat the `<module>` block as a `.js` file
          module: { lang: 'js' },

          // Ignore `<comments>` block (omit it or set it to `false` to ignore the block)
          comments: false,

          // Other custom blocks that are not listed here will be ignored
        },
      },

      // Use prettierrc for prettier options or not (default: `true`)
      // usePrettierrc: true,

      // // Set the options for `prettier.getFileInfo`.
      // // @see https://prettier.io/docs/en/api.html#prettiergetfileinfofilepath-options
      // fileInfoOptions: {
      //   // Path to ignore file (default: `'.prettierignore'`)
      //   // Notice that the ignore file is only used for this plugin
      //   ignorePath: '.testignore',
      // },
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    allowForLoopAfterthoughts: 0,
    indent: 'off',
    'template-curly-spacing': 'off',
    'no-multiple-empty-lines': [2, {
      max: 2,
      maxEOF: 1,
    }],
    'arrow-parens': [2, 'as-needed', {
      requireForBlockBody: true,
    }],
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 1,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignores: [],
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/attributes-order': [
      2,
      {
        order: [
          'DEFINITION', // is
          'LIST_RENDERING', // v-for
          'CONDITIONALS', // v-if, v-else-if, v-else, v-show, v-cloak
          'RENDER_MODIFIERS', // v-pre, v-once
          'GLOBAL', // id
          'UNIQUE', // ref, key, slot
          'TWO_WAY_BINDING', // v-model
          // 'BINDING', // v-model
          'OTHER_DIRECTIVES', // v-custom-directive
          'OTHER_ATTR', // all unspecified bound & unbound attributes
          'CONTENT', // v-html, v-text
          'EVENTS', // v-on
        ],
      },
    ],
  },
};
