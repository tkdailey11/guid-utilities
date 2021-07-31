const vscode = require('vscode');
const guidHelpers = require('./guidHelpers')

let command = vscode.commands.registerCommand('guid-utilities.insert', function () {
    var editor = vscode.window.activeTextEditor;
    if(!editor) {
        return; // No open text editor
    }
    
    var selection = editor.selection;

    editor.edit(builder => builder.replace(selection, guidHelpers.newGUID()))
});

module.exports = {
    command
}