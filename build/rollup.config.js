import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'

export default {
    input: 'src/index.js',
    output: {
        file: './dist/searchCom.js',
        format: 'cjs'
    },
    plugins: [
        commonjs(),
        vue(),
        buble(),
        resolve()
    ]
}