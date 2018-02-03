import React, { Component } from 'react';
import _ from 'lodash';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    console.log('componentWillMount invoked');
    this.props.employeesFetch();

    //render the list of employees
    //this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered cloneWithRows
    // this.props will still be the old set of props

    //render list of employees after fetching from firebase
    console.log('componentWillReceiveProps invoked');
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.DataSource = ds.cloneWithRows(employees);
  }

  render() {
    console.log(this.props);
    return (
      <View />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  console.log({ employees });

  return { employees };
};

export default connect(null, { employeesFetch })(EmployeeList);
