function sum(i, n){
	let result = 0;
	for (i; i <= n; i++) {
		result += i;
	}
	return result;
}

document.querySelector("#i").addEventListener("change", () => {
	document.querySelector("#equals").value = sum(parseInt(document.querySelector("#i").value), parseInt(document.querySelector("#to").value));

	localStorage.setItem("sum", sum(parseInt(document.querySelector("#i").value), parseInt(document.querySelector("#to").value)))

});

document.querySelector("#to").addEventListener("change", () => {
	document.querySelector("#equals").value = sum(parseInt(document.querySelector("#i").value), parseInt(document.querySelector("#to").value));

	localStorage.setItem("sum", sum(parseInt(document.querySelector("#i").value), parseInt(document.querySelector("#to").value)))
});

const jokeURI = 'https://icanhazdadjoke.com/slack'

// fetch information
const getJoke = async () => {
  try {
    const response = await fetch(jokeURI)
    const obj = await response.json()
    console.log(`FETCHED. Response JSON ${obj}`)
    const joke = obj.attachments[0].fallback || 'No joke for you.'
    return joke
  } catch (error) { console.error(error) }
}

// interact with DOM
const updateWithJoke = async (event) => {
  try {
    document.querySelector('#result').innerHTML = ''
    const answer = await getJoke()
    document.querySelector('#result').innerHTML = answer
  } catch (error) { console.error(error) }
}


document.addEventListener('click', event => {
  if (event.target && event.target.id === "ilikejokes") { updateWithJoke(event) }
})