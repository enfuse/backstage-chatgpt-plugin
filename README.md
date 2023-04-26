# Enfuse ChatGPT Plugin for Backstage
The Enfuse ChatGPT Plugin for Backstage takes user-inputted description of a desired file of any format and returns the file.

![ChatGPT Playground](https://github.com/enfuse/enfuse-backstage/blob/8ad2efbe5bccdda8c6a31ed4f4049702f32b4fa3/docs/Frontpage.png)

The more descriptive the prompt, the better the response! Note that the response will require additional time the larger the prompt, but the response's quality will increase.

# Features
* Temperature: Temperature will determine how creative the response will be, with a lower temperature returning a more focused and conservative output. A higher temperature will return a more creative response, but has the potential to be less coherent. 
* Max Tokens: Determines the length of the input + output.

![Setting Demonstration](https://github.com/enfuse/enfuse-backstage/blob/8ad2efbe5bccdda8c6a31ed4f4049702f32b4fa3/docs/settings.png)

# Requirements
1. A [Backstage](https://backstage.io/docs/getting-started/) application instance
2. The [backend](https://github.com/enfuse/backstage-chatgpt-backend) part of this plugin installed.

# Installation
1. Navigate to packages/app and run
```sh
    yarn add @enfuse/chatgpt-plugin-frontend
```


2. Navigate to your packages/app/src/App.tsx and include the following 

``` javascript 
import { ChatGPTFrontendPage } from '@enfuse/chatgpt-plugin-frontend';
....
<FlatRoutes>
        ....
        <Route path="/chatgpt" element={<ChatGPTFrontendPage />} />
</FlatRoutes>
```
