/**
 * projects/edamame.js
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
  key:         'edamame',
  client:      'Personal Project',
  title:       'Strange Fruit — Edamame',
  year:        '2025',
  role:        'Concept, 3D Modelling, Animation, Rigging, Texturing, Lookdev',
  color:       '#a6a6a0',
  thumb:       'assets/images/thumbnails/Edamame.webp',

  // Hero — appears first, is the element that transitions from the carousel
  // Can be 'image', 'vimeo', or 'video'
  hero: {
    type:  'image',
    src:   'assets/images/thumbnails/Edamame.webp',
    ratio: '1/1',
    alt:   'The North Face Altamesa 500 V2 trail shoe on pink snow landscape'
  },

  // Short description shown below the hero block
  description: `"Strange Fruit" is a personal project I began at the start of 2022, featuring pieces of fruit exhibiting unusual behavior. The edamame bean is the third installment in the series.

    I created the "Strange Fruit" project with the intention of pushing my technical skills to new heights. All assets were modelled, rigged and textured from scratch by me.

    Sound design by Echoic Audio.`,

  // Sections rendered below the description in order
  sections: [
    {
      type: 'feature',
      item: { type: 'vimeo', id: '1191586603', ratio: '16/9' }
    },
    {
      type: 'feature',
      caption: 'Viewport render',
      item: { type: 'vimeo', id: '1191587883', ratio: '1/1' }
    }
  ]
};
