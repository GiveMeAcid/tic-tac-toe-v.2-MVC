/////model/////

function Model() {

	// console.log(this.calculate);
}

Model.prototype.calculate = function(a, b) {
	this.sum = a+b;
	return this.sum;	
};
	
// Model();
////view//////

function View() {
	this.myId = document.getElementById('myId');

}

View.prototype.displayResults = function(a) {
	this.myId.innerHTML = a;
}

////controller///

function Controller(first, second) {

	this.myModel = new Model();
	this.myView = new View();

	this.myView.displayResults(this.myModel.calculate(first, second));
}

Controller(30, 30);