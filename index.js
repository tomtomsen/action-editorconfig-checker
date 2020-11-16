const process = require('child_process');
const core = require('@actions/core');

try {
	const ecProcess = process.spawn('node_modules/.bin/ec');
	let output = '';

	ecProcess.stdout.on('data', (data) => {
		output = data;
		console.log(`${data}`);
		core.setOutput('output', `${data}`);
	})

	ecProcess.stderr.on('data', (data) => {
		core.setFailed(`${data}`);
	})

	ecProcess.on('close', (code) => {
		if (code != 0) {
			core.setFailed(`${output}`);
		}
	})
} catch (error) {
	core.setFailed(error.message);
}
