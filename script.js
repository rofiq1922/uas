const dataPdamBlora = [
    { kec: "Blora", pelanggan: 12450, air: 2150000, nilai: 13600000000 },
    { kec: "Cepu", pelanggan: 9870, air: 1850000, nilai: 10800000000 },
    { kec: "Randublatung", pelanggan: 4532, air: 782400, nilai: 4980000000 },
    { kec: "Jepon", pelanggan: 3200, air: 540000, nilai: 3450000000 },
    { kec: "Ngawen", pelanggan: 2100, air: 360000, nilai: 2300000000 },
    { kec: "Kunduran", pelanggan: 1850, air: 315000, nilai: 2000000000 },
    { kec: "Jati", pelanggan: 1421, air: 245670, nilai: 1560000000 },
    { kec: "Kedungtuban", pelanggan: 1200, air: 210000, nilai: 1350000000 },
    { kec: "Sambong", pelanggan: 1100, air: 190000, nilai: 1200000000 },
    { kec: "Banjarejo", pelanggan: 950, air: 160000, nilai: 1050000000 },
    { kec: "Kradenan", pelanggan: 850, air: 145000, nilai: 920000000 },
    { kec: "Tunjungan", pelanggan: 750, air: 125000, nilai: 820000000 },
    { kec: "Jiken", pelanggan: 0, air: 0, nilai: 0 },
    { kec: "Bogorejo", pelanggan: 0, air: 0, nilai: 0 },
    { kec: "Todanan", pelanggan: 0, air: 0, nilai: 0 },
    { kec: "Japah", pelanggan: 0, air: 0, nilai: 0 }
];

// Tabel Atribut
const tableBody = document.getElementById('table-body');
dataPdamBlora.forEach((item, index) => {
    tableBody.innerHTML += `
        <tr>
            <td class="text-center">${index + 1}</td>
            <td class="fw-bold">${item.kec}</td>
            <td class="text-end">${item.pelanggan.toLocaleString('id-ID')}</td>
            <td class="text-end">${item.air.toLocaleString('id-ID')}</td>
            <td class="text-end fw-bold text-primary pe-4">Rp ${item.nilai.toLocaleString('id-ID')}</td>
        </tr>`;
});

// Diagram Perbandingan (Skala 20.000 sesuai Gambar)
const ctx = document.getElementById('chartUtama').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: dataPdamBlora.map(d => d.kec),
        datasets: [{
            label: 'Pelanggan',
            data: dataPdamBlora.map(d => d.pelanggan),
            backgroundColor: '#0d6efd',
            borderRadius: 5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true, max: 20000, ticks: { stepSize: 5000 } }
        }
    }
});