(function($) {
    
    $.fn.hoverClickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        //this.data('togglehovered', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        /*
        this.hover(function() {
            var data = $(this).data();
            var tc = data.togglehovered;
            $.proxy(funcs[tc], this)();
            data.togglehovered = (tc + 1) % 2;
        });*/
        return this;
    };
}(jQuery));

