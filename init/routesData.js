const routes= [
    {
        route_no: '102ADown',
        origin: 'Rohini Sec 22 Terminal',
        destination: 'Azadpur Terminal',
        route_stops: [
            'Rohini Sec 22 Terminal', 'Lakhhi Ram Park', 'Rohini Sec-21', 'Rohini Sec 20/21/22 Crossing',
            'Police Station Begumpur', 'Poothkalan More', 'Rohini Sec 23',
            'Rohini Sec 23 Pocket 1 (Green Hill Aptt.)', 'Hanuman Mandir Rohini Sec 24',
            'Rohini Sec 24 Dear Satguru Sewaram Crossing',
            'Dera Satguru Sewaram Sahai Sec 24/25 Crossing', 'Sec-24 Rohini Main Road',
            'Rithala Village', 'Pal Colony', 'Rithala Metro Station', 'Rohini Depot 1 Sec 6',
            'Rohini West Metro Station', 'Rohini Sec-9 /7', 'Rohini Sec-9',
            'Rohini Sec 7 and 8 Crossing', 'Fire Station Sec-8', 'Madhuban Chowk',
            'Madhuban Chowk Pitampura Metro Stn', 'Pitampura JD Block',
            'Vaishali Enclave / Kapil Vihar', 'Kohat Enclave Metro Station', 'Pitampura ND Block',
            'Netaji Subhash Palace (Wazirpur Depot) Road No 41',
            'Wazirpur Depot / Subhash Place Depot', 'Prem Bari Pull',
            'Richi Rich Shalimar Bagh', 'Ashok Vihar Crossing', 'Azadpur Terminal'
        ],
        distance: 14.1,
        schedule: [
            { start_time: '06:05 AM', end_time: '07:15 AM' },
            { start_time: '06:55 AM', end_time: '08:05 AM' },
            { start_time: '07:45 AM', end_time: '08:55 AM' },
            { start_time: '08:35 AM', end_time: '09:45 AM' },
            { start_time: '09:50 AM', end_time: '11:00 AM' },
            { start_time: '10:40 AM', end_time: '11:50 AM' },
            { start_time: '11:30 AM', end_time: '12:40 PM' },
            { start_time: '12:20 PM', end_time: '01:30 PM' },
            { start_time: '02:00 PM', end_time: '03:10 PM' },
            { start_time: '02:50 PM', end_time: '04:00 PM' },
            { start_time: '03:40 PM', end_time: '04:50 PM' },
            { start_time: '04:30 PM', end_time: '05:40 PM' },
            { start_time: '05:45 PM', end_time: '06:55 PM' },
            { start_time: '06:35 PM', end_time: '07:45 PM' },
            { start_time: '07:25 PM', end_time: '08:35 PM' },
            { start_time: '08:15 PM', end_time: '09:25 PM' }
        ],
        is_active: true
    },
    {
        route_no: '102AUp',
        origin: 'Azadpur Terminal',
        destination: 'Rohini Sec 22 Terminal',
        route_stops: [
            'Azadpur Terminal', 'Ashok Vihar Crossing', 'Richi Rich Shalimar Bagh', 'Prem Bari Pull',
            'Wazirpur Depot / Subhash Place Depot', 'Netaji Subhash Palace (Wazirpur Depot) Road No 41',
            'Pitampura ND Block', 'Kohat Enclave Metro Station', 'Vaishali Enclave / Kapil Vihar',
            'Pitampura JD Block', 'Madhuban Chowk Pitampura Metro Stn', 'Madhuban Chowk',
            'Fire Station Sec-8', 'Rohini Sec 7 and 8 Crossing', 'Rohini Sec-9', 'Rohini Sec-9 /7',
            'Rohini West Metro Station', 'Rohini Depot 1 Sec 6', 'Rithala Metro Station',
            'Pal Colony', 'Rithala Village', 'Sec-24 Rohini Main Road',
            'Dera Satguru Sewaram Sahai Sec 24/25 Crossing', 'Rohini Sec 24 Dear Satguru Sewaram Crossing',
            'Hanuman Mandir Rohini Sec 24', 'Rohini Sec 23 Pocket 1 (Green Hill Aptt.)',
            'Rohini Sec 23', 'Poothkalan More', 'Police Station Begumpur', 
            'Rohini Sec 20/21/22 Crossing', 'Rohini Sec-21', 'Lakhhi Ram Park', 
            'Rohini Sec 22 Terminal'
        ],
        distance: 14.1,
        schedule: [
            { start_time: '07:21 AM', end_time: '08:30 AM' },
            { start_time: '08:11 AM', end_time: '09:20 AM' },
            { start_time: '09:01 AM', end_time: '10:10 AM' },
            { start_time: '09:51 AM', end_time: '11:00 AM' },
            { start_time: '11:06 AM', end_time: '12:16 PM' },
            { start_time: '11:56 AM', end_time: '01:06 PM' },
            { start_time: '12:46 PM', end_time: '01:56 PM' },
            { start_time: '01:36 PM', end_time: '02:46 PM' },
            { start_time: '03:16 PM', end_time: '04:25 PM' },
            { start_time: '04:06 PM', end_time: '05:15 PM' },
            { start_time: '04:56 PM', end_time: '06:05 PM' },
            { start_time: '05:46 PM', end_time: '06:55 PM' },
            { start_time: '07:01 PM', end_time: '08:11 PM' },
            { start_time: '07:51 PM', end_time: '09:01 PM' },
            { start_time: '08:41 PM', end_time: '09:51 PM' },
            { start_time: '09:31 PM', end_time: '10:41 PM' }
        ],
        is_active: true
    },
    {
        route_no: '103EDown',
        origin: 'Alipur Village GT Road',
        destination: 'Old Delhi Railway Station',
        route_stops: [
            'Alipur Village GT Road', 'Mcd Store', 'Jind Pur Crossing', 'Sai Mandir', 
            'Budhpur GT Road', 'Jain Mandir', 'Nangli Poona (GT Road)', 'Gurudwara Siraspur GT Road', 
            'Swaroop Nagar GT Road', 'Libas Pur GT Road', 'Sanjay Gandhi Transport Nagar', 'GTK Depot', 
            'Jahangirpuri GT Road (Metro Station)', 'Mahindra Park', 'Sarai Pipal Thala', 
            'Adarsh Nagar Metro Station', 'New Sabzi Mandi Azadpur', 'Azadpur Terminal', 
            'Model Town III', 'Model Town II', 'Alpana Cinema (Model Town Mtr Stn)', 'New Police Line', 
            'GTB Nagar', 'INS Hostel', 'Vishwa Vidyalaya Metro Station', 'Mall Road', 'Khyber Pass', 
            'Vidhan Sabha Metro Station', 'Old Secretariat (Postal Account Office)', 
            'IP College', 'Exchange Store / Civil Lines Metro Station', 'Ludlow Castle', 
            'ISBT Nityanand Marg', 'Mori Gate Terminal', 'Novelty Cinema', 'Old Delhi Railway Station'
        ],
        distance: 17.2,
        schedule: [
            { start_time: '06:45 AM', end_time: '08:06 AM' },
            { start_time: '07:21 AM', end_time: '08:42 AM' },
            { start_time: '07:57 AM', end_time: '09:18 AM' },
            { start_time: '08:33 AM', end_time: '09:54 AM' },
            { start_time: '09:09 AM', end_time: '10:30 AM' },
            { start_time: '09:45 AM', end_time: '11:06 AM' },
            { start_time: '10:57 AM', end_time: '12:18 PM' },
            { start_time: '11:33 AM', end_time: '12:54 PM' },
            { start_time: '12:09 PM', end_time: '01:30 PM' },
            { start_time: '12:45 PM', end_time: '02:06 PM' },
            { start_time: '01:21 PM', end_time: '02:42 PM' },
            { start_time: '01:57 PM', end_time: '03:18 PM' },
            { start_time: '03:06 PM', end_time: '04:27 PM' },
            { start_time: '03:42 PM', end_time: '05:03 PM' },
            { start_time: '04:18 PM', end_time: '05:39 PM' },
            { start_time: '04:54 PM', end_time: '06:15 PM' },
            { start_time: '06:06 PM', end_time: '07:27 PM' },
            { start_time: '07:18 PM', end_time: '08:39 PM' },
            { start_time: '07:54 PM', end_time: '09:15 PM' },
            { start_time: '08:30 PM', end_time: '09:51 PM' },
            { start_time: '09:06 PM', end_time: '10:27 PM' },
            { start_time: '09:42 PM', end_time: '11:03 PM' },
            { start_time: '10:18 PM', end_time: '11:39 PM' }
        ],
        is_active: true
    },
    {
        route_no: '103EUp',
        origin: 'Old Delhi Railway Station',
        destination: 'Alipur Village GT Road',
        route_stops: [
            'Old Delhi Railway Station', 'Novelty Cinema', 'Mori Gate Terminal', 'ISBT Nityanand Marg',
            'Ludlow Castle', 'Exchange Store / Civil Lines Metro Station', 'IP College', 
            'Old Secretariat (Postal Account Office)', 'Vidhan Sabha Metro Station', 'Khyber Pass', 
            'Mall Road', 'Vishwa Vidyalaya Metro Station', 'INS Hostel', 'GTB Nagar', 'New Police Line', 
            'Alpana Cinema (Model Town Mtr Stn)', 'Model Town II', 'Model Town III', 
            'Azadpur Terminal', 'New Sabzi Mandi Azadpur', 'Adarsh Nagar Metro Station', 
            'Sarai Pipal Thala', 'Mahindra Park', 'Jahangirpuri GT Road (Metro Station)', 
            'GTK Depot', 'Sanjay Gandhi Transport Nagar', 'Libas Pur GT Road', 
            'Swaroop Nagar GT Road', 'Gurudwara Siraspur GT Road', 'Nangli Poona (GT Road)', 
            'Jain Mandir', 'Budhpur GT Road', 'Sai Mandir', 'Jind Pur Crossing', 'Mcd Store', 
            'Alipur Village GT Road'
        ],
        distance: 17.2,
        schedule: [
            { start_time: '05:18 AM', end_time: '06:39 AM' },
            { start_time: '05:54 AM', end_time: '07:15 AM' },
            { start_time: '06:30 AM', end_time: '07:51 AM' },
            { start_time: '07:06 AM', end_time: '08:27 AM' },
            { start_time: '07:42 AM', end_time: '09:03 AM' },
            { start_time: '08:18 AM', end_time: '09:39 AM' },
            { start_time: '09:06 AM', end_time: '10:27 AM' },
            { start_time: '09:42 AM', end_time: '11:03 AM' },
            { start_time: '10:18 AM', end_time: '11:39 AM' },
            { start_time: '10:54 AM', end_time: '12:15 PM' },
            { start_time: '11:30 AM', end_time: '12:51 PM' },
            { start_time: '12:06 PM', end_time: '01:27 PM' },
            { start_time: '01:39 PM', end_time: '03:00 PM' },
            { start_time: '02:15 PM', end_time: '03:36 PM' },
            { start_time: '02:51 PM', end_time: '04:12 PM' },
            { start_time: '03:27 PM', end_time: '04:48 PM' },
            { start_time: '04:39 PM', end_time: '06:00 PM' },
            { start_time: '05:27 PM', end_time: '06:48 PM' },
            { start_time: '06:03 PM', end_time: '07:24 PM' },
            { start_time: '06:39 PM', end_time: '08:00 PM' },
            { start_time: '07:15 PM', end_time: '08:36 PM' },
            { start_time: '07:51 PM', end_time: '09:12 PM' },
            { start_time: '08:27 PM', end_time: '09:48 PM' }
        ],
        is_active: true
    },
    {
        route_no: '104Down',
        origin: 'Jharoda Metro Station',
        destination: 'Shivaji Stadium Terminal',
        route_stops: [
            'Jharoda Metro Station', 'Wazirabad Village (Burari)', 'Burari Metro Station', 
            'Nirankari Sarover- Burari Xing', 'CV Raman ITI', 'Nirankari Colony', 'Radio Colony', 
            'Dhaka Village', 'Balmiki Gandhi Ashram', 'TB Hospital', 'GTB Nagar', 'INS Hostel', 
            'Vishwa Vidyalaya Metro Station', 'Mall Road', 'Khyber Pass', 'Vidhan Sabha Metro Station', 
            'Old Secretariat (Postal Account Office)', 'IP College', 'Exchange Store / Civil Lines Metro Station', 
            'Ludlow Castle', 'ISBT Kashmere Gate Metro Station', 'Guru Govind Singh University (Kashmere Gate)', 
            'GPO', 'Red Fort', 'Jama Masjid', 'Darya Ganj Golcha Cinema', 'Delhi Gate', 
            'Express Building / Shaheed Park (Bhagat Singh Terminal)', 'ITO', 'Tilak Bridge', 
            'Mandi House', 'Kasturba Gandhi Road Crossing', 'Max Muller Bhawan', 'Scindia House', 
            'Shivaji Stadium Terminal'
        ],
        distance: 15.8,
        schedule: [
            { start_time: '06:10 AM', end_time: '07:40 AM' },
            { start_time: '06:48 AM', end_time: '08:18 AM' },
            { start_time: '07:26 AM', end_time: '08:56 AM' },
            { start_time: '08:04 AM', end_time: '09:34 AM' },
            { start_time: '08:42 AM', end_time: '10:12 AM' },
            { start_time: '09:20 AM', end_time: '10:50 AM' },
            { start_time: '09:58 AM', end_time: '11:28 AM' },
            { start_time: '10:36 AM', end_time: '12:06 PM' },
            { start_time: '11:14 AM', end_time: '12:44 PM' },
            { start_time: '12:18 PM', end_time: '01:47 PM' },
            { start_time: '01:48 PM', end_time: '03:18 PM' },
            { start_time: '02:26 PM', end_time: '03:56 PM' },
            { start_time: '03:04 PM', end_time: '04:34 PM' },
            { start_time: '03:42 PM', end_time: '05:12 PM' },
            { start_time: '04:20 PM', end_time: '05:50 PM' },
            { start_time: '04:58 PM', end_time: '06:28 PM' },
            { start_time: '05:36 PM', end_time: '07:06 PM' },
            { start_time: '06:39 PM', end_time: '08:09 PM' },
            { start_time: '07:17 PM', end_time: '08:47 PM' },
            { start_time: '07:55 PM', end_time: '09:25 PM' }
        ],
        is_active: true
    },
    {
        route_no: '104Up',
        origin: 'Shivaji Stadium Terminal',
        destination: 'Jharoda Metro Station',
        route_stops: [
            'Shivaji Stadium Terminal', 'Express Building / Shaheed Park (Bhagat Singh Terminal)', 
            'ITO', 'Delhi Gate', 'Darya Ganj Golcha Cinema', 'Jama Masjid', 'Red Fort', 'GPO', 
            'Guru Govind Singh University (Kashmere Gate)', 'ISBT Kashmere Gate Metro Station', 
            'Ludlow Castle', 'Exchange Store / Civil Lines Metro Station', 'IP College', 
            'Old Secretariat (Postal Account Office)', 'Vidhan Sabha Metro Station', 'Khyber Pass', 
            'Mall Road', 'Vishwa Vidyalaya Metro Station', 'INS Hostel', 'GTB Nagar', 'TB Hospital', 
            'Balmiki Gandhi Ashram', 'Dhaka Village', 'Radio Colony', 'Nirankari Colony', 
            'CV Raman ITI', 'Nirankari Sarover- Burari Xing', 'Burari Metro Station', 
            'Wazirabad Village (Burari)', 'Jharoda Metro Station'
        ],
        distance: 15.8,
        schedule: [
            { start_time: '07:45 AM', end_time: '09:15 AM' },
            { start_time: '08:23 AM', end_time: '09:53 AM' },
            { start_time: '09:01 AM', end_time: '10:31 AM' },
            { start_time: '09:39 AM', end_time: '11:09 AM' },
            { start_time: '10:17 AM', end_time: '11:48 AM' },
            { start_time: '11:20 AM', end_time: '12:43 PM' },
            { start_time: '11:58 AM', end_time: '01:21 PM' },
            { start_time: '12:36 PM', end_time: '01:59 PM' },
            { start_time: '01:14 PM', end_time: '02:37 PM' },
            { start_time: '01:52 PM', end_time: '03:15 PM' },
            { start_time: '03:23 PM', end_time: '04:53 PM' },
            { start_time: '04:01 PM', end_time: '05:31 PM' },
            { start_time: '05:04 PM', end_time: '06:34 PM' },
            { start_time: '05:42 PM', end_time: '07:12 PM' },
            { start_time: '06:20 PM', end_time: '07:50 PM' },
            { start_time: '06:58 PM', end_time: '08:23 PM' },
            { start_time: '07:36 PM', end_time: '09:01 PM' },
            { start_time: '08:14 PM', end_time: '09:39 PM' },
            { start_time: '08:52 PM', end_time: '10:17 PM' },
            { start_time: '09:30 PM', end_time: '10:55 PM' }
        ],
        is_active: true
    },
    {
        route_no: '106ADown',
        origin: 'Qutub Garh Village (T)',
        destination: 'Bawana Soap Factory',
        route_stops: [
            'Qutub Garh Village (T)', 'Katewara Crossing', 'Jawahar Navodya School', 
            'Mungeshpur Village', 'B.R. International School', 'Auchandi Border', 
            'Auchandi Village', 'Auchandi Sarvodaya School', 'Harewali Crossing', 
            'Dariyapur Gaon', 'Bajit Pur Crossing', 'Dariyapur Kalan School', 
            'PS Bawana', 'Bawana Depot', 'Bawana', 'Bawana Dispensary', 
            'Bawana Soap Factory'
        ],
        distance: 13.1,
        schedule: [
            { start_time: '06:10 AM', end_time: '06:56 AM' },
            { start_time: '07:06 AM', end_time: '07:52 AM' },
            { start_time: '08:02 AM', end_time: '08:48 AM' },
            { start_time: '08:58 AM', end_time: '09:44 AM' },
            { start_time: '10:08 AM', end_time: '10:54 AM' },
            { start_time: '11:04 AM', end_time: '11:50 AM' },
            { start_time: '12:00 PM', end_time: '12:46 PM' },
            { start_time: '12:56 PM', end_time: '01:42 PM' },
            { start_time: '02:20 PM', end_time: '03:06 PM' },
            { start_time: '03:16 PM', end_time: '04:02 PM' },
            { start_time: '04:12 PM', end_time: '04:58 PM' },
            { start_time: '05:08 PM', end_time: '05:54 PM' },
            { start_time: '06:18 PM', end_time: '07:04 PM' },
            { start_time: '07:14 PM', end_time: '08:00 PM' },
            { start_time: '08:10 PM', end_time: '08:56 PM' },
            { start_time: '09:06 PM', end_time: '09:52 PM' }
        ],
        is_active: true
    },
    {
        route_no: '106AUp',
        origin: 'Bawana Soap Factory',
        destination: 'Qutub Garh Village (T)',
        route_stops: [
            'Bawana Soap Factory', 'Bawana Dispensary', 'Bawana', 'Bawana Depot', 
            'PS Bawana', 'Dariyapur Kalan School', 'Bajit Pur Crossing', 'Dariyapur Gaon', 
            'Harewali Crossing', 'Auchandi Sarvodaya School', 'Auchandi Village', 
            'Auchandi Border', 'B.R. International School', 'Mungeshpur Village', 
            'Jawahar Navodya School', 'Katewara Crossing', 'Qutub Garh Village (T)'
        ],
        distance: 13.1,
        schedule: [
            { start_time: '07:01 AM', end_time: '07:46 AM' },
            { start_time: '07:57 AM', end_time: '08:42 AM' },
            { start_time: '08:53 AM', end_time: '09:35 AM' },
            { start_time: '09:49 AM', end_time: '10:31 AM' },
            { start_time: '10:59 AM', end_time: '11:44 AM' },
            { start_time: '11:55 AM', end_time: '12:40 PM' },
            { start_time: '12:51 PM', end_time: '01:36 PM' },
            { start_time: '01:47 PM', end_time: '02:32 PM' },
            { start_time: '03:11 PM', end_time: '03:56 PM' },
            { start_time: '04:07 PM', end_time: '04:52 PM' },
            { start_time: '05:03 PM', end_time: '05:45 PM' },
            { start_time: '05:59 PM', end_time: '06:41 PM' },
            { start_time: '07:09 PM', end_time: '07:54 PM' }
        ],
        is_active: true
    },
    {
        route_no: '107Down',
        origin: 'Katewara Village',
        destination: 'Old Delhi Railway Station',
        route_stops: [
            'Katewara Village', 'Bajitpur Mandir', 'Bajitpur Village', 'Nangal Thakran', 
            'Bajit Pur Crossing', 'Dariyapur Kalan School', 'PS Bawana', 'Bawana Depot', 
            'Bawana', 'Bawana School', 'Aditi College Bawana', 'DSIDC Bawana/ Dhakewala', 
            'DSIDC Office Bawana', 'Maharishi Valmiki Hospital', 'Poothkhurd Village', 
            'Sultan Pur Crossing / Poothkhurd', 'Poothkhurd Firni Road', 'Barwala Village', 
            'Barwala School', 'Rohini Sec 35', 'Jain Colony', 'Prehladpur School', 
            'Prehladpur Village', 'Prehladpur Crossing', 'Rohini Sec 27 and 30 Crossing', 
            'Shahbad Dairy', 'Shahbad Dairy A Block', 'St. Xavier School Shahbad', 
            'Shahbad Daulatpur School', 'Shahbad Daulatpur Gaon', 'Delhi Engg College Shahbad', 
            'Rohini Sec-16 Xing', 'Shri Krishna Apartments', 'Rohini DTC Depot 4', 
            'Rohini Sec 18 B-7 Road', 'Rohini Sec 18 Pocket A', 'Rohini Sec 18', 
            'Rohini Sec 18 B Block', 'Badli Village', 'Jail Road Rohini Sec 18', 
            'Badli Crossing', 'Haiderpur Metro Station', 'Shaheed Captain Vikram Batra Flyover', 
            'GTK Depot', 'Jahangirpuri GT Road (Metro Station)', 'Sarai Pipal Thala', 
            'Adarsh Nagar Metro Station', 'New Sabzi Mandi Azadpur', 'Azadpur Terminal', 
            'Model Town III', 'Model Town II', 'Alpana Cinema (Model Town Mtr Stn)', 
            'New Police Line', 'GTB Nagar', 'INS Hostel', 'Vishwa Vidyalaya Metro Station', 
            'Mall Road', 'Khyber Pass', 'Vidhan Sabha Metro Station', 
            'Old Secretariat (Postal Account Office)', 'IP College', 'Exchange Store (Hill Road)', 
            'PNB STA Road', 'Rajpur Road Transport Deptt', 'MCD Store (Rajpur Road)', 
            'Aruna Asaf Ali Hospital', 'Tees Hazari Court', 'Mori Gate Terminal', 
            'Novelty Cinema', 'Old Delhi Railway Station'
        ],
        distance: 44.7,
        schedule: [
            { start_time: '04:50 AM', end_time: '07:30 AM' },
            { start_time: '06:24 AM', end_time: '08:54 AM' },
            { start_time: '06:48 AM', end_time: '09:18 AM' },
            { start_time: '07:12 AM', end_time: '09:42 AM' },
            { start_time: '07:36 AM', end_time: '10:06 AM' },
            { start_time: '08:00 AM', end_time: '10:30 AM' },
            { start_time: '08:24 AM', end_time: '10:54 AM' },
            { start_time: '08:48 AM', end_time: '11:18 AM' },
            { start_time: '09:12 AM', end_time: '11:42 AM' },
            { start_time: '09:36 AM', end_time: '12:06 PM' },
            { start_time: '10:00 AM', end_time: '12:30 PM' },
            { start_time: '10:24 AM', end_time: '12:54 PM' },
            { start_time: '10:48 AM', end_time: '01:28 PM' },
            { start_time: '12:20 PM', end_time: '03:00 PM' },
            { start_time: '01:14 PM', end_time: '03:44 PM' },
            { start_time: '01:38 PM', end_time: '04:08 PM' },
            { start_time: '02:02 PM', end_time: '04:32 PM' },
            { start_time: '02:26 PM', end_time: '04:56 PM' },
            { start_time: '02:50 PM', end_time: '05:20 PM' },
            { start_time: '03:14 PM', end_time: '05:44 PM' },
            { start_time: '03:38 PM', end_time: '06:08 PM' },
            { start_time: '04:02 PM', end_time: '06:32 PM' },
            { start_time: '04:26 PM', end_time: '06:56 PM' },
            { start_time: '04:50 PM', end_time: '07:20 PM' },
            { start_time: '05:14 PM', end_time: '07:44 PM' },
            { start_time: '06:30 PM', end_time: '09:10 PM' }
        ],
        is_active: true
    },
    {
        route_no: '107Up',
        origin: 'Old Delhi Railway Station',
        destination: 'Katewara Village',
        route_stops: [
            'Old Delhi Railway Station', 'Novelty Cinema', 'Mori Gate Terminal', 
            'Tees Hazari Court', 'Aruna Asaf Ali Hospital', 'MCD Store (Rajpur Road)', 
            'Rajpur Road Transport Deptt', 'PNB STA Road', 'Exchange Store (Hill Road)', 
            'IP College', 'Old Secretariat (Postal Account Office)', 'Vidhan Sabha Metro Station', 
            'Khyber Pass', 'Mall Road', 'Vishwa Vidyalaya Metro Station', 'INS Hostel', 
            'GTB Nagar', 'New Police Line', 'Alpana Cinema (Model Town Mtr Stn)', 
            'Model Town II', 'Model Town III', 'Azadpur Terminal', 'New Sabzi Mandi Azadpur', 
            'Adarsh Nagar Metro Station', 'Sarai Pipal Thala', 'Jahangirpuri GT Road (Metro Station)', 
            'GTK Depot', 'Shaheed Captain Vikram Batra Flyover', 'Haiderpur Metro Station', 
            'Badli Crossing', 'Jail Road Rohini Sec 18', 'Badli Village', 'Rohini Sec 18 B Block', 
            'Rohini Sec 18', 'Rohini Sec 18 Pocket A', 'Rohini Sec 18 B-7 Road', 
            'Rohini DTC Depot 4', 'Shri Krishna Apartments', 'Rohini Sec-16 Xing', 
            'Delhi Engg College Shahbad', 'Shahbad Daulatpur Gaon', 'Shahbad Daulatpur School', 
            'St. Xavier School Shahbad', 'Shahbad Dairy A Block', 'Shahbad Dairy', 
            'Rohini Sec 27 and 30 Crossing', 'Prehladpur Crossing', 'Prehladpur Village', 
            'Prehladpur School', 'Jain Colony', 'Rohini Sec 35', 'Barwala School', 
            'Barwala Village', 'Poothkhurd Firni Road', 'Sultan Pur Crossing / Poothkhurd', 
            'Poothkhurd Village', 'Maharishi Valmiki Hospital', 'DSIDC Office Bawana', 
            'DSIDC Bawana/ Dhakewala', 'Aditi College Bawana', 'Bawana School', 'Bawana', 
            'Bawana Depot', 'PS Bawana', 'Dariyapur Kalan School', 'Bajit Pur Crossing', 
            'Nangal Thakran', 'Bajitpur Village', 'Bajitpur Mandir', 'Katewara Village'
        ],
        distance: 44.7,
        schedule: [
            { start_time: '08:00 AM', end_time: '10:40 AM' },
            { start_time: '09:24 AM', end_time: '11:54 AM' },
            { start_time: '09:48 AM', end_time: '12:18 PM' },
            { start_time: '10:12 AM', end_time: '12:42 PM' },
            { start_time: '10:36 AM', end_time: '01:06 PM' },
            { start_time: '11:00 AM', end_time: '01:30 PM' },
            { start_time: '11:24 AM', end_time: '01:54 PM' },
            { start_time: '11:48 AM', end_time: '02:18 PM' },
            { start_time: '12:12 PM', end_time: '02:42 PM' },
            { start_time: '12:36 PM', end_time: '03:06 PM' },
            { start_time: '01:00 PM', end_time: '03:30 PM' },
            { start_time: '01:24 PM', end_time: '03:54 PM' },
            { start_time: '01:58 PM', end_time: '04:38 PM' },
            { start_time: '03:30 PM', end_time: '06:10 PM' },
            { start_time: '04:14 PM', end_time: '06:44 PM' },
            { start_time: '04:38 PM', end_time: '07:08 PM' },
            { start_time: '05:02 PM', end_time: '07:32 PM' },
            { start_time: '05:26 PM', end_time: '07:56 PM' },
            { start_time: '05:50 PM', end_time: '08:20 PM' },
            { start_time: '06:14 PM', end_time: '08:44 PM' },
            { start_time: '06:38 PM', end_time: '09:08 PM' },
            { start_time: '07:02 PM', end_time: '09:32 PM' },
            { start_time: '07:26 PM', end_time: '09:56 PM' },
            { start_time: '07:50 PM', end_time: '10:20 PM' },
            { start_time: '08:14 PM', end_time: '10:44 PM' },
            { start_time: '09:40 PM', end_time: '12:20 AM' }
        ],
        is_active: true
    }
];

var asd= routes;


for(let i=0;i<asd.length;i++ ){
    for(let j=0;j<asd[i].route_stops.length;j++ ) asd[i].route_stops[j] = {place:asd[i].route_stops[j],lat:0,lon:0};
}

module.exports = asd;