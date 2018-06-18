#!/usr/bin/env node

const swaggerCombine = require('swagger-combine');
var fs = require('fs');
var converter = require('widdershins');

var api = null;
var outputFile = 'source/index.html.md';

swaggerCombine('docs/swagger.json', (err, res) => {
    if(err) console.log(err);
    else {
        api = res;
    
        //using default options
        var options = { };
        options.headings = 2;
        options.yaml = false;
        
        converter.convert(api, options, function(err, output) {
            fs.writeFileSync(outputFile, output, 'utf8');
        });
    }
});
