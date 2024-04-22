$(document).ready(function () {
    let table = $('#example').DataTable({
        drawCallback: function () {
            var api = this.api();
            var sum = 0;
            var formated = 0;

            for (var i = 5; i <= 5; i++) {
                sum = api.column(i, { page: 'current' }).data().sum();

                //to format this sum
                formated = parseFloat(sum).toLocaleString(sum, { minimumFractionDigits: 2 });
                $(api.column(i).footer()).html('Rp. ' + formated);
            }
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
});