const vscode = require('vscode');
const { v4: uuidv4 } = require('uuid');

let command = vscode.commands.registerCommand('guid-utilities.insert', function () {
    var editor = vscode.window.activeTextEditor;
    if(!editor) {
        return; // No open text editor
    }
    
    var selection = editor.selection;

    editor.edit(builder => builder.replace(selection, uuidv4()))
});

module.exports = {
    command
}