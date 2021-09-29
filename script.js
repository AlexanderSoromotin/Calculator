function animation () {
	number = $('.cal_window').val();
	console.log(number)
	console.log(number.toString().lenght())
}
function addNumbers (func) {
	if (func == "delete") {
		text = $('.cal_window').val();
		$('.cal_window').val(text.substr(0, text.length - 1))
	}
	else if (func == "clear") {
		$('.cal_window').val('')
	} 
	else if (func == "equally") {
		mathOperation = $('.cal_window').val()
		$('.cal_window').val(math.eval(mathOperation)) // Математический счёт с помощью сторонней биболиотеки
		animation()
	} 
	else {
		$('.cal_window').val($('.cal_window').val() + func);
	}
}
$("button").click(function () {
	func = $(this).attr("title")
	// console.log(func)
	addNumbers(func)
})