const { app, BrowserWindow } = require('electron')

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.setMenuBarVisibility(false)
    win.setTitle('Dansei Sotsuko! ~ game')
    win.loadFile('gameRenderer.html')

    win.webContents.on('new-window', function (e, url) {
        e.preventDefault();
    });
}
app.whenReady().then(createWindow)