function blockAndDisplay() {
    //var feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]');
    var feed = $('#stream_pagelet');
    var message = $('#distracted');

    if (feed.length == 0) {
        message.remove();
    } else if (message.length == 0) {
        message = $('<h1>')
            .attr('id', 'distracted')
            .text("Get off of Facebook, Ben.")
            .css('font-size', '30px')
            .css('font-family', "'Helvetica Neue', Helvetica, Arial, 'lucida grande', tahoma, verdana, arial, sans-serif")
            .css('position', 'relative')
            .css('top', '75px');
        $('[data-location=maincolumn]').append(message);
     }

    // main newsfeed
    feed.children().remove();
    $('#tickerActivityStories').remove();
    $('.ego_column').remove();
    $('#pagelet_trending_tags_and_topics').remove();
    $('#pagelet_canvas_nav_content').remove();

    // for groups
    $('#pagelet_group_').remove();

    // for profiles
    $('#pagelet_main_column_personal').remove()
    $('div[data-referrer=timeline_light_nav_top]').remove();
}

window.setInterval(blockAndDisplay, 100);
