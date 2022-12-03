import { Collection, ElementCollection } from '../interfaces'

const intersection: Function = (element: Element | string, callback: Function = () => {return null}, options: Object = new Object()) => {
    const defaultOptions = {
        rootMargin: '0px',
        threshold: 0.1,
    }

    // Make sure our element variable is the correct type
    if (typeof element ==='string') {
        element = document.querySelector(element) || new Element();
    }

    // Set up our options object
    const observerOptions = {...options, ...defaultOptions}

    // Add element to collection
    let entries: ElementCollection = [];
    entries.push(element);

    // Define our observer
    const observer = new IntersectionObserver(function(entries, $this) {
        entries.forEach(function(entry) {
          return callback(entry, $this)
        });
      }, observerOptions);

      entries.forEach(entry => {
        console.log(entry);
        observer.observe(entry);
      })
}

export default intersection
