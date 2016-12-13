module.exports = function ($multiLevelMenu) {
	let LVL = 1;

	function addToggleButton(){
		$multiLevelMenu.find('.has-subMenu').each(function(i,el){
			var a = $(el).children('a'),
			$toggle = $('<div class="trigger"></div>').insertAfter(a);
			$toggle.on('click',function(){
				var $li = $toggle.parent('li');
				$li.toggleClass('is-open');
				$li.children('ul').slideToggle();
			})

		});
	}
	addToggleButton();
	checkLevel($multiLevelMenu);
	function checkLevel($multiLevelMenu) {

		let $activeItem = $multiLevelMenu.children('.is-active');
		if ($activeItem.length) {
			$activeItem.addClass('is-open');
			$activeItem.children('ul').slideDown();
		} else {
			$multiLevelMenu.children('.has-subMenu').each(function(i,el){
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
