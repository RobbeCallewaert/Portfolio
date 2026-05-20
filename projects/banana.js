/**
 * projects/banana.js
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
  key:         'banana',
  client:      'Personal Project',
  title:       'Strange Fruit — Banana',
  year:        '2022',
  role:        'Concept, 3D Modelling, Animation, Simulation, Rigging, Texturing, Lookdev',
  color:       '#acbdcd',
  thumb:       'assets/images/thumbnails/banana.webp',

  // Hero — appears first, is the element that transitions from the carousel
  // Can be 'image', 'vimeo', or 'video'
  hero: {
    type:  'image',
    src:   'assets/images/thumbnails/banana.webp',
    ratio: '1/1',
    alt:   'Larvae Banana'
  },

  // Short description shown below the hero block
  description: `"Strange Fruit" is a personal project I began at the start of 2022, featuring pieces of fruit exhibiting unusual behavior. The banana is the first installment in the series.

    I created the "Strange Fruit" project with the intention of pushing my technical skills to new heights. All assets were modelled, rigged and textured from scratch by me.
    For this piece I went out of my comfort zone and dipped my toes in to houdini for the slime simulation on the larvae.
    `,

  // Sections rendered below the description in order
  sections: [
    {
      type: 'feature',
      item: { type: 'vimeo', id: '816825832', ratio: '16/9' }
    },
    {
      type: 'grid',
      items: ['assets/images/banana/personal-strange_fruit-banana_still_02.webp', 'assets/images/banana/personal-strange_fruit-banana_still_01.webp']
    },
    {
      type: 'feature',
      title: 'Breakdown',
      item: { type: 'vimeo', id: '717887863', ratio: '16/9' }
    }
  ]
};
