const loadCatagories = async () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories';

    const res = await fetch(url);
    const data = await res.json();
    displayCatagory(data.data.news_category);

}


const displayCatagory = catagories => {

    // console.log(catagory)
    const catagoriesContainer = document.getElementById('catagories');
    catagories.forEach(catagory => {
        console.log(catagory);
        const catagoryDiv = document.createElement('div');
        // countryDiv.classList.add('country');
        // console.log(country);
        catagoryDiv.innerHTML = `
            <h4>${catagory.category_name}</h4>
        `;
        catagoriesContainer.appendChild(catagoryDiv);
    })
}
loadCatagories();

