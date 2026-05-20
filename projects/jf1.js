/**
 * projects/tnf.js
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
  key:         'jf1',
  client:      'Jaquemus',
  title:       'Nike X Jacquemus J-Force 1',
  studio: { name: 'Sucuk & Bratwurst', url: 'https://sucukundbratwurst.de/' },
  year:        '2023',
  role:        'CGI, Motion',
  color:       '#a6a5a3',
  thumb:       'assets/images/thumbnails/Jaquemus_JF1.webp',

  // Hero — appears first, is the element that transitions from the carousel
  // Can be 'image', 'vimeo', or 'video'
  hero: {
    type:  'image',
    src:   'assets/images/thumbnails/Jaquemus_JF1.webp',
    ratio: '1/1',
    alt:   'Jacquemus J-force 1'
  },

  // Short description shown below the hero block
  description: `Berlin based design house Sucuk und Bratwurst asked me to help visualise the transformation from the classic Air Force 1 to the J-Force 1 for the campaign around the collaboration between fashion house Jacquemus and Nike.

    Art Direction: Sucuk und Bratwurst
    Design and animation: Robbe Callewaert
    JF1 3D Modelling: Studio Ringofen
    `,

  // Sections rendered below the description in order
  sections: [
    {
      type: 'feature',
      item: { type: 'vimeo', id: '1191538545', ratio: '4/5' }
    }
  ]
};
