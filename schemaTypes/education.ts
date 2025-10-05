import {defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'university',
      title: 'University',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'dates',
      title: 'Dates',
      type: 'string',
      validation: (rule) => rule.required(),
    },
  ],
})