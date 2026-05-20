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
  key:         'crocs',
  client:      'Crocs',
  studio: { name: 'Zunc', url: 'https://www.zunc.studio/' },
  title:       'Crocs X Salehe Bembury Pollex Slide',
  year:        '2023',
  role:        '3D, Animation',
  color:       '#e2dbd8',
  thumb:       'assets/images/thumbnails/crocs.webp',

  // Hero — appears first, is the element that transitions from the carousel
  // Can be 'image', 'vimeo', or 'video'
  hero: {
    type:  'image',
    src:   'assets/images/thumbnails/crocs.webp',
    ratio: '1/1',
    alt:   'Crocs X Salehe Bembury Pollex Slide'
  },

  // Short description shown below the hero block
  description: `Animation for the Crocs × Salehe Bembury collaboration, produced with Zünc Studio. I handled animation on this piece, while Zünc Studio led art direction, lookdev, and the sand simulation work.
    `,

  // Sections rendered below the description in order
  sections: [
    {
      type: 'feature',
      item: { type: 'vimeo', id: '1193963222', ratio: '9/16' }
    }
  ]
};
