const { app, BrowserWindow } = require('electron');

let appWindow;

function createWindow() {
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    // Remover a barra de menu
    autoHideMenuBar: true,
    // Remover a moldura da janela
    //frame: false
    // Abrir em tela cheia
    //fullscreen: true
  });

  // Abre a janela em tela cheia
  appWindow.maximize();

  appWindow.loadFile('../Project-Farm/dist/angutron/index.html');

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
