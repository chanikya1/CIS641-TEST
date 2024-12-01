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

// Update models dynamically based on selected make
function updateModels() {
    const makeSelect = document.getElementById("make");
    const modelSelect = document.getElementById("model");
    const selectedMake = makeSelect.value;

    // Clear existing options
    modelSelect.innerHTML = '<option value="default">Model</option>';

    // Clear featured cars
    const featuredSection = document.getElementById("featured-cars-list");
    featuredSection.innerHTML = '';

    // Populate models for the selected make
    if (carModels[selectedMake]) {
        carModels[selectedMake].forEach((car) => {
            const option = document.createElement("option");
            option.value = car.model.toLowerCase().replace(/\s+/g, "-");
            option.textContent = car.model;
            modelSelect.appendChild(option);
        });

        // Populate featured cars for the selected make
        const featuredCarsList = featuredCars[selectedMake];
        featuredCarsList.forEach(car => {
            const carHTML = `
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="single-featured-cars">
                        <div class="featured-img-box">
                            <div class="featured-cars-img">
                                <img src="assets/images/cars-collection/${car.image}" alt="car">
                            </div>
                            <div class="featured-model-info">
                                <p>model: ${car.year} <span class="featured-mi-span">${car.mileage}</span> <span class="featured-hp-span">240HP</span> automatic</p>
                            </div>
                        </div>
                        <div class="featured-cars-txt">
                            <h2><a href="#">${car.model}</a></h2>
                            <h3>${car.price}</h3>
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            `;
            featuredSection.innerHTML += carHTML;
        });
    } else {
        // Show all cars if no brand is selected
        showAllCars();
    }
}

// Function to show all cars in featured section
function showAllCars() {
    const featuredSection = document.getElementById("featured-cars-list");
    featuredSection.innerHTML = ''; // Clear existing content

    // Loop through all brands and display featured cars
    Object.values(featuredCars).flat().forEach(car => {
        const carHTML = `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="single-featured-cars">
                    <div class="featured-img-box">
                        <div class="featured-cars-img">
                            <img src="assets/images/cars-collection/${car.image}" alt="car">
                        </div>
                        <div class="featured-model-info">
                            <p>model: ${car.year} <span class="featured-mi-span">${car.mileage}</span> <span class="featured-hp-span">240HP</span> automatic</p>
                        </div>
                    </div>
                    <div class="featured-cars-txt">
                        <h2><a href="#">${car.model}</a></h2>
                        <h3>${car.price}</h3>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                    </div>
                </div>
            </div>
        `;
        featuredSection.innerHTML += carHTML;
    });
}

// Initialize with all cars shown
document.addEventListener("DOMContentLoaded", () => {
    showAllCars();
    console.log("Car selection form is ready.");
});
