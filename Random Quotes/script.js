let content = document.querySelector("#text");
let author = document.querySelector("#writer");
let btn = document.querySelector("#btn");

let data = [
    {
        text: '"The strengths of the individual chapters rest with the experience and knowledge of the authors."',
        from: 'Cambridge English Corpus'
    },
    {
        text: '"Responsibility for this article is held equally by the two authors"',
        from: "hanieh"
    },
    {
        text: '"All references should be brought together at the end of the paper in alphabetical order of authors."',
        from: "amir"
    }
];

function randomQuate() {
    let index = Math.floor(Math.random() * data.length);
    while (content.innerHTML == data[index].text && author.innerHTML == data[index].from) {
        index = Math.floor(Math.random() * data.length);
    }
    content.innerHTML = data[index].text;
    author.innerHTML = data[index].from;
};

btn.addEventListener("click", () => {
    randomQuate();
});

randomQuate();