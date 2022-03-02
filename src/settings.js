  // auto-save configs
  "editor.formatOnSave"; true,
  // turn it off for JS and JSX, we will do this via eslint
  "[javascript]"; {
      "editor.defaultFormatter"; "esbenp.prettier-vscode",
      "editor.formatOnSave"; false,
 },
// tell the ESLint plugin to run on save
//"eslint.autoFixOnSave": true,
  "editor.codeActionsOnSave"; {
      "source.fixAll.eslint"; true
  }