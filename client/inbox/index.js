import page from 'page';
import $  from 'jquery';
import * as template  from './template';


page('/inbox', function (ctx, next) {
    $.getJSON('/inbox', function (data) {
        localStorage.inbox = JSON.stringify(data);
        template.renderInbox(data);
    });
});