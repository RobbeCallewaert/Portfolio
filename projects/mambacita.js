/**
 * projects/mambacita.js
 * Project data config for The North Face — Altamesa 500 V2.
 *
 * Copy this file for each project and fill in the fields.
 * All fields are optional except key, client, title.
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
  key:         'mambacita',
  client:      'Nike Basketball',
  studio: { name: 'Softpower', url: 'https://softpower.global' },
  title:       'Kobe 8 Protro Mambacita',
  year:        '2025',
  role:        '3D, Motion',
  color:       '#b4b8c5',
  thumb:       'assets/images/thumbnails/Nike_Mambacita.webp',

  // Hero — appears first, is the element that transitions from the carousel
  // Can be 'image', 'vimeo', or 'video'
  hero: {
    type:  'image',
    src:   'assets/images/thumbnails/Nike_Mambacita.webp',
    ratio: '1/1',
    alt:   'The North Face Altamesa 500 V2 trail shoe on pink snow landscape'
  },

  // Short description shown below the hero block
  description: `Grateful to have been brought on by softpower.xyz to support their collaboration with Nike Basketball on a tribute animation for the Kobe 8 Protro “Mambacita” released in honor of Gigi Bryant’s 18th birthday.

Under Softpower’s art direction, I contributed to early concept development and handled the full 3D execution of the piece. The animation takes viewers on a slow-motion journey through a kaleidoscope of butterflies — a central symbol in the shoe’s design — with a focus shift from macro detail to wide reveal. 

In addition to the 3D animation, I also explored various butterfly wing designs to support the visual direction. This involved a process of hand sketching rough layouts and then using Stable Diffusion with ControlNet to iterate across a wide range of color palettes and pattern variations, helping to develop a look that felt both symbolic and visually rich.
    `,

  // Sections rendered below the description in order
  sections: [
    {
      type: 'feature',
      item: { type: 'vimeo', id: '1191541549', ratio: '4/5' }
    },
    {
      type: 'grid',
      items: ['assets/images/mambacita/soft_power-nike-mambacita_still_01.webp', 'assets/images/mambacita/soft_power-nike-mambacita_still_02.webp', 'assets/images/mambacita/soft_power-nike-mambacita_clip_02.mp4', 'assets/images/mambacita/soft_power-nike-mambacita_clip_01.mp4']
    }
  ]
};
