var express = require("express"),
	faker = require("faker"),
	app = express();

function get_data(){
	var list =[{
	//Names
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	jobTitle: faker.name.jobTitle(),
	title: faker.name.title(),
	jobDescriptor: faker.name.jobDescriptor(),
	jobArea: faker.name.jobArea(),
	jobType: faker.name.jobType(),	
	
	//Internet
	email: faker.internet.email(),
	exampleEmail: faker.internet.exampleEmail(),
	userName: faker.internet.userName(),	
	
	//Phone
	phoneNumber: faker.phone.phoneNumber(),
	phoneNumberFormat: faker.phone.phoneNumberFormat(),
	phoneFormats: faker.phone.phoneFormats(),

	//address
	zipCode: faker.address.zipCode(),
	city: faker.address.city(),
	streetName: faker.address.streetName(),
	streetAddress: faker.address.streetAddress(),
	county: faker.address.county(),
	country: faker.address.country(),
	countryCode: faker.address.countryCode(),
	state: faker.address.state(),
	stateAbbr: faker.address.stateAbbr(),
	latitude: faker.address.latitude(),
	longitude: faker.address.longitude(),
	
	//Company
	companyName: faker.company.companyName(),
	catchPhrase: faker.company.catchPhrase(),
	catchPhraseAdjective: faker.company.catchPhraseAdjective(),
	catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
	catchPhraseNoun: faker.company.catchPhraseNoun(),
	bsAdjective: faker.company.bsAdjective(),
	bsBuzz: faker.company.bsBuzz(),
	bsNoun: faker.company.bsNoun(),
	
	//Finance
	account: faker.finance.account(),
	accountName: faker.finance.accountName(),
	mask: faker.finance.mask(),
	amount: faker.finance.amount(),
	transactionType: faker.finance.transactionType(),
	currencyCode: faker.finance.currencyCode(),
	currencyName: faker.finance.currencyName(),
	currencySymbol: faker.finance.currencySymbol(),	
	
	//Commerce
	department: faker.commerce.department(),
	productName: faker.commerce.productName(),
	price: faker.commerce.price(),
	productAdjective: faker.commerce.productAdjective(),
	productMaterial: faker.commerce.productMaterial(),
	product: faker.commerce.product(),
	
	//lorem
	word: faker.lorem.word(),
	words: faker.lorem.words(),
	sentence: faker.lorem.sentence(),
	slug: faker.lorem.slug(),
	sentences: faker.lorem.sentences(),
	paragraph: faker.lorem.paragraph(),
	paragraphs: faker.lorem.paragraphs(),
	text: faker.lorem.text(),
	lines: faker.lorem.lines()

	}];

for (var i=0; i<10; i++)
	{
		list.push({
				//Names
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				jobTitle: faker.name.jobTitle(),
				title: faker.name.title(),
				jobDescriptor: faker.name.jobDescriptor(),
				jobArea: faker.name.jobArea(),
				jobType: faker.name.jobType(),	
				
				//Internet
				email: faker.internet.email(),
				exampleEmail: faker.internet.exampleEmail(),
				userName: faker.internet.userName(),	
				
				//Phone
				phoneNumber: faker.phone.phoneNumber(),
				phoneNumberFormat: faker.phone.phoneNumberFormat(),
				phoneFormats: faker.phone.phoneFormats(),
			
				//address
				zipCode: faker.address.zipCode(),
				city: faker.address.city(),
				streetName: faker.address.streetName(),
				streetAddress: faker.address.streetAddress(),
				county: faker.address.county(),
				country: faker.address.country(),
				countryCode: faker.address.countryCode(),
				state: faker.address.state(),
				stateAbbr: faker.address.stateAbbr(),
				latitude: faker.address.latitude(),
				longitude: faker.address.longitude(),
				
				//Company
				companyName: faker.company.companyName(),
				catchPhrase: faker.company.catchPhrase(),
				catchPhraseAdjective: faker.company.catchPhraseAdjective(),
				catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
				catchPhraseNoun: faker.company.catchPhraseNoun(),
				bsAdjective: faker.company.bsAdjective(),
				bsBuzz: faker.company.bsBuzz(),
				bsNoun: faker.company.bsNoun(),
			
				//Finance
				account: faker.finance.account(),
				accountName: faker.finance.accountName(),
				mask: faker.finance.mask(),
				amount: faker.finance.amount(),
				transactionType: faker.finance.transactionType(),
				currencyCode: faker.finance.currencyCode(),
				currencyName: faker.finance.currencyName(),
				currencySymbol: faker.finance.currencySymbol(),	
				
				//Commerce
				department: faker.commerce.department(),
				productName: faker.commerce.productName(),
				price: faker.commerce.price(),
				productAdjective: faker.commerce.productAdjective(),
				productMaterial: faker.commerce.productMaterial(),
				product: faker.commerce.product(),
			
				//lorem
				word: faker.lorem.word(),
				words: faker.lorem.words(),
				sentence: faker.lorem.sentence(),
				slug: faker.lorem.slug(),
				sentences: faker.lorem.sentences(),
				paragraph: faker.lorem.paragraph(),
				paragraphs: faker.lorem.paragraphs(),
				text: faker.lorem.text(),
				lines: faker.lorem.lines()
		
		});
	}

	return list;
}

//path
app.set("view engine", "ejs");

//Route
app.get("/", function(req, res){
	data = get_data();
	res.render("index", {data: data});
});

app.get("/*", function(req, res){
	res.send("<h1>Sorry!!! this is a wrong page</h1>");
});

app.listen(3000, function(){
	console.log("Server Started!!!...");
});
