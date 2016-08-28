'use strict';

require('express')().use(require('express')
.static(__dirnmae + '/build')).listen(process.env.PORT || 8080, () => console.log('Client server up on 8080'));
