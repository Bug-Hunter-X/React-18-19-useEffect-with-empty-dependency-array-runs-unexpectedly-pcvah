# React 18/19 useEffect with empty dependency array runs unexpectedly

This repository demonstrates a subtle issue with the `useEffect` hook in React 18 and 19.  When using an empty dependency array `[]`, you might expect the effect to run only once on mount. However, this isn't always the case.

The issue is demonstrated in `bug.js`. The effect with the empty dependency array runs every time the component re-renders, even though no dependencies explicitly change.

`bugSolution.js` provides the correct implementation of a cleanup function to resolve the issue.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console logs and component behavior.

## Solution

The solution involves understanding the subtleties of `useEffect` in React 18 and 19. The correct use of the dependency array, or incorporating a cleanup function, ensures the effect runs only when needed. The correct solution is detailed in `bugSolution.js`.