# Enfuse ChatGPT Plugin for Backstage
The Enfuse ChatGPT Plugin for Backstage takes user-inputted description of a desired file of any format and returns the file.

![ChatGPT Playground](https://github.com/enfuse/enfuse-backstage/blob/8ad2efbe5bccdda8c6a31ed4f4049702f32b4fa3/docs/Frontpage.png)

The more descriptive the prompt, the better the response! Note that the response will require additional time the larger the prompt, but the response's quality will increase.

# Features
* Temperature:
    * Temperature will determine how creative the response will be, with a lower temperature returning a more focused and conservative output. A higher temperature will return a more creative response, but has the potential to be less coherent. 
* Maximum Length:    
    * The length setting determines how long both the request and response are allowed to be.

![Setting Demonstration](https://github.com/enfuse/enfuse-backstage/blob/8ad2efbe5bccdda8c6a31ed4f4049702f32b4fa3/docs/settings.png)

# Requirements
1. A [Backstage](https://backstage.io/docs/getting-started/) application instance
2. Yarn

# Installation
Run 
```sh
    yarn add backstage-chatgpt-plugin
```
Then run 
```sh
    yarn install
```

# Configuration

1. This plugin requires credential details. This should be provided in the backstage configuration as shown below:

    ```yml
    //app-config.yml or app-config-local.yml
    azureBuildpacks:
    credentials:
        tenantId: <tenant-id>
        clientId: <client-id>
    ```
