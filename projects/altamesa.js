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
  key:         'altamesa',
  client:      'The North Face',
  studio: { name: 'Softpower', url: 'https://softpower.global' },
  title:       'Altamesa 500 V2',
  year:        '2025',
  role:        'CGI, Motion, Terrain Generation',
  color:       '#403450',
  thumb:       'assets/images/thumbnails/TNF_Altamesa.webp',

  // Hero — appears first, is the element that transitions from the carousel
  // Can be 'image', 'vimeo', or 'video'
  hero: {
    type:  'image',
    src:   'assets/images/altamesa/soft_power-the_north_face-altamesa_hero.webp',
    ratio: '1/1',
    alt:   'The North Face Altamesa 500 V2 trail shoe on pink snow landscape'
  },

  // Short description shown below the hero block
  description: `Softpower asked me to help realise their concept of one part of the campaign for the launch of the Altamesa 500 V2 trail shoe.

    A journey through a landscape where scale and material behave like a dream.
    What begins as a vast mountain transforms into a soft, responsive world, a place where rock bends, rebounds, and breathes.
    Within this space, the Altamesa 500 2.0 appears monumental and weightless

    I was responsible for full 3D buildout, including terrain generation in GAEA, animation and lookdev.
    `,

  // Sections rendered below the description in order
  sections: [
    {
      type: 'feature',
      item: { type: 'vimeo', id: '1191091752', ratio: '4/5' }
    },
    {
      type: 'grid',
      items: ['assets/images/altamesa/soft_power-the_north_face-altamesa_still_01.webp', 'assets/images/altamesa/soft_power-the_north_face-altamesa_still_02.webp', 'assets/images/altamesa/soft_power-the_north_face-altamesa_still_03.webp', 'assets/images/altamesa/soft_power-the_north_face-altamesa_still_04.webp']
    },
    { 
      type: 'feature', 
      item: 'assets/images/altamesa/soft_power-the_north_face-altamesa_wip_01.webp'
    }
  ]
};
