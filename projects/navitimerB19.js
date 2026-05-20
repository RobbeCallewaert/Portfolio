/**
 * projects/tnf.js
 * Project data config for The North Face — Altamesa 500 V2.
 *
 * Copy this file for each project and fill in the fields.
 * All fields are optional except key, client, title.
 *
 * section types:
 *   { type: 'text',  content: '...' }
 *   { type: 'grid',  items: [ ...mediaItems ] }
 *   { type: 'feature', item: mediaItem }    ← single full-width media
 *
 * mediaItem:
 *   { type: 'image', src: '...', alt: '...' }
 *   { type: 'video', src: '...', ratio: '16/9' | '9/16' | '4/3' | '1/1' }
 *   { type: 'vimeo', id: '...',  ratio: '16/9' | '9/16' }
 */

var PROJECT = {
  key:         'navitimerB19',
  client:      'Breitling',
  studio: { name: 'Sucuk & Bratwurst', url: 'https://sucukundbratwurst.de/' },
  title:       'Navitimer B19 Chronograph',
  year:        '2024',
  role:        '3D, Motion',
  color:       '#d9882e',
  thumb:       'assets/images/thumbnails/Breitling_B19.webp',

  // Hero — appears first, is the element that transitions from the carousel
  // Can be 'image', 'vimeo', or 'video'
  hero: {
    type:  'image',
    src:   'assets/images/thumbnails/Breitling_B19.webp',
    ratio: '1/1',
    alt:   'Breitling Navitimer B19 transforming from plane engine'
  },

  // Short description shown below the hero block
  description: `To mark Breitling’s 140th anniversary, I was brought on by sucukundbratwurst to execute a 3D animation celebrating the brand’s aviation legacy and the release of the Navitimer B19 Chronograph 43. While sucukundbratwurst provided the art direction, I handled all aspects of the animation production — from layout and modeling to dynamics, rendering, and compositing.

This animation blends stylized realism with mechanical precision, serving as a visual metaphor for Breitling’s evolution: from essential cockpit instruments to luxury chronographs worn around the world.
    `,

  // Sections rendered below the description in order
  sections: [
    {
      type: 'feature',
      item: { type: 'vimeo', id: '1097504672', ratio: '16/9' }
    },
    {
      type: 'grid',
      items: ['assets/images/breitling_b19/01_DIVE.mp4', 'assets/images/breitling_b19/04_B_1.mp4', 'assets/images/breitling_b19/05_TRANSFORMATION_1.mp4', 'assets/images/breitling_b19/06_CLOUD BURST_1.mp4', ]
    },
    { 
      type: 'feature', 
      caption: 'Alternative Shanghai Landing for the Chinese market',
      item: { type: 'vimeo', id: '1097511514', ratio: '16/9' }
    }
  ]
};
