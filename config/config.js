/* exported config */

/* Global configuration */

var config = {

    /* Storage keys */

    storage: {

        authentication: {

            token:    'codebrowser.authentication.token',
            username: 'codebrowser.authentication.username',
            verified: 'codebrowser.authentication.verified',
            check:    300000

        },

        cache: {

            files: {

                url: 'codebrowser.cache.files.url'

            },

            snapshot: {

                level: 'codebrowser.cache.snapshots.level',
                from:  'codebrowser.cache.snapshots.from'

            }
        },

        setting: {

            editor: {

                ignoreEmptyLines: 'codebrowser.setting.editor.ignoreEmptyLines',
                theme:            'codebrowser.setting.editor.theme',
                fontSize:         'codebrowser.setting.editor.fontSize'

            }
        },

        view: {

            SnapshotView: {

                browser: 'codebrowser.view.SnapshotView.browser'

            },

            EditorView: {

                split: 'codebrowser.view.EditorView.split',
                diff: 'codebrowser.view.EditorView.diff'

            }
        }
    },

    /* API */

    api: {

        main: {

            root: 'http://localhost:8090/'

        }
    },

    /* Cache */

    cache: {

        expires: 3600

    },

    /* View */

    view: {

        container: '#container',
        userMenuContainer: '#user-menu-container'

    },

    /* Ace editor */

    editor: {

        configure: function (editor) {

            // Editor
            editor.setReadOnly(true);
            editor.setPrintMarginColumn(false);
            editor.setDisplayIndentGuides(false);
            editor.getSession().setFoldStyle('markbeginend');

            // Text
            editor.setTheme(localStorage.getItem(config.storage.setting.editor.theme) || 'ace/theme/light');
            editor.setFontSize(parseInt(localStorage.getItem(config.storage.setting.editor.fontSize), 10) || 12);
            editor.getSession().setTabSize(4);
            editor.getSession().setUseWrapMode(true);
            editor.getSession().setWrapLimitRange(120, 120);
        }
    }
}
