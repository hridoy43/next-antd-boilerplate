module.exports = {
    extends: 'stylelint-config-recommended-scss',
    plugins: ['stylelint-order', 'stylelint-scss'],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
            },
        ],
        'order/properties-alphabetical-order': true,
        'block-no-empty': null,
        'unit-whitelist': ['em', 'rem', 's', 'px', 'vh', '%', 'vw'],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,
        'scss/at-rule-no-unknown': null,
        'scss/at-import-no-partial-leading-underscore': null,
    },
};
