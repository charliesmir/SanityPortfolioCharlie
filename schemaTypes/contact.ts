import {defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [{type: 'link'}],
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'link.title',
    },
  },
})
