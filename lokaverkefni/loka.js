
const endpoint = "https://apis.is/concerts";

let tonleikar = []
let sortedevents = []

fetch(endpoint)
    .then(result => result.json())
    .then(data => {

        const container = document.querySelector('#container');
        console.log(container);
        data.results.forEach(concert => {
            console.log(concert);
            const card = document.createElement('div');
            card.classList.add('card');

            const tmpImg = new Image(200);
            tmpImg.src = concert.imageSource;

            const containerWithin = document.createElement('div');
            containerWithin.classList.add('container');

            const title = document.createElement('h3');
            title.innerHTML = concert.eventDateName;
            const name = document.createElement('h4')
            name.innerHTML = concert.name;
            const location = document.createElement('h4')
            location.innerHTML = concert.eventHallName;
            const date = document.createElement('p');
            moment.locale('is')
            date.innerHTML = moment(concert.dateOfShow).format('lll');

        card.dataset.title = concert.eventDateName;

            containerWithin.appendChild(title);
            containerWithin.appendChild(name);
            containerWithin.appendChild(location);
            containerWithin.appendChild(date);


            card.appendChild(tmpImg);
            card.appendChild(containerWithin);
            sortedevents.push(card);
            //container.appendChild(card);
        });
	function compare(a, b) {
      if (a.dataset.title < b.dataset.title)
        return -1;
      if (a.dataset.title > b.dataset.title)
        return 1;
      return 0;
    }
    sortedevents.sort(compare);
    sortedevents.forEach(event => {
      container.appendChild(event);
    })
	console.log(container.children)
	tonleikar = Array.from(container.children)
    });

let searchinput = document.querySelector('#search-input')
console.log(container.children)
searchinput.addEventListener('keyup',function leita(e) {
	console.log(e.target.value != '')
		if (e.target.value != ''){
			tonleikar.forEach(function (event) {
				if(event.dataset.title.toLowerCase().includes(e.target.value.toLowerCase())){
					event.style = 'display:block'

				}else(event.style = 'display:none')

				console.log(event)
			})
			
		}
		console.log(e.target.value)

})
