interface Block {
  _type: "block"
  style?: "normal" | "h1" | "h2" | "blockquote"
  children: {
    _type: "span"
    text: string
    marks?: ("strong" | "em" | "link")[]
  }[]
  markDefs?: {
    _key: string
    _type: string
    href: string // Pour les liens
  }[]
}

export interface FirstData {
  text1: string
  button1: string
  clientsImage: {
    asset: {
      _id: string
      url: string
    }
  }
  clients: string
  iaGallery: {
    asset: {
      url: string
    }
  }[]
  text2: string
  text2tooltip: string[]
  richText2: Block[] // Ajout du champ richText2
}

interface Icon {
  asset: {
    url: string
  }
}

interface ArrayTextBlock {
  icon: Icon
  title: string
  text: string
}

export interface SecondData {
  richText1: Block[]
  text1: string
  arrayText: ArrayTextBlock[]
  heroTitle: string
  heroStats1: string
  heroDesc1: string
  heroStats2: string
  heroDesc2: string
  button1: string
  ctaImage: {
    asset: {
      url: string
    }
  }
}

export interface BlockText {
  title: string
  text: string
}

export interface ThirdData {
  richText1: Block[]
  text1: string
  text2: string
  button1: string
  text3: string
  text4: string
  richText2: Block[]
  arrayText: BlockText[]
  button2: string
  image1: {
    asset: {
      url: string
    }
  }
  image2: {
    asset: {
      url: string
    }
  }
}
export interface FourData {
  richText1: Block[]
  text1: string
  button1: string
  arrayText: BlockText[]
}

export interface FiveData {
  richText1: Block[]
  text1: string
  text3: string
  arrayText: {
    title: string
    text: string
    imageUrl: string
  }[]
  button1: string
}

export interface Advantage {
  title: string
  Avantage: string
}

export interface Person {
  pp: {
    asset: {
      url: string
    }
  }
  name: string
}

export interface PricingData {
  name: string
  title: string
  richText1: Block[]
  text2: string
  text3: string
  text4: string
  text5: string
  text6: string
  text7: string
  text8: string
  arrayAvantages: Advantage[]
  ctaImage: {
    asset: {
      url: string
    }
  }
  text9: string
  arrayHeros: Person[]
  button1: string
}

export interface Avis {
  Contenu: string
  authorImage: {
    asset: {
      url: string
    }
  }
  authorName: string
  roleAuthor: string
}

export interface JoinUsData {
  text1: string
  richText1: Block[]
  text3: string
  arrayAvis: Avis[]
  button1: string
}

export interface FaqData {
  richText1: Block[]
  text2: string
  image: {
    asset: {
      url: string
    }
  }
  text3: string
  text4: string
  urlLinkedin: string
  arrayFaq: Faq[]
  button1: string
}

interface Faq {
  question: string
  answer: string
}
