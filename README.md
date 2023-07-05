# IO Craft lib

IO Craft component library is for React, designed to provide a collection of reusable UI components for building web applications.

## Features

- Comprehensive set of reusable React components.
- Easy integration into new or existing React projects.
- Customizable styles and themes.
- Well-documented components with usage examples.

## Prerequisites

Before getting started with io craft, please ensure that your development environment meets the following requirements:

- Node version >= 14.x.x
- Npm version >= 8.x.x
- Nx version = 14.3.5
- Chrome with Redux dev tools extension

### Setup Node, Npm, and Nx on Ubuntu

To install and set up Node.js, Npm, and Nx on Ubuntu, follow these commands:

```bash
sudo apt-get update
sudo apt-get install nodejs npm
sudo apt-get install
sudo apt-get install curl
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install nodejs
sudo npm install -g nx@14.3.5
```
After installation, you can check the versions using the following commands:
```bash
node --version
npm --version
nx --version
```
## Setup Node, Npm, and Nx on Mac and Windows

To install and set up Node.js, Npm, and Nx on Mac and Windows, follow these steps:

Download the Node.js installer from the official website: https://nodejs.org/en/download/.
Choose the appropriate installer based on your system (32-bit or 64-bit) and run the installation.
Follow the installation wizard, accepting the terms of usage and specifying the installation path.
Once the installation is complete, verify the installation by running the following commands in the command prompt or terminal:
```bash
node -v
npm -v
nx -v
```
## How to use this library (DSL).
1. Clone the repository in you system using git. 
2. Move to cloned directory by command
   cd react-component-library-storybook
3. Checkout to development branch using cmd: ```git checkout development ```
4. Install all dependencies using :  ```npm install –force```
5. After successful installation run the component library using:
````nx run dsl:storybook````

- This will run storybook on url: http://localhost:4400
## How to use this library in any project:
To install io craft, you can use npm. Run the following command:
```bash
npm install io-craft-library
```
## Usage
Import the components you need from the io craft library and use them in your React application. Here's an example:

```bash
import React from 'react';
import { Button, Card, Input } from 'io-craft';

const App = () => {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Card>
        <Input type="text" placeholder="Enter your name" />
      </Card>
    </div>
  );
};

export default App;
```
For more detailed information on each component and its props, please refer to the documentation.

## Contributing
Contributions are welcome! If you'd like to contribute to io craft, please follow these steps:

- Fork the repository.
- Create a new branch for your feature/bug fix.
- Make your changes and commit them.
- Push your changes to your forked repository.
- Submit a pull request to the main repository.
- Please ensure that your code follows the     project's coding conventions and includes appropriate tests.

## Authors
- Mayur Yambal


## Contributing to IO Craft
Follow the contributing guidelines if you want to propose a change in the IO Craft core.

### Reporting Issues
If you experience or witness any unacceptable behavior while interacting with our project, please report it to the project maintainers by contacting [mayur.yambal@iauro.com]. All reports will be kept confidential.

### Code of Conduct
We are committed to providing a friendly, safe, and welcoming environment for all contributors and participants. Please review our Code of Conduct to understand our expectations for behavior.



## Links for reference:
1. Storybook version deployed on https://lib-react.gessa.io/ visit and check
how component library behaves by applying inputs


## License
This project is licensed.