
import express from 'express';
import path from 'path';

export class Server {

    private app = express();

    async start() {

        //public folders
        this.app.use( express.static('public') );

        this.app.get('/', (req, res)=>{ //'*' esto no funciona para rutas que no existen
            const indexPath = path.join(__dirname + '../../../public/index.html');
            console.log({path: indexPath});
        });

        this.app.listen(3000, ()=>{
            console.log(`Server is running on: http://localhost:3000`);
        });
    }
}


