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
});


const displayNews = newses => {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.textContent = '';
    const news = loadNewsById();



    newses.forEach(news => {


        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card', 'mb-3');
        const newsDetails = (news.details).length;
        console.log(newsDetails)
        newsDiv.innerHTML = `
        </div>

                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="card-text">"${news.details}"</p>

                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>

        `;
        newsContainer.appendChild(newsDiv);
    });

}

{/* <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button> */ }