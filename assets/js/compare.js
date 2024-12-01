// Define models for each car make and details for comparison
const carModels = {
    tata: [
        { model: "Tiago", year: "2020", mileage: "15,000 mi", price: "$20,000", image: "tata-tiago.jpg" },
        { model: "Nexon", year: "2021", mileage: "10,000 mi", price: "$25,000", image: "tata-nexon.jpg" },
        { model: "Harrier", year: "2021", mileage: "12,000 mi", price: "$30,000", image: "tata-harrier.jpg" },
        { model: "Altroz", year: "2020", mileage: "8,000 mi", price: "$15,000", image: "Tata-Altroz.jpg" }
    ],
    mahindra: [
        { model: "XUV700", year: "2022", mileage: "3,000 mi", price: "$30,000", image: "mahindra-XUV700.jpg" },
        { model: "Thar", year: "2021", mileage: "5,000 mi", price: "$22,000", image: "mahindra-thar.jpg" },
        { model: "Scorpio", year: "2021", mileage: "30,000 mi", price: "$18,000", image: "mahindra-scorpio.jpg" },
        { model: "Bolero", year: "2020", mileage: "20,000 mi", price: "$16,000", image: "Mahindra-Bolero.jpg" }
    ],
    maruti: [
        { model: "Vitara Brezza", year: "2021", mileage: "10,000 mi", price: "$20,000", image: "Maruti-Vitara-Brezza.jpg" },
        { model: "Swift", year: "2021", mileage: "12,000 mi", price: "$13,000", image: "Maruti-Swift.jpg" },
        { model: "Ertiga", year: "2021", mileage: "15,000 mi", price: "$18,000", image: "Maruti-Ertiga.jpg" },
        { model: "Dzire", year: "2020", mileage: "8,000 mi", price: "$14,000", image: "Maruti-Dzire.jpg" }
    ],
    ford: [
        { model: "Mustang", year: "2021", mileage: "3,000 mi", price: "$50,000", image: "Ford-Mustang.jpg" },
        { model: "F-150", year: "2021", mileage: "5,000 mi", price: "$45,000", image: "Ford-F-150.jpg" },
        { model: "Explorer", year: "2021", mileage: "10,000 mi", price: "$40,000", image: "Ford-Explorer.jpg" },
        { model: "Escape", year: "2021", mileage: "7,000 mi", price: "$30,000", image: "Ford-Escape.jpg" }
    ],
    chevrolet: [
        { model: "Traverse", year: "2021", mileage: "6,000 mi", price: "$35,000", image: "Chevrolet-Traverse.jpg" },
        { model: "Silverado", year: "2021", mileage: "8,000 mi", price: "$40,000", image: "Chevrolet-Silverado.jpg" },
        { model: "Malibu", year: "2021", mileage: "7,000 mi", price: "$23,000", image: "Chevrolet-Malibu.jpg" },
        { model: "Equinox", year: "2021", mileage: "9,000 mi", price: "$28,000", image: "Chevrolet-Equinox.jpg" }
    ],
    tesla: [
        { model: "Model Y", year: "2021", mileage: "2,000 mi", price: "$35,000", image: "Tesla Model Y.jpg" },
        { model: "Model X", year: "2021", mileage: "1,500 mi", price: "$50,000", image: "Tesla Model X.jpg" },
        { model: "Model S", year: "2021", mileage: "1,000 mi", price: "$70,000", image: "Tesla Model S.jpg" },
        { model: "Model 3", year: "2021", mileage: "1,200 mi", price: "$40,000", image: "Tesla Model 3.jpg" }
    ]
};

// Update models dynamically based on selected make
function updateModels(carNum) {
    const makeSelect = document.getElementById(`make${carNum}`);
    const modelSelect = document.getElementById(`model${carNum}`);
    const selectedMake = makeSelect.value;

    // Clear existing options
    modelSelect.innerHTML = '<option value="">Select Model</option>';

    // Populate models for the selected make
    if (carModels[selectedMake]) {
        carModels[selectedMake].forEach((car) => {
            const option = document.createElement("option");
            option.value = car.model.toLowerCase().replace(/\s+/g, "-");
            option.textContent = car.model;
            modelSelect.appendChild(option);
        });
    }
}

// Display car details when model is selected
function updateCarDetails(carNum) {
    const makeSelect = document.getElementById(`make${carNum}`);
    const modelSelect = document.getElementById(`model${carNum}`);
    const selectedMake = makeSelect.value;
    const selectedModel = modelSelect.value;

    // Clear car details
    const carDetails = document.getElementById(`car${carNum}-details`);
    const carImage = document.getElementById(`car${carNum}-image`);
    carDetails.innerHTML = ''; // Clear previous car details
    carImage.src = ''; // Clear previous image

    // Show car details based on selected make and model
    if (carModels[selectedMake]) {
        const car = carModels[selectedMake].find(c => c.model.toLowerCase().replace(/\s+/g, "-") === selectedModel);
        if (car) {
            carDetails.innerHTML = `
                <h2>${car.model}</h2>
                <p>Year: ${car.year}</p>
                <p>Mileage: ${car.mileage}</p>
                <p>Price: ${car.price}</p>
                <p>Horsepower: 240HP</p>
                <p>Transmission: Automatic</p>
            `;
            carImage.src = `assets/images/cars-collection/${car.image}`;
        }
    }
}

// Add event listeners to dynamically update car details on model change
document.getElementById('model1').addEventListener('change', () => updateCarDetails(1));
document.getElementById('model2').addEventListener('change', () => updateCarDetails(2));
