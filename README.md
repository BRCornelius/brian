# Brian

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.   
It is hosted at https://brian.corneliuses.com   
QA for this site can be found at http://qa-brian.corneliuses.com   

## Git Workflow
**Code repository can be found in [aws codecommit](https://console.aws.amazon.com/codesuite/codecommit/repositories/brcornelius/browse?region=us-east-1)**   
- Create your new branch off master  
- After committing changes, push your branch to the repo and create a pull request to the qa branch.   
*If the qa branch does not exist, first create a qa branch off master*   
- Get approval from the last two devs to push changes to the qa branch   
- Merge in the pull request   
- In your terminal `git pull origin qa && ng build --prod`   
- Update QA deployment branch with dist files from this latest build   
- Test scenarios on the QA branch   
- After testing, create a PR from the qa to master branch and alert administrator   

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  

## Code scaffolding

**Components**  
Run `ng generate component components/<category>/<component-name>` to generate a new component.   
-Component `category` can include:   
-- `common` for components that are reused across pages and in other components   
-- `lego` for components specific to the lego page   
-- `media` for components that display and play media content   
-- `recipes` for components specific to the lego page   
-- `workouts` for components specific to the workouts page   
- Naming convention for component selectors is `<category>-<component-name>`   
   
**Services**   
Run `ng generate service services/<category>/<service-name>` to generate a new service.   
- Service `category` can include:   
-- `actions` For external actions performed on behalf of the site   
-- `content` For fetching content to be displayed on the site   
-- `site` For internal site actions   
   
**Pipes**   
Run `ng generate pipe pipes/<pipe-name>` to generate a new pipe.   
   
**Interfaces**   
Run `ng generate interface interfaces/i-<interface-name>` to generate a new interface.   
   
**Other**   
You can also use `ng generate directive|class|guard|enum|module`.   
   
All services, components, interfaces, and pipes must be barreled and imported as a group into app.module.ts.   
   
Non-private keys are stored in the environment. Reach out to your administrator for access to private keys in LastPass.   

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
