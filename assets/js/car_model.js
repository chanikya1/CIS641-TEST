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

// Function to populate featured cars based on selected model
function populateFeaturedCarsByModel(selectedModel) {
    const featuredSection = document.getElementById("featured-cars-list");
    featuredSection.innerHTML = ""; // Clear current featured cars

    if (modelCars[selectedModel]) {
        const car = modelCars[selectedModel];
        const carHTML = `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="single-featured-cars">
                    <div class="featured-img-box">
                        <div class="featured-cars-img">
                            <img src="assets/images/cars-collection/${car.image}" alt="car">
                        </div>
                        <div class="featured-model-info">
                            <p>Model: ${car.year} <span class="featured-mi-span">${car.mileage}</span> <span class="featured-hp-span">240HP</span> automatic</p>
                        </div>
                    </div>
                    <div class="featured-cars-txt">
                        <h2><a href="#">${car.model}</a></h2>
                        <h3>${car.price}</h3>
                    </div>
                </div>
            </div>
        `;
        featuredSection.innerHTML += carHTML;
    }
}
// Attach event listener to the model dropdown
document.getElementById("model").addEventListener("change", () => {
    const selectedModel = document.getElementById("model").value;
    if (selectedModel !== "default") {
        populateFeaturedCarsByModel(selectedModel);
    }
});



// Function to populate the featured cars based on selected year
function populateFeaturedCarsByYear() {
    const selectedYear = document.getElementById("year").value;
    const featuredSection = document.getElementById("featured-cars-list");
    featuredSection.innerHTML = ""; // Clear current featured cars

    // Only proceed if a model is selected
    if ( selectedYear !== "default") {
        for (const carKey in modelCars) {
            const car = modelCars[carKey];

            // Filter cars by selected model and year
            if (car.year === selectedYear) {
                const carHTML = `
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-featured-cars">
                            <div class="featured-img-box">
                                <div class="featured-cars-img">
                                    <img src="assets/images/cars-collection/${car.image}" alt="car">
                                </div>
                                <div class="featured-model-info">
                                    <p>Model: ${car.year} <span class="featured-mi-span">${car.mileage}</span> <span class="featured-hp-span">240HP</span> automatic</p>
                                </div>
                            </div>
                            <div class="featured-cars-txt">
                                <h2><a href="#">${carKey}</a></h2>
                                <h3>${car.price}</h3>
                            </div>
                        </div>
                    </div>
                `;
                featuredSection.innerHTML += carHTML;
            }
        }
    }
}

// Attach event listener to the year dropdown
document.getElementById("year").addEventListener("change", () => {
    populateFeaturedCarsByYear(); // Call function when the year is selected
});

