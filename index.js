const core = require('@actions/core');
const github = require('@actions/github');

try {
	console.log('Hello world');
	core.setOutput('output', 'my output');

	const payload = JSON.stringify(github.context.payload, undefined, 2);
	console.log(`payload ${payload}`);
} catch (error) {
	core.setFailed(error.message);
}
