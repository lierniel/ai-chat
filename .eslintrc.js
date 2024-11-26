module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb', // Use Airbnb's base rules
        'airbnb-typescript', // Add TypeScript-specific rules
        'airbnb/hooks', // Include React hooks rules
        'plugin:@typescript-eslint/recommended', // Add TypeScript recommended rules
        'plugin:react/recommended', // Add React-specific linting rules
        'plugin:jsx-a11y/recommended', // Add accessibility rules
        'plugin:import/typescript', // Add TypeScript support for import rules
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2021, // Allows parsing of modern ECMAScript features
        sourceType: 'module', // Allows using ES Modules
        ecmaFeatures: {
            jsx: true, // Enables parsing of JSX
        },
        project: './tsconfig.json', // Path to the TypeScript configuration file
    },
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }], // Allow .tsx for JSX
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
                js: 'never',
                jsx: 'never',
            },
        ],
        '@typescript-eslint/no-unused-vars': ['warn'], // Warn on unused variables
        'react/function-component-definition': [
            2,
            {
                namedComponents: ['arrow-function', 'function-declaration'],
                unnamedComponents: 'arrow-function',
            },
        ],
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'warn',
        'react/require-default-props': [0],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
            },
        ],

        'import/order': [
            2,
            {
                groups: [
                    'external',
                    'builtin',
                    'internal',
                    'sibling',
                    'parent',
                    'index',
                ],
                pathGroups: [
                    {
                        pattern: 'bots',
                        group: 'internal',
                    },
                    {
                        pattern: 'components',
                        group: 'internal',
                    },
                    {
                        pattern: 'consts',
                        group: 'internal',
                    },
                    {
                        pattern: 'hooks',
                        group: 'internal',
                    },
                    {
                        pattern: 'services',
                        group: 'internal',
                    },
                    {
                        pattern: 'storage',
                        group: 'internal',
                    },
                ],
            },
        ],
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect the React version
        },
        'import/resolver': {
            typescript: {}, // Use TypeScript's resolution
        },
    },
    ignorePatterns: ['dist/', 'node_modules/'],
};
