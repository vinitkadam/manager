import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Vinit"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="777-777-7777"
          />
        </CardSection>

        <CardSection>
          <Button>
            CREATE
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
