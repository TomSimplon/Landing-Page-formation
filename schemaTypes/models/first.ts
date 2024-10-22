export const first = {
  name: 'First',
  title: 'Première partie',
  type: 'document',
  fields: [
    {
      title: 'Devient incourtournable',
      name: 'richText1',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Sub Header',
      name: 'richText2',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Button visuel',
      name: 'button1',
      type: 'string',
    },
    {
      title: 'Image des clients',
      name: 'clientsImage',
      type: 'image',
    },
    {
      title: 'Nombre de clients accompagnés',
      name: 'clients',
      type: 'string',
    },
    {
      name: 'iaGallery',
      type: 'array',
      title: 'Images de marques',
      of: [{type: 'file'}],
      options: {
        layout: 'grid',
      },
    },
    {
      title: 'Découvrez la formation',
      name: 'text2',
      type: 'string',
    },
    {
      name: 'text2tooltip',
      type: 'array',
      title: 'Découvrez la formation tooltip',
      of: [{type: 'string'}],
      options: {
        layout: 'grid',
      },
    },
  ],
}
