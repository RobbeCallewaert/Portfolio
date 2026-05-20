/**
 * projects/awcny23.js
 * Project data config for The North Face — Altamesa 500 V2.
 *
 * Copy this file for each project and fill in the fields.
 * All fields are optional except key, client, title.
 *
 * section types:
 *   { type: 'text',    content: '...' }
 *   { type: 'feature', item: mediaItem,          title: '...', caption: '...' }  ← both optional
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
  key:         'awcny23',
  client:      'Alexander Wang',
  studio: { name: 'Sucuk & Bratwurst', url: 'https://sucukundbratwurst.de/' },
  title:       'Lunar New Year 2023',
  year:        '2022',
  role:        '3D, Motion, 3D Sculpting',
  color:       '#836b5a',
  thumb:       'assets/images/thumbnails/AW_CNY_2023.webp',

  // Hero — appears first, is the element that transitions from the carousel
  // Can be 'image', 'vimeo', or 'video'
  hero: {
    type:  'image',
    src:   'assets/images/thumbnails/AW_CNY_2023.webp',
    ratio: '1/1',
    alt:   'Alexander Wang Lunar New Year 2023 Bunny Sculpture'
  },

  // Short description shown below the hero block
  description: `Berlin based design studio Sucuck und Bratwurst, commissioned me to create two animations for the 2023 Lunar New Year collection of renowned New York fashion designer, Alexander Wang. The animations showcase two of the collection's standout items, namely the Rabbit Wristlet and the Envelope Pouch.

The goal of these animations was to not only showcase Alexander Wang's collection but also capture  the spirit and traditions of Chinese New Year. 2023 is the lunar year of the rabbit which stands for good luck and prosperity.

While the handbag models were provided by the client, I took charge of the animation, creating of the rabbit sculpture, and building the environments surrounding the products.
    `,

  // Sections rendered below the description in order
  sections: [
    {
      type: 'feature',
      title: 'Crystal-embellished bunny bag',
      item: { type: 'vimeo', id: '817259590', ratio: '16/9' }
    },
    {
      type: 'feature',
      title: 'Satin-jacquard envelope clutch',
      item: { type: 'vimeo', id: '817649973', ratio: '16/9' }
    },
    { 
      type: 'feature',
      caption: 'Breakdown of the bunny sculpture',
      item: { type: 'vimeo', id: '1193994157', ratio: '16/9' }
    }
  ]
};
