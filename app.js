// Fetch data from the vehicles.json file and render models
async function loadModels(region) {
    const response = await fetch('vehicles.json');
    const data = await response.json();
    
    const filteredBrands = data.brands.filter(brand => brand.region === region);
    
    const modelList = document.getElementById('model-list');
    modelList.innerHTML = ''; // Clear any existing content
    
    filteredBrands.forEach(brand => {
      const brandTitle = document.createElement('h2');
      brandTitle.innerText = brand.name;
      modelList.appendChild(brandTitle);
      
      const modelsUl = document.createElement('ul');
      brand.models.forEach(model => {
        const modelLi = document.createElement('li');
        modelLi.innerText = `${model.modelName} (${model.year}) - $${model.price}`;
        modelsUl.appendChild(modelLi);
      });
      
      modelList.appendChild(modelsUl);
    });
  }
  