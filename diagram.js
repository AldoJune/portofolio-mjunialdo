// Data penjualan
const labels = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const data2023 = [1417, 1135, 2091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 8207, 5945];
const data2024 = [1716, 2436, 3935, 5004, 7505, 5026, 6108, 6343, 3404, 4280, 7287, 6689];

const data = {
    labels: labels,
    datasets: [
        {
            label: '2023',
            data: data2023,
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(6, 50, 80, 0.8)',
            borderWidth: 1
        },
        {
            label: '2024',
            data: data2024,
            backgroundColor: 'rgba(29, 121, 92, 0.7)',
            borderColor: 'rgba(12, 61, 6, 0.8)',
            borderWidth: 1
        }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Diagram Laporan Penjualan',
                font: {
                    size: 18
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false
            },
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Bulan',
                    font: {
                        size: 14
                    }
                },
                ticks: {
                    font: {
                        size: 12
                    }
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah Penjualan',
                    font: {
                        size: 14
                    }
                },
                ticks: {
                    font: {
                        size: 12
                    }
                }
            }
        }
    }
};

window.onload = () => {
    const ctx = document.getElementById('salesChart').getContext('2d');
    // Sesuaikan tinggi chart agar lebih proporsional
    ctx.canvas.parentNode.style.height = '500px';
    new Chart(ctx, config);
};