$(document).ready(function() {
    $('#photo-gallery .photo img').on('click', function() {
        var largeImageSrc = $(this).data('large');
        $('#lightbox-img').attr('src', largeImageSrc); 
        $('#lightbox').css('display', 'flex'); 
    });

    $('#lightbox .close').on('click', function() {
        $('#lightbox').hide(); 
    });

    $('#lightbox').on('click', function(e) {
        if (e.target !== $('#lightbox-img')[0]) {
            $('#lightbox').hide(); 
        }
    });
});
