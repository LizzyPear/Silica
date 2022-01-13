console.clear();
console.log("Packaging app for Windows Installer");
var electronInstaller = require('electron-winstaller');
var settings = {
    appDirectory: 'out/Silica-win32-x64',
    outputDirectory: 'installers',
    authors: 'DeadlyKitten.nl',
    description: 'A fork of Deadlylauncher completely rewritten with Electon',
	iconUrl: 'https://cdn.deadlykitten.nl/image/icon.ico',
	setupIcon: '../setup.ico',
    loadingGif: '../setup.gif',
    exe: './Silica.exe'
};
console.log(settings);
resultPromise = electronInstaller.createWindowsInstaller(settings);
 
resultPromise.then(() => {
    console.log("The installers of your application were succesfully created !");
}, (e) => {
    console.log(`Well, sometimes you are not so lucky: ${e.message}`)
});