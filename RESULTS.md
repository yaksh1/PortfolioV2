# Changes for Tilted Card Portfolio

## Overview

This worktree implements a new design for the portfolio section using a `TiltedCard` component.

## Changes Made

1.  **Added `TiltedCard` Component**:
    *   Installed the `TiltedCard` component from `https://reactbits.dev/default/Components/TiltedCard` using `jsrepo`.
    *   The component files (`TiltedCard.jsx`, `TiltedCard.css`) are located in `src/blocks/Components/TiltedCard/`.

2.  **Updated `Portfolio.jsx`**:
    *   Replaced the existing `PortfolioCard` component with the new `TiltedCard` component.
    *   Imported `TiltedCard.jsx` and its corresponding CSS file `TiltedCard.css`.
    *   Mapped the `project` data to the props of the `TiltedCard` component (`title`, `description`, `imageUrl`, `tags`, `link`).
    *   Adjusted the grid layout to `gap-12` to better accommodate the new card design.

## Files Modified

*   `src/components/Portfolio.jsx`

## New Files Added

*   `src/blocks/Components/TiltedCard/TiltedCard.jsx`
*   `src/blocks/Components/TiltedCard/TiltedCard.css`

## To Test

1.  Run the application.
2.  Navigate to the "Portfolio" section.
3.  The projects should now be displayed using the new tilted card effect.