import {defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'imagePrimary',
      title: 'Primary Image',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'imageSecondary',
      title: 'Secondary Image (Optional)',
      type: 'image',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'reference',
      to: [{type: 'status'}],
      validation: (rule) => rule.required(),
    },
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
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
      validation: (rule) => rule.required(),
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'link'}],
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: 'filter',
      title: 'Filter',
      type: 'reference',
      to: [{type: 'filter'}],
      validation: (rule) => rule.required(),
    },
  ],
})
