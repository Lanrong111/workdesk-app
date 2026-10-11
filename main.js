const {app,BrowserWindow,ipcMain}=require('electron');
const path=require('path');
const {shell}=require('electron');

let win;
function createWindow(){
  win=new BrowserWindow({
    width:1100,height:720,
    webPreferences:{
      nodeIntegration:true,
      contextIsolation:false
    }
  })
  win.loadFile("index.html");
}

ipcMain.on("open-folder",(evt,folderPath)=>{
  shell.openPath(folderPath);
})

app.whenReady().then(createWindow);
app.on('window-all-closed',()=>{if(process.platform!=='darwin') app.quit()})
