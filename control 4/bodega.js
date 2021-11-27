'use.strict';
const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient({region:'us-west-2'});
exports.handler =  (e,ctx,callback) => {



var params = {
    TableName : "bodega",
   
};
docClient.scan(params,function(err,data){
        if(err){
            callback(err,null);

        }else{
            callback(null,data);
        }

    });

};