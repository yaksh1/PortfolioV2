# Skill Section Update

I have updated the Skills section with a new layout and content.

## Changes Made:

1.  **Modified `src/components/Skills.jsx`:**
    *   Replaced the entire content of the component with a new layout based on the provided markdown.
    *   The new layout is a grid of cards, each containing a category of skills.
    *   The styling of the cards, titles, icons, and tags has been updated to match the website's dark theme, using purples and grays.
    *   Removed the bento grid layout to make all skill cards of equal size.
    *   Updated the grid to display a maximum of two columns on medium screens and larger.
    *   Decreased the overall width of the skills section for a more compact layout.
    *   Added a hover animation to each skill card, causing it to scale up smoothly on hover.
    *   Added a border glow effect to the skill cards on hover for a more dynamic look.

2.  **Modified `index.html`:**
    *   Added a link to Google's Material Icons stylesheet to support the icons used in the new skills section.

3.  **File Deletion:**
    *   Removed the temporary `skill.md` file as it is no longer needed.

4.  **Modified `src/App.jsx`:**
    *   Removed the `AuroraCursor` component and its related code to disable the purple mouse aura effect.
