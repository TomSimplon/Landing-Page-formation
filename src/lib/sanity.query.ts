import { groq } from "next-sanity"

// Query schema datasets
export const firstQuery = groq`*[_type == "First"][0]{
  text1,
  button1,
  clientsImage{
    asset->{_id, url}
  },
  clients,
  iaGallery[]{
    asset->{url}
  },
  text2,
  text2tooltip,
  richText2
}`

export const secondQuery = groq`*[_type == "Second"][0]{
richText1,
	text1,
	arrayText[]{
		icon{
			asset->{url}
		},
		title,
		text
	},
	heroTitle,
	heroStats1,
	heroDesc1,
	heroStats2,
	heroDesc2,
	button1,
	ctaImage{
		asset->{url}
	}
}`

export const thirdQuery = groq`*[_type == "Third"][0]{
	richText1,
  text1,
  text2,
  button1,
  text3,
  text4,
	richText2,
  arrayText[]{
  	icon{
  		asset->{url}
		},
    title,
    text
  },
  button2,
  image1{
  	asset->{url}
	},
  image2{
  	asset->{url}
	}
	
}
`
export const fourQuery = groq`*[_type == "Four"][0]{
	richText1,
  text1,
  arrayText[]{
    title,
    text
  },
  button1
}
`

export const fiveQuery = groq`*[_type == "Five"][0]{
	richText1,
  text1,
  text3,
  arrayText[]{
    title,
    text,
    "imageUrl": image.asset->url
  },
  button1
}
`
export const pricingQuery = groq`*[_type == "Pricing"][0]{
	richText1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  arrayAvantages[]{
    Avantage
  },
  ctaImage{
    asset->{url}
  },
  text9,
  arrayHeros[]{
    pp{
      asset->{url}
    },
    name
  },
  paymentLink,
  button1
}`

export const joinUsQuery = groq`*[_type == "joinus"][0]{
  text1,
	richText1,
  text3,
  arrayAvis[]{
    Contenu,
    authorImage{
      asset->{url}
    },
    authorName,
    roleAuthor
  },
  button1
}`

export const faqQuery = groq`*[_type == "faq"][0]{
	richText1,
  text2,
  image{
    asset->{url}
  },
  text3,
  text4,
  urlLinkedin,
  arrayFaq[]{
    question,
    answer
  },
  button1
}`
