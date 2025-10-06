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
    {
      name: 'aboutCards',
      title: 'About Cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'aboutCard'}],
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: 'projectCards',
      title: 'Project Cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}],
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: 'experienceCards',
      title: 'Experience Cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'experience'}],
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: 'educationCards',
      title: 'Education Cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'education'}],
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: 'contacts',
      title: 'Contacts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'contact'}],
        },
      ],
      validation: (rule) => rule.required(),
    },
  ],
})
