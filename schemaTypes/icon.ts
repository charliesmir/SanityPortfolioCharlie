import {defineType} from 'sanity'

export default defineType({
  name: 'icon',
  title: 'Icon',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'altText',
      title: 'AltText',
      type: 'string',
      validation: (rule) => rule.required(),
    },
  ],
})