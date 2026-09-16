import { app, BrowserWindow, globalShortcut } from "electron";

// navigator.userAgent: Chrome/152.0.7977.78 Electron/44.4.1
// https://peter.sh/experiments/chromium-command-line-switches/
app.commandLine.appendSwitch("use-vulkan");
app.commandLine.appendSwitch("enable-features", "Vulkan");
app.commandLine.appendSwitch("enable-zero-copy");
app.commandLine.appendSwitch("ignore-gpu-blocklist");
app.commandLine.appendSwitch("show-fps-counter");

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

    globalShortcut.register("F12", () => {
        win.webContents.toggleDevTools();
    });
});
