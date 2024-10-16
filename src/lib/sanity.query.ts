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
		}
}`
