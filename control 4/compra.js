const aws = require('aws-sdk');
const docClient = new aws.DynamoDB.DocumentClient({region:'us-west-2'});
exports.handler =  (e,ctx,callback) => {


     var params = {
        TableName:"bodega",
         Key:{
                "1": 2,
                
                },

    };

    docClient.get(params,function(err,data){
        if(err){
            callback(err,null);
            

        }else{
            callback(null,data);
        }

    });

};
    

