# Azure DevOps with SharePoint Framework 

The current sample includes node.js api and SPFx package to be deployed using Azure pipelines.
You can get started with this video. 

[![Community Demo - Setting up Azure DevOps Pipelines for SharePoint Framework solutions](https://img.youtube.com/vi/V6xEy6_2iTg/0.jpg)](https://www.youtube.com/watch?v=V6xEy6_2iTg "Community Demo - Setting up Azure DevOps Pipelines for SharePoint Framework solutions")

# "Why should you automate your SharePoint Framework project?", the PowerPoint presentation I used for the session

One Drive - [https://1drv.ms/p/s!Akhm5E9YUqeWgrBhBEXhsQrGvVXWQg](https://1drv.ms/p/s!Akhm5E9YUqeWgrBhBEXhsQrGvVXWQg​)

# PnP Samples Step by step guide

A PnP Sample step by steb guide can be found here:
[https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/react-jest-testing/devops](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/react-jest-testing/devops​)

### Other usefull links

- [https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-v1-nodejs-webapi](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-v1-nodejs-webapi)

- [https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-nodejs](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-nodejs​)

- [https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/deploy/azure-rm-web-app-deployment?view=vsts](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/deploy/azure-rm-web-app-deployment?view=vsts​)


### This is for my own reference when doing the demo

Nodejs setup

```sh

- script: |
    npm install
    npm run build
    npm test
  displayName: 'Node.js API npm install and build'

- task: PublishBuildArtifacts@1
  inputs:
    pathtoPublish: '$(Build.SourcesDirectory)/build/src' 
    artifactName: 'Publish Node API' 
  displayName: 'Publish Node API source'

- task: PublishBuildArtifacts@1
  inputs:
    pathtoPublish: '$(Build.SourcesDirectory)/web.config' 
    artifactName: 'Publish Node API' 
  displayName: 'Publish Node API config'

- task: PublishBuildArtifacts@1
  inputs:
    pathtoPublish: '$(Build.SourcesDirectory)/package.json' 
    artifactName: 'Publish Node API' 
  displayName: 'Publish Node API package.json'

```

Azure App Service Deploy