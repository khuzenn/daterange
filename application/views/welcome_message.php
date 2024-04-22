<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/2.0.3/css/dataTables.bootstrap5.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/datetime/1.5.2/css/dataTables.dateTime.min.css">

    <script defer src="https://code.jquery.com/jquery-3.7.1.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    <script defer src="https://cdn.datatables.net/2.0.3/js/dataTables.js"></script>
    <script defer src="https://cdn.datatables.net/2.0.3/js/dataTables.bootstrap5.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.2/moment.min.js"></script>
    <script defer src="https://cdn.datatables.net/datetime/1.5.2/js/dataTables.dateTime.min.js"></script>
    <!-- Plugin sum() -->
    <script defer src="https://cdn.datatables.net/plug-ins/2.0.3/api/sum().js"></script>
    <script defer src="assets/js/daterange.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daterange</title>
</head>
<body>
    <div class="container">
        <table>
            <tbody>
                <tr>
                    <td>Start Date</td>
                    <td><input type="date" id="min"></td>
                </tr>
                <tr>
                    <td>End Date</td>
                    <td><input type="date" id="max"></td>
                </tr>
            </tbody>
        </table>
        <table id="example" class="table table-striped" style="width:100%">
            <thead>
                <tr>
                    <th class="text-center">No</th>
                    <th>Nama</th>
                    <th class="text-center">Jabatan</th>
                    <th class="text-center">Jenis Kelamin</th>
                    <th class="text-center">Tanggal Masuk</th>
                    <th class="text-center">Pesanan</th>
                    <th class="text-center">Belum Bayar</th>
                </tr>
            </thead>
            <tbody>
                <?php 
                $tOrder = 0;
                $no = 1;
                foreach ($listdata->result() as $data) {
                    $tOrder += $data->order;
                ?>
                <tr>
                    <td class="text-center"><?= $no; ?></td>
                    <td><?= $data->nama; ?></td>
                    <td class="text-center"><?= $data->jabatan; ?></td>
                    <td class="text-center"><?= $data->gender; ?></td>
                    <td class="text-center"><?= $data->tanggal; ?></td>
                    <td class="text-center"><?= rupiah($data->order); ?></td>
                    <td class="text-center"><?= rupiah($data->paid); ?></td>
                </tr>
                <?php
                    $no++;
                }
                ?>
            </tbody>
            <tfoot>
                <tr>
                    <th></th>
                    <th colspan="4">Total</th>
                    <th class="text-center" id="total_pesanan"></th>
                    <th class="text-center" id="formattedColumn6"></th>
                </tr>
            </tfoot>
        </table>
    </div>
</body>
</html>
