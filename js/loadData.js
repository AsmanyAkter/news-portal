const loadCatagories = async () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories';

    const res = await fetch(url);
    const data = await res.json();
    displayCatagory(data.data.news_category);

}

const displayCatagory = catagories => {

    // console.log(catagory)
    const catagoriesContainer = document.getElementById('catagories');
    console.log(catagoriesContainer)
    catagories.forEach(catagory => {
        // console.log(catagory);

        const btn = document.createElement("BUTTON");
        const textNode = document.createTextNode("");
        btn.id = `${catagory.category_id}`
        btn.className = "btn btn-light p-2"
        btn.innerHTML = `${catagory.category_name}`;

        btn.appendChild(textNode);
        catagoriesContainer.appendChild(btn);

    })
}

loadCatagories();


const loadNewsById = async () => {
    const url = 'https://openapi.programming-hero.com/api/news/category/01';

    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);

}


document.addEventListener('click', function (e) {
    if (e.target && e.target.id == '01') {
        loadNewsById()
    }
    toggleSpinner(true);
});


const displayNews = newses => {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.textContent = '';
    const news = loadNewsById();

    newses.forEach(news => {

        console.log(news.details);


        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card', 'mb-3');
        const newsDetails = (news.details).length;
        console.log(newsDetails);

        newsDiv.innerHTML = `

              </div>

                <div class="row g-0">
                    <div class="col-md-4 col-xs-4">
                        <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8 col-sm-11">
                        <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${(news.details).slice(0, 200)}...</p>

                        <br> <br>
                        <div class="d-flex flex-row g-4">
                        <img src="${news.author.img}" alt="" srcset="" height="40px" width="40px"
                            style="border-radius: 50%;">
                        <h5 class="ps-3"> ${news.author.name} </h5>
                        <h5 class="ps-5 pe-5">${news.total_view}</h5>

                        <button class="btn btn-primary btn-sm" >See more</button>


                        </div>



                        </div>
                    </div>
                </div>

        `;
        newsContainer.appendChild(newsDiv);



    });

    toggleSpinner(false);
}


const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none');
    }
}


