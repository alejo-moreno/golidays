import page from 'page';
import * as template  from './template';

/*approve specific request */
page('/inbox/:id/approve', function (ctx, next) {
    var inbox = JSON.parse(localStorage.inbox);
    inbox.filter(item => item.id == ctx.params.id)[0].status = 'approved';
    localStorage.inbox = JSON.stringify(inbox);
    template.approveItem(ctx.params.id);
});

/*decline specific request */
page('/inbox/:id/decline', function (ctx, next) {
    var inbox = JSON.parse(localStorage.inbox);
    inbox.filter(item => item.id == ctx.params.id)[0].status = 'declined';
    localStorage.inbox = JSON.stringify(inbox);
    template.declineItem(ctx.params.id);
});

/*GET inbox from server or localStorage */
export function getInbox() {
    if (!localStorage.inbox) {
        $.getJSON('/inbox', function (data) {
            localStorage.inbox = JSON.stringify(data);
            template.renderInbox(data);
        });
    }
    else {
        template.renderInbox(JSON.parse(localStorage.inbox));
    }
}