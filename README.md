# AI Chat web application

## How to run

### 1. Install deps

1. Run `nvm use` or install `node` version specified in `.nvmrc`
2. Run `npm ci`

### 2. Add your secrets

Create `.env` file in the root of the project and add your secrets values:
```
AI_CHAT_OPEN_AI_API_KEY=your_open_ai_api_key
AI_CHAT_AUTH0_DOMAIN=your_auth0_domain
AI_CHAT_AUTH0_CLIEN_ID=your_auth0_client_id
```
   
### 3. Start the app

Since it's only frontend part of the app, I recommend you to launch app by starting a dev server. You can also build a production versions for static files, but then you will need to serve them by yourself.

- Start dev server with app (**recomended to test app**)
  ```
  npm run start
  ```

- Build production versions for static files (you find output in `./dist`)
  ```
  npm run build
  ```