// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let badgeLink;
  let link;
  //'MIT', 'GNU GPLv3', 'Apache License 2.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Mozilla Public License 2.0'
  switch (data.license) {
    case 'MIT':
      badgeLink = 'https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT'
      link = '(https://opensource.org/licenses/MIT)'
      break;
    case 'GNU GPLv3':
      badgeLink = 'https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0'
      link = '(https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'Apache License 2.0':
      badgeLink = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0'
      link = 'https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'BSD 2-Clause "Simplified" License':
      badgeLink = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause'
      link = '(https://opensource.org/licenses/BSD-2-Clause)'
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      badgeLink = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause'
      link = '(https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'Mozilla Public License 2.0':
      badgeLink = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0'
      link = '(https://opensource.org/licenses/MPL-2.0)'
      break;
    default:
      badgeLink = 'https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT'
      link = '(https://opensource.org/licenses/MIT)'
  }
  if (data.license) {
    return ` 
    ![License](${badgeLink})`
  } else return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  //'MIT', 'GNU GPLv3', 'Apache License 2.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Mozilla Public License 2.0'
  if (data.license) {
    return `-[License](#license)`
  } else return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data) {
    return `## License
    This project was created using:<br>
    ${data}}<br>
    For more information about this license, click the above link to view the details of the license.`
  } else return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
# ${data.title} 
${renderLicenseBadge(data.license)}

## Description 

${data.description} 

## Table of Contents
- [Description](#description) 
- [Installation](#installation) 
- [Usage](#usage) 
- [Tests](#tests) 
- [Questions](#questions)  
- [Contributing](#contributing) 
${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Tests

${data.test}


## Contributing

If you're interested in contributing to the project, please read our Contributing Guidelines for instructions on how to get started. We welcome contributions of all kinds, including code, documentation, bug fixes, and feature enhancements.

${data.contributing}

#### Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

  - Fork the repository
  - Create a new branch (git checkout -b feature/your-feature)
  - Make your changes
  - Commit your changes (git commit -am 'Add some feature')
  - Push to the branch (git push origin feature/your-feature)
  - Create a new Pull Request

${renderLicenseSection(data.license)}

### Usage Instructions

${data.usage}

## Questions

If you have any questions or need assistance with the project, please feel free to reach out to us through GitHub Discussions. You can start a new discussion thread to ask a question or join an existing discussion. 

[GitHub](https://github.com/${data.github}) 
[Email](${data.email})


`;
}

module.exports = generateMarkdown;