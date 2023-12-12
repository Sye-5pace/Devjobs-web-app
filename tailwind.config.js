/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'fredoka':['Fredoka','sans-serif']
    },
    colors:{
      'royalblue':'#5864e1',
      'pastelgreen':'#58E07F',
      'stormgray':'#65688B',
      'equator':'#E0C358',
      'mandy':'#E05858',

      // '#58E07F":remote
      // '#65688B': part time
      // '#E0C358': contract
      // '#E05858': freelance
      
      'vulcan':'#121721',
      'anakiwa' :'#9dcdff',
      'baymany':'#21437d',
      'athensgray':'#f4f6f8'
    },
    extend: {},
    screens: {
      'mobile':{'min':'200px','max':'427px'},
      'tablet':{'min':'427px','max':'782px'},
      'desktop':{'min':'782.1px'},
    }
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant('children','&>*')
    })
  ],
}