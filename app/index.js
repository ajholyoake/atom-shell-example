var app = require('app');
var Menu = require('menu');
var MenuItem = require('menu-item');
var BrowserWindow = require('browser-window');
var menuTemplate = require('./src/menu/template');
var mainWindow = null;
var menu = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 1000,
    resizable: true,
    'auto-hide-menu-bar': true,
    'use-content-size': true,
  });
  mainWindow.loadUrl('file://' + __dirname + '/views/index.html');
  mainWindow.focus();

  template = menuTemplate(app,mainWindow);
  menu = Menu.buildFromTemplate(template);
  if (process.platform == 'darwin'){
    Menu.setApplicationMenu(menu);
  } else {
    mainWindow.setMenu(menu);
  }
}
      );
