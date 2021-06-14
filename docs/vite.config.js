import { defineConfig } from 'vite';
import { extractCommentsPlugin } from '../vite-plugin/vite-plugin-extract-comment';
// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@gavin-ui-components': '../../../../gavin-ui-components/'
		}
	},
	server: {
		watch: {
			persistent: true,
			ignored: [/.log/]
		}
	},
	plugins: [extractCommentsPlugin()]
});
