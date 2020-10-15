const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

//const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `
            @import "@/assets/sass/app.scss";
          `,
			},
		},
	},
	chainWebpack: (config) => {
		if (process.env.NODE_ENV !== 'production') return;

		config
			.plugin('prerender-spa-plugin')
			.use(PrerenderSpaPlugin)
			.init(
				(Plugin) =>
					new Plugin({
						staticDir: path.join(__dirname, 'dist'),
						routes: ['/'],
					}),
			);
	},
};
