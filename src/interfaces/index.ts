export interface Collection {
    constructor?: Function;
    [keys: string]: any;
}

export interface ElementCollection extends Array<Element> {}