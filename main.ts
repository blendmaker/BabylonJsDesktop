import { app as electron, BrowserWindow } from 'electron';

electron.on('ready', () => {
  const win = new BrowserWindow({
      webPreferences: { nodeIntegration: true },
  });
  win.loadFile('./index.html');
  win.on('closed', () => electron.quit() );
});
