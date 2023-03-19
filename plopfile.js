/* eslint-disable unicorn/prefer-module */
module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('basics', {
    description: 'Create any of the basic file types in this repository.',
    prompts: [
      {
        type: 'list',
        name: 'fileType',
        message: 'What do you want to generate?',
        choices: [
          {
            name: 'A React component with tests',
            value: 'reactComponent',
            short: 'React component'
          },
          {
            name: 'A Next.js page',
            value: 'nextPage',
            short: 'Next.js page'
          },
          {
            name: 'E2E tests for a page',
            value: 'e2eTests',
            short: 'E2E tests'
          }
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: function ({ fileType }) {
          if (fileType === 'e2eTests') {
            return "What is the url path of the page you want to test? (start with '/')"
          }

          if (fileType === 'nextPage') {
            return "what is the url path of the page you want to create? (without first '/')"
          }

          return `What is the name of the React component?`
        }
      }
    ],
    actions: function (data) {
      switch (data.fileType) {
        case 'reactComponent': {
          return [
            {
              type: 'add',
              path: 'src/components/{{kebabCase name}}/{{kebabCase name}}-component.tsx',
              templateFile: 'plop-templates/react-component/component.tsx.hbs'
            },
            {
              type: 'add',
              path: 'src/components/{{kebabCase name}}/{{kebabCase name}}-component.test.tsx',
              templateFile:
                'plop-templates/react-component/component.test.tsx.hbs'
            }
          ]
        }
        case 'nextPage': {
          return [
            {
              type: 'add',
              path: 'src/pages/{{name}}.tsx',
              templateFile: 'plop-templates/next-page/page.tsx.hbs'
            },
            {
              type: 'add',
              path: 'src/features/{{kebabCase name}}/{{kebabCase name}}-feature.tsx',
              templateFile: 'plop-templates/next-page/feature.tsx.hbs'
            },
            {
              type: 'add',
              path: 'src/features/{{kebabCase name}}/{{kebabCase name}}-feature.test.tsx',
              templateFile: 'plop-templates/next-page/feature.test.tsx.hbs'
            }
          ]
        }
        case 'e2eTests': {
          return [
            {
              type: 'add',
              path: 'playwright/e2e/{{kebabCase name}}/{{kebabCase name}}.spec.ts',
              templateFile: 'plop-templates/e2e-tests/e2e-tests.spec.ts.hbs'
            }
          ]
        }
        default: {
          throw new Error('Unknown file type', data.fileType)
        }
      }
    }
  })
}
