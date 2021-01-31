import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { altFilters, filters } from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';



let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
                        filters={filters}
                        setTextFilter={setTextFilter}
                        sortByDate={sortByDate}
                        sortByAmount={sortByAmount}
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}/>);
});

test('should render ExpnseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpnseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    const value = 'some text'
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'date' }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount' }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate:altFilters.startDate, endDate:altFilters.endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate)
})

test('should handle date focus changes', () => {
    const focused = 'endDate'
    wrapper.find(DateRangePicker).prop('onFocusChange')(focused);
    expect(wrapper.state('calendarFocused')).toEqual(focused);
})