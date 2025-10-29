import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {dashboardTool} from '@sanity/dashboard'
import {
  FcAddressBook,
  FcBriefcase,
  FcEmptyFilter,
  FcGraduationCap,
  FcInfo,
  FcPhone,
  FcTimeline,
} from 'react-icons/fc'
import {FcAbout} from 'react-icons/fc'
import {FcCommandLine} from 'react-icons/fc'
import {SiSanity} from 'react-icons/si'
import {documentListWidget} from 'sanity-plugin-dashboard-widget-document-list'

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
          .title('Portfolio Content')
          .items([
            S.divider().title('Structure'),
            S.listItem()
              .title('Basic Info')
              .icon(FcInfo)
              .id('info')
              .child(S.document().schemaType('info').documentId('info')),
            S.divider().title('Cards'),
            S.documentTypeListItem('aboutCard').title('About').icon(FcAbout),
            S.documentTypeListItem('project').title('Projects').icon(FcCommandLine),
            S.documentTypeListItem('experience').title('Experience').icon(FcBriefcase),
            S.documentTypeListItem('education').title('Studies').icon(FcGraduationCap),
            S.documentTypeListItem('contact').title('Contacts').icon(FcPhone),
            // S.documentTypeListItem('test').title('Test'),

            S.divider().title('Assets'),
            S.documentTypeListItem('status').title('Statuses').icon(FcTimeline),
            S.documentTypeListItem('icon').title('Icons').icon(SiSanity),
            S.documentTypeListItem('link').title('Links').icon(FcAddressBook),
            S.documentTypeListItem('filter').title('Filters').icon(FcEmptyFilter),
          ]),
    }),
    visionTool(),
    dashboardTool({
      widgets: [
        documentListWidget({
          title: 'Last edited',
          order: '_updatedAt desc',
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
