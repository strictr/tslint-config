const tslintRulesConfig = {
    'adjacent-overload-signatures': true,
    'ban-comma-operator': true,
    'member-access': true,
    'member-ordering': [
        true,
        {
            'order': [
                'public-static-field',
                'protected-static-field',
                'private-static-field',
                'instance-field',
                'public-constructor',
                'protected-constructor',
                'private-constructor',
                'public-instance-method',
                'protected-instance-method',
                'private-instance-method'
            ]
        }
    ],
    'no-any': false,
    'no-empty-interface': true,
    'no-import-side-effect': false,
    'no-inferrable-types': false,
    'no-internal-module': true,
    'no-magic-numbers': [
        true,
        -1,
        0,
        1,
        2
    ],
    'no-namespace': false,
    'no-non-null-assertion': false,
    'no-parameter-reassignment': true,
    'no-reference': true,
    'no-var-requires': true,
    'only-arrow-functions': true,
    'prefer-for-of': true,
    'promise-function-async': true,
    'typedef': [
        true,
        'call-signature',
        'parameter',
        'property-declaration'
    ],
    'typedef-whitespace': [
        true,
        {
            'call-signature': 'nospace',
            'index-signature': 'nospace',
            'parameter': 'nospace',
            'property-declaration': 'nospace',
            'variable-declaration': 'nospace'
        },
        {
            'call-signature': 'onespace',
            'index-signature': 'onespace',
            'parameter': 'onespace',
            'property-declaration': 'onespace',
            'variable-declaration': 'onespace'
        }
    ],
    'unified-signatures': true,
    'await-promise': true,
    'curly': true,
    'forin': true,
    'import-blacklist': false,
    'label-position': true,
    'no-arg': true,
    'no-bitwise': true,
    'no-conditional-assignment': true,
    'no-console': [
        false,
        'debug',
        'info',
        'time',
        'timeEnd',
        'trace'
    ],
    'no-construct': true,
    'no-debugger': true,
    'no-duplicate-super': true,
    'no-duplicate-switch-case': true,
    'no-duplicate-variable': [
        true,
        'check-parameters'
    ],
    'no-empty': true,
    'no-eval': true,
    'no-floating-promises': true,
    'no-for-in-array': true,
    'no-implicit-dependencies': false,
    'no-inferred-empty-object-type': true,
    'no-invalid-template-strings': true,
    'no-invalid-this': true,
    'no-misused-new': true,
    'no-null-keyword': false,
    'no-object-literal-type-assertion': false,
    'no-return-await': true,
    'no-shadowed-variable': true,
    'no-sparse-arrays': true,
    'no-string-literal': true,
    'no-string-throw': true,
    'no-switch-case-fall-through': true,
    'no-this-assignment': true,
    'no-unbound-method': false,
    'no-unnecessary-class': [
        true,
        'allow-constructor-only',
        'allow-static-only',
        'allow-empty-class'
    ],
    'no-unsafe-any': false,
    'no-unsafe-finally': true,
    'no-unused-expression': true,
    'no-use-before-declare': false,
    'no-var-keyword': true,
    'prefer-object-spread': true,
    'radix': true,
    'restrict-plus-operands': false,
    'strict-type-predicates': false,
    'switch-default': true,
    'triple-equals': [
        true,
        'allow-null-check'
    ],
    'use-default-type-parameter': true,
    'use-isnan': true,
    'cyclomatic-complexity': [
        true,
        10
    ],
    'eofline': true,
    'deprecation': true,
    'indent': [
        true,
        'spaces',
        4
    ],
    'max-classes-per-file': [
        true,
        1
    ],
    'max-file-line-count': [
        true,
        300
    ],
    'max-line-length': [
        true,
        140
    ],
    'no-default-export': true,
    'no-duplicate-imports': true,
    'no-mergeable-namespace': true,
    'no-require-imports': false,
    'object-literal-sort-keys': [
        false,
        'ignore-case',
        'match-declaration-order'
    ],
    'prefer-const': true,
    'trailing-comma': [
        true,
        {
            'multiline': 'always',
            'singleline': 'never'
        }
    ],
    'align': [
        true,
        'parameters',
        'statements',
        'members',
        'elements'
    ],
    'array-type': [
        true,
        'array'
    ],
    'arrow-parens': true,
    'arrow-return-shorthand': true,
    'binary-expression-operand-order': true,
    'class-name': true,
    'comment-format': [
        true,
        'check-space'
    ],
    'encoding': true,
    'import-spacing': true,
    'interface-name': [
        true,
        'always-prefix'
    ],
    'interface-over-type-literal': true,
    'jsdoc-format': true,
    'match-default-export-name': true,
    'newline-before-return': false,
    'new-parens': true,
    'no-angle-bracket-type-assertion': true,
    'no-boolean-literal-compare': true,
    'no-consecutive-blank-lines': true,
    'no-irregular-whitespace': true,
    'no-parameter-properties': false,
    'no-redundant-jsdoc': true,
    'no-trailing-whitespace': true,
    'no-unnecessary-callback-wrapper': true,
    'no-unnecessary-initializer': true,
    'no-unnecessary-qualifier': true,
    'number-literal-format': true,
    'object-literal-key-quotes': [
        true,
        'as-needed'
    ],
    'object-literal-shorthand': true,
    'one-line': [
        true,
        'check-open-brace',
        'check-whitespace',
        'check-catch',
        'check-finally',
        'check-else'
    ],
    'one-variable-per-declaration': true,
    'ordered-imports': false,
    'prefer-function-over-method': false,
    'prefer-method-signature': false,
    'prefer-switch': [
        true,
        {
            'min-cases': 3
        }
    ],
    'prefer-template': [
        true,
        'allow-single-concat'
    ],
    'quotemark': [
        true,
        'single'
    ],
    'return-undefined': true,
    'semicolon': [
        true,
        'always'
    ],
    'space-before-function-paren': false,
    'switch-final-break': true,
    'type-literal-delimiter': false,
    'variable-name': [
        true,
        'check-format',
        'ban-keywords'
    ],
    'whitespace': [
        true,
        'check-module',
        'check-branch',
        'check-decl',
        'check-operator',
        'check-separator',
        'check-type',
        'check-preblock',
        'check-rest-spread',
        'check-typecast',
        'check-preblock',
        'check-type-operator'
    ],
    'ban-ts-ignore': true,
    'function-constructor': true,
    'increment-decrement': false,
    'unnecessary-constructor': true,
    'no-tautology-expression': true,
    'static-this': true,
    'unnecessary-else': true,
    'no-default-import': true,
    'unnecessary-bind': true,
    'file-name-casing': [true, 'kebab-case'],
    'prefer-readonly': true,
    'no-for-in': true,
    'invalid-void': true,
    'no-promise-as-boolean': true,
    'no-async-without-await': true,
    'no-null-undefined-union': true,
};

module.exports = {
    tslintRulesConfig,
};
