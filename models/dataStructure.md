# Scheme of Database

region of origin  | region of destination
  type: string    | type: string
  required: F     |
  enum: ['Carribean', 'North America', '', ''] - dropdown

country of origin | country of destination
  type: string    | type: string
  required: T     |

city/village of origin | city/village of destination
  type: string    | type: string
  required: T     |

geocoordniates_longitude
  type: number
geocoordniates_latitude
  type: number

title
  type: string
email
  type: string
nickname
  type: string

story
  type: string
picture
  type: string

status//status to be allowed
  type: boolean

## Mongo DB

(Users)
      email
        type: string
      nickname
        type: string
      user_id
        objectId

(Posts)
    region of origin
        type: string    |
        required: F     |
        enum: ['Carribean', 'North America', '', ''] - dropdown

    country of origin
        type: string
        required: T

    city/village of origin
        type: string
        required: T

    location_id
        ref: location
        {
            location_id:
            longitude:
            latitude:            
        }
    title
        type: string
    story
        type: string
    picture
        type: string
    status
        type: boolean      
    user_id(ref)
        objectId
    story_id
        objectId

(Location)
    location_id
        objectId
    longitude
        type: number
    latitude
        type: number

  <!-- city: {
    type: mongoose.Schema.ObjectId,
    ref: 'City',
    required: [true, 'Please add a city'],
  },
  tags: {
    type: [mongoose.Schema.ObjectId],
    ref: 'Tag',
    required: [true, 'Please add a tag'],
  } -->
  