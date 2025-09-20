# Hero Section Update

I have updated the Hero section to include a showcase for the Kortex Chrome extension.

## Changes Made:

1.  **Modified `src/components/Hero.jsx`:**
    *   Changed the layout to a two-column grid on medium screens and up.
    *   The left column contains the existing heading and introduction text.
    *   The right column now features a new card that showcases the Kortex Chrome extension.
    *   The card includes:
        *   An image of the extension.
        *   A title: "Proudly Featured by Google".
        *   A description of the extension.
        *   "As Seen On" badges for the Chrome Web Store and a XDA Developers blog.
        *   Call-to-action buttons: "Add to Chrome" and "Read the Blog".

2.  **File Conversions:**
    *   The provided HTML for the showcase card was converted to JSX to be used in the React component.
    *   This included changing `class` to `className` and updating SVG attributes like `fill-rule` to `fillRule`.

## Link Updates:

*   Updated the "Add to Chrome" button to link to the official Chrome Web Store page for Kortex.
*   Updated the "Read the Blog" button to link to the XDA Developers article about Kortex.
*   Updated the blog name from "TechCrunch Blog" to "XDA Developers".

## Styling Updates:

*   The "Add to Chrome" button has been restyled to match the website's theme. It now features a purple-to-yellow gradient background.
*   **Update:** The "Add to Chrome" button style has been updated again to match the "Get in touch" button, featuring a solid yellow background with black text for a consistent look and feel.

## Image Fix:

*   Fixed the broken image for the Kortex showcase by replacing the invalid link with a local image (`promo.png`) and importing it correctly within the component.

## Layout Adjustments:

*   Adjusted the vertical alignment of the hero section content to move it higher on the page. The content is now aligned to the top of its container rather than being vertically centered.
*   **Update:** Further adjusted the vertical alignment by reducing the top padding to move the content higher on the page.
*   **Update 2:** Reduced the top padding even further for a higher placement of the content.

## Animation:

*   Added a floating animation to the Kortex showcase card to make it more dynamic and visually appealing.
*   **Update:** The floating animation has been updated to be more 'cloud-like', with a slower and more gentle movement.
*   **Update 2:** Increased the intensity of the floating animation to make it more noticeable for debugging purposes.

## UI Improvement:

*   Made the "VIEW PROJECTS" text clickable by wrapping both the icon and the text in a single `<a>` tag, improving user experience and accessibility.