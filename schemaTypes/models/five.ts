export const five = {
  name: 'Five',
  title: "Ce n'est pas tout",
  type: 'document',
  fields: [
    {
      title: 'Des cadeaux',
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
      title: 'En +',
      name: 'text3',
      type: 'string',
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
            {
              title: 'Image',
              name: 'image',
              type: 'image',
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
