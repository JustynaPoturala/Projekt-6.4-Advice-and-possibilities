// const options = ['Programuj', 'Ucz się niemieckiego', 'Rób tak dalej!'];

const btnAddOption = document.body.querySelector('.add');
const btnReset = document.body.querySelector('.clean');
const btnShowAdvice = document.body.querySelector('.showAdvice');
const btnShowOptions = document.body.querySelector('.showOptions');
const input = document.body.querySelector('input');
const options = [];

btnAddOption.addEventListener("click", (e) => {
    e.preventDefault();
    const newOption = input.value.trim();
    if (newOption.length) {
        for (option of options) {
            if (option.toLowerCase() === newOption.toLowerCase()) {
                alert('Ta opcja została dodana już do tablicy!')
                return;
            }
        }
        options.push(newOption);
        input.value = "";
        console.log(`Dodano opcję ${newOption} do tablicy`);
    }
})


btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    options.length = 0;
    document.querySelector('h1').textContent = '';
})


btnShowAdvice.addEventListener('click', (e) => {
    const indeX = Math.floor(Math.random() * options.length);
    document.querySelector('h1').textContent = `- ${options[indeX]}`;
})


btnShowOptions.addEventListener('click', (e) => {
    alert(options.join(" --- --- "));
})


input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})