class SuperClipboard {
    constructor() {
        this._copies = [];
    }

    getCopies() {
        return this._copies;
    }

    addCopy(copy) {
        this._copies.push(copy);
    }

    removeFirstCopy() {
        _copies.shift();
    }

    removeLastCopy() {
        _copies.pop();
    }

    removeSpecificCopy(copy, position = "last") {
        switch (position) {
            case "all":
                _copies = _copies.filter(v => v !== copy);
                break;
            case "first":
                _copies.splice(_copies.indexOf(copy), 1);
                break;
            default:
                _copies.splice(_copies.lastIndexOf(copy), 1);
        }
    }
}

export { SuperClipboard };
