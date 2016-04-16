"use strict";

const electron = require( "electron" );
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

const ipc = electron.ipcMain;
const dialog = electron.dialog;

app.on( "window-all-closed", function() {
    if ( process.platform !== "darwin" ) {
        app.quit();
    }
} );

app.on( "ready", function() {
    mainWindow = new BrowserWindow( { width: 800, height: 600 } );
    mainWindow.loadURL( "file://" + __dirname + "/index.html" );

    mainWindow.on( "closed", function() {
        mainWindow = null;
    } );
} );

ipc.on('show-dialog', (e, arg) => {
    let msgIfo = {
        title: 'My App Alert',
        message: arg.message,
        buttons: ['OK']
    }
    dialog.showMessageBox(msgIfo)
})