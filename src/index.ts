import { app, BrowserWindow } from "electron";

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: "#000",
    });

    win.menuBarVisible = false;
    win.loadURL("https://apes.io/test");

    // Ignore the page's exit confirmation prompt.
    win.webContents.on("will-prevent-unload", (event) => {
        event.preventDefault();
    });
});
