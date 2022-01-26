const globalConfig = require("../global");

module.exports = {
	name: "hivelvet-frontend-service",
	script: "serve",
	watch: true,
	// env variables if needed
	env: {
		NODE_ENV: "development",
		PM2_SERVE_PATH: `${globalConfig.rootPath}hivelvet-frontend/build/`,
		PM2_SERVE_PORT: 3300,
		PM2_SERVE_SPA: 'true',
		PM2_SERVE_HOMEPAGE: '/index.html'
	}
};
