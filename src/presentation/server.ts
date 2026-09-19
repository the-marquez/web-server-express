
import express from 'express';
import path from 'path';

interface Options {
    PORT: number;
    PUBLIC_PATH?: string;
}

export class Server {

    private port: number;
    private publicPath: string;
    private server: express.Express;

    constructor(options: Options){
        this.port = options.PORT ?? 3000;
        this.publicPath = options.PUBLIC_PATH ?? 'public';
        this.server = express()
    }

    async start() {

        //middlewares
        
        //public folders
        this.server.use( express.static( this.publicPath ) );

        this.server.get(/.*/, (req, res)=>{
            const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
            console.log({path: indexPath});
        });

        this.server.listen( this.port , ()=>{
            console.log(`Server is running on: http://localhost:${this.port}`);
        });
    }
}


