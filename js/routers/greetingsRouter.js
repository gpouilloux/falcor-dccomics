/**
 * Falcor router displaying 'Hello World'
 */

'use strict'

import Router from 'falcor-router'

export class GreetingsRouter extends
    // create base class in-line
    Router.createClass([
        {
            route: "greeting",
            get: function() {
              return { path:["greeting"], value: `Hello ${this.user}` }
            }
        }
    ]) {
    constructor(user) {
        super()
        this.user = user
    }
}

export { GreetingsRouter as default }
