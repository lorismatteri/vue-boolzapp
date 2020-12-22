let app = new Vue ({
    el: '#app',
    data: {
        userImage: './assets/img/avatar_tyrion.jpg',
        send: 'inviato',
        rec: 'ricevuto',
        contacts: [
            {
                name: 'Jon Snow',
                avatar: './assets/img/avatar_snow.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Sei la mia regina',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Tu non sai niente, Jon Snow',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Darth Vader',
                avatar: './assets/img/avatar_vader.png',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:36:00',
                        text: 'Sono tuo padre.',
                        status: 'received'
                    }
                ],
                
            },
            {
                name: 'Samuele',
                avatar: './assets/img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
                
            },
            {
                name: 'Ibra',
                avatar: './assets/img/avatar_ibra.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Bella Zlà',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Devi chiamarmi dio Zlà 🔥',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Gandalf il Grigio',
                avatar: './assets/img/avatar_gandalf.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Passo da te stasera',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'TU!',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:02',
                        text: 'NON PUOI!',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:04',
                        text: 'PASSARE!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Antonino Cannavacciuolo',
                avatar: './assets/img/avatar_canna.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Io già tengo fame 🍕', 
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: './assets/img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Michele',
                avatar: './assets/img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './assets/img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
                
            },
        ],
    },
    methods: {
        
    }
})