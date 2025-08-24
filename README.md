# Jad Vision - Optician Website

A modern, responsive website for Jad Vision optician store in Agadir, Morocco. This website provides essential information about the store, services, and allows customers to easily find the location and leave reviews.

## Features

### 🌐 Multilingual Support
- **French** (default)
- **English**
- Dynamic language switching with preserved user preferences

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Modern CSS Grid and Flexbox layouts

### 🎯 Key Functionality
- **Store Information**: Contact details, address, and hours
- **WiFi Access**: Easy-to-copy WiFi credentials for customers
- **Google Reviews Integration**: Direct links to leave Google reviews
- **Location Services**: Direct Google Maps navigation to store
- **Review Popup**: Automated review request system (8-second delay)

### 🎨 Modern UI/UX
- Clean, professional design
- Smooth animations and transitions
- Interactive elements with hover effects
- Professional color scheme
- Font Awesome icons integration

## Technical Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with custom properties and animations
- **Vanilla JavaScript**: Lightweight, no external dependencies
- **Google Fonts**: Poppins font family
- **Font Awesome**: Icon library

## Project Structure

```
jad.opticien/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with responsive design
├── script.js           # JavaScript functionality
├── public/             # Static assets
│   ├── pin-location-background.png
│   └── review-background.jpg
└── README.md           # Project documentation
```

## Features Overview

### Language System
- Automatic language detection and switching
- Data attributes for multilingual content
- Persistent language preference

### Review System
- Automated popup after 8 seconds
- Multiple close options (X button, Later button, outside click)
- Direct integration with Google Reviews
- Session-independent (shows on every visit)

### Contact Integration
- Clickable phone numbers with tel: protocol
- Direct Google Maps integration with directions
- Social media links (Instagram, Facebook)

### WiFi Sharing
- One-click WiFi credential copying
- Visual feedback for successful copy
- Error handling for unsupported browsers

## Setup and Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/eeyuub/jad.vision.git
   cd jad.vision
   ```

2. **Local Development**:
   ```bash
   # Using Python's built-in server
   python -m http.server 8000
   
   # Or using Node.js
   npx serve .
   ```

3. **Access the website**:
   Open `http://localhost:8000` in your browser

## Customization

### Updating Store Information
- Edit contact details in `index.html`
- Update Google Maps links with new coordinates
- Modify WiFi credentials in the script

### Styling Changes
- Main styles in `style.css`
- CSS custom properties for easy color scheme changes
- Responsive breakpoints clearly defined

### Adding Languages
- Add new `data-[lang]` attributes to HTML elements
- Update JavaScript language switching logic
- Add new language button in the header

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

- Lightweight codebase (< 50KB total)
- Optimized images
- Minimal external dependencies
- Fast loading times

## License

This project is proprietary software for Jad Vision optician store.

## Contact

**Jad Vision**
- 📍 N° 5 Rue Omar El Khyam, Agadir 80000
- 📞 +212 528 236 041
- 📞 +212 528 310 163
- 📱 +212 665 650 577
- 📧 [Instagram](https://www.instagram.com/jad.vision/)
- 📘 [Facebook](https://facebook.com/jadvision)

---

*Built with ❤️ for Jad Vision customers*