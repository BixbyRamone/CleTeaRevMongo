module.exports = (catArray, teas)=> {

	let template = '';

	for (var i = 0; i < catArray.length; i++) {
		template += `<div id="${catArray[i]}" class="card card-body" <h2>${catArray[i]}</div>`//catArray[i]

	}

	return template;


}

/*
<div class="card card-body">
				<h2>{{this}}</h2>
				{{#each teas}}
					<h3>{{name}}</h3>
					
				{{/each}}
			</div>
*/