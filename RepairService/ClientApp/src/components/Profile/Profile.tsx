import * as React from 'react';
import EmployerProfile from './EmployerProfile/EmployerProfile';
import { connect } from 'react-redux';

export interface IAppProps {
}

class Profile extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
          <EmployerProfile></EmployerProfile>
      </div>
    );
  }
}

export default connect()(Profile);