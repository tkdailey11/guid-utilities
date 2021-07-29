var refresh = require('./commands/refresh')
var insert = require('./commands/insert')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	context.subscriptions.push(refresh.command)
	context.subscriptions.push(insert.command)
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
