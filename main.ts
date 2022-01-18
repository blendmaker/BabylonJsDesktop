import { app as electron, BrowserWindow } from 'electron';

electron.on('ready', () => {
  const win = new BrowserWindow({
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      },
  });
  win.loadFile('./index.html');
  win.on('closed', () => electron.quit() );
});
