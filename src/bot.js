const LineConnect = require('./connect');
let LINE = require('./main.js');

const auth = {
	authToken: 'ElHuJ4wHNbUMw94BZp05.iwXqCRJeB45B9XC5RwWiPq./qpgHh0tqLSHRENLdURtOShunTH2i2/E+R2VpC+ASJY='
}
// let client =  new LineConnect(auth);
let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});
