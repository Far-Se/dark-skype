const fs = require('fs');
const exec = require('child_process').exec;
const loadJson = require('load-json-file');
const updatesFile = 'updates.json';

const skypeDir = "C:/Program Files (x86)/Microsoft/Skype for Desktop/resources";//process.argv[2];

loadJson(updatesFile).then(updates => {
	for (let file in updates) {
		let filePath = path(`app/${file}`);
		let update = updates[file];
		let contents = fs.readFileSync(filePath, 'utf8');
		console.log(`\x1b[44m\x1b[37mProcessing ${file}...\x1b[0m`);
		if (update.replace) {
			for (let regex in update.replace) {
				let flags, substitute = update.replace[regex];
				regex = regex.substr(1);
				regex = regex.split('/');
				flags = regex.pop();
				regex = regex.join('');
				regex = regex.replace(/^#/, '\\#');
				if(contents.match(new RegExp(regex, flags)))
				{
				contents = contents.replace(new RegExp(regex, flags), substitute);
					console.log("Regex \x1b[32m"+regex+"\x1b[0m Replaced!");
				}else console.log("Regex \x1b[31m"+regex+"\x1b[0m NOT FOUND!");
			}
		}
		if (update.appendFile) {
			let newContents = fs.readFileSync(`${update.appendFile}`, 'utf8');
			contents += newContents;
		}
		fs.writeFileSync(filePath, contents);
	}
});
function path(to) {
    return skypeDir.replace(/\/+$/, '') + '/' + to.replace(/^\/+/, '');
}