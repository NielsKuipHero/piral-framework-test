# Playground

This is an interactive playground for developing a single micro frontend - known as a pilet.

The app shell chosen for this playground is the [sample-piral](https://www.npmjs.com/package/sample-piral) one. There are some other pilets published for it. You can watch this [Piral instance in action online](https://demo-full.piral.io/).

## Where to go?

Have a look at the [src/index.tsx](./src/index.tsx). This file is the entry module of the pilet. It exports a `setup` function that is used by an app shell to actually integrate the components from the micro frontend to the application.

The [src/MyPage.tsx](./src/MyPage.tsx) is a good example to see how one component (in this case a page) can actually use component(s) from other micro frontends. The mechanism is called "an extension component". The host component (in this case the page) is including an "extension slot", which will then be dynamically populated.

The trick with extension slots is that they allow the host to actually define the behavior. What if no extension component was registered for this extension slot? You can define a callback. What if you want to change the order of the extension components? Go ahead. What if want to change or wrap the renderings of these extension components? The API of an extension slot allows you to do that, too.

The example uses esbuild to build the code. You can change the used bundler by replacing `piral-cli-esbuild` in the [package.json](./package.json) with a different bundler, e.g., `piral-cli-vite` or `piral-cli-webpack5`. The choice is yours.
