# SourceGoodFood Company Website

## Overview

This is a professional company website for SourceGoodFood Tech Private Limited, built with vanilla HTML, CSS, and JavaScript. The site showcases the company's expertise in ecommerce solutions, AI applications, and development technologies specifically for the food and chemicals industries. Features modern design, responsive layout, and smooth navigation.

## User Preferences

Preferred communication style: Simple, everyday language.
Company: SourceGoodFood Tech Private Limited (abbreviated as SourceGoodFood)
Business Model: Consulting and Technical Services (NOT a development agency)
Focus Areas: MedusaJS Ecommerce Consulting, AI Solutions Implementation, Technical Services
Target Industries: Food, Chemicals
Contact: Email - customer.support@sourcegoodfood.com, WhatsApp - +91-6364534849, Discord - govdiw#006, GitHub - SGFGOV
DPIIT Registered Startup: Yes

## System Architecture

This is a client-side static website with the following architecture:

- **Frontend Only**: Pure HTML, CSS, and JavaScript with no backend components
- **Static Hosting Ready**: Designed for deployment on platforms like GitHub Pages, Netlify, or Vercel
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced features require it
- **Mobile-First Design**: Responsive layout that works across all device sizes

## Key Components

### HTML Structure (`index.html`)
- Semantic HTML5 structure with proper meta tags for SEO
- Open Graph meta tags for social media sharing
- External dependencies loaded via CDN (Google Fonts, Font Awesome)
- Navigation-ready sections (home, about, projects, contact)

### Styling System (`styles.css`)
- **CSS Custom Properties**: Comprehensive design system with color palette, spacing, and shadow variables
- **Modern CSS**: Uses CSS Grid, Flexbox, and modern selectors
- **Design Tokens**: Centralized theming through CSS variables for easy customization
- **Typography Scale**: Consistent font sizing using Inter font family

### Interactive Features (`script.js`)
- **Mobile Navigation**: Hamburger menu functionality for mobile devices
- **Scroll Effects**: Navbar styling changes on scroll and smooth scrolling behavior
- **Active Navigation**: Highlights current section in navigation based on scroll position
- **Progressive Enhancement**: Core functionality preserved without JavaScript

## Data Flow

Since this is a static website, there's no traditional data flow. However, the interaction flow is:

1. **User Navigation**: Click events trigger smooth scrolling to sections
2. **Scroll Tracking**: Window scroll events update navigation state and navbar appearance
3. **Mobile Menu**: Toggle events show/hide navigation on mobile devices
4. **Section Detection**: Intersection detection highlights active navigation items

## External Dependencies

### CDN Resources
- **Google Fonts**: Inter font family for typography
- **Font Awesome**: Icon library for UI elements (version 6.4.0)

### No Backend Dependencies
- No database requirements
- No server-side processing
- No authentication systems
- No external APIs (currently)

## Deployment Strategy

### Static Hosting Options
- **GitHub Pages**: Ready for deployment with proper repository setup
- **Netlify**: Drag-and-drop deployment or Git integration
- **Vercel**: Optimized for static sites with automatic deployments
- **Traditional Web Hosting**: Can be uploaded to any web server

### Build Process
- **No Build Required**: Files can be served directly
- **Optional Optimization**: Could add build tools for minification and optimization
- **Asset Optimization**: Images and assets should be optimized before deployment

### Performance Considerations
- External fonts and icons are loaded from CDN
- CSS uses modern features for better performance
- JavaScript is lightweight and optimized for quick loading
- Ready for performance enhancements like lazy loading and image optimization

## Recent Changes

### Business Model Repositioning & QR Code Removal (July 18, 2025)
- **Consulting & Services Focus**: Repositioned entire website to emphasize consulting and technical services (NOT development agency)
  - Updated hero section: "MedusaJS Ecommerce Consulting & Technical Services"
  - Changed all content to highlight consulting services rather than development
  - Modified navigation to "Services" instead of "Projects"
  - Updated page title and meta descriptions for consulting focus
- **QR Code Removal**: Removed all QR codes from contact section as requested
  - Removed WhatsApp QR code and related CSS styling
  - Cleaned up contact layout for simpler, professional appearance
- **Content Cleanup**: Removed duplicate content and spacing issues
  - Fixed navigation spacing and structure
  - Cleaned up project section layout
  - Updated business model documentation in user preferences

### MedusaJS Emphasis & Welcome Generator Removal (July 17, 2025)
- **MedusaJS Spotlight**: Updated all content to highlight ultra-modern MedusaJS ecommerce as key service
  - Hero section emphasizes "ultra-modern MedusaJS ecommerce platforms"
  - Featured skills section with enhanced MedusaJS v2.0 technologies
  - Projects section retitled to "MedusaJS Ecommerce Solutions & More"
  - Added MedusaJS-specific technologies: Multi-Store Setup, Custom Modules, Advanced APIs
- **Welcome Generator Removal**: Removed welcome message generator section as requested
  - Cleaned up navigation menu and hero buttons
  - Removed welcome-generator.js and related CSS
  - Updated navigation flow to focus on core services

### Contact Form Security & QR Codes (July 17, 2025)
- **Captcha Protection**: Added mathematical captcha to contact form for spam protection
  - Random arithmetic operations (addition, subtraction, multiplication)
  - Refresh button with smooth rotation animation
  - Form validation prevents submission with incorrect answers
  - Brand-styled captcha container with teal accent colors
- **QR Code Integration**: Created SVG QR codes for WhatsApp and Discord contacts
  - Custom-designed QR patterns with brand colors
  - WhatsApp QR in green (#25D366) with WhatsApp branding
  - Discord QR in purple (#5865F2) with Discord branding
  - Hover effects and "Scan to connect" labels
- **Enhanced Contact Layout**: Improved contact method styling with proper QR code positioning

### Brand Color Integration (July 17, 2025)
- **Logo-Based Color Scheme**: Updated CSS color palette to match company logo colors
  - Primary: Warm orange gradient (#ff8a50 to #ff6b35) from logo design
  - Accent: Teal/turquoise (#4dd0e1) from logo accent color
  - Text: Modern dark navy (#2d3748) for better readability
- **Gradient Applications**: Added brand gradients to buttons, skill tags, and decorative elements
- **Improved Visual Hierarchy**: Enhanced contrast and brand consistency throughout
- **Company Name Correction**: Updated all references to "SourceGoodFood" (one word) throughout the site
- **Content Accuracy**: Removed references to working backend systems for food industry, focusing on ecommerce and AI expertise
- **GSTIN Display**: Added company GSTIN (27ABGCS2589E1Z2) to footer in brand teal color

## Technical Decisions

### Why Vanilla JavaScript?
- **Simplicity**: No framework overhead for a static portfolio
- **Performance**: Faster loading times without framework bundles
- **Maintainability**: Easy to understand and modify
- **Learning**: Demonstrates fundamental web development skills

### Why CSS Custom Properties?
- **Maintainability**: Centralized theme management with brand colors
- **Flexibility**: Easy to implement dark mode or theme switching
- **Modern Approach**: Uses current CSS best practices with gradient support
- **Performance**: No preprocessor compilation needed

### Mobile-First Approach
- **User Experience**: Ensures good performance on all devices
- **SEO Benefits**: Mobile-friendly design improves search rankings
- **Progressive Enhancement**: Builds up from basic functionality