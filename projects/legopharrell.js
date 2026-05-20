/**
 * projects/legopharrell.js
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
  key:         'legopharrell',
  client:      'Lego X Pharrell',
  studio: { name: 'ILOVEDUST', url: 'https://www.ilovedust.com/' },
  title:       'Over the Moon',
  year:        '2024',
  role:        '3D, Lookdev',
  color:       '#9f865f',
  thumb:       'assets/images/legopharrell/10391_Feature1.webp',

  // Hero — appears first, is the element that transitions from the carousel
  // Can be 'image', 'vimeo', or 'video'
  hero: {
    type:  'image',
    src:   'assets/images/legopharrell/10391_Feature1.webp',
    ratio: '1/1',
    alt:   'Rocket'
  },

  // Short description shown below the hero block
  description: `To celebrate the upcoming biopic “Piece by Piece” about Pharrell Williams, LEGO launched Pharrell’s spaceship as a collectible set. UK design studio ilovedust brought me on board to help with the campaign. My role in the project was to create the two key campaign visuals set in Paris.

My role focused on building and rendering fully 3D environments using only LEGO set pieces, placing the spaceship in vibrant, Parisian LEGO scenes to capture the film’s imaginative spirit.
    `,

  // Sections rendered below the description in order
  sections: [
    { 
      type: 'feature', 
      item: 'assets/images/legopharrell/pharrell-williams-over-the-moon-lego-set-hero.webp'
    },
    { 
      type: 'feature', 
      item: 'assets/images/legopharrell/10391_Feature1.webp',
      ratio: '1/1'
    }
  ]
};
