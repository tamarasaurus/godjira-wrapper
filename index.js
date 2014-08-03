var request = require('superagent');

module.exports = function(opts){
    console.log(opts);

    this.get = function(url, callback){
        request.get(opts.host + url)
        .auth(opts.user, opts.pass)
        .end(callback);
    };

    this.post = function(){

    };

    this.getProjects = function(){
        this.get('/rest/api/2/project', function(e, res){
            console.log(e, res);
        });
    };

    return this;
};
