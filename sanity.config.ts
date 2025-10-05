import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

const singletonTypes = new Set(['info'])

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'o7tr003u',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Basic Info')
              .id('info')
              .child(S.document().schemaType('info').documentId('info')),
            S.divider(),
            S.documentTypeListItem('aboutCard').title('About Cards'),
            S.documentTypeListItem('project').title('Projects'),
            S.documentTypeListItem('experience').title('Experience'),
            S.documentTypeListItem('education').title('Studies'),
            S.documentTypeListItem('contact').title('Contacts'),
            S.documentTypeListItem('test').title('Test'),
            
            S.divider(),
            S.documentTypeListItem('status').title('Statuses'),
            S.documentTypeListItem('icon').title('Icons'),
            S.documentTypeListItem('link').title('Links'),
            S.documentTypeListItem('filter').title('Filters'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
