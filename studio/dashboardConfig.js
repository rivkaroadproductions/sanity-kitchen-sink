export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb835551842f527ff0a633b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bsacs5m4',
                  apiId: 'feb633a1-8750-4e86-a9d7-485f181b3796'
                },
                {
                  buildHookId: '5eb83555588cead7cdbfbf82',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hkwa357j',
                  apiId: 'e176fb53-cbb0-4aff-b117-88708171d42d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rivkaroadproductions/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hkwa357j.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
