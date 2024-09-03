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

function generateMobile(i) {
    return `9876543${(100 + i).toString().slice(-3)}`;
}

const crews = [];

for (let i = 0; i < 50; i++) {
    crews.push({
        name: `Driver ${i + 1}`,
        mobile: generateMobile(i),
        email: `driver${i + 1}@example.com`,
        address: `Address ${i + 1}`,
        role: 'Driver',
        depot_location: locations[Math.floor(Math.random() * locations.length)],
        is_active: Math.random() < 0.5,
        on_duty: Math.random() < 0.5,
        duty_start_times: [],
        duty_end_times: [],
        notifications: []
    });

    crews.push({
        name: `Conductor ${i + 1}`,
        mobile: generateMobile(i + 50),
        email: `conductor${i + 1}@example.com`,
        address: `Address ${i + 51}`,
        role: 'Conductor',
        depot_location: locations[Math.floor(Math.random() * locations.length)],
        is_active: Math.random() < 0.5,
        on_duty: Math.random() < 0.5,
        duty_start_times: [],
        duty_end_times: [],
        notifications: []
    });
}

module.exports = crews;
