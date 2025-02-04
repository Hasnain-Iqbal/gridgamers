module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
  ],
  theme: {
  	boxShadow: {
  		sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  		DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  		md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  		xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  		t: '0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  		orange: '0px 20px 20px -15px rgba(245,56,56,0.81) ',
  		'orange-md': '0px 20px 40px -15px rgba(245,56,56,0.81) ',
  		none: 'none'
  	},
  	colors: {
  		transparent: 'transparent',
  		black: {
  			'500': '#4F5665',
  			'600': '#0B132A',
  			'900': '#000'
  		},
  		orange: {
  			'100': '#FFECEC',
  			'500': '#F53855'
  		},
  		green: {
  			'500': '#2FAB73'
  		},
  		white: {
  			'300': '#F8F8F8',
  			'500': '#fff'
  		},
  		gray: {
  			'100': '#EEEFF2',
  			'400': '#AFB5C0',
  			'500': '#DDDDDD'
  		},
  		primary: '#298be1'
  	},
  	extend: {
  		screens: {
  			xs: '320px',
  			xsm: '460px',
  			sm: '640px',
  			md: '821px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1440px',
  			'3xl': '1600px'
  		},
  		fontFamily: {
  			'Sigmar One': [
  				'Sigmar One',
  				'Inter',
  				'sans-serif'
  			],
  			Montserrat: [
  				'Montserrat'
  			]
  		},
  		keyframes: {
  			typing: {
  				'0%': {
  					width: '0%'
  				},
  				'100%': {
  					width: '100%'
  				}
  			},
  			blink: {
  				'50%': {
  					borderColor: 'transparent'
  				},
  				'100%': {
  					borderColor: 'white'
  				}
  			}
  		},
  		animation: {
  			typing: 'typing 2s steps(20, end), blink 0.7s step-end infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
