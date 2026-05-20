/**
 * projects/tnf.js
 * Project data config for The North Face — Altamesa 500 V2.
 *
 * Copy this file for each project and fill in the fields.
 * All fields are optional except key, client, title.
 * studio: { name: 'Studio Name', url: 'https://...' }  ← url optional
 *
 * section types:
 *   { type: 'text',    content: '...' }
 *   { type: 'feature', item: mediaItem,          caption: '...' }  ← caption optional
 *   { type: 'grid',    items: [ ...mediaItems ],  caption: '...' }  ← caption optional
 *
 * mediaItem — full object:
 *   { type: 'image', src: '...', alt: '...' }
 *   { type: 'video', src: '...', ratio: '16/9' | '9/16' | '4/3' | '1/1' }
 *   { type: 'vimeo', id: '...',  ratio: '16/9' | '9/16' }
 *
 * mediaItem — shorthand string (type auto-detected by extension):
 *   'path/to/file.png'  → image
 *   'path/to/file.mp4'  → video (autoplay, muted, looping)
 */

var PROJECT = {
  key:         'futureswoosh',
  client:      'Nike X Footlocker',
  studio: { name: 'ILOVEDUST', url: 'https://www.ilovedust.com/' },
  title:       'Future Swoosh Pack',
  year:        '2019',
  role:        'Art Direction, 3D, Motion, Graphic Design',
  color:       '#0d1621',
  thumb:       'assets/images/thumbnails/futureswoosh.webp',

  // Hero — appears first, is the element that transitions from the carousel
  // Can be 'image', 'vimeo', or 'video'
  hero: {
    type:  'image',
    src:   'assets/images/thumbnails/futureswoosh.webp',
    ratio: '1/1',
    alt:   'The North Face Altamesa 500 V2 trail shoe on pink snow landscape'
  },

  // Short description shown below the hero block
  description: `During my time at ILOVEDUST we collaborated with Portland based One Hundred agency and the amazing musical duo Fractal Fantasy on a series of animations for the release of the Nike x Footlocker "Future Swoosh Pack". 

The online spots focused on 4 footwear products due to release late 2019: Air Force 1, 270 React, Air Max 1 and Air Max Plus. 

As the creative lead of the project I was tasked with coming up with the concepts for the 4 individual worlds representing the unique features of each of the sneakers, designing some of the micrographics as well as handling the complete 3D aspect of the project.


    `,

  // Sections rendered below the description in order
  sections: [
    { 
      type: 'feature', 
      item: 'assets/images/futureswoosh/Nike_Footlocker_PACK_1920x1080.mp4',
      caption: ''
    },
    { 
      type: 'feature', 
      item: 'assets/images/futureswoosh/FutureSwooshPack_270_WIDE_STILL.webp'
    },
    { 
      type: 'text', 
      title: 'Air 270',
      content: 'The Air 270 React world in the Nike x Footlocker "Future Swoosh Pack" animation was designed to capture the playful and bubbly style of the shoe. The composition was kept simple, with references to the big shiny air unit on the heel and the distinctive Nike React pattern found on the sole of the shoe.'
    },
    { 
      type: 'feature', 
      item: 'assets/images/futureswoosh/FutureSwooshPack_AF-1_WIDE_STILL0186.webp'
    },
    { 
      type: 'text', 
      title: 'Air Force 1',
      content: `When designing the concept for the Air Force 1 world, inspiration was drawn from the shoe's distinctive
  concentric circular sole pattern and we decided to transform it into a space station, playing off the idea of the
  "Air" in the shoe's name and creating a unique visual twist.

  To emphasize the sneaker's place in basketball history, the background features a basketball-shaped planet,
  effectively weaving together elements of both basketball and space themes.`
    },
    { 
      type: 'feature', 
      item: 'assets/images/futureswoosh/FutureSwooshPack_AM-PLUS_WIDE_STILL.webp'
    },
    { 
      type: 'text', 
      title: 'Air Max Plus',
      content: `The design for the Air Max Plus world features a cityscape with a skyscraper that takes inspiration from the unique shapes of the plastic exoskeleton of the shoe. In addition to this, we included micrographics that reference palm trees and whales, two of the key inspirations for Sean McDowell when he originally designed the sneaker back in 1998.

By incorporating these elements, we aimed to create a design that not only showcases the neon urban influences of this colourway and the innovative design of the Air Max Plus but also pays tribute to its rich history and influences. The result is a piece that captures the essence of the sneaker and its place in sneaker culture.`
    },
    { 
      type: 'feature', 
      item: 'assets/images/futureswoosh/FutureSwooshPack_AM-1_WIDE_STILL.webp'
    },
    { 
      type: 'text', 
      title: 'Air Max 1',
      content: `Within this world, we created a visual representation of the Nike Air Max 1's iconic air unit. The ventilation vent was designed to replicate the shape of the air unit, while the surrounding underground concrete setting served to highlight the sneaker's edgy and urban appeal.

To further emphasize the sneaker's place in popular culture, laser grids were projected onto the floor, creating a neon-like effect that paid homage to the shoe's vibrant colorway and its significant place in rave culture.`
    },
  ]
};
