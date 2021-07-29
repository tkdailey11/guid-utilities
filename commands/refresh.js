const vscode = require('vscode');
const { v4: uuidv4 } = require('uuid');

let command = vscode.commands.registerCommand('guid-utilities.refresh', function () {
    var editor = vscode.window.activeTextEditor;
    if(!editor) {
        return; // No open text editor
    }
    const regex = /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/ig;
    var text = editor.document.getText();

    var newText = text.replace(regex, uuid_replacer)
    
    var firstLine = editor.document.lineAt(0);
    var lastLine = editor.document.lineAt(editor.document.lineCount - 1);
    var textRange = new vscode.Range(firstLine.range.start, lastLine.range.end)

    editor.edit((e) => {
        e.replace(textRange, newText)
    })
});


function uuid_replacer() {
	//Check different format options here (capitalization, etc.)
	return uuidv4()
}

module.exports = {
    command
}