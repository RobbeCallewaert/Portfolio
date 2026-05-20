/**
 * projects/awspring23.js
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
  key:         'awspring23',
  client:      'Alexander Wang',
  studio: { name: 'Sucuk & Bratwurst', url: 'https://sucukundbratwurst.de/' },
  title:       'Spring Collection 2023',
  year:        '2023',
  role:        '3D, Motion, Product Modelling',
  color:       '#81bef7',
  thumb:       'assets/images/thumbnails/awspring23.webp',

  // Hero — appears first, is the element that transitions from the carousel
  // Can be 'image', 'vimeo', or 'video'
  hero: {
    type:  'image',
    src:   'assets/images/thumbnails/awspring23.webp',
    ratio: '1/1',
    alt:   'Alexander Wang Spring 2023 handbag'
  },

  // Short description shown below the hero block
  description: `In another collaboration with Berlin based design studio Sucuck und Bratwurst, I was commisioned to create three animations for the 2023 spring collection of New York fashion designer, Alexander Wang. The animations showcase three of the collection's  items, namely the Vortex Slider, The Ryan bag and the Alexander Wang Legacy bag.

To bring the client's vision to life, I began by sketching up storyboards based on the initial concepts provided. While the background footage and Vortex Slider 3D model were supplied by the client, I took charge of the entire 3D aspect of the project. This included tracking the footage, modeling of the handbags, the animation and simulation.
    `,

  // Sections rendered below the description in order
  sections: [
    {
      type: 'feature',
      title: 'W Legacy Hobo Bag',
      item: { type: 'vimeo', id: '817887208', ratio: '16/9' }
    },
    { 
      type: 'feature',
      caption: 'Storyboard',
      item: 'assets/images/awspring23/awspring_storyboard_legacy.webp'
    },
    {
      type: 'feature',
      title: 'Vortex Slider',
      item: { type: 'vimeo', id: '817888801', ratio: '16/9' }
    },
    { 
      type: 'feature',
      caption: 'Storyboard',
      item: 'assets/images/awspring23/awspring_storyboard_vortex.webp'
    },
    {
      type: 'feature',
      title: 'Ryan Bag',
      item: { type: 'vimeo', id: '817888208', ratio: '16/9' }
    },
    { 
      type: 'feature',
      caption: 'Storyboard',
      item: 'assets/images/awspring23/awspring_storyboard_ryan.webp'
    },
  ]
};
