const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "Promises" is now active!');
	let disposableBad = vscode.commands.registerCommand('Promises.BadPromise', function () {
		BadShowFileNameInStatus()		
	});
	context.subscriptions.push(disposableBad);

	console.log('Congratulations, your extension "Promises" is now active!');
	let disposableGood = vscode.commands.registerCommand('Promises.GoodPromise', function () {
		GoodShowFileNameInStatus();
	});
	context.subscriptions.push(disposableGood);	
}
exports.activate = activate;
function BadShowFileNameInStatus()
{
console.log(BadReturn());
}
function BadReturn()
{
	const options = {
		canSelectMany: false,
		openLabel: 'Open',
		title: 'Select a trsnlate file',
		filters: {
		   'xlf': ['xlf'],
	   }
   };
   vscode.window.showOpenDialog(options).then(fileUri => {
	vscode.window.setStatusBarMessage(fileUri[0].fsPath);
	   return(fileUri[0].fsPath);
   });
}	

async function GoodShowFileNameInStatus()
{
let FileName = await GoodReturn();
vscode.window.setStatusBarMessage(FileName);
}
async function GoodReturn()
{
	const options = {
		canSelectMany: false,
		openLabel: 'Open',
		title: 'Select a trsnlate file',
		filters: {
		   'xlf': ['xlf'],
	   }
   };
   let fileUri = await vscode.window.showOpenDialog(options);
	   return(fileUri[0].fsPath);
}	

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
