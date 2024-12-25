import React, { useState } from 'react'
import Select from 'react-select';


export default function Softwear() {

    const data = {
        Pakistan: {
            cities: ["Abbottabad","AkoraKhattak","Attock","Bannu","Bhirya","Bahawalpur","Chiniot","Chitral",
                    "Chakwal","Daska","DeraGhaziKhan","DeraIsmailKhan","Ebrahimabad","Faisalabad","Gwadar",
                    "Gujrat","Karachi","Multan", "Lahore", "Islamabad", "Quetta", "Peshawar", "Khanewal", "Sukkur"],
            Abbottabad : {
                postal: "22010",
                dailing: "+92-0992",
                province: "Khyber Pakhtunkhwa",
                country: "Pakistan"
            },

            AkoraKhattak: {
                postal: "24350",
                dailing: "+92-931",
                province: "Khyber Pakhtunkhwa",
                country: "Pakistan"
            },

            Attock: {
                postal: "43600",
                dailing: "+92-57",
                province: "Punjab",
                country: "Pakistan"
            },

            Bannu: {
                postal: "28100",
                dailing: "+92-928",
                province: "Khyber Pakhtunkhwa",
                country: "Pakistan"
            },

            Bhirya: {
                postal: "39420",
                dailing: "+92-243",
                province: "Sindh",
                country: "Pakistan"
            },

            Bahawalpur: {
                postal: "63100",
                dailing: "+92-62",
                province: "Punjab",
                country: "Pakistan"
            },

            Chiniot: {
                postal: "39350",
                dailing: "+92-47",
                province: "Punjab",
                country: "Pakistan"
            },

            Chitral: {
                postal: "17100",
                dailing: "+92-947",
                province: "Khyber Pakhtunkhwa",
                country: "Pakistan"
            },

            Chakwal: {
                postal: "48800",
                dailing: "+92-543",
                province: "Punjab",
                country: "Pakistan"
            },

            Daska: {
                postal: "39450",
                dailing: "+92-56",
                province: "Punjab",
                country: "Pakistan"
            },

            DeraGhaziKhan: {
                postal: "32200",
                dailing: "+92-64",
                province: "Punjab",
                country: "Pakistan"
            },

            DeraIsmailKhan: {
                postal: "28420",
                dailing: "+92-966",
                province: "Khyber Pakhtunkhwa",
                country: "Pakistan"
            },

            Ebrahimabad: {
                postal: "39250",
                dailing: "+92-45",
                province: "Sindh",
                country: "Pakistan"
            },

            Faisalabad: {
                postal: "38000",
                dailing: "+92-41",
                province: "Punjab",
                country: "Pakistan"
            },

            Gwadar: {
                postal: "93100",
                dailing: "+92-861",
                province: "Balochistan",
                country: "Pakistan"
            },

            Gujrat: {
                postal: "50700",
                dialing: "+92-53",
                province: "Punjab",
                country: "Pakistan"
            },
             
            Karachi: {
                postal: "74000",
                dailing: "+92 21",
                province: "Sindh",
                country: "Pakistan",
            },

            Multan: {
                postal: "60000",
                dailing: "+92 61 ",
                province: "Punjab",
                country: "Pakistan",
            },

            Lahore: {
                postal: "51000",
                dailing: "+92-42",
                province: "Punjab",
                country: "Pakistan"
            },

            Islamabad: {
                postal: "44000",
                dailing: "+92 51",
                province: "Islamabad Capital Territory",
                country: "Pakistan"
            },

            Quetta: {
                postal: "87300",
                dailing: "+92 81",
                province: "Balochistan",
                country: "Pakistan"
            },

            Peshawar: {
                postal: "25000",
                dailing: "+92 91",
                province: "Khyber Pakhtunkhwa",
                country: "Pakistan"
            },

            Khanewal: {
                postal: "05812",
                dailing: "065",
                province: "Punjab",
                country: "Pakistan"
            },

            Sukkur: {
                postal: "65200",
                dailing: "71",
                province: "Sindh",
                country: "Pakistan"
            }
        },
      
        India: {
            cities: ["Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai", "Hyderabad", "Ahmedabad"],
            Mumbai: {
                postal: "400001",
                dailing: "+91-22",
                province: "Maharashtra",
                country: "India"
            },

            Delhi: {
                postal: "110001",
                dailing: "+91-11",
                province: "Delhi",
                country: "India"
            },

            Bangalore: {
                postal: "560001",
                dailing: "+91-80",
                province: "Karnataka",
                country: "India"
            },

            Kolkata: {
                postal: "700001",
                dailing: "+91-33",
                province: "West Bengal",
                country: "India"
            },

            Chennai: {
                postal: "600001",
                dailing: "+91-44",
                province: "Tamil Nadu",
                country: "India"
            },

            Hyderabad: {
                postal: "500001",
                dailing: "+91-40",
                province: "Telangana",
                country: "India"
            },

            Ahmedabad: {
                postal: "380001",
                dailing: "+91-79",
                province: "Gujarat",
                country: "India"
            }
        },
      
        UnitedState: {
            cities: ["NewYork", "LosAngeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio"],
            NewYork: {
                postal: "10001",
                dailing: "+1-212",
                province: "New York",
                country: "USA"
            },

            LosAngeles: {
                postal: "90001",
                dailing: "+1-213",
                province: "California",
                country: "USA"
            },

            Chicago: {
                postal: "60601",
                dailing: "+1-312",
                province: "Illinois",
                country: "USA"
            },

            Houston: {
                postal: "77001",
                dailing: "+1-713",
                province: "Texas",
                country: "USA"
            },

            Phoenix: {
                postal: "85001",
                dailing: "+1-602",
                province: "Arizona",
                country: "USA"
            },

            Philadelphia: {
                postal: "19101",
                dailing: "+1-215",
                province: "Pennsylvania",
                country: "USA"
            },

            SanAntonio: {
                postal: "78201",
                dailing: "+1-210",
                province: "Texas",
                country: "USA"
            }
        },
      
        Canda: {
            cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa", "Edmonton", "Quebec"],
            Toronto: {
                postal: "M5A 1A1",
                dailing: "+1-416",
                province: "Ontario",
                country: "Canada"
            },

            Vancouver: {
                postal: "V5K 0A1",
                dailing: "+1-604",
                province: "British Columbia",
                country: "Canada"
            },

            Montreal: {
                postal: "H2Y 1Y7",
                dailing: "+1-514",
                province: "Quebec",
                country: "Canada"
            },

            Calgary: {
                postal: "T2P 0G8",
                dailing: "+1-403",
                province: "Alberta",
                country: "Canada"
            },

            Ottawa: {
                postal: "K1A 0B1",
                dailing: "+1-613",
                province: "Ontario",
                country: "Canada"
            },

            Edmonton: {
                postal: "T5J 2H1",
                dailing: "+1-780",
                province: "Alberta",
                country: "Canada"
            },

            Quebec: {
                postal: "G1R 2P8",
                dailing: "+1-418",
                province: "Quebec",
                country: "Canada"
            }
        },

        Australia: {
            cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Hobart", "Canberra"],
            Sydney: {
                postal: "2000",
                dailing: "+61-2",
                province: "New South Wales",
                country: "Australia"
            },

            Melbourne: {
                postal: "3000",
                dailing: "+61-3",
                province: "Victoria",
                country: "Australia"
            },

            Brisbane: {
                postal: "4000",
                dailing: "+61-7",
                province: "Queensland",
                country: "Australia"
            },

            Perth: {
                postal: "6000",
                dailing: "+61-8",
                province: "Western Australia",
                country: "Australia"
            },

            Adelaide: {
                postal: "5000",
                dailing: "+61-8",
                province: "South Australia",
                country: "Australia"
            },

            Hobart: {
                postal: "7000",
                dailing: "+61-3",
                province: "Tasmania",
                country: "Australia"
            },

            Canberra: {
                postal: "2600",
                dailing: "+61-2",
                province: "Australian Capital Territory",
                country: "Australia"
            }
        },
        
        NewZeland: {
            cities: ["Auckland", "Wellington", "Christchurch", "Hamilton", "Dunedin", "Tauranga", "Napier"],
            Auckland: {
                postal: "1010",
                dailing: "+64-9",
                province: "Auckland",
                country: "New Zealand"
            },

            Wellington: {
                postal: "6011",
                dailing: "+64-4",
                province: "Wellington",
                country: "New Zealand"
            },

            Christchurch: {
                postal: "8011",
                dailing: "+64-3",
                province: "Canterbury",
                country: "New Zealand"
            },

            Hamilton: {
                postal: "3204",
                dailing: "+64-7",
                province: "Waikato",
                country: "New Zealand"
            },

            Dunedin: {
                postal: "9016",
                dailing: "+64-3",
                province: "Otago",
                country: "New Zealand"
            },

            Tauranga: {
                postal: "3110",
                dailing: "+64-7",
                province: "Bay of Plenty",
                country: "New Zealand"
            },

            Napier: {
                postal: "4110",
                dailing: "+64-6",
                province: "Hawke's Bay",
                country: "New Zealand"
            }
        },
        
        UnitedKingdom: {
            cities: ["London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Liverpool", "Edinburgh"],
            London: {
                postal: "EC1A 1BB",
                dailing: "+44-20",
                province: "England",
                country: "United Kingdom"
            },

            Manchester: {
                postal: "M1 1AE",
                dailing: "+44-161",
                province: "England",
                country: "United Kingdom"
            },

            Birmingham: {
                postal: "B1 1AA",
                dailing: "+44-121",
                province: "England",
                country: "United Kingdom"
            },

            Leeds: {
                postal: "LS1 1AA",
                dailing: "+44-113",
                province: "England",
                country: "United Kingdom"
            },

            Glasgow: {
                postal: "G1 1AA",
                dailing: "+44-141",
                province: "Scotland",
                country: "United Kingdom"
            },

            Liverpool: {
                postal: "L1 1AA",
                dailing: "+44-151",
                province: "England",
                country: "United Kingdom"
            },

            Edinburgh: {
                postal: "EH1 1BB",
                dailing: "+44-131",
                province: "Scotland",
                country: "United Kingdom"
            }
        },
        
        Bangladesh: {
            cities: ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Barisal", "Rangpur"],
            Dhaka: {
                postal: "1000",
                dailing: "+880-2",
                province: "Dhaka Division",
                country: "Bangladesh"
            },

            Chittagong: {
                postal: "4000",
                dailing: "+880-31",
                province: "Chittagong Division",
                country: "Bangladesh"
            },

            Khulna: {
                postal: "9000",
                dailing: "+880-41",
                province: "Khulna Division",
                country: "Bangladesh"
            },

            Rajshahi: {
                postal: "6000",
                dailing: "+880-72",
                province: "Rajshahi Division",
                country: "Bangladesh"
            },

            Sylhet: {
                postal: "3100",
                dailing: "+880-82",
                province: "Sylhet Division",
                country: "Bangladesh"
            },

            Barisal: {
                postal: "8200",
                dailing: "+880-43",
                province: "Barisal Division",
                country: "Bangladesh"
            },

            Rangpur: {
                postal: "5400",
                dailing: "+880-52",
                province: "Rangpur Division",
                country: "Bangladesh"
            }
        },
        
        Afghanistan: {
            cities: ["Kabul", "Herat", "Kandahar", "Mazar-i-Sharif", "Jalalabad", "Kunduz", "Balkh"],
            Kabul: {
                postal: "1001",
                dailing: "+93-20",
                province: "Kabul",
                country: "Afghanistan"
            },

            Herat: {
                postal: "1200",
                dailing: "+93-40",
                province: "Herat",
                country: "Afghanistan"
            },

            Kandahar: {
                postal: "2000",
                dailing: "+93-30",
                province: "Kandahar",
                country: "Afghanistan"
            },

            MazariSharif: {
                postal: "2100",
                dailing: "+93-50",
                province: "Balkh",
                country: "Afghanistan"
            },

            Jalalabad: {
                postal: "3400",
                dailing: "+93-70",
                province: "Nangarhar",
                country: "Afghanistan"
            },

            Kunduz: {
                postal: "3700",
                dailing: "+93-70",
                province: "Kunduz",
                country: "Afghanistan"
            },

            Balkh: {
                postal: "3100",
                dailing: "+93-40",
                province: "Balkh",
                country: "Afghanistan"
            }
        },
        
        UAE: {
            cities: ["AbuDhabi", "Dubai", "Sharjah", "Ajman", "Fujairah", "RasAlKhaimah", "UmmAlQuwain"],
            AbuDhabi: {
                postal: "11111",
                dailing: "+971-2",
                province: "Abu Dhabi",
                country: "UAE"
            },

            Dubai: {
                postal: "121212",
                dailing: "+971-4",
                province: "Dubai",
                country: "UAE"
            },

            Sharjah: {
                postal: "33333",
                dailing: "+971-6",
                province: "Sharjah",
                country: "UAE"
            },

            Ajman: {
                postal: "55555",
                dailing: "+971-6",
                province: "Ajman",
                country: "UAE"
            },

            Fujairah: {
                postal: "77777",
                dailing: "+971-9",
                province: "Fujairah",
                country: "UAE"
            },

            RasAlKhaimah: {
                postal: "88888",
                dailing: "+971-7",
                province: "Ras Al Khaimah",
                country: "UAE"
            },

            UmmAlQuwain: {
                postal: "99999",
                dailing: "+971-6",
                province: "Umm Al Quwain",
                country: "UAE"
            }
        }
    };
      
    const [world, setWorld] = useState("")
    const [city, setcity] = useState("")
    const [citydata, setCitydata] = useState({
        postal:"",
        dailing:"",
        province:"",
        country:""
    })

    const handleworldchange = (selectedOption) => {
        const world = selectedOption.value;
        setWorld(world)
        setcity("")
        setCitydata({
            postal: "",
            dailing: "",
            province: "",
            country: "",
        })
    }

    const handlecitychange = (selectedOption) => {
        const city = selectedOption.value;
        setcity(city);

        if(city && data[world]?.[city]) {
            setCitydata(data[world][city]);
        }   
        
        else {
            setCitydata({
                postal: "",
                dailing: "",
                province: "",
                country: "",
            })
        }
    }


  return (
    <>
    <div className="container">
    <h1>Postal Code</h1>
        <div className='world'>
            <h3>Country</h3>
            <Select
                options={Object.keys(data).map((country) => ({ label: country, value: country }))}
                onChange={handleworldchange}
                value={world ? { label: world, value: world } : null}
                placeholder="Select Country"
                isSearchable
            />
        </div>
        <div className='cities'>
            <h3>Cities</h3>
            <Select
                options={data[world]?.cities.map((cityName) => ({ label: cityName, value: cityName }))}
                onChange={handlecitychange}
                value={city ? { label: city, value: city } : null}
                placeholder="Select City"
                isSearchable
                noOptionsMessage={()=> "Select Your Country"}
            />
        </div>
        
        <div className='postal'>
            <h3>Postal Code</h3>
            <input type="phone" value={citydata.postal} name="" id="postal" readOnly />
        </div>
        <div className='dailing'>
            <h3>Dailing Code</h3>
            <input type="phone" value={citydata.dailing} name="" id="dailing" readOnly />
        </div>
        <div className='province'>
            <h3>Province</h3>
            <input type="text" name="" value={citydata.province} id="province" readOnly />
        </div>
        <div className='country'>
            <h3>Country</h3>
            <input type="text" name="" value={citydata.country} id="country" readOnly />
        </div>
    </div>


    </>
    )
}

