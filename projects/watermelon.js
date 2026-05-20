/**
 * projects/watermelon.js
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
  key:         'watermelon',
  client:      'Personal Project',
  title:       'Strange Fruit — Watermelon',
  year:        '2023',
  role:        'Concept, 3D Modelling, Animation, Rigging, Texturing, Lookdev',
  color:       '#216481',
  thumb:       'assets/images/thumbnails/watermelon.webp',

  // Hero — appears first, is the element that transitions from the carousel
  // Can be 'image', 'vimeo', or 'video'
  hero: {
    type:  'image',
    src:   'assets/images/thumbnails/watermelon.webp',
    ratio: '1/1',
    alt:   'Beetle Watermelon'
  },

  // Short description shown below the hero block
  description: `"Strange Fruit" is a personal project I began at the start of 2022, featuring pieces of fruit exhibiting unusual behavior. The watermelon is the second installment in the series.

    I created the "Strange Fruit" project with the intention of pushing my technical skills to new heights. All assets were modelled, rigged and textured from scratch by me.

    Sound design by Mun Studio.`,

  // Sections rendered below the description in order
  sections: [
    {
      type: 'feature',
      item: { type: 'vimeo', id: '744221895', ratio: '1/1' }
    },
    { 
      type: 'feature', 
      item: 'assets/images/watermelon/Watermelon_Bug_Wide.png'
    },
    {
      type: 'feature',
      title: 'Breakdown',
      item: { type: 'vimeo', id: '744216812', ratio: '16/9' }
    },
    {
      type: 'feature',
      caption: 'Beetle rog walkcycle test',
      item: { type: 'vimeo', id: '1192211674', ratio: '16/9' }
    }
  ]
};
