const path = require('path');

module.exports = {
    base: '/learnforge-vuepress-poc/',
    lang: 'en-US',
    title: 'Hello, Forge!',
    description: 'Experimental docs with Autodesk Forge tutorials.',
    themeConfig: {
        logo: 'https://avatars.githubusercontent.com/u/16883010?s=200&v=4',
        repo: 'https://github.com/petrbroz/learnforge-vuepress-poc',
        docsBranch: 'develop',
        docsDir: 'docs',
        displayAllHeaders: true,
        locales: {
            '/': {
                sidebar: [
                    '/',
                    '/tutorials/basic/'
                ]
            },
            '/cz/': {
                sidebar: [
                    '/cz/',
                    '/cz/tutorials/basic/'
                ]
            }
        }
    },
    markdown: {
        importCode: {
            handleImportPath: (str) =>
                str.replace(/^@snippets/, path.resolve(__dirname, '../_snippets')),
        }
    },
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'en-US',
            title: 'Hello, Forge!',
            description: 'Experimental docs with Autodesk Forge tutorials.',
        },
        '/cz/': {
            lang: 'cz-CS',
            title: 'Ahoj Forge!',
            description: 'Experimentální dokumentace s návody pro Autodesk Forge.',
        }
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search'
                    },
                    '/cz/': {
                        placeholder: 'Hledat'
                    }
                }
            }
        ]
    ]
};
