import rework from 'rework';
import splitMedia from 'rework-split-media';
import moveMedia from 'rework-move-media';
import stringify from 'css-stringify';
import cleanUpString from 'clean-up-string';
import through2 from 'through2';
const throughObj = through2.obj;
import path from 'path';
const dirname = path.dirname;
const pathjoin = path.join;

module.exports = function(extractMqFrom) {
	return throughObj(function(file, enc, callback) {
		let stream = this;
		let fileKey = file.relative;
		if (extractMqFrom.hasOwnProperty(fileKey)) {
			let fileName = file.stem;
			let extractData = extractMqFrom[fileKey];
			let cssContent = file.contents.toString();
			let reworkData = rework(cssContent).use(moveMedia());
			let stylesheets = splitMedia(reworkData);
			let stylesheetKeys = Object.keys(stylesheets);
			let filteredMq = [];
			let originalCSS = [];
			stylesheetKeys.forEach(function(key) {
				let notExtracted = true;
				for (let mqKey in extractData) {
					if (key === extractData[mqKey]) {
						let contents = stringify(stylesheets[key]);
						filteredMq.push([mqKey, contents]);
						notExtracted = false;
						break;
					}
				}
				if (notExtracted) {
					let contents = stringify(stylesheets[key]);
					if (key.length) {
						originalCSS.push(`@media ${key} {\n${contents}\n}`);
					} else {
						originalCSS.push(contents);
					}
				}
			});

			filteredMq.forEach(function(key) {
				let newFile = file.clone({
					contents: false
				});
				let name = cleanUpString(`${fileName}-${key[0]}`);
				let filepath = pathjoin(dirname(file.path), `${name}.css`);
				newFile.contents = new Buffer(key[1]);
				newFile.path = filepath;
				stream.push(newFile);
			});

			file.contents = new Buffer(originalCSS.join('\n'));

			callback(null, file);
		} else {
			callback(null, file);
		}
	});
};
