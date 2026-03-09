# mern-task-managermern-task-manager
│
├── backend
│
└── frontend
     │
     ├── public
     │
     └── src
         │
         ├── assets
         │
         ├── components
         │   ├── common
         │   │      Navbar.jsx
         │   │      Loader.jsx
         │   │
         │   ├── board
         │   │      BoardCard.jsx
         │   │      CreateBoard.jsx
         │   │
         │   ├── list
         │   │      ListColumn.jsx
         │   │
         │   └── card
         │          TaskCard.jsx
         │          CardModal.jsx
         │
         ├── pages
         │   ├── auth
         │   │      Login.jsx
         │   │      Register.jsx
         │   │
         │   ├── Dashboard.jsx
         │   └── BoardPage.jsx
         │
         ├── redux
         │   ├── store.js
         │   └── slices
         │        authSlice.js
         │        boardSlice.js
         │
         ├── services
         │      api.js
         │
         ├── hooks
         │      useAuth.js
         │
         ├── routes
         │      AppRoutes.jsx
         │
         ├── styles
         │      global.css
         │      variables.css
         │      responsive.css
         │
         ├── utils
         │      constants.js
         │
         ├── App.jsx
         └── main.jsx