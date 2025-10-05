import {defineType} from 'sanity'

export default defineType({
  name: 'info',
  title: 'Info',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'profession',
      title: 'Profession',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'string',
      validation: (rule) => rule.required(),
    },
  ],
})