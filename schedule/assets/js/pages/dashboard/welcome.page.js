

parasails.registerPage('welcome', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    texto:'',
    modal: '',
    persons:[],
    imageData:'https://cdn.pixabay.com/photo/2022/06/06/10/55/cat-7245850_960_720.jpg',
    pageLoadedAt: Date.now(),
    test_data:null
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    //…
    this.title = 'Ya entramos'
  },
  mounted: async function() {
    //…
  },

  async created(){    
   await this.setSocket()
  
   console.log(this.test_data,'Aca esta lo que trae')
  },

  //  ╦  ╦╦╦═╗╔╦╗╦ ╦╔═╗╦    ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ╚╗╔╝║╠╦╝ ║ ║ ║╠═╣║    ╠═╝╠═╣║ ╦║╣ ╚═╗
  //   ╚╝ ╩╩╚═ ╩ ╚═╝╩ ╩╩═╝  ╩  ╩ ╩╚═╝╚═╝╚═╝
  // Configure deep-linking (aka client-side routing)
  virtualPagesRegExp: /^\/welcome\/?([^\/]+)?\/?/,
  afterNavigate: async function(virtualPageSlug){
    // `virtualPageSlug` is determined by the regular expression above, which
    // corresponds with `:unused?` in the server-side route for this page.
    let data_slug = virtualPageSlug;
    if (data_slug) {
      this.texto = `Aca esta llegando algo solo es procesarlo ${data_slug}`
    }
  /*  switch (virtualPageSlug) {
      case 'hello':
        this.modal = 'example';
        break;
      default:
        this.modal = '';
    };
    switch (virtualPageSlug) {
      case 'casas': this.texto = 'Casas en Arriendo'; 
      console.log(virtualPageSlug,'UOHUIOHERUIWERIUWEH')    
        break;
      default:
        //this.texto = '';
    };
    switch (virtualPageSlug) {      
      case 'apartamentos': this.texto = 'Apartamentos en Arriendo';
        break;
      default:
        //this.texto = '';
    }*/
    
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    async slugControl(v) {
      this.goto(`/welcome/${v}`);
      await this.seoMetaTags(v)      
    },

    async seoMetaTags(v){
      if (v === null || v === undefined || v ==='') {
        v = 'Casa y apartamentos'
      }
    this.title = v;
    this.description = `${v} en arriendo cali`;
    document.head.innerHTML = `
     <title>${this.title}</title>
     <meta name="Description" CONTENT="${this.description}">        
     <link rel="stylesheet" href="/dependencies/bootstrap-4/bootstrap-4.css">
     <link rel="stylesheet" href="/dependencies/fontawesome.css">
     <link rel="stylesheet" href="/styles/importer.css">
     `    
    },

    async setSocket() {
      let _ = this;
      io.socket.on('new', (data) => { 
        console.log(data.img,'Aca esta la imagen')
        _.imageData = data.img;       
      });
    },

    clickOpenExampleModalButton: async function() {
      this.goto('/welcome/hello');
      // Or, without deep links, instead do:
      // ```
      // this.modal = 'example';
      // ```
    },

    async getPersons() {
      const res = await axios.get('/persons');
      if (res) {
        this.persons = res.data;
        console.log(this.persons,'Aca estan las personas')
      }
    },

    closeExampleModal: async function() {
      this.goto('/welcome');
      // Or, without deep links, instead do:
      // ```
      // this.modal = '';
      // ```
    },

  }
});
