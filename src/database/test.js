const Database = require("./db");

const saveOrphanage = require("./saveOrphanage");

Database.then(async db => {
  // insert data in the table
  await saveOrphanage(db, {
        lat: '-23.0282693',
        lng: '-46.9815833',
        name: 'Orf. Esperança',
        about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
        images: [
            'https://images.unsplash.com/photo-1594007184512-2a607d1df588?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',

            'https://images.unsplash.com/photo-1596443686812-2f45229eebc3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
        ].toString(),
        instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
        opening_hours: 'Horário de visitas Das 18h até 8h',
        opening_on_weekends: '1'

  })
  
  // consult data in the table
  const selectedOrphanages = await db.all('SELECT * FROM orphanages')
  
  // consult only one orphanage, by ID
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "" ')

  //delete data 
  await db.run('DELETE FROM orphanages WHERE id = "" ')
});
