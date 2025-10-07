# Interactive Animated CV - Juan Jaramillo

A modern, interactive CV website with glassmorphism effects, particle animations, and smooth transitions. Built with HTML5, CSS3, and JavaScript.

## Features

- **Glassmorphism Design**: Modern glass-like cards with backdrop blur effects
- **Particle Background**: Interactive particle system using particles.js
- **Smooth Animations**: CSS animations and JavaScript-powered transitions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Sidebar navigation with smooth section switching
- **Skill Progress Bars**: Animated progress bars for technical skills
- **Contact Form**: Functional contact form with validation
- **Keyboard Navigation**: Arrow keys for section navigation
- **Touch Gestures**: Swipe support for mobile devices

## File Structure

```
Mates/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles with animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization Guide

### 1. Personal Information

Update the following sections in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">
    <span class="gradient-text">Your Name Here</span>
</h1>
<p class="hero-subtitle">Your Job Title</p>
<p class="hero-description">
    Your professional description
</p>
```

#### Contact Information
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+1 (555) 123-4567</span>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your City, Country</span>
</div>
```

### 2. Experience Section

Update the timeline items in the experience section:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content glass-card">
        <div class="timeline-header">
            <h3>Your Job Title</h3>
            <span class="timeline-date">2022 - Present</span>
        </div>
        <p class="timeline-company">Company Name</p>
        <p class="timeline-description">
            Your job description and achievements
        </p>
        <div class="timeline-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
            <span class="tag">Technology 3</span>
        </div>
    </div>
</div>
```

### 3. Skills Section

Update the skill categories and progress bars:

```html
<div class="skill-item">
    <span class="skill-name">Your Skill</span>
    <div class="skill-bar">
        <div class="skill-progress" data-width="85%"></div>
    </div>
</div>
```

### 4. Projects Section

Update the project cards:

```html
<div class="project-card glass-card">
    <div class="project-image">
        <div class="project-placeholder">
            <i class="fas fa-your-icon"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-tags">
            <span class="tag">Technology</span>
        </div>
        <div class="project-links">
            <a href="your-live-demo-url" class="project-link">
                <i class="fas fa-external-link-alt"></i>
                Live Demo
            </a>
            <a href="your-github-url" class="project-link">
                <i class="fab fa-github"></i>
                Code
            </a>
        </div>
    </div>
</div>
```

### 5. Colors and Styling

Customize the color scheme in `styles.css` by updating the CSS variables:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary color */
    --accent-color: #06b6d4;       /* Accent color */
    --text-primary: #ffffff;       /* Primary text color */
    --text-secondary: #a1a1aa;     /* Secondary text color */
    --bg-primary: #0a0a0a;         /* Background color */
    /* ... other variables */
}
```

### 6. Particle Effects

Customize the particle system in `script.js`:

```javascript
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,  // Number of particles
        },
        color: {
            value: '#6366f1'  // Particle color
        },
        // ... other particle settings
    }
});
```

## How to Run

1. Open `index.html` in a modern web browser
2. For best experience, serve the files through a local web server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Tips

- The website automatically reduces particle count on mobile devices
- Animations are optimized for 60fps
- Images should be optimized for web use
- Consider using WebP format for better compression

## Adding Your Own Content

1. **Replace placeholder text** with your actual information
2. **Update contact details** with your real contact information
3. **Add your projects** with real links and descriptions
4. **Customize the color scheme** to match your brand
5. **Add your profile photo** by replacing the avatar placeholder
6. **Update social media links** in the contact section

## Advanced Customization

### Adding New Sections

1. Add a new navigation item in the sidebar
2. Create a new section in the main content
3. Update the JavaScript navigation logic

### Custom Animations

Add new CSS animations in `styles.css`:

```css
@keyframes yourAnimation {
    from { /* starting state */ }
    to { /* ending state */ }
}
```

### Additional Features

- Add a blog section
- Include testimonials
- Add a portfolio gallery
- Integrate with a CMS
- Add dark/light mode toggle

## Troubleshooting

### Particles not showing
- Ensure particles.js is loaded correctly
- Check browser console for JavaScript errors

### Animations not working
- Verify CSS animations are supported
- Check for JavaScript errors in console

### Mobile issues
- Test on actual devices
- Check viewport meta tag
- Verify touch event handling

## License

This project is open source and available under the MIT License.

## Support

If you need help customizing this CV, feel free to reach out or check the code comments for additional guidance.
