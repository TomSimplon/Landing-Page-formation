export const second = {
  name: 'Second',
  title: 'Problématique',
  type: 'document',
  fields: [
    {
      title: 'Problématiques',
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
      title: 'Blocs de textes',
      name: 'arrayText',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Block de texte',
          fields: [
            {
              title: 'Icone',
              name: 'icon',
              type: 'image',
            },
            {
              title: 'Titre',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Texte',
              name: 'text',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'heroTitle',
      type: 'string',
      title: 'Titre hero',
    },
    {
      name: 'heroStats1',
      type: 'string',
      title: 'Statistique 1',
    },
    {
      name: 'heroDesc1',
      type: 'string',
      title: 'Description 1',
    },
    {
      name: 'heroStats2',
      type: 'string',
      title: 'Statistique 2',
    },
    {
      name: 'heroDesc2',
      type: 'string',
      title: 'Description 2',
    },
    {
      name: 'button1',
      type: 'string',
      title: 'Button visuel',
    },
    {
      name: 'ctaImage',
      type: 'image',
      title: 'Image de call to action',
    },
  ],
}
