import * as React from 'react';
import styles from './NodeFrontend.module.scss';
import { INodeFrontendProps } from './INodeFrontendProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { AadTokenProvider } from '@microsoft/sp-http';

export default class NodeFrontend extends React.Component<INodeFrontendProps, {}> {

  public componentDidMount() {
    
    this.props.aadTokenProvider
    .getTokenProvider()
    .then((tokenProvider: AadTokenProvider): Promise<string> => {
      // retrieve access token for the enterprise API secured with Azure AD
      return tokenProvider.getToken('74f4223e-fb8a-499f-b851-2ae8c72553fa');
    })
    .then((accessToken: string): void => {
        console.log(accessToken);
    });
  }

  public render(): React.ReactElement<INodeFrontendProps> {
    return (
      <div className={ styles.nodeFrontend }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
