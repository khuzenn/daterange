// DataTables initialisation
let table = new DataTable('#example');

let minDate = null;
let maxDate = null;

// Custom filtering function which will search data in column four between two values
DataTable.ext.search.push(function(settings, data, dataIndex) {
    if (
        (minDate === null && maxDate === null) ||
        (minDate === null && Date.parse(data[4]) <= maxDate) ||
        (minDate <= Date.parse(data[4]) && maxDate === null) ||
        (minDate <= Date.parse(data[4]) && Date.parse(data[4]) <= maxDate)
    ) {
        return true;
    }
    return false;
});

// Create date inputs
let minDateInput = document.getElementById('min');
let maxDateInput = document.getElementById('max');

// Refilter the table
function filterTable() {
    minDate = minDateInput.value ? Date.parse(minDateInput.value) : null;
    maxDate = maxDateInput.value ? Date.parse(maxDateInput.value) : null;
    table.draw();
}

minDateInput.addEventListener('change', filterTable);
maxDateInput.addEventListener('change', filterTable);

// Clear filter when date is deleted
minDateInput.addEventListener('input', function() {
    if (!this.value) {
        minDate = null;
        filterTable();
    }
});

maxDateInput.addEventListener('input', function() {
    if (!this.value) {
        maxDate = null;
        filterTable();
    }
});

// Fungsi untuk menghitung total pesanan dan memperbarui nilai total di footer tabel
function updateTotal() {
    let total = table.column(5).data().sum(); // Menghitung total pesanan dari kolom 5 (indeks dimulai dari 0)
    $('#total_pesanan').text(formatRupiah(total)); // Memperbarui nilai total pesanan di footer tabel
}

// Memanggil fungsi updateTotal setiap kali tabel di-"draw"
table.on('draw', function () {
    updateTotal();
});