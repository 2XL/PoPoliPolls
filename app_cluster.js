/**
 * Created by anna on 28/04/15.
 */
var cluster = require('cluster');


function startWorker(){
    var worker = cluster.fork();
    console.log('CLUSTER: Worker %d started', worker.id);
}



if(cluster.isMaster){

    require('os').cpus().forEach(function(){
        startWorker(); // THIS IS MASTER CONTEXT
    });
/*
    cluster.on('exit', function(worker, code, signal){
        console.log('CLUSTER: Worker %d died with exit code %d (%s)', worker.id, code, signal);
        startWorker();
    })

    cluster.on('disconnect', function(worker){
        console.log('CLUSTER: Worker %d disconnected from the cluster.', worker.id);
    })
*/

}else{
    console.log('Slave');
    require('bin/www')(); // this is SLAVE CONTEXT
}