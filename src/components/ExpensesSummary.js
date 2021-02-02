import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-toal';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <h1>Viewing {props.expenseCount} {expenseWord} totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    expenseCount: selectExpenses(state.expenses,state.filters).length,
    expensesTotal: getExpensesTotal(selectExpenses(state.expenses,state.filters))
})

export default connect(mapStateToProps)(ExpensesSummary);