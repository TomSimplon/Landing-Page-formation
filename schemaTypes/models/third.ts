export const third = {
  name: 'Third',
  title: 'Devient un art de lia',
  type: 'document',
  fields: [
    {
      title: 'Devient un art',
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
      title: 'Description art ia',
      name: 'text2',
      type: 'text',
    },
    {
      name: 'button1',
      type: 'string',
      title: 'Button visuel',
    },
    {
      title: 'Les problématiques',
      name: 'text3',
      type: 'string',
    },
    {
      title: 'Titre bloc text',
      name: 'text4',
      type: 'string',
    },
    {
      title: 'Titre',
      name: 'richText2',
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
              title: 'Icon',
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
      title: 'Image desktop',
      name: 'image1',
      type: 'image',
    },
    {
      title: 'Image mobile',
      name: 'image2',
      type: 'image',
    },
    {
      name: 'button2',
      type: 'string',
      title: 'Button visuel',
    },
  ],
}
