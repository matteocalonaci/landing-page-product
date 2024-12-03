const nav = ['Home', 'i punti di forza', 'Recensioni', 'Paperelle', 'FAQs', 'Newsletter'];


// Seleziona tutti gli <ul> nel documento
const navLists = document.querySelectorAll("ul");

const navItems = nav.map(item => {
    return `<li>${item}</li>`; 
});

// Popola ogni <ul> con gli elementi di navigazione
navLists.forEach(ul => {
    ul.innerHTML = navItems.join('');
});

console.log(navLists);



















