const locations = [
    'Rohini Sec 22 Terminal',
    'Azadpur Terminal',
    'Alipur Village GT Road',
    'Old Delhi Railway Station',
    'Jharoda Metro Station',
    'Shivaji Stadium Terminal',
    'Qutub Garh Village (T)',
    'Bawana Soap Factory',
    'Katewara Village',
    'Old Delhi Railway Station'
];

const conditions = ['Excellent', 'Good'];

const buses = Array.from({ length: 50 }, (_, i) => {
    const busNumber = `DL1PD${(i + 1).toString().padStart(4, '0')}`;
    return {
        name: `Bus ${i + 1}`,
        bus_no: busNumber,
        condition: conditions[Math.floor(Math.random() * conditions.length)],
        seats: 40,
        current_location: locations[Math.floor(Math.random() * locations.length)],
        last_service_date: new Date(`2023-01-${(i % 30) + 1}`),
        next_service_due: new Date(`2024-01-${((i + 1) % 30) + 1}`)
    };
});

module.exports = buses;
