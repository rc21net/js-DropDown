(function( $ ) {
	$.fn.dropDown = function (params) {
		
		params = params || {};
		params.activeClass = params.activeClass || 'active';
        // класс открытого контейнера
		params.droppedClass = params.droppedClass || 'dropped';
		params.thisClass = params.thisClass || 'drop-down';
		
		var dropped = '.' + params.droppedClass;
		var selector = '.' + params.thisClass;
		
		// открытие|закрытие drop-down:
		this.click(function(e){
			// отключаем переход по ссылкам
			e.preventDefault();
			// определяем открыт текущий пункт или нет
			var state = $(this).parent().find(dropped).is(':visible');
			// закрываем все
			$(dropped).slideUp()
				.parent().find(selector).removeClass(params.activeClass);
			// если текущий не был открыт, открываем его
			if (!state) {
				$(this).addClass(params.activeClass)
					.parent().find(dropped).slideDown();
			}
			
		});
		
		// клик по body закрывает drop-down
		$('body').click(function(e){
			$(dropped).slideUp()
				.parent().find(selector).removeClass(params.activeClass);
			
		});
		
		// клик по drop-down останавливает всплытие (отменяет клик по body)
		this.click(function(e){
			e.stopPropagation();
		});
		
		
		
		
	}
})(jQuery);