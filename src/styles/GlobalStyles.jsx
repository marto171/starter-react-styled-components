import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;
      
    --color-blue-100: #e0f2fe;
    --color-blue-200: #bee3f8;
    --color-blue-300: #90cdf4;
    --color-blue-400: #63b3ed;
    --color-blue-500: #4299e1;
    --color-blue-600: #3182ce;
    --color-blue-700: #0369a1;
    --color-blue-800: #075985;
    --color-blue-900: #0c4a6e;
      
    --color-green-100: #dcfce7;
    --color-green-200: #bbf7d0;
    --color-green-300: #86efac;
    --color-green-400: #4ade80;
    --color-green-500: #22c55e;
    --color-green-600: #16a34a;
    --color-green-700: #15803d;
    --color-green-800: #166534;
    --color-green-900: #14532d;
      
    --color-yellow-100: #fef9c3;
    --color-yellow-200: #fef08a;
    --color-yellow-300: #fde047;
    --color-yellow-400: #facc15;
    --color-yellow-500: #eab308;
    --color-yellow-600: #ca8a04;
    --color-yellow-700: #a16207;
    --color-yellow-800: #854d0e;
    --color-yellow-900: #713f12;
      
    --color-silver-100: #e5e7eb;
    --color-silver-200: #d2d6dc;
    --color-silver-300: #9fa6b2;
    --color-silver-400: #6b7280;
    --color-silver-500: #4b5563;
    --color-silver-600: #374151;
    --color-silver-700: #252f3f;
    --color-silver-800: #161e2e;
    --color-silver-900: #0d131e;
      
    --color-indigo-100: #e0e7ff;
    --color-indigo-200: #c7d2fe;
    --color-indigo-300: #a5b4fc;
    --color-indigo-400: #818cf8;
    --color-indigo-500: #6366f1;
    --color-indigo-600: #4f46e5;
    --color-indigo-700: #4338ca;
    --color-indigo-800: #3730a3;
    --color-indigo-900: #312e81;

    --color-red-100: #fee2e2;
    --color-red-200: #fecaca;
    --color-red-300: #fca5a5;
    --color-red-400: #f87171;
    --color-red-500: #ef4444;
    --color-red-600: #dc2626;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;
    --color-red-900: #7f1d1d;

    --backdrop-color: rgba(255, 255, 255, 0.1);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    --image-grayscale: 0;
    --image-opacity: 100%;
  }
  
  &.dark-mode {
    --color-grey-0: #18212f;
    --color-grey-50: #111827;
    --color-grey-100: #1f2937;
    --color-grey-200: #374151;
    --color-grey-300: #4b5563;
    --color-grey-400: #6b7280;
    --color-grey-500: #9ca3af;
    --color-grey-600: #d1d5db;
    --color-grey-700: #e5e7eb;
    --color-grey-800: #f3f4f6;
    --color-grey-900: #f9fafb;

    --color-blue-100: #075985;
    --color-blue-200: #0369a1;
    --color-blue-300: #3182ce;
    --color-blue-400: #4299e1;
    --color-blue-500: #63b3ed;
    --color-blue-600: #90cdf4;
    --color-blue-700: #e0f2fe;
    --color-blue-800: #eff6ff;
    --color-blue-900: #f9fafb;
      
    --color-green-100: #166534;
    --color-green-200: #15803d;
    --color-green-300: #16a34a;
    --color-green-400: #22c55e;
    --color-green-500: #4ade80;
    --color-green-600: #86efac;
    --color-green-700: #dcfce7;
    --color-green-800: #f0fff4;
    --color-green-900: #f7fff5;
      
    --color-yellow-100: #854d0e;
    --color-yellow-200: #a16207;
    --color-yellow-300: #ca8a04;
    --color-yellow-400: #eab308;
    --color-yellow-500: #facc15;
    --color-yellow-600: #fde047;
    --color-yellow-700: #fef9c3;
    --color-yellow-800: #fffbeb;
    --color-yellow-900: #fffcf5;
      
    --color-silver-100: #374151;
    --color-silver-200: #4b5563;
    --color-silver-300: #6b7280;
    --color-silver-400: #9ca3af;
    --color-silver-500: #d1d5db;
    --color-silver-600: #e5e7eb;
    --color-silver-700: #f3f4f6;
    --color-silver-800: #e5e7eb;
    --color-silver-900: #d1d5db;
      
    --color-indigo-100: #3730a3;
    --color-indigo-200: #4338ca;
    --color-indigo-300: #4f46e5;
    --color-indigo-400: #6366f1;
    --color-indigo-500: #818cf8;
    --color-indigo-600: #a5b4fc;
    --color-indigo-700: #e0e7ff;
    --color-indigo-800: #f0f5ff;
    --color-indigo-900: #f9fafb;

    --color-red-100: #7f1d1d;
    --color-red-200: #991b1b;
    --color-red-300: #b91c1c;
    --color-red-400: #dc2626;
    --color-red-500: #ef4444;
    --color-red-600: #f87171;
    --color-red-700: #fca5a5;
    --color-red-800: #fecaca;
    --color-red-900: #fee2e2;

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;
  }
  
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;
  
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
    max-width: 100%;
    height: auto;     
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;

export default GlobalStyles;