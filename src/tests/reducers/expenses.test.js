import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should add an expense', () => {
    const expense = {
        id: '120',
        description: 'shoe',
        note: '',
        amount: 400,
        createdAt: 100
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    
    const state = expensesReducer(expenses, action);
    expect(state[3]).toEqual(expense)
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note: 'my wonderful shoe'
        }
    };
    
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toEqual('my wonderful shoe')
});

test('should not edit an expense if id was not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '45',
        updates: {
            note: 'my wonderful shoe'
        }
    };
    
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses
    }
    const expensesData = [
        {
            id: 'stam',
            description: 'none',
            amount: 0,
            createdAt: 0
        }
    ]
    const state = expensesReducer(expensesData,action);
    expect(state).toEqual(expenses); 
});

