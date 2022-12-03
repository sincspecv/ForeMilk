import { Collection } from './interfaces'
import intersection from './watch/intersection'

/**
 * Our full collection of methods
 */
const fm: Collection = {
    watchFor: {
        intersection: {...intersection}
    }
}

module.exports = fm