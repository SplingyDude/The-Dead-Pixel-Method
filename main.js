const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    fullscreen: true,
    frame: false,
    backgroundColor: '#000000',
    autoHideMenuBar: true
  });

  win.loadFile('index.html');

  // Esc quits, F toggles fullscreen - only while focused
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type !== 'keyDown') return;
    if (input.key === 'Escape') app.quit();
    if (input.key.toLowerCase() === 'f') win.setFullScreen(!win.isFullScreen());
  });
});

app.on('window-all-closed', () => app.quit());
