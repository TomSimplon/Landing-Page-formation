export const joinus = {
  name: 'joinus',
  title: 'Rejoins-nous',
  type: 'document',
  fields: [
    {
      title: 'Rejoins-nous',
      name: 'text1',
      type: 'string',
    },
    {
      title: 'Titre',
      name: 'richText1',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Description titre',
      name: 'text3',
      type: 'string',
    },
    {
      title: 'Carousel avis',
      name: 'arrayAvis',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Block avis',
          fields: [
            {
              title: 'content',
              name: 'Contenu',
              type: 'text',
            },
            {
              title: 'Photo profil auteur',
              name: 'authorImage',
              type: 'image',
            },
            {
              title: 'Nom auteur',
              name: 'authorName',
              type: 'string',
            },
            {
              title: 'Metier author',
              name: 'roleAuthor',
              type: 'string',
            },
          ],
        },
      ],
    },

    {
      name: 'button1',
      type: 'string',
      title: 'Button visuel',
    },
  ],
}
