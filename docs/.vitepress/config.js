module.exports = {
	lang: 'zh-CN',
	title: 'Gavin UI',
	description: '',
	base: '/gavin-ui-docs/',
	themeConfig: {
		repo: 'vuejs/vitepress',
		docsDir: 'docs',

		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		lastUpdated: 'Last Updated',
		algolia: {
			apiKey: 'c57105e511faa5558547599f120ceeba',
			indexName: 'vitepress'
		},
		carbonAds: {
			carbon: 'CEBDT27Y',
			custom: 'CKYD62QM',
			placement: 'vuejsorg'
		},
		nav: [
			{ text: 'Guide', link: '/guide/' },
			{
				text: 'Examples',
				link: '/examples',
				activeMatch: '^/$|^/examples/'
			}
		],

		sidebar: {
			'/guide/': getGuideSidebar(),
			'/examples/': getExampleSidebar()
		}
	}
};
function getGuideSidebar() {
	return [
		{
			text: '教程',
			children: [{ text: '开始', link: '/guide/start' }]
		}
	];
}
function getExampleSidebar() {
	return [
		{
			text: '基础',
			children: [{ text: '按钮', link: '/examples/button' }]
		}
	];
}
