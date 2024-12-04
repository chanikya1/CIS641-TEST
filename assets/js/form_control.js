// Define models for each car make and featured cars
const carModels = {
    tata: [
        { model: "Tiago", image: "tata-tiago.jpg" },
        { model: "Nexon", image: "tata-nexon.jpg" },
        { model: "Harrier", image: "tata-harrier.jpg" },
        { model: "Altroz", image: "Tata-Altroz.jpg" }
    ],
    mahindra: [
        { model: "XUV700", image: "mahindra-XUV700.jpg" },
        { model: "Thar", image: "mahindra-thar.jpg" },
        { model: "Scorpio", image: "mahindra-scorpio.jpg" },
        { model: "Bolero", image: "Mahindra-Bolero.jpg" }
    ],
    maruti: [
        { model: "Vitara Brezza", image: "Maruti-Vitara-Brezza.jpg" },
        { model: "Swift", image: "Maruti-Swift.jpg" },
        { model: "Ertiga", image: "Maruti-Ertiga.jpg" },
        { model: "Dzire", image: "Maruti-Dzire.jpg" }
    ],
    ford: [
        { model: "Mustang", image: "Ford-Mustang.jpg" },
        { model: "F-150", image: "Ford-F-150.jpg" },
        { model: "Explorer", image: "Ford-Explorer.jpg" },
        { model: "Escape", image: "Ford-Escape.jpg" }
    ],
    chevrolet: [
        { model: "Traverse", image: "Chevrolet-Traverse.jpg" },
        { model: "Silverado", image: "Chevrolet-Silverado.jpg" },
        { model: "Malibu", image: "Chevrolet-Malibu.jpg" },
        { model: "Equinox", image: "Chevrolet-Equinox.jpg" }
    ],
    tesla: [
        { model: "Model Y", image: "Tesla Model Y.jpg" },
        { model: "Model X", image: "Tesla Model X.jpg" },
        { model: "Model S", image: "Tesla Model S.jpg" },
        { model: "Model 3", image: "Tesla Model 3.jpg" }
    ]
};

// Define featured cars for each make (optional, you can extend this based on your content)
const featuredCars = {
    tata: [
        { model: "Tata Tiago", year: "2021", mileage: "15,000 mi", price: "$20,000", image: "tata-tiago.jpg" },
        { model: "Tata Nexon", year: "2021", mileage: "10,000 mi", price: "$25,000", image: "tata-nexon.jpg" },
        { model: "Tata Harrier", year: "2021", mileage: "12,000 mi", price: "$30,000", image: "tata-harrier.jpg" },
        { model: "Tata Altroz", year: "2020", mileage: "8,000 mi", price: "$15,000", image: "Tata-Altroz.jpg" }
    ],
    mahindra: [
        { model: "Mahindra XUV700", year: "2022", mileage: "3,000 mi", price: "$30,000", image: "mahindra-XUV700.jpg" },
        { model: "Mahindra Thar", year: "2021", mileage: "5,000 mi", price: "$22,000", image: "mahindra-thar.jpg" },
        { model: "Mahindra Scorpio", year: "2021", mileage: "30,000 mi", price: "$18,000", image: "mahindra-scorpio.jpg" },
        { model: "Mahindra Bolero", year: "2020", mileage: "20,000 mi", price: "$16,000", image: "Mahindra-Bolero.jpg" }
    ],
    maruti: [
        { model: "Maruti Vitara Brezza", year: "2021", mileage: "10,000 mi", price: "$20,000", image: "Maruti-Vitara-Brezza.jpg" },
        { model: "Maruti Swift", year: "2021", mileage: "12,000 mi", price: "$13,000", image: "Maruti-Swift.jpg" },
        { model: "Maruti Ertiga", year: "2021", mileage: "15,000 mi", price: "$18,000", image: "Maruti-Ertiga.jpg" },
        { model: "Maruti Dzire", year: "2020", mileage: "8,000 mi", price: "$14,000", image: "Maruti-Dzire.jpg" }
    ],
    ford: [
        { model: "Ford Mustang", year: "2021", mileage: "3,000 mi", price: "$50,000", image: "Ford-Mustang.jpg" },
        { model: "Ford F-150", year: "2021", mileage: "5,000 mi", price: "$45,000", image: "Ford-F-150.jpg" },
        { model: "Ford Explorer", year: "2021", mileage: "10,000 mi", price: "$40,000", image: "Ford-Explorer.jpg" },
        { model: "Ford Escape", year: "2021", mileage: "7,000 mi", price: "$30,000", image: "Ford-Escape.jpg" }
    ],
    chevrolet: [
        { model: "Chevrolet Traverse", year: "2021", mileage: "6,000 mi", price: "$35,000", image: "Chevrolet-Traverse.jpg" },
        { model: "Chevrolet Silverado", year: "2021", mileage: "8,000 mi", price: "$40,000", image: "Chevrolet-Silverado.jpg" },
        { model: "Chevrolet Malibu", year: "2021", mileage: "7,000 mi", price: "$23,000", image: "Chevrolet-Malibu.jpg" },
        { model: "Chevrolet Equinox", year: "2021", mileage: "9,000 mi", price: "$28,000", image: "Chevrolet-Equinox.jpg" }
    ],
    tesla: [
        { model: "Tesla Model Y", year: "2021", mileage: "2,000 mi", price: "$35,000", image: "Tesla Model Y.jpg" },
        { model: "Tesla Model X", year: "2021", mileage: "1,500 mi", price: "$50,000", image: "Tesla Model X.jpg" },
        { model: "Tesla Model S", year: "2021", mileage: "1,000 mi", price: "$70,000", image: "Tesla Model S.jpg" },
        { model: "Tesla Model 3", year: "2021", mileage: "1,200 mi", price: "$40,000", image: "Tesla Model 3.jpg" }
    ]
};

