/**
 * projects/vitrapanton.js
 * Project data config for Vitra - Panton Cubes.
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
  key:         'vitrapanton',
  client:      'Vitra',
  studio: { name: 'Sucuk & Bratwurst', url: 'https://sucukundbratwurst.de/' },
  title:       'Panton Cubes',
  year:        '2026',
  role:        '3D, Animation, Creative Direction',
  color:       '#81bef7',
  thumb:       'assets/images/thumbnails/sucuk-vitra-panton_cubes-hero.png',

  // Hero — appears first, is the element that transitions from the carousel
  // Can be 'image', 'vimeo', or 'video'
  hero: {
    type:  'image',
    src:   'assets/images/thumbnails/sucuk-vitra-panton_cubes-hero.png',
    ratio: '1/1',
    alt:   'Vitra Panton Cubes - Duck'
  },

  // Short description shown below the hero block
  description: `Commissioned by Berlin studio Sucuk und Bratwurst to celebrate the re-release of Vitra's Panton Cubes - Verner Panton's modular system from 1974 with a fun, kinetic animation.

Concept developed in collaboration with S&B, full animation execution by me, sound design by S&B.
    `,

  // Sections rendered below the description in order
  sections: [
    {
      type: 'feature',
      item: { type: 'vimeo', id: '1229511354', ratio: '16/9' }
    }
  ]
};
