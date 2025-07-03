<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">TELEGRAM-BOT</h1></p>
<p align="center">
	<em>Empowering bots, connecting worlds with code.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/NageshMandal/telegram-bot?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/NageshMandal/telegram-bot?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/NageshMandal/telegram-bot?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/NageshMandal/telegram-bot?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

The telegram-bot project is a versatile solution that simplifies weather updates delivery via Telegram. With real-time weather monitoring, user subscriptions management, and customizable bot settings, it offers seamless automation for admins. Ideal for weather enthusiasts, admins, and developers seeking efficient weather information dissemination.

---

## 👾 Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Utilizes **React** for building a dynamic and interactive user interface.</li><li>Integrates **Axios** for efficient API communication and data fetching.</li><li>Employs **React Router** for managing client-side routing and navigation.</li><li>Ensures **modularity** by organizing components into separate files for reusability and maintainability.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Maintains **code consistency** and readability across the codebase.</li><li>Follows **best practices** for React development, including component-based architecture and state management.</li><li>Implements **unit tests** using **@testing-library/react** to ensure code reliability and functionality.</li></ul> |
| 📄 | **Documentation** | <ul><li>Provides detailed **documentation** for installation, usage, and testing procedures using **npm**.</li><li>Includes **file-specific documentation** explaining the purpose and functionality of key files like `package.json` and `App.js`.</li><li>Offers insights into **dependencies** and their roles within the project structure.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrates **Axios** for seamless API communication and data retrieval.</li><li>Utilizes **React Router** for efficient client-side routing and navigation.</li><li>Incorporates **@testing-library/jest-dom** for enhanced testing capabilities and assertions.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Organizes components into separate files for **reusability** and **maintainability**.</li><li>Follows a **component-based architecture** for clear separation of concerns.</li><li>Ensures **scalability** by structuring the codebase in a modular fashion.</li></ul> |
| 🧪 | **Testing**       | <ul><li>Implements **unit tests** using **@testing-library/react** for ensuring code reliability.</li><li>Enhances **testing capabilities** with custom matchers in `setupTests.js` for DOM node assertions.</li><li>Facilitates **improved test coverage** and **UI integrity** across components.</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Optimizes **web performance** by reporting web vitals using the `reportWebVitals.js` file.</li><li>Utilizes **React** for efficient rendering and updating of UI components.</li><li>Ensures **fast data retrieval** through **Axios** for seamless user interactions.</li></ul> |
| 🛡️ | **Security**      | <ul><li>Enhances **security** by intercepting requests in `api.js` to attach authorization tokens.</li><li>Implements **protected routing** in `ProtectedRoute.js` for secure access control.</li><li>Maintains **user authentication** in `Login.js` for secure login functionality.</li></ul> |

---

## 📁 Project Structure

```sh
└── telegram-bot/
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── api.js
        ├── components
        ├── index.css
        ├── index.js
        ├── logo.svg
        ├── pages
        ├── reportWebVitals.js
        └── setupTests.js
```


