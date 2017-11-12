$.fn.validate = function() {
    var isValid = true;
    $(this).find('input').each(function() {
        var input = $(this);
        input.removeClass('input-error');
        if (!input.hasClass('no-validate') && input.val() == '' && !input.hasClass('input-error')) {
            input.addClass('input-error');
            isValid = false;
        }
    });
    
    return isValid;
};
