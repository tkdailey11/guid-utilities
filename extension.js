const vscode = require('vscode');
const { v4: uuidv4 } = require('uuid');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let replaceCommand = vscode.commands.registerCommand('guid-utilities.replace', function () {
		var editor = vscode.window.activeTextEditor;
		if(!editor) {
			return; // No open text editor
		}
		const regex = /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/ig;
		var text = editor.document.getText();

		var newText = text.replace(regex, sampleuuid)
		
		var firstLine = editor.document.lineAt(0);
		var lastLine = editor.document.lineAt(editor.document.lineCount - 1);
		var textRange = new vscode.Range(firstLine.range.start, lastLine.range.end)

		editor.edit((e) => {
			e.replace(textRange, newText)
		})
	});
	context.subscriptions.push(replaceCommand);
}

function sampleuuid() {
	return uuidv4()
}


// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
