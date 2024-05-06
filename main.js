const rubInput = document.querySelector('#rub')
const startBtn = document.querySelector('#start')
const usdValue = document.querySelector('#usd_value')
const eurValue = document.querySelector('#eur_Value')
const cnyValue = document.querySelector('#cny_Value')

const getData = async (url) => {

    const response = await fetch(url);

    if(!response.ok) {
        throw new Error(`Error at the adress ${url}`);
    } else {
        return await response.json();
    }
};

startBtn.addEventListener('click', () => {
    getData('https://www.cbr-xml-daily.ru/latest.js')
    .then((courses) => {
        const data = courses

        let usd_courses = data.rates.USD
        console.log(usd_courses)

        usdValue.textContent = `USD: ${(rubInput.Value * courses.rates.USD).toFixed(2)} $`
        eurValue.textContent = `EUR: ${(rubInput.Value * courses.rates.EUR).toFixed(2)} €`
        cnyValue.textContent = `CNY: ${(rubInput.Value * courses.rates.CNY).toFixed(2)} ¥`

    })
})
