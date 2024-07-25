document.addEventListener('DOMContentLoaded', function() {
    const unitPriceInput = document.getElementById('unit-price');
    const hoursInput = document.getElementById('hours');
    const totalPriceInput = document.getElementById('total-price');
    const outstandingBalanceInput = document.getElementById('outstanding-balance');

    function calculateTotalPrice() {
        const unitPrice = parseFloat(unitPriceInput.value) || 0;
        const hours = parseFloat(hoursInput.value) || 0;
        const totalPrice = unitPrice * hours;
        totalPriceInput.value = totalPrice.toFixed(2);
        outstandingBalanceInput.value = totalPrice.toFixed(2);
    }

    unitPriceInput.addEventListener('input', calculateTotalPrice);
    hoursInput.addEventListener('input', calculateTotalPrice);

    document.getElementById('invoice-form').addEventListener('submit', function(e) {
        e.preventDefault();
        generateInvoice();
    });
});

function generateInvoice() {
    const invoiceNo = document.getElementById('invoice-no').value;
    const date = document.getElementById('date').value;
    const items = document.getElementById('items').value;
    const type = document.getElementById('type').value;
    const unitPrice = document.getElementById('unit-price').value;
    const hours = document.getElementById('hours').value;
    const totalPrice = document.getElementById('total-price').value;
    const outstandingBalance = document.getElementById('outstanding-balance').value;

    const doc = new jsPDF();

    doc.text(20, 20, `Invoice No: ${invoiceNo}`);
    doc.text(20, 30, `Date: ${date}`);
    doc.text(20, 40, `Items: ${items}`);
    doc.text(20, 50, `Type: ${type}`);
    doc.text(20, 60, `Unit Price: $${unitPrice}`);
    doc.text(20, 70, `Hours: ${hours}`);
    doc.text(20, 80, `Total Price: $${totalPrice}`);
    doc.text(20, 90, `Outstanding Balance: $${outstandingBalance}`);

    doc.save('invoice.pdf');
}
