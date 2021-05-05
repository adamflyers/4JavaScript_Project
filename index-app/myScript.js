const data = [
    {
        id: 0,
        title: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto",
        desc: " nobis adipisci aperiam dolor iusto perspiciatis totam expedita voluptatum debitis soluta harum minima fugit rem similique, eaque omnis sunt",
        readCount: 2310,
    },
    {
        id: 1,
        title: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto",
        desc: " Ut laborum tempora magnam totam iste voluptatem repellat, exercitationem, non maxime cumque nemo praesentium tempore possimus temporibus quibusdam laboriosam laudantium dolores sapiente ratione.  accusantium aliquid tempora! Quidem aliquam animi porro voluptatum",
        readCount: 1390,
    },
    {
        id: 2,
        title: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto",
        desc: " Earum neque eos porro praesentium molesti  Maxime cumque natus culpa deleniti assumenda repellendus vitae praesentium error. Maiores distinctio atque, et mollitia, illum adipisci enim veritatis itaque ullam debitis",
        readCount: 3420,
    },
    {
        id: 3,
        title: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto",
        desc: " Nemo quisquam dolorem accusamusm earum hic. Non assumenda sapiente periores corrupti ducimus alias voluptates delectus. Fugit ipsam aperiam expedita ex est id repudiandae! Deserunt facere officiis tempora.",
        readCount: 3200,
    },
    {
        id: 4,
        title: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto",
        desc: " Delectus est deserunt explicabo sapiente repellat laborum numquam ea accusantium minima ab laboriosam veritatis, dolore magnam repellendus cumque dicta corporis tempora eius ratione doloremque, et voluptatibus",
        readCount: 3200,
    },

]

const articles = document.querySelector("#articles");

data.forEach((d) => {
    const articleElement = document.createElement("div");
    articleElement.innerHTML = `
        <p class="title"></p>
        <p></p>
        <p class="reading_account"></p>
    `;

    articles.appendChild(articleElement);
    // console.log(articleElement)
});

function filterArticles() {
    const countValue = document.querySelector(#count_input).value;
    loadArticles(countValue);
}

document
    .querySelector(#"search_button")
    .addEventListener("click", filterArticles);

loadArticles();