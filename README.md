# How to create and use a custom mount point in Red Hat Developer Hub

## Overview

> Note: The Dynamic Plugin functionality is a tech preview feature of Red Hat Developer Hub and is still under active development.  Aspects of developing, packaging and deployment of dynamic plugins are subject to change

This example illustrates how to implement a page that creates a new custom mount point from a dynamic plugin for Red Hat Developer Hub.  The project consists of three plugins:

- plugins/custom-mount-point-host - The plugin that contains a page with a custom mount point
- plugins/simple-test-card-blue - A plugin that exports a blue card
- plugins/simple-test-card-green - A plugin that exports a green card

The example components are composed into a page in Developer Hub using the configuration in the provided [app-config.yaml](./app-config.yaml) file.

## Prerequisites

- node
- yarn

To run this example locally:

- podman (or docker, podman 5.2.2 was used during development)

## Installing and Building

Clone this repository and run the following commands:

```bash
yarn install
```

```bash
yarn tsc
```

```bash
yarn build
```

## Preparing to run the example

We'll run this example in a container locally, first the exported dynamic plugins must be gathered up into the `dynamic-plugins-root` folder.  Do this by running the included script:

```bash
yarn export-local
```

When run the `dynamic-plugins-root` folder should look contain the following directories:

- dynamic-plugin-examples-backstage-plugin-custom-mount-point-host-dynamic
- dynamic-plugin-examples-backstage-plugin-simple-test-card-green-dynamic
- dynamic-plugin-examples-backstage-plugin-simple-test-card-blue-dynamic

## Running the example

Once the plugins are in place, use the provided script to launch the Developer Hub container on your local machine:

```bash
bash run-example.sh
```

After verifying there are no errors printed on the console point a browser at [http://localhost:7007/custom-mount-point](http://localhost:7007/custom-mount-point) and the example should be visible.

![Example screenshot with a custom mount point consisting of a green box and a blue box](./screenshot.png)

## Running Plugin Development Servers

Each of the three main example plugins (`custom-mount-point-host`, `simple-test-card-blue`, and `simple-test-card-green`) has its own development server setup. This allows you to work on and view the plugin's components in isolation. These development servers use the `app-config.yaml` located in the root of this repository for their configuration.

To start the development server for a specific plugin, run the corresponding command from the root of this repository:

### Custom Mount Point Host Plugin

This plugin demonstrates the custom mount point. Its development server will render the `CustomMountPointHostPage` with components dynamically loaded via a mock Scalprum setup (as configured in its `dev/index.tsx`).

```bash
yarn workspace @dynamic-plugins-examples/backstage-plugin-custom-mount-point-host start --config ../../app-config.yaml
```

The page will be available at http://localhost:7007/custom-mount-point-host-dev.

### Simple Test Card Blue Plugin

This plugin exports a simple blue card. Its development server will render this card on a dedicated page.

```bash
yarn workspace @dynamic-plugins-examples/backstage-plugin-simple-test-card-blue start --config ../../app-config.yaml
```

The page will be available at http://localhost:7007/simple-test-card-blue-dev.

### Simple Test Card Green Plugin

This plugin exports a simple green card. Its development server will render this card on a dedicated page.

```bash
yarn workspace @dynamic-plugins-examples/backstage-plugin-simple-test-card-green start --config ../../app-config.yaml
```

The page will be available at http://localhost:7007/simple-test-card-green-dev.