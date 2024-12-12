const product = [
  { id: 0, image: 'logo.png', title: 'magbalik', Artist: 'Callalily' },
  { id: 1, image: 'logo.png', title: 'magazine', Artist: 'Eraserheads' },
  { id: 2, image: 'logo.png', title: 'nobela', Artist: 'Join The Club' },
  { id: 3, image: 'logo.png', title: 'alapaap', Artist: 'Eraserheads' },
  { id: 4, image: 'logo.png', title: 'ligaya', Artist: 'Eraserheads' },
  { id: 5, image: 'logo.png', title: 'all or nothing', Artist: 'O-Town' },
   {id: 6, image: 'logo.png', title: 'pansamantala', Artist: 'Callalily' },
   {id: 7, image: 'logo.png', title: 'pasenysa ka na', Artist: 'Silent Sanctuary' },
   {id: 8, image: 'logo.png', title: 'kundiman', Artist: 'Silent Sanctuary' },
   {id: 9, image: 'logo.png', title: 'kahit kailan', Artist: 'SouthBorder' },
   {id: 10, image: 'logo.png', title: '14', Artist: 'Silent Sanctuary' }
];

const categories = product; // No need to use Set since the array already contains unique objects.

document.getElementById('searchBar').addEventListener('keyup', (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = categories.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchData) || 
      item.Artist.toLowerCase().includes(searchData)
    );
  });
  displayItem(filterData);
});

const displayItem = (items) => {
  document.getElementById('root').innerHTML = items
    .map((item) => {
      const { image, title, Artist } = item;
      return `
        <div class='box'>
          <div class='img-box'>
            <img class='images' src="${image}" alt="${title}">
          </div>
          <div class='bottom'>
            <h1> ${title}</h1>
            <p> ${Artist}</p>
          </div>
        </div>
      `;
    })
    .join('');
};

// Display initial content
displayItem(categories);
