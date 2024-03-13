let transactions = [];
let totalExpenses = 0;
let totalIncome = 0;

const transactionTypeSelect = document.getElementById('transaction-type');
const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const transactionTableBody = document.getElementById('transaction-table-body');
const totalExpensesElement = document.getElementById('total-expenses');
const totalIncomeElement = document.getElementById('total-income');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function(){
    const transactionType = transactionTypeSelect.value;
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date= dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (date === '') {
        alert('Please select a date');
        return;
    }

    if (transactionType === 'Expense') {
        transactions.push({ type: 'Expense', category, amount, date });
        totalExpenses += amount;
        totalExpensesElement.textContent = totalExpenses;
    } else if (transactionType === 'Income') {
        transactions.push({ type: 'Income', category, amount, date });
        totalIncome += amount;
        totalIncomeElement.textContent = totalIncome;
    }

    totalAmountCell.textContent = totalIncome - totalExpenses;

    const newRow = transactionTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        const index = Array.from(transactionTableBody.children).indexOf(newRow);
        const deletedTransaction = transactions[index];
        
        if (deletedTransaction.type === 'Expense') {
            totalExpenses -= deletedTransaction.amount;
            totalExpensesElement.textContent = totalExpenses;
        } else if (deletedTransaction.type === 'Income') {
            totalIncome -= deletedTransaction.amount;
            totalIncomeElement.textContent = totalIncome;
        }

        transactions.splice(index, 1);
        totalAmountCell.textContent = totalIncome - totalExpenses;
        transactionTableBody.removeChild(newRow);
    });

    categoryCell.textContent = category;
    amountCell.textContent = amount;
    dateCell.textContent = date;
    deleteCell.appendChild(deleteBtn);
});

function checkType()
{
    const transactionType = transactionTypeSelect.value;
    if(transactionType === 'Expense')
    {
        addBtn.style.backgroundColor="Red";
        addBtn.style.on
    }
    else if (transactionType === 'Income') {
        addBtn.style.backgroundColor="#14bdad";
    }
}
