# Enfuse ChatGPT Plugin for Backstage
The Enfuse ChatGPT Plugin for Backstage takes user-inputted description of a desired file of any format and returns the file.

![ChatGPT Playground](https://github.com/enfuse/enfuse-backstage/blob/8ad2efbe5bccdda8c6a31ed4f4049702f32b4fa3/docs/Frontpage.png)

The more descriptive the prompt, the better the response! Note that the response will require additional time the larger the prompt, but the response's quality will increase.

# Features
*Temperature:
    *Temperature will determine how creative the response will be, with a lower temperature returning a more focused and conservative output. A higher temperature will return a more creative response, but has the potential to be less coherent. 
*Maximum Length:    
    *The length setting determines how long both the request and response are allowed to be.

![Setting Demonstration](https://github.com/enfuse/enfuse-backstage/blob/8ad2efbe5bccdda8c6a31ed4f4049702f32b4fa3/docs/settings.png)

## Getting started

Your plugin has been added to the example app in this repository, meaning you'll be able to access it by running `yarn start` in the root directory, and then navigating to [/chatgpt-frontend](http://localhost:3000/chatgpt-frontend).

You can also serve the plugin in isolation by running `yarn start` in the plugin directory.
This method of serving the plugin provides quicker iteration speed and a faster startup and hot reloads.
It is only meant for local development, and the setup for it can be found inside the [/dev](./dev) directory.
