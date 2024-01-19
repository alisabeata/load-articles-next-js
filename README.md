This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started


#### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 


#### `npm run build`

Builds the app for production to the `dist` folder. 


#### `npm test`

Launches the test runner in the interactive watch mode. 



## Structure

```
project-root/
│
├── __tests__/
│   ├── __snapshots__/ 
│   │    └── snapshot.tsx.snap
│   └── snapshot.tsx // Test Page
│
├── src/
│   ├── app/  // the main router directory
│   │    ├── layout.tsx
│   │    └── page.tsx
│   │
│   ├── components/
│   │    ├── Button.test.tsx // Test Component
│   │    ├── Button.tsx
│   │    ├── DataView.test.tsx // Test Component
│   │    └── DataView.tsx
│   │
│   └── styles/ 
│        └── global.css
│
└── ...
```

## Description

Loads Articles by Click.

The `app` directory serves as the central hub for the main layout and router logic of the application.

`Button.tsx` is responsible for managing the click event and handling the various states associated with the button.

`DataView.tsx` is designed to display the loaded articles.


