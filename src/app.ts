import { Server } from "./presentation/server.ts";

function main(){
    const server = new Server();
    server.start();
}

(async ()=>{
    main(); 
})();





