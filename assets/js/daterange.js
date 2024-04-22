$(document).ready(function () {
    let table = $('#example').DataTable({
        drawCallback: function () {
            var api = this.api();
        
            // Menghapus format Rupiah dan menjumlahkan nilai untuk kolom 5 dan 6
            var totalColumn5 = 0;
            var totalColumn6 = 0;
            
            api.column(5, { page: 'current' }).data().each(function (value) {
                var numericValue = removeRupiahFormat(value);
                totalColumn5 += numericValue;
            });

            api.column(6, { page: 'current' }).data().each(function (value) {
                var numericValue = removeRupiahFormat(value);
                totalColumn6 += numericValue;
            });
        
            // Mengkonversi hasil penjumlahan ke format Rupiah
            var formattedColumn5 = 'Rp. ' + totalColumn5.toLocaleString(undefined, { minimumFractionDigits: 2 });
            var formattedColumn6 = 'Rp. ' + totalColumn6.toLocaleString(undefined, { minimumFractionDigits: 2 });
        
            // Memperbarui footer dengan total yang diformat
            $(api.column(5).footer()).html(formattedColumn5);
            $(api.column(6).footer()).html(formattedColumn6);
        }
    });

    let minDate = null;
    let maxDate = null;

    // Custom filtering function which will search data in column four between two values
    DataTable.ext.search.push(function (settings, data, dataIndex) {
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
    minDateInput.addEventListener('input', function () {
        if (!this.value) {
            minDate = null;
            filterTable();
        }
    });

    maxDateInput.addEventListener('input', function () {
        if (!this.value) {
            maxDate = null;
            filterTable();
        }
    });

    // Function to update total orders and update the footer
    function updateTotal() {
        let total = table.column(5).data().sum(); // Calculate total orders from column 5
        $('#total_pesanan').text(formatRupiah(total)); // Update total value in the footer
    }

    // Call updateTotal function every time the table is drawn
    table.on('draw', function () {
        updateTotal();
    });

    function removeRupiahFormat(value) {
        // Mengecek apakah nilai merupakan format Rupiah
        if (value.startsWith("Rp")) {
            // Menghapus tanda 'Rp', koma, dan mempertahankan hanya digit dan tanda minus
            value = value.replace(/[^\d,-]/g, '');
        }
        return parseFloat(value);
    }
    
});