'use strict';

import Backbone from 'backbone';

const model = Backbone.Model.extend({
    idAttribute: '_id',

    defaults: function () {
        return {
            hostname:          '',
            forward_server:    '',
            forward_port:      80,
            asset_caching:     false,
            block_exploits:    true,
            ssl:               false,
            ssl_expires:       0,
            force_ssl:         false,
            letsencrypt_email: '',
            accept_tos:        false,
            access_list_id:    '',
            advanced:          ''
        };
    }
});

module.exports = {
    Model:      model,
    Collection: Backbone.Collection.extend({
        model: model
    })
};
