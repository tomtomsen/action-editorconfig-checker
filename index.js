const core = require('@actions/core');

try {
	console.log('Hello world');
	core.setOutput('output', 'my output');
} catch (error) {
	core.setFailed(error.message);
}
