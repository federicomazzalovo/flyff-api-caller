const { Console } = require('console');
const express=require('express');
const app=express();
const PORT=5000;
const https = require('https');

app.get('/',(req,res)=>{
res.send("Flyff Api Caller")
})

// Get monster details
app.get('/monster/:id',(req,res)=>{

    var id = req.params.id;
    console.log("ID MOSTRO " + id);

    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
        
    const https = require('https')
    const options = {
      hostname: 'flyff-api.sniegu.fr',
      path: '/monster/' + id,
      method: 'GET'
    }
    
    const request = https.request(options, result => {
      console.log(`statusCode: ${result.statusCode}`)
    
      var result;
      result.on('data', d => {
        process.stdout.write(d);
        res.json(JSON.parse(d));
      });
    });
    
    request.on('error', error => {
      console.error(error)
    });
    
    request.end();
});

// Get list of monsters
app.get('/monsters/all',(req,res)=>{

  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  
  httpsGet('flyff-api.sniegu.fr', '/monster')
    .then(value => {
      
      let monstersIds = JSON.parse(value);

      httpsGet('flyff-api.sniegu.fr', '/monster/' + monstersIds.join(","))
        .then(value => {
          res.json(JSON.parse(value));
        })
        .catch(err => { console.log(err)});
    })
    .catch(err => {console.log(err)});
});


app.listen(PORT,()=>console.log(`server running on port ${PORT}`))

function getMonstersIdsOnData(data){
    console.log("RICHIESTA\n\n");

    let monstersIds = JSON.parse(data);

    const https = require('https')
    const options = {
      hostname: 'flyff-api.sniegu.fr',
      path: '/monster/22,23,26', //+ monstersIds.join(","),
      method: 'GET'
    }

    const request = https.request(options, result => {
      console.log(`statusCode: ${result.statusCode}`)

      var result;
      result.on('data', d => {
        let monstersJson = d.toString('utf-8');
        console.log(monstersJson);

        return monstersJson;        
      });
    });

    request.on('error', error => {
      console.error(error)
    });

    request.end();
}

async function httpsGet(hostname, path, headers) {
  return new Promise(async (resolve, reject) => {

    const options = {
      hostname: hostname,
      path: path,
      port: 443,
      method: 'GET',
      headers: headers
    };

    let body = [];

    const req = https.request(options, res => {
      res.on('data', chunk => body.push(chunk));
      res.on('end', () => {
        const data = Buffer.concat(body).toString();
        resolve(data);
      });
    });
    req.on('error', e => {
      // console.log(`ERROR httpsGet: ${e}`);
      reject(e);
    });
    req.end();

  });

}
