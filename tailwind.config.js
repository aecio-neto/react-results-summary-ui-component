/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      // Primary
      LightRed: {
        light: 'hsl(0, 100%, 95%)',
        dark: 'hsl(0, 100%, 67%)',
      },
      OrangeyYellow: {
        light: 'hsl(39, 100%, 95%)',
        dark: 'hsl(39, 100%, 56%)',
      },
      GreenTeal: {
        light: 'hsl(166, 100%, 95%)',
        dark: 'hsl(166, 100%, 37%)',
      },
      CobaltBlue: {
        light: 'hsl(234, 85%, 95%)',
        dark: 'hsl(234, 85%, 45%)',
      },

      // Gradients 
      LightSlateBlue: 'hsl(252, 100%, 67%)',
      LightRoyalBlue: 'hsl(241, 81%, 54%)',
      VioletBlue: 'hsla(256, 72%, 46%, 1)',
      PersianBlue: 'hsla(241, 72%, 46%, 0)',

      // Neutral
      White: 'hsl(0, 0%, 100%)',
      PaleBlue: 'hsl(221, 100%, 96%)',
      LightLavender: 'hsl(241, 100%, 89%)',
      DarkGrayBlue: 'hsl(224, 30%, 27%)',
    },
    extend: {
      fontFamily: {
        'primary': 'Hanken Grotesk'
      },
      screens: {
        'sm': '375px',   // Mobile: 375px
        '2xl': '1440px', // Larger Desktop: 1440px
      },
    },
  },
  plugins: [],
}

/* Colors

## Primary

LightRed: hsl(0, 100%, 67%)
OrangeyYellow: hsl(39, 100%, 56%)
GreenTeal: hsl(166, 100%, 37%)
CobaltBlue: hsl(234, 85%, 45%)

## Gradients

LightSlateBlue (background): hsl(252, 100%, 67%)
LightRoyalBlue (background): hsl(241, 81%, 54%)

VioletBlue (circle): hsla(256, 72%, 46%, 1)
PersianBlue (circle): hsla(241, 72%, 46%, 0)

### Neutral

White: hsl(0, 0%, 100%)
PaleBlue: hsl(221, 100%, 96%)
LightLavender: hsl(241, 100%, 89%)
DarkGrayBlue: hsl(224, 30%, 27%)

*/