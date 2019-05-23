export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ce70180a1608fb6c8030d47',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ibkmqgao',
                  apiId: '8d459546-f032-43fa-a5f7-c20205705e34'
                },
                {
                  buildHookId: '5ce70180190472d187330e0d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-en2o2fb6',
                  apiId: '4252e338-521b-428a-b928-5579d7e11244'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/richgit/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-en2o2fb6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
