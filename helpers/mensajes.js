require('colors');


const mostrarMenu = () => {

    return new Promise (resolve => {

          //console.clear();
        console.log('============================'.blue);
        console.log('  Seleccione una opción'.blue);
        console.log('============================\n'.blue);

        console.log(`${'1'.yellow}. Crear una tarea`);
        console.log(`${'2'.yellow}. Listar tareas`);
        console.log(`${'3'.yellow}. Listar tareas completadas`);
        console.log(`${'4'.yellow}. Listar tareas pendientes`);
        console.log(`${'5'.yellow}. Completar tarea(s)`);
        console.log(`${'6'.yellow}. Borrar una tarea`);
        console.log(`${'0'.yellow}. Salir \n`);

        const readline = require('readline').createInterface({  
            input: process.stdin,
            outpout: process.stdout
        });

        readline.question('Seleccione una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        })
    });
    

}

    const pausa = () => {
        return new Promise ( resolve => {
            const readline = require('readline').createInterface({
                input: process.stdin,
                outpout: process.stdout
            });
        
            readline.question('\nSeleccione ENTER para continuar: \n', (opt) => {
                readline.close();
                resolve();
            })    
        })
        
    }


module.exports = {
    mostrarMenu,
    pausa
}