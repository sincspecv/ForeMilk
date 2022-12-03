const intersect = {
    constructor: function (element, callback = () => { return null; }, options = new Object()) {
        const defaultOptions = {
            rootMargin: '0px',
            threshold: 0.1,
        };
        options = { ...options, ...defaultOptions };
    }
};
export {};
//# sourceMappingURL=intersection.js.map