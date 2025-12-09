# Duplicate Tab Shortcut Extension

A lightweight browser extension for Google Chrome and Brave that allows you to duplicate the current tab instantly using a keyboard shortcut.

## 🚀 Features
- **Zero UI:** No popups or icons taking up space.
- **Fast:** Runs in the background using a Service Worker (Manifest V3).
- **Cross-Platform:** Works on Windows, Linux, and macOS.

## 📂 Project Structure
- `manifest.json` - Configuration and permissions.
- `background.js` - Logic to detect the shortcut and duplicate the tab.

## 🛠️ Installation Guide

 Since this is a custom extension, you need to install it in **Developer Mode**:

1. **Download the code:**
   - Ensure `manifest.json` and `background.js` are in the same folder.

2. **Open the Extensions Page:**
   - **Chrome:** Type `chrome://extensions` in the address bar.
   - **Brave:** Type `brave://extensions` in the address bar.

3. **Enable Developer Mode:**
   - Toggle the switch labeled **Developer mode** in the top-right corner of the page.

4. **Load the Extension:**
   - Click the **Load unpacked** button (usually top-left).
   - Select the folder containing your files.

## ⌨️ How to Use

Once installed, simply press the following shortcut while on any webpage:

| OS | Shortcut |
| :--- | :--- |
| **Windows / Linux** | `Ctrl` + `Shift` + `K` |
| **macOS** | `Command` + `Shift` + `K` |

## ⚙️ Customizing the Shortcut

If you want to change the shortcut or if it isn't working due to a conflict:

1. Go to `chrome://extensions/shortcuts` (or click "Keyboard shortcuts" in the extensions sidebar).
2. Find **"Duplicate Tab Shortcut"** in the list.
3. Click the pencil icon or the box next to the command.
4. Press the new combination of keys you wish to use.
