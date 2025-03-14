import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Share2, Heart, Eye } from "lucide-react"

// This would normally come from a database or API
const getArtwork = (id: string) => {
  return {
    id: Number.parseInt(id),
    title: "Abstract Harmony",
    artist: "Elena Rodriguez",
    year: "2022",
    medium: "Oil on canvas",
    dimensions: "120 x 90 cm",
    category: "Contemporary",
    description:
      "This vibrant abstract piece explores the harmony between color and form. The artist uses bold brushstrokes and a rich palette to create a sense of movement and emotion. The composition balances chaos and order, inviting viewers to find their own meaning within the dynamic interplay of elements.",
    image: "/placeholder.svg?height=800&width=1200",
    artistImage: "/placeholder.svg?height=400&width=400",
    artistBio:
      "Elena Rodriguez is a contemporary artist based in Barcelona, Spain. Her work explores themes of identity, memory, and the subconscious through abstract expressionism. Rodriguez has exhibited internationally and her pieces are held in several major collections.",
    relatedWorks: [
      { id: 3, title: "Urban Landscape", image: "/placeholder.svg?height=400&width=600" },
      { id: 8, title: "Modern Reflections", image: "/placeholder.svg?height=400&width=600" },
      { id: 5, title: "Digital Dreams", image: "/placeholder.svg?height=400&width=600" },
    ],
  }
}

export default function ArtworkDetail({ params }: { params: { id: string } }) {
  const artwork = getArtwork(params.id)

  return (
    <div className="bg-white">
      <div className="container-custom py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/gallery" className="text-blue-700 hover:text-blue-800 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Gallery
          </Link>
        </div>

        {/* Artwork Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Artwork Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={artwork.image || "/placeholder.svg"}
              alt={artwork.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Artwork Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{artwork.title}</h1>
            <h2 className="text-xl text-blue-700 mb-6">by {artwork.artist}</h2>

            <div className="flex items-center space-x-4 mb-8">
              <button className="flex items-center text-gray-600 hover:text-blue-700">
                <Heart className="h-5 w-5 mr-1" />
                <span>Save</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-700">
                <Share2 className="h-5 w-5 mr-1" />
                <span>Share</span>
              </button>
              <div className="flex items-center text-gray-600">
                <Eye className="h-5 w-5 mr-1" />
                <span>1,245 views</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Year</h3>
                <p className="text-gray-900">{artwork.year}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Medium</h3>
                <p className="text-gray-900">{artwork.medium}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Dimensions</h3>
                <p className="text-gray-900">{artwork.dimensions}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Category</h3>
                <p className="text-gray-900">{artwork.category}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{artwork.description}</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={artwork.artistImage || "/placeholder.svg"}
                    alt={artwork.artist}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">{artwork.artist}</h3>
                  <Link
                    href={`/artists/${artwork.artist.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-blue-700 text-sm hover:text-blue-800"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{artwork.artistBio}</p>
            </div>
          </div>
        </div>

        {/* Related Works */}
        <div className="mt-16">
          <h2 className="section-subtitle mb-6">Related Artworks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artwork.relatedWorks.map((work) => (
              <Link key={work.id} href={`/gallery/${work.id}`} className="group">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-bold">{work.title}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

