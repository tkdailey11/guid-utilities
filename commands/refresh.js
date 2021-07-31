const vscode = require('vscode');
const guidHelpers = require('./guidHelpers')

let command = vscode.commands.registerCommand('guid-utilities.refresh', function () {
    var editor = vscode.window.activeTextEditor;
    if(!editor) {
        return; // No open text editor
    }
    var regex1 = new RegExp(/\{?[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}\}?/, 'ig')
    var regex2 = new RegExp(/\{[0-9a-fA-F]{32}\}/, 'ig')

    var cfg = vscode.workspace.getConfiguration('guidUtilities')
    var includeDashes = cfg.get('includeDashes')
    var includeBrackets = cfg.get('includeBrackets')

    if(!includeBrackets && !includeDashes) {
        vscode.window.showWarningMessage('In order to replace GUIDs without dashes, you need to include brackets in the GUID format options.')
        return
    }

    var text = editor.document.getText();

    var newText = text.replaceAll(regex1, guidHelpers.newGUID)
    newText = newText.replaceAll(regex2, guidHelpers.newGUID)
    
    var firstLine = editor.document.lineAt(0);
    var lastLine = editor.document.lineAt(editor.document.lineCount - 1);
    var textRange = new vscode.Range(firstLine.range.start, lastLine.range.end)

    editor.edit((e) => {
        e.replace(textRange, newText)
    })

    console.log('TEST')
});

module.exports = {
    command
}