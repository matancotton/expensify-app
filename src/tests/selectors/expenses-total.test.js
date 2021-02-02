import getExpensesTotal from '../../selectors/expenses-toal';
import expenses from '../fixtures/expenses';

test('should return 0 for no expenses', () => {
    const total = getExpensesTotal([]);
    expect(total).toBe(0)
})

test('should correctly add up a single expense', () => {
    const total = getExpensesTotal([expenses[1]]);
    expect(total).toBe(109500)
})

test('should correctly add up a multiple expense', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114195)
})