import page from 'page';
import * as inbox from 'client/inbox';
import * as template  from './template';


page('/home', function (ctx, next) {
    template.renderHome();
    inbox.getInbox();
});