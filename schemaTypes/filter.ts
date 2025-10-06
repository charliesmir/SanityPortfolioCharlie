import {defineType} from 'sanity'

export default defineType({
  name: 'filter',
  title: 'Filter',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    },
  ],
})
