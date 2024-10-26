# Results Summary Component

![Design preview for the Results Summary Component coding challenge](./design/desktop-preview.jpg)

## Overview

This is a solution to the Results Summary Component challenge from [Frontend Mentor](https://www.frontendmentor.io). The project presents a responsive results card that displays a user's test scores across different categories, along with an overall score and ranking.

## Features

- Responsive design that adapts to desktop and mobile viewports
- Dynamic score loading from JSON data
- Interactive hover states on desktop
- Gradient backgrounds and custom styling
- Semantic HTML markup
- Custom fonts using Hanken Grotesk
- Modular SCSS architecture
- BEM methodology for clear and maintainable CSS

## Built With

- Semantic HTML5 markup
- SCSS (Sass)
- BEM methodology
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript
- JSON data

## SCSS Architecture

The project uses a modular SCSS architecture organized into the following structure:

```
scss/
├── abstracts/
│   ├── _mixins.scss
│   └── _variables.scss
├── base/
│   ├── _base.scss
│   ├── _fonts.scss
│   └── _reset.scss
├── components/
│   ├── _button.scss
│   ├── _result-card-footer.scss
│   ├── _result-card-header.scss
│   ├── _result-card.scss
│   └── _result-summary-list-item.scss
├── layout/
│   ├── _footer.scss
│   └── main.scss
```

### Architecture Details

- **abstracts**: Contains project-wide Sass helpers

  - `_mixins.scss`: Reusable mixins for responsive design and common patterns
  - `_variables.scss`: Global variables for colors, fonts, and breakpoints

- **base**: Contains the boilerplate code

  - `_base.scss`: Base styles and resets
  - `_fonts.scss`: Font declarations and imports
  - `_reset.scss`: Custom CSS reset

- **components**: Contains all component-specific styles

  - Follows BEM naming convention for clear component structure
  - Each component is isolated in its own partial

- **layout**: Contains global layout styles
  - `_footer.scss`: Styles for the page footer
  - `main.scss`: Main layout styles and imports

## BEM Methodology

The project follows the Block Element Modifier (BEM) methodology for consistent and maintainable CSS naming conventions. Example structure:

```scss
.result-card // Block
.result-card__header // Element
.result-card__list-item--reaction // Element with Modifier
```

## Layout

The component has two main layouts:

### Mobile (< 736px)

- Stacked layout with results and summary sections vertically aligned
- Full-width design
- Score circle and summary items optimized for smaller screens

### Desktop (≥ 736px)

- Side-by-side layout with results and summary sections
- Fixed width (max-width: 736px)
- Card-like appearance with shadow
- Hover states on the continue button

## Technical Details

### Fonts

The project uses the Hanken Grotesk font family with three weights:

- 500 (Medium)
- 700 (Bold)
- 800 (Extra Bold)

### Colors

#### Gradients

- Background: `hsl(252, 100%, 67%)` to `hsl(241, 81%, 54%)`
- Circle: `hsl(256, 72%, 46%)` to `hsla(241, 72%, 46%, 0)`

#### Category Colors

- Reaction: `hsl(0, 100%, 67%)`
- Memory: `hsl(39, 100%, 56%)`
- Verbal: `hsl(166, 100%, 37%)`
- Visual: `hsl(234, 85%, 45%)`

### JavaScript Implementation

The application dynamically loads and displays score data from a JSON file. Each category is rendered with its own icon, score, and styling. The implementation includes:

- Asynchronous data loading
- Dynamic DOM element creation
- Error handling for failed data fetches
- Custom styling based on category

## Local Development

To run this project locally:

1. Clone the repository
2. Install dependencies (if using a SCSS compiler)
3. Run SCSS compiler (e.g., `sass --watch scss:css`)
4. Open `index.html` in your browser
5. To modify scores, edit the `data.json` file

## Author

- Frontend Mentor - [@KP1976](https://www.frontendmentor.io/profile/YourUsername)
- Coded by Krzysztof Pawłowski

## Acknowledgments

Challenge by [Frontend Mentor](https://www.frontendmentor.io?ref=challenge)
