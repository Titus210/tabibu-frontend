export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
      
        gray: '#E1E8F9',
        blue: '#0081F7',  
        pink:'#EE2A80',       // Primary colors
        white: '#F5F5DC',        // white section
        danger: '#FF2000',       // Red for danger
        moderate: '#FFA500',     // Orange for moderate
        safe: '#008000',         // Green for safe
        
        // Primary Colors
        orange: "#F55713",  // Bright orange for highlights
        red: "#D32F2F",     // Deep red for emphasis

        // Neutral Colors
        black: "#111",   // Black for strong contrasts
        grey: "#808080",    // Medium grey for subtlety
      

        // Accent Colors
        yellow: "#EBFF00",  // Yellow for warnings or notices
        green: "#4CAF50",   // Green for success or positive elements
  
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'md': '1rem',  
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans'],
        'serif': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
