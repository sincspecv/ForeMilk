import { Collection } from '../interfaces'

const intersection: Collection = {
    constructor: function(element: Node, callback: Function = () => {return null}, options: Object = new Object()) {
        const defaultOptions = {
            rootMargin: '0px',
            threshold: 0.1,
        }

        options = {...options, ...defaultOptions}
    }
}

export default intersection
