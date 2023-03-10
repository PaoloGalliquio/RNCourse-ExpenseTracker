import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesItem from './ExpensesItem';

function renderExpenseItem(itemData){
  return <ExpensesItem {...itemData.item}/>;
}

const ExpensesList = ({expenses}) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList

const styles = StyleSheet.create({})