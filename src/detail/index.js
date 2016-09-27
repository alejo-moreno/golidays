import page from 'page';
import * as template  from './template';

/*GET specific holiday request detail*/
page('/inbox/:id', function (ctx, next) {
    var itemId = ctx.params.id;
    //Use localStorage for speed up requests
    if (!localStorage.inbox) {
        $.getJSON('/api/inbox', function (data) {
            localStorage.inbox = JSON.stringify(data);
            template.renderDetail(data.filter(item => item.id == itemId)[0]);
        });
    }
    else {
        var inbox = JSON.parse(localStorage.inbox);
        template.renderDetail(inbox.filter(item => item.id == itemId)[0]);
    }
})

