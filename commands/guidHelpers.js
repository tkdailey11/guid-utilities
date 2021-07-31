const vscode = require('vscode');
const { v4: uuidv4 } = require('uuid');

function newGUID() {
    var guid = uuidv4()

    var cfg = vscode.workspace.getConfiguration('guidUtilities')
    var useCaps = cfg.get('useCaps')
    var includeDashes = cfg.get('includeDashes')
    var includeBrackets = cfg.get('includeBrackets')

    if(useCaps){
        guid = guid.toUpperCase()
    }

    if(!includeDashes) {
        guid = guid.replaceAll("-", "")
    }

    if(includeBrackets) {
        guid = "{" + guid + "}"
    }

    return guid
}

module.exports = {
    newGUID
}