const intersect = {
    constructor: function(element, callback, options = {}) {
        const defaultOptions = {
            rootMargin: '0px',
            threshold: 0.1,
        }
        this.options = {...options, ...defaultOptions};
        this.element = element;
        this.callback = typeof callback === 'function' ? callback : () => false;
    }
}