// Define modelCars object for each car model
const modelCars = {
    // Tata Models
    "Tata Tiago": { 
        year: "2021", mileage: "15,000 mi", price: "$20,000", image: "tata-tiago.jpg", make: "tata" 
    },
    "Tata Nexon": { 
        year: "2021", mileage: "10,000 mi", price: "$25,000", image: "tata-nexon.jpg", make: "tata"
    },
    "Tata Harrier": { 
        year: "2021", mileage: "12,000 mi", price: "$30,000", image: "tata-harrier.jpg", make: "tata" 
    },
    "Tata Altroz": { 
        year: "2020", mileage: "8,000 mi", price: "$15,000", image: "Tata-Altroz.jpg", make: "tata" 
    },

    // Mahindra Models
    "Mahindra XUV700": { 
        year: "2022", mileage: "3,000 mi", price: "$30,000", image: "mahindra-XUV700.jpg", make: "mahindra" 
    },
    "Mahindra Thar": { 
        year: "2021", mileage: "5,000 mi", price: "$22,000", image: "mahindra-thar.jpg", make: "mahindra"
    },
    "Mahindra Scorpio": { 
        year: "2021", mileage: "30,000 mi", price: "$18,000", image: "mahindra-scorpio.jpg", make: "mahindra" 
    },
    "Mahindra Bolero": { 
        year: "2020", mileage: "20,000 mi", price: "$16,000", image: "Mahindra-Bolero.jpg", make: "mahindra" 
    },

    // Maruti Models
    "Maruti Vitara Brezza": { 
        year: "2021", mileage: "10,000 mi", price: "$19,000", image: "Maruti-Vitara-Brezza.jpg", make: "maruti" 
    },
    "Maruti Swift": { 
        year: "2021", mileage: "7,000 mi", price: "$15,000", image: "Maruti-Swift.jpg", make: "maruti"
    },
    "Maruti Ertiga": { 
        year: "2020", mileage: "15,000 mi", price: "$16,500", image: "Maruti-Ertiga.jpg", make: "maruti" 
    },
    "Maruti Dzire": { 
        year: "2021", mileage: "5,000 mi", price: "$13,000", image: "Maruti-Dzire.jpg", make: "maruti" 
    },

    // Ford Models
    "Ford Mustang": { 
        year: "2021", mileage: "2,000 mi", price: "$45,000", image: "Ford-Mustang.jpg", make: "ford" 
    },
    "Ford F-150": { 
        year: "2021", mileage: "8,000 mi", price: "$35,000", image: "Ford-F-150.jpg", make: "ford"
    },
    "Ford Explorer": { 
        year: "2021", mileage: "10,000 mi", price: "$40,000", image: "Ford-Explorer.jpg", make: "ford" 
    },
    "Ford Escape": { 
        year: "2020", mileage: "12,000 mi", price: "$28,000", image: "Ford-Escape.jpg", make: "ford" 
    },

    // Chevrolet Models
    "Chevrolet Traverse": { 
        year: "2021", mileage: "7,000 mi", price: "$38,000", image: "Chevrolet-Traverse.jpg", make: "chevrolet" 
    },
    "Chevrolet Silverado": { 
        year: "2021", mileage: "5,000 mi", price: "$45,000", image: "Chevrolet-Silverado.jpg", make: "chevrolet"
    },
    "Chevrolet Malibu": { 
        year: "2021", mileage: "9,000 mi", price: "$24,000", image: "Chevrolet-Malibu.jpg", make: "chevrolet" 
    },
    "Chevrolet Equinox": { 
        year: "2020", mileage: "15,000 mi", price: "$22,000", image: "Chevrolet-Equinox.jpg", make: "chevrolet" 
    },

    "Tesla Model S": { 
        year: "2023", mileage: "5,000 mi", price: "$80,000", image: "tesla-model-s.jpg", make: "tesla"
    },
    "Tesla Model 3": { 
        year: "2023", mileage: "3,000 mi", price: "$45,000", image: "tesla-model-3.jpg", make: "tesla"
    },
    "Tesla Model X": { 
        year: "2022", mileage: "8,000 mi", price: "$90,000", image: "tesla-model-x.jpg", make: "tesla"
    },
    "Tesla Model Y": { 
        year: "2023", mileage: "2,000 mi", price: "$55,000", image: "tesla-model-y.jpg", make: "tesla"
    }
};


// Function to populate the model dropdown with options
function populateModelSelect() {
    const makeSelect = document.getElementById("make");
    const modelSelect = document.getElementById("model");

    const selectedMake = makeSelect.value;
    modelSelect.innerHTML = '<option value="default">Model</option>';  // Reset model dropdown

    if (carModels[selectedMake]) {
        carModels[selectedMake].forEach((car) => {
            const option = document.createElement("option");
            option.value = car.model;
            option.textContent = car.model;
            modelSelect.appendChild(option);
        });
    }
}

populateModelSelect()
