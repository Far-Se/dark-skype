# Skype 8.X custom Dark Mode for Windows

#### Preview:
![alt text](https://i.imgur.com/6b9Pzxv.png "Custom Skype Dark")

### Install

1. Install **[ASAR](https://github.com/electron/asar)** and js-beautify :
```
npm i -g asar
npm i -g js-beautify
```
2. Close Skype 
3. Open in editor `run.bat` and change skype path if you have a diferent one. Do the same on `skype.js`
4. run `npm install`
5. Run `cmd.exe` as `Administrator` then execute `./run.bat`
6. Open Skype

Do this each time Skype gets an update

If you want to add changes press `Shift+Control+Alt+D` few times, then press `Control+Shift+I` to open Inspector. Now you can edit Skype however you want.