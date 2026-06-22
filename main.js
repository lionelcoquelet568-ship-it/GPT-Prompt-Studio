
const { app, BrowserWindow } = require('electron');

function createWindow(){
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "GPT提示词生成器工具（大叔学员专用版）",
    webPreferences: { preload: __dirname + "/preload.js" }
  });

  win.loadFile("renderer/index.html");
}

app.whenReady().then(createWindow);
