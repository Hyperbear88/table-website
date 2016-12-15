document.getElementsByTagName('button')[0].onclick = function () {
	var _wrapper = document.getElementById('wrapper');
	if(_wrapper.classList.contains( 'display_cell')) {
		_wrapper.classList.remove('display_cell');
	} else {
		_wrapper.classList.add('display_cell');
	}
}