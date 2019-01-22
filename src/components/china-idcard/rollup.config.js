const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify').uglify;

const pkg = require('./package.json');
const version = process.env.VERSION || pkg.version;
const name = process.env.NAME || pkg.name;
const func = process.env.FUNC || name;
const author = process.env.AUTHOR || pkg.author;
const license = process.env.LICENSE || pkg.license;

const banner = `/* 
 * ${name}.js v${version}
 * ${new Date().getFullYear()} ${author}
 * @license ${license}
 */
`;

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  input: 'src/index.js',
  output: {
    file: isProduction ? `dist/${name}.min.js` : `test/${name}.debug.js`,
    format: 'umd',
    sourcemap: true,
    name: func,
    banner: banner
  },
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    isProduction &&
      uglify({
        output: {
          comments: function(node, comment) {
            var text = comment.value;
            var type = comment.type;
            if (type == 'comment2') {
              return /@preserve|@license|@cc_on/i.test(text);
            }
          }
        }
      })
  ]
};
