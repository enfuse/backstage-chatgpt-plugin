# Enfuse ChatGPT Plugin for Backstage
The Enfuse ChatGPT Plugin for Backstage takes user-inputted description of a desired file of any format and returns the file.

[!ChatGPT Playground] (https://raw.githubusercontent.com/enfuse/enfuse-backstage/main/docs/frontpage.png?raw=true)

The more descriptive the prompt, the better the response! Note that the response will require additional time the larger the prompt, but the response's quality will increase.

# Features
    *Temperature:
        *Temperature will determine how creative the response will be, with a lower temperature returning a more focused and conservative output. A higher temperature will return a more creative response, but has the potential to be less coherent. 
    *Maximum Length:    
        *The length setting determines how long both the request and response are allowed to be.

[!Setting Demonstration] (https://raw.githubusercontent.com/enfuse/enfuse-backstage/main/docs/settings.png?raw=true)

# Releases
## v0.0.1
- Initial release

# Requirements
- Yarn
- Node v14
- Postgres  (running on Docker)

# Installation
## Postgres
Spin up a local postgres db with this:

```bash
docker run -itd -e POSTGRES_USER=${USERNAME} -e POSTGRES_PASSWORD=${psw} -p 5432:5432 --name postgresql postgres
```

Note: During the first time you run backstage, it will automatically create the db for itself.


## Environment variabels

```bash
export POSTGRES_USER=${username} 
export POSTGRES_PASSWORD=${psw} 
export POSTGRES_PORT=5432
export POSTGRES_HOST=localhost
export BACKSTAGE_GITHUB_TOKEN=${github_tokenn }
export OPENAI_API_KEY=${open_ai_key}
```


## Local Dev

To start the app locally, run:

```sh
yarn install
yarn dev
```
This will run both frontend and backend apps.

# Resources
### [Backstage](https://backstage.io)
