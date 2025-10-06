import {defineType} from 'sanity'

export default defineType({
  name: 'aboutCard',
  title: 'About Card',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Text', value: 'text'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      hidden: ({parent}: {parent: any}) => parent?.type !== 'text',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = (context as any).parent
          if (parent?.type === 'text' && !value) {
            return 'Description is required for type "text"'
          }
          return true
        }),
    },
    {
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'icon'}],
        },
      ],
      hidden: ({parent}: {parent: any}) => parent?.type !== 'image',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = (context as any).parent
          const tools = value as any[] | undefined

          if (parent?.type === 'image') {
            if (!tools || tools.length === 0) {
              return 'You must select at least one tool'
            }
            if (tools.length > 9) {
              return 'You can select up to 9 tools only'
            }
          }
          return true
        }),
    },
  ],
})
