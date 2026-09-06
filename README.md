# Portfolio (Angular)

An Angular (standalone components, Angular 18) rebuild of the portfolio site, split into
reusable components:

- `app-nav` — sticky top navigation
- `app-hero` — hero section with the mouse-glow effect
- `app-work` — the three project cards, including:
  - `app-todo-demo` — live to-do list demo
  - `app-tictactoe-demo` — live tic-tac-toe demo
- `app-stack` — technical stack grid
- `app-experience` — timeline
- `app-contact` — contact panel
- `app-footer` — footer

Scroll-in animations are handled by a small `appReveal` directive (using
`IntersectionObserver`) instead of the original vanilla-JS script.

## Getting started

1. Open this folder in VS Code.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the dev server:

   ```bash
   npm start
   ```

4. Open http://localhost:4200 in your browser.

## Build for production

```bash
npm run build
```

Output goes to `dist/portfolio-angular`.

## Notes

- Update the placeholder email, LinkedIn URL, and the "Enterprise Operations Project" card
  in `src/app/components/contact` and `src/app/components/work` with your real details.
- All shared design tokens (colors, spacing, animations) live in `src/styles.css`.
