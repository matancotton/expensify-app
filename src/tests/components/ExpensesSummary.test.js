import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with 1 expense totalling $94.34', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={9434}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpensesSummary with 2 expense totalling $94.34', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={9434}/>);
    expect(wrapper).toMatchSnapshot();
})