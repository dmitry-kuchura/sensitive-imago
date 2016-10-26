module.exports = function ($multiLevelMenu) {
	let LVL = 1;

	checkLevel($multiLevelMenu);
	function checkLevel($multiLevelMenu) {
		console.log(LVL++);
		let $activeItem = $multiLevelMenu.children('.is-active');
		console.log($activeItem);
		if ($activeItem.length) {
			$activeItem.addClass('is-open');
			$activeItem.children('ul').slideDown();
		} else {
			$multiLevelMenu.children('.has-subMenu').each(function(i,el){
				console.log(el);
				let $item = $(el);
				if($item.find('.is-active').length){
					$item.addClass('is-open');
					let $level =  $item.children('ul').slideDown();
					checkLevel($level);
					return false;
				}
			});
		}
	}
}
