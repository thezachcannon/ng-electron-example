(function () {
    'use strict';
    const electron = require('electron');
    const { app, BrowserWindow } = electron;

    let mainWindow;

    function onClose() {
        mainWindow = null;
    }

    function createMainWindow() {
        const win = new BrowserWindow({
            width: '500px',
            height: '500px'
        })
        win.loadURL(`file://${__dirname}/app/index.html`);
        win.on('closed', onClose);
        return win;
    }

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        if (!mainWindow) {
            mainWindow = createMainWindow();
        }
    });

    app.on('ready', () => {
        mainWindow = createMainWindow();
    });
}())