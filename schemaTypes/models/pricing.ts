export const pricing = {
  name: 'Pricing',
  title: 'Tableau de prix',
  type: 'document',
  fields: [
    {
      title: 'Titre',
      name: 'richText1',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Titre',
      name: 'text2',
      type: 'string',
    },
    {
      title: 'Description offre',
      name: 'text3',
      type: 'string',
    },
    {
      title: 'Loffre se termine bientot',
      name: 'text4',
      type: 'string',
    },
    {
      title: 'Prix actuel',
      name: 'text5',
      type: 'string',
    },
    {
      title: 'Prix barré',
      name: 'text6',
      type: 'string',
    },
    {
      title: 'Nombre de places disponibles',
      name: 'text7',
      type: 'string',
    },
    {
      title: 'Tes avantages',
      name: 'text8',
      type: 'string',
    },
    {
      title: 'Liste avantages',
      name: 'arrayAvantages',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Block de texte',
          fields: [
            {
              title: 'title',
              name: 'Avantage',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      title: 'Image élèves',
      name: 'ctaImage',
      type: 'image',
    },
    {
      title: "Nombre d'élèves accompagnés",
      name: 'text9',
      type: 'string',
    },
    {
      title: 'Personnes',
      name: 'arrayHeros',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Personnages',
          fields: [
            {
              title: 'Photo de profil',
              name: 'pp',
              type: 'image',
            },
            {
              title: 'Nom et prénom',
              name: 'name',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'paymentLink',
      type: 'url',
      title: 'Lien de paiement',
    },
    {
      name: 'button1',
      type: 'string',
      title: 'Button visuel',
    },
  ],
}
