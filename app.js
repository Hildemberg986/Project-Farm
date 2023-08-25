const { app, BrowserWindow } = require('electron');

let appWindow;

function createWindow() {
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
  });

  appWindow.loadFile('./dist/angutron/index.html');

  appWindow.on('closed', function () {
    appWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();
  
  // Adicionar tratamento para macOS
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
