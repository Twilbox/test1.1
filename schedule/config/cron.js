var array1 = [
  'https://cdn.pixabay.com/photo/2022/06/06/10/55/cat-7245850_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/11/29/23/34/cat-3846780_960_720.jpg',
  'https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_960_720.jpg'
];
function getRandomArbitraryDIV1(array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports.cron = {
  changeImage: {
    schedule: '*/5 * * * * *',
    onTick: async function () {
      try {
        let imageData = getRandomArbitraryDIV1(array1);
        console.log(imageData);
        sails.sockets.blast('new', { img: imageData });
      } catch (error) {
        console.log(error, 'Algo paso')
      };
    }
  },

// createNewPerson: {
    //schedule: '*/5 * * * * *',
/*    onTick: async function (req, res) {
      var array1 = ['Anyela','Melissa','Camila','Amanda', 'Esneda', 'Vannesa', 'Rubiela', 'Clara', 'Rosa', 'Nelly', 'Ximena', 'Viviana', 'Paola', 'Marcela', 'Monica', 'Diana', 'Gabriela', 'Sofia'];
      var ValorFinal1 = getRandomArbitraryDIV1(array1);
      console.log(ValorFinal1, 'Nuevo nombre')
      let data = { name: ValorFinal1 }
      try {
        let newPerson = await Person.create(data).fetch();
        console.log(newPerson, 'Todo bien aqui')
        if (newPerson) {
          sails.sockets.blast('new', { user: 'id-user123h' });
        };        
      } catch (error) {
        console.log(error, 'Algo paso')
      };
    }
  },*/
  //deletePersons: {
   // schedule: '*/12 * * * * *',
    //schedule: '03 13 * * sun',
   // schedule: '*/5 * * * * *',

   /* onTick: async function (req, res) {
      let person = await Person.find();
      console.log(person.length,'cuantos hay');
      //if (person.length > 4) {
        let id = [];
        person.forEach(i => {
          id.push(i.id)
        });
        console.log(id, 'Quienes borrare');
        let finallyId = id.slice(0, 3);
        console.log(finallyId, 'Quienes borrare');

        let deletePerson = await Person.destroy({
          id: { in: finallyId }
        }).fetch();
        console.log(deletePerson, 'Borrados')
        if (deletePerson) {
          sails.sockets.blast('new', { user: 'id-user123h' });
        }
      //};     
    }
  },*/

  };