### 📂 Project Index
<details open>
	<summary><b><code>TELEGRAM-BOT/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- The `package-lock.json` file in the project structure defines the dependencies and versions required for the client application<br>- It ensures that the correct versions of libraries like React, Axios, and testing utilities are used, maintaining consistency and stability in the project's architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/package.json'>package.json</a></b></td>
				<td>- Manages dependencies and scripts for the client-side of the project<br>- Handles testing, routing, HTTP requests, and build configurations<br>- Ensures compatibility with various browsers and provides development tools<br>- Supports React components and optimizes web performance.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/index.css'>index.css</a></b></td>
				<td>- Define the global styling for the project, ensuring a consistent look and feel across all pages<br>- Sets the base font, background color, and text color for the entire application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/App.css'>App.css</a></b></td>
				<td>- Define styling for the main application layout, including center alignment, responsive logo size, header appearance, and link colors<br>- Implement animation for the spinning logo based on user motion preferences.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/App.test.js'>App.test.js</a></b></td>
				<td>- Tests the rendering of the 'learn react' link in the App component using @testing-library/react<br>- Verifies that the link is present in the rendered output<br>- This file ensures the correct display of the key link in the App component, maintaining UI integrity across the codebase architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/setupTests.js'>setupTests.js</a></b></td>
				<td>- Enhances Jest testing capabilities by incorporating custom matchers for DOM node assertions<br>- Facilitates improved testing of React components by enabling assertions on DOM elements<br>- Integrates '@testing-library/jest-dom' to streamline testing processes and enhance test coverage within the codebase architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/App.js'>App.js</a></b></td>
				<td>- Manages user authentication and routing within the React application<br>- Controls user access to different pages based on login status, utilizing React Router for navigation<br>- Handles user login and logout functionality, persisting login state using local storage<br>- Facilitates seamless navigation between Dashboard, Users, and Bot Settings pages.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/reportWebVitals.js'>reportWebVitals.js</a></b></td>
				<td>- Exports a function to report web vitals performance metrics by importing 'web-vitals' library and calling specific functions to measure Core Web Vitals like CLS, FID, FCP, LCP, and TTFB<br>- This function allows tracking and analyzing key performance indicators for web applications.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/api.js'>api.js</a></b></td>
				<td>- Enables API communication by creating an instance of Axios with a base URL<br>- Intercepts requests to attach a token for authorization.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/index.js'>index.js</a></b></td>
				<td>- Renders the React application by creating a root element and rendering the main App component<br>- This file serves as the entry point for the project, initiating the rendering process for the entire application architecture.</td>
			</tr>
			</table>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/components/Login.js'>Login.js</a></b></td>
						<td>- Enables user authentication through an admin login form<br>- Validates credentials against environment variables, generates a token upon successful login, and stores it locally<br>- Displays a visually appealing UI with logo, input fields, and a login button<br>- Designed for seamless user experience and secure access control within the application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/components/Footer.js'>Footer.js</a></b></td>
						<td>Defines the footer component for the Telegram Weather Bot, displaying copyright information and styling.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/components/ProtectedRoute.js'>ProtectedRoute.js</a></b></td>
						<td>- Enables protected routing by checking for a token in local storage<br>- Renders children components if token exists; otherwise, redirects to the homepage.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/components/Users.js'>Users.js</a></b></td>
						<td>- Manages user data display and interactions within the application, including subscribing, blocking, and deleting users<br>- Fetches user data from the API and provides actions like unsubscribing, resubscribing, blocking, unblocking, and deleting users<br>- Displays user information in a structured table format with corresponding action buttons.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/components/Navbar.js'>Navbar.js</a></b></td>
						<td>- Implements a responsive Navbar component with logo, navigation links, and logout button<br>- Handles user interactions and navigation using React Router<br>- Enhances user experience with hover effects and a clean design<br>- Supports seamless user logout functionality.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>pages</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/pages/BotSettings.js'>BotSettings.js</a></b></td>
						<td>- Manages bot settings display and editing, fetching data from the server, and updating changes<br>- Renders bot details in a table with an option to edit and save modifications<br>- Handles user interactions for bot settings management within the application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/pages/Dashboard.js'>Dashboard.js</a></b></td>
						<td>- Dashboard component renders an Admin Panel interface with a Navbar, displaying real-time weather updates via Telegram<br>- It manages user subscriptions, weather monitoring, and bot settings using OpenWeather API and MongoDB<br>- The design emphasizes clean aesthetics and automation.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/src/pages/Users.js'>Users.js</a></b></td>
						<td>- Facilitates user interaction by rendering a page displaying user information<br>- Includes a navigation bar for easy access and a user component for data presentation<br>- Supports user logout functionality.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- public Submodule -->
		<summary><b>public</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/public/index.html'>index.html</a></b></td>
				<td>Defines the structure and content of the project's main HTML file, setting up essential metadata, links, and elements for a React web application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/public/manifest.json'>manifest.json</a></b></td>
				<td>- Define the app's visual and functional aspects by configuring its manifest.json file<br>- This file specifies the app's name, icons, start URL, display mode, theme color, and background color<br>- It plays a crucial role in defining the app's appearance and behavior when added to a user's device.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot/blob/master/public/robots.txt'>robots.txt</a></b></td>
				<td>Define crawling permissions for search engines by specifying rules in the robots.txt file.</td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with telegram-bot, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm


### ⚙️ Installation

Install telegram-bot using one of the following methods:

**Build from source:**

1. Clone the telegram-bot repository:
```sh
❯ git clone https://github.com/NageshMandal/telegram-bot
```

2. Navigate to the project directory:
```sh
❯ cd telegram-bot
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




### 🤖 Usage
Run telegram-bot using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


### 🧪 Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
## 📌 Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/NageshMandal/telegram-bot/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/NageshMandal/telegram-bot/issues)**: Submit bugs found or log feature requests for the `telegram-bot` project.
- **💡 [Submit Pull Requests](https://github.com/NageshMandal/telegram-bot/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/NageshMandal/telegram-bot
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/NageshMandal/telegram-bot/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=NageshMandal/telegram-bot">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 🙌 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
