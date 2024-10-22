export const four = {
  name: 'Four',
  title: 'Contenu de le formation',
  type: 'document',
  fields: [
    {
      title: 'Le contenu de la formation',
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
      name: 'button1',
      type: 'string',
      title: 'Button visuel',
    },
  ],
}
