import {defineType} from 'sanity'

export default defineType({
  name: 'status',
  title: 'Status',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
  ],
})
