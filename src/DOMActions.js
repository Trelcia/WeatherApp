const _getDOMElem = id => {
    return document.getElementById(id);
}

const mapListToDOMElems = listOfId => {
    const _viewElems = {}

    for (const id of listOfId) {
        _viewElems[id] = _getDOMElem(id);
    }
    console.log(_viewElems);
    return _viewElems;
}

export {
    mapListToDOMElems
} 