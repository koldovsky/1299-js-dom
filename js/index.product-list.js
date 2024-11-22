const products = [
  {
    id: "1",
    title: "Baby Yoda",
    description:
      "A cute sticker of Baby Yoda from the popular Star Wars series.",
    image: "img/baby-yoda.svg",
    price: 9.99,
  },
  {
    id: "2",
    title: "Banana",
    description: "A fun and quirky banana sticker perfect for fruit lovers.",
    image: "img/banana.svg",
    price: 4.99,
  },
  {
    id: "3",
    title: "Girl",
    description:
      "A stylish and empowering sticker featuring a modern girl design.",
    image: "img/girl.svg",
    price: 6.99,
  },
  {
    id: "4",
    title: "Viking",
    description:
      "A fierce and adventurous Viking sticker to showcase your warrior spirit.",
    image: "img/viking.svg",
    price: 7.99,
  },
];

function renderProducts(products) {
  let productsHtml = "";
  for (const product of products) {
    productsHtml += `
    <article class="products__item">
            <img class="products__image" src="${product.image}" alt="${product.title}">
            <h3 class="products__name">${product.title}</h3>
            <p class="products__description">${product.description}
            </p>
            <div class="products__actions">
                <button class="products__button products__button--info button button-card">
                    Info
                </button>
                <button class="products__button products__button--buy button button-card">
                    Buy - ${product.price}
                </button>
            </div>
    </article>`;
  }
  document.querySelector('.products__list').innerHTML = productsHtml;
}

renderProducts(products);
