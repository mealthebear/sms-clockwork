# sms-clockwork

## Required Programs

This project requires Node.js version 14.15.0 or newer. To download the latest version of Node.js, please visit the following link below:

For MacOS, Linux, or Windows: [Install Node.js using nvm](https://github.com/nvm-sh/nvm)

For MacOS: [Install Node.js using Homebrew](https://formulae.brew.sh/formula/node)

For Windows: [Install Node.js using Chocolatey](https://community.chocolatey.org/packages/nodejs.install)

## Project Setup

### Cloning the Project

To clone the project locally using HTTPS, use the following command:

```
git clone https://github.com/mealthebear/sms-clockwork.git
```

To set the project as the current working directory from the cloning location, use the following command:

```
cd sms-clockwork
```

This project is using the Netlify platform to build Serverless functions. The Netlify CLI will be necessary to run server code locally. Install the Netlify CLI globally with the following command:

```
npm install -g netlify-cli
```

To test if the Netlify CLI is successfully installed, run the `netlify` command in your terminal. A list of commands should be displayed.

## Development

When beginning work on a new feature, start from the root branch by checking out the `main` branch.

```
git checkout main
```

Make sure to fetch all new changes so that your local `main` branch is up to date.

```
git fetch
```

Then, create a new branch and set it as the current branch. Be sure to give the new branch a name that's relevant to the feature you're developing.

```
git checkout -b [feature-name]
```

## Submitted a Pull Request

When you are finished working on your feature, be sure to push all of your changes to your branch. Afterwards, a pull request can be made using the Pull Requests tab on your GitHub repository.
