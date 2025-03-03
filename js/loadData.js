const loadCatagories = () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    fetch(url)
        .then(res => res.json())
        .then(data => displayCatagory(data.data.news_category))
        .catch(error => alert(error))


}

const displayCatagory = catagories => {

    // console.log(catagory)
    const catagoriesContainer = document.getElementById('catagories');
    // console.log(catagoriesContainer)
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


const loadNewsById = (searchId) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${searchId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => alert(error));

}




document.addEventListener('click', function (e) {
    if (e.target && e.target.id == '01') {
        loadNewsById('01');
        toggleSpinner(true);
    }

});

document.addEventListener('click', function (e) {
    if (e.target && e.target.id == '02') {
        loadNewsById('02');
        toggleSpinner(true);
    }

});

document.addEventListener('click', function (e) {
    if (e.target && e.target.id == '03') {
        loadNewsById('03');
        toggleSpinner(true);
    }

});


document.addEventListener('click', function (e) {
    if (e.target && e.target.id == '04') {
        loadNewsById('04');
        toggleSpinner(true);
    }

});
document.addEventListener('click', function (e) {
    if (e.target && e.target.id == '05') {
        loadNewsById('05');
        toggleSpinner(true);
    }

});


document.addEventListener('click', function (e) {
    if (e.target && e.target.id == '06') {
        loadNewsById('06');
        toggleSpinner(true);
    }

});

document.addEventListener('click', function (e) {
    if (e.target && e.target.id == '07') {
        loadNewsById('07');
        toggleSpinner(true);
    }
});


document.addEventListener('click', function (e) {
    if (e.target && e.target.id == '08') {
        loadNewsById('08');
        toggleSpinner(true);
    }

});



const displayNews = newses => {

    if (newses.length === 0) {
        toggleSpinner(false);
    }

    newses.sort((a, b) => {
        return b.total_view - a.total_view;
    });


    // console.log(newses[0].category_id);

    const numOfNews = document.getElementById('numOfNews');
    const numberDiv = document.createElement('div');
    numOfNews.innerHTML = `
              <h4 >${newses.length} News found in this Category</h4>  `;
    numOfNews.appendChild(numberDiv);

    const newsContainer = document.getElementById('newsContainer');
    newsContainer.textContent = '';
    newses.forEach(news => {
        // console.log(news.total_view);


        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card', 'mb-3');

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
                        <div class="d-flex flex-row g-4 justify-content-between">

                        <div class ="d-inline">

                        <img src="${news.author.img}" alt="" srcset="" height="40px" width="40px"
                            style="border-radius: 50%;"> </img>

                        <p > ${news.author.name ? news.author.name : "No data found"}</p>
                        </div>

                        <div>   <h5 class="pt-4">${news.total_view ? news.total_view : "No Views"}</h5></div>

                        <div>    <button class="btn btn-primary btn-sm mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">See more</button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title"  id="exampleModalLabel"> News Details  </h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body text-start">
                                    <h5 class="card-title">Title: ${news.title}</h5>
                                    <p class="card-text">Details: ${news.details}</p>
                                    <br>
                                    <p > Author Name: ${news.author.name ? news.author.name : "No data found"}</p>
                                    <br>
                                    <p > Published Date: ${news.author.published_date ? news.author.published_date : "No data found"}</p>
                                    <br>
                                    <p > Rating: ${news.rating.number ? news.rating.number : "No data found"}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                    </div>
                                </div>
                            </div>
                        </div>



                        </div>



                        </div>



                        </div>
                    </div>
                </div>

        `;
        newsContainer.appendChild(newsDiv);

        toggleSpinner(false);



    });

    //
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


