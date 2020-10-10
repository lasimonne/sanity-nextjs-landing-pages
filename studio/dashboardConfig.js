export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f81869542c40b5c08fa248e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uuoamx2z',
                  apiId: '09a8a186-26ea-4c4f-ad2a-977c9c466cc3'
                },
                {
                  buildHookId: '5f81869517be7065ce40630d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jhmirrtn',
                  apiId: '5d7cf032-06f4-4280-bbf1-55d3f9f02fa9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lasimonne/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jhmirrtn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
