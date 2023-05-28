// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // This line of code will only be executed once when your extension is activated

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let chains: vscode.StatusBarItem[] = [];

  let add = vscode.commands.registerCommand("daisy-chain.start", () => {
    const statusBarItem: vscode.StatusBarItem =
      vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 400);
    chains.push(statusBarItem);
    statusBarItem.text = `✿✿✿✿✿✿✿✿✿✿✿✿`;

    statusBarItem.show();
  });

  let remove = vscode.commands.registerCommand("daisy-chain.end", () => {
    if (chains.length > 0) {
      chains[chains.length - 1].dispose();
      chains.pop();
    }
  });

  context.subscriptions.push(add);
  context.subscriptions.push(remove);
}

// This method is called when your extension is deactivated
export function deactivate() {}
