export const faq = {
  name: 'faq',
  title: 'Faq',
  type: 'document',
  fields: [
    {
      title: 'Titre',
      name: 'richText1',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Sous titre',
      name: 'text2',
      type: 'string',
    },
    {
      title: 'Photo de profil',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Discutons ensemble',
      name: 'text3',
      type: 'string',
    },
    {
      title: 'Envoyez moi un message',
      name: 'text4',
      type: 'string',
    },
    {
      title: 'Lien linkedin',
      name: 'urlLinkedin',
      type: 'url',
    },
    {
      title: 'Bouton',
      name: 'button1',
      type: 'string',
    },
    {
      title: 'Carousel faq',
      name: 'arrayFaq',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Block Faq',
          fields: [
            {
              title: 'Question',
              name: 'question',
              type: 'string',
            },
            {
              title: 'Réponse',
              name: 'answer',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
