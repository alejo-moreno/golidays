import page from 'page';
import * as template  from './template';

page('/inbox/:id', function (ctx, next) {
    var itemId = ctx.params.id;
    if (!localStorage.inbox) {
        $.getJSON('/inbox', function (data) {
            localStorage.inbox = JSON.stringify(data);
            template.renderDetail(data.filter(item => item.id == itemId)[0]);
        });
    }
    else {
        var inbox = JSON.parse(localStorage.inbox);
        template.renderDetail(inbox.filter(item => item.id == itemId)[0]);
    }
})

export function renderHome() {
    template.renderHome();
}