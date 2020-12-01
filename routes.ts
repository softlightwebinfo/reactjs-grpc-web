// @ts-ignore
const routes = require('next-routes')

const route = routes();
// Name   Page      Pattern
// @ts-ignore
module.exports = route
    .add({name: 'index', pattern: '/', page: 'index'})