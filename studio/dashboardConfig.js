export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5e335bc2c2ca75d6f68669c1',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-vdtb3z4d',
                  apiId: '7c1c40d6-6ae9-40f9-b552-cfbb9755921c'
                },
                {
                  buildHookId: '5e335bc252044e4f9deed1d2',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-f3m76ov2',
                  apiId: 'c5293a8e-0b0d-4d29-8416-02a2abca3138'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pixelstorm/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-f3m76ov2.netlify.com', category: 'apps'}
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
