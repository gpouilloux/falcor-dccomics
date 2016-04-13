/**
 * Falcor router handling DC Comics characters
 */

'use strict'

import _ from 'lodash'

import {
    getCharacters
} from '../database'

export default {

    route: 'characters[{keys:ids}][{keys:props}]',

    get: function(pathSet) {
        const characters = getCharacters()
        return _(pathSet.ids)
          .map(_.propertyOf(characters))
          .flatMap(character => _.map(pathSet.props, prop => ({
            path: ["characters", character.id, prop],
            value: character[prop]})))
          .value()
      }
}
