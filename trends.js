document.addEventListener('DOMContentLoaded', function () {
    // Use CORS-Proxy to bypass CORS restrictions
    const apiUrl = 'https://cors-proxy.htmldriven.com/?url=https://api.stlouisfed.org/fred/series/observations?series_id=GDPC1&api_key=423007f795f8159a89a61f2c06d05121&file_type=json';

    function fetchEconomicData() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log('API Response:', data);
                
                const gdpData = data.observations; // GDP data from the response
                const trendMessage = document.getElementById('trendMessage');
                const trendChart = document.getElementById('trendChart');

                if (!gdpData || gdpData.length === 0) {
                    trendMessage.innerText = 'No data available for the selected trend.';
                    return;
                }

                trendMessage.innerText = 'GDP Data Loaded Successfully!';

                const years = gdpData.map(item => item.date).reverse(); // Reverse for chronological order
                const gdpValues = gdpData.map(item => item.value).reverse();

                console.log('Years:', years);
                console.log('GDP Values:', gdpValues);

                const canvas = document.createElement('canvas');
                trendChart.innerHTML = ''; // Clear previous chart if any
                trendChart.appendChild(canvas);

                if (gdpValues.length > 0 && years.length > 0) {
                    new Chart(canvas, {
                        type: 'line',
                        data: {
                            labels: years,
                            datasets: [{
                                label: 'GDP (USD)',
                                data: gdpValues,
                                borderColor: 'rgb(75, 192, 192)',
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                fill: true,
                                tension: 0.3
                            }]
                        },
                        options: {
                            responsive: true,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'United States GDP (2010–2021)',
                                    font: {
                                        size: 18
                                    }
                                },
                                legend: {
                                    position: 'top',
                                },
                                tooltip: {
                                    callbacks: {
                                        label: function(context) {
                                            return `GDP: $${Number(context.raw).toLocaleString('en-US')}`;
                                        }
                                    }
                                }
                            },
                            scales: {
                                y: {
                                    ticks: {
                                        callback: function(value) {
                                            return '$' + (value / 1_000_000_000_000).toFixed(1) + 'T';
                                        }
                                    },
                                    title: {
                                        display: true,
                                        text: 'GDP in USD'
                                    }
                                },
                                x: {
                                    title: {
                                        display: true,
                                        text: 'Year'
                                    }
                                }
                            }
                        }
                    });
                } else {
                    trendMessage.innerText = 'No valid data to display on the chart.';
                }
            })
            .catch(error => {
                console.error('Error fetching the economic data:', error);
                document.getElementById('trendMessage').innerText = 'Error loading data.';
            });
    }

    fetchEconomicData();
});
