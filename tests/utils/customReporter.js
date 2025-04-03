class CustomReporter {
    constructor(options) {
        this.options = options;
        this.results = [];
    }

    onBegin(config, suite) {
        console.log(`Starting test run with ${suite.allTests().length} tests`);
    }

    onTestBegin(test) {
        console.log(`Starting test: ${test.title}`);
    }

    onTestEnd(test, result) {
        const testResult = {
            title: test.title,
            status: result.status,
            duration: result.duration,
            error: result.error ? result.error.message : null,
            retryCount: result.retryCount
        };
        this.results.push(testResult);
    }

    onEnd(result) {
        console.log('\nTest Results Summary:');
        console.log('====================');
        console.log(`Total Tests: ${this.results.length}`);
        console.log(`Passed: ${this.results.filter(r => r.status === 'passed').length}`);
        console.log(`Failed: ${this.results.filter(r => r.status === 'failed').length}`);
        console.log(`Skipped: ${this.results.filter(r => r.status === 'skipped').length}`);
        
        if (this.results.some(r => r.status === 'failed')) {
            console.log('\nFailed Tests:');
            this.results
                .filter(r => r.status === 'failed')
                .forEach(r => {
                    console.log(`- ${r.title}`);
                    console.log(`  Error: ${r.error}`);
                });
        }
    }
}

module.exports = CustomReporter; 