/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
 function getRandomArbitraryDIV1(array) {
    return array[Math.floor(Math.random() * array.length)];
  }


module.exports = {
  
    store: async function (req, res) {
        
           
        var array1 = ['Amanda','Esneda','Vannesa','Rubiela','Clara','Rosa','Nelly','Ximena','Viviana','Paola', 'Marcela', 'Monica', 'Diana', 'Gabriela', 'Sofia'];
        var ValorFinal1 = getRandomArbitraryDIV1(array1);
        console.log(ValorFinal1,'Nuevo nombre')
        let data ={name:ValorFinal1}
        try {
            let newPerson = await Person.create(data);
            
            return res.json({ message: 'Elemento creado' }); 
            
            
        } catch (error) {
            console.log(error, 'Algo paso')
        };        
    
    },
    list: async function (req, res) {
        let person = await Person.find();
        return res.json(person);
    },
    delete: async function (req, res) {
        let person = await Person.destroy({
            id: { in: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] }
        }).fetch();
        return res.json(person);
    }


};

