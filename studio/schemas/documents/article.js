import {format} from 'date-fns'

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.error('You have to fill out the title.').required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.error('You have to fill out the date.').required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure',
      validation: Rule => Rule.error('You have to provide an image.').required(),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'mainImage'
    },
    prepare ({title, date, media}) {
      const dateSegment = format(date, 'DD/MM/YYYY')
      return {
        title,
        media,
        date
      }
    }
  }
}
