module.exports = {
    root: true,
    //parser: "babel-eslint",
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "parser": "babel-eslint"
    },
    env: {
        browser: true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    // extends: 'standard',
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    // required to lint *.wpy files
    plugins: [
        'vue',
        'html'
    ],
    settings: {
        'html/html-extensions': ['.html', '.wpy', '.vue']
    },
    globals: { wx: true },
    // add your custom rules here
    'rules': {
        "semi": 0,
        "no-extra-semi": 2,
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'space-before-function-paren': 0,

        'no-console': 0,
        "no-undef": 0,
        "no-alert": 0, //禁止使用alert confirm prompt  
        "no-const-assign": 2, //禁止修改const声明的变量
        "no-delete-var": 2, //不能对var声明的变量使用delete操作符
        "no-dupe-keys": 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-dupe-args": 2, //函数参数不能重复

        "no-extra-parens": 1, //禁止非必要的括号
        "no-extra-semi": 2, //禁止多余的冒号

        "no-fallthrough": 1, //禁止switch穿透
        "no-floating-decimal": 2, //禁止省略浮点数中的0 .5 3.
        "no-func-assign": 2, //禁止重复的函数声明

        "no-redeclare": 0, //禁止重复声明变量

        "no-self-compare": 2, //不能比较自身

        "no-unused-vars": [0, { "vars": "all", "args": "after-used" }], //不能有声明后未被使用的变量或参数
        "no-use-before-define": 1, //未定义前不能使用

        "array-bracket-spacing": [2, "never"], //是否允许非空数组里面有多余的空格

        "brace-style": [1, "1tbs"], //大括号风格

        "computed-property-spacing": [0, "never"], //是否允许计算后的键名什么的
        "consistent-return": 0, //return 后面是否允许省略

        "dot-notation": [0, { "allowKeywords": true }], //避免不必要的方括号

        "padded-blocks": 0, //块语句内行首行尾是否要空行
        "quotes": 0, //引号类型 `` "" ''
        "quote-props": [0, "always"], //对象字面量中的属性名是否强制双引号
        "radix": 1, //parseInt必须指定第二个参数

    }
}