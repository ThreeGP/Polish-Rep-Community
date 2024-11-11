# Project Roadmap: Infinite Scroll Item Viewer with Search and Custom Links

## Project Overview

This project aims to create a single-page application displaying items from an XML file. Key features include infinite scroll, random item loading, a search box, and custom link actions in the header.

### Features:

1. Display a list of 20 random items initially.
2. Load additional random items (20 at a time) as the user scrolls down.
3. Implement a search box to filter displayed items.
4. Create a header with a "Discord" link redirecting to the Discord server.
5. Create a "Link Noverter" for custom link conversion (exact functionality TBD).

---

## Development Roadmap

### Phase 1: Project Setup

1. **Initialize Project Structure**:

   - Set up a new project directory with standard HTML, CSS, and JavaScript files.
   - Add a placeholder XML file with item data to simulate actual data for development.

2. **Basic HTML Layout**:
   - Create a basic HTML structure with:
     - A header for the "Discord" and "Link Noverter" links.
     - A main content area to display items.
     - A search box above the main content area.

### Phase 2: Displaying Items

1. **Parsing XML Data**:

   - Write JavaScript code to parse the XML file and retrieve item data.
   - Format data into an array of item objects for easier manipulation.

2. **Randomize Items**:

   - Create a function to select 20 random items from the XML data.

3. **Display Items on the Page**:
   - Use JavaScript to dynamically render 20 items on the page, styled with CSS.

### Phase 3: Infinite Scrolling

1. **Add Scroll Event Listener**:

   - Implement an event listener that detects when the user reaches the bottom of the page.

2. **Load Additional Items**:

   - When the scroll event triggers, randomly select another 20 items and append them to the existing list.

3. **Prevent Duplicate Items**:
   - Implement logic to ensure that items already displayed are not reloaded.

### Phase 4: Search Functionality

1. **Search Box Implementation**:

   - Create a search input box at the top of the main content area.

2. **Search Filtering**:
   - Write a search function to filter displayed items based on the user's input.
   - Adjust the item display to show only items that match the search term, updating dynamically as the user types.

### Phase 5: Header Links

1. **Discord Link**:

   - Set up the "Discord" text in the header as a hyperlink to the Discord server.

2. **Link Noverter Function**:
   - Create a placeholder function for the "Link Noverter" feature.
   - Update this function later according to specific link conversion requirements.

### Phase 6: Styling and Testing

1. **Basic CSS Styling**:

   - Style the header, search box, and items for a clean, responsive layout.

2. **Testing**:
   - Test each feature individually (loading items, infinite scroll, search box, header links).
   - Ensure smooth infinite scrolling and that random items are displayed without duplicates.

### Future Enhancements

1. **Link Noverter Customization**:

   - Implement the exact conversion function for the "Link Noverter" link once the specification is defined.

2. **Performance Optimization**:
   - Optimize XML parsing and loading logic for larger data sets.
