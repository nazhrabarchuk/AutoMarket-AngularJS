app.factory('global', function () {
    var _carTypes = [
        {
            id: 1,
            name: 'Chevrolet',
            marka: 'Lacetti',
            year: 2008,
            body: 'Седан',
            price: [
                {name:5500},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Автомат',
            drive: 'Передній',
            color: 'Червоний',
            volume: 1.8,
            petrol: 'Газ/бензин',
            run: 265000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/lacetti.png'
        },
        {
            id: 2,
            name: 'Kia',
            marka: 'Rio',
            year: 2013,
            body: 'Седан',
            price: [
                {name:9500},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Механіка',
            drive: 'Передній',
            color: 'Сірий',
            volume: 1.6,
            petrol: 'Газ/бензин',
            run: 122000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/rio.jpg'
                }, 
        {
            id: 3,
            name: 'Mitsubishi',
            marka: 'Pajero Sport',
            year: 2006,
            body: 'Позашляховик',
            price: [
                {name:10990},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Механіка',
            drive: 'Повний',
            color: 'Чорний',
            volume: 2.5,
            petrol: 'Дизель',
            run: 157000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/pajero_sport.jpg'
                }, 
        {
            id: 4,
            name: 'Audi',
            marka: 'A6',
            year: 1995,
            body: 'Седан',
            price: [
                {name:5000},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Механіка',
            drive: 'Передній',
            color: 'Фіолетовий',
            volume: 2.6,
            petrol: 'Газ/бензин',
            run: 253000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/audi/audi_a6.png'
                }, 
        {
            id: 5,
            name: 'Audi',
            marka: 'Q7',
            year: 2016,
            body: 'Позашляховик',
            price: [
                {name:69999},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Автомат',
            drive: 'Повний',
            color: 'Сірий',
            volume: 3,
            petrol: 'Дизель',
            run: 102000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/audi/audi_q7.png'
                }, 
        {
            id: 6,
            name: 'Audi',
            marka: 'TT',
            year: 2016,
            body: 'Купе',
            price: [
                {name:60999},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Автомат',
            drive: 'Повний',
            color: 'Асфальт',
            volume: 2,
            petrol: 'Бензин',
            run: 29000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/audi/audi_tt.png'
                }, 
        {
            id: 7,
            name: 'Audi',
            marka: 'A3',
            year: 2015,
            body: 'Хетчбек',
            price: [
                {name:21500},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Автомат',
            drive: 'Повний',
            color: 'Чорний',
            volume: 2,
            petrol: 'Дизель',
            run: 180000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/audi/audi_a3.png'
                }, 
        {
            id: 8,
            name: 'Hyundai',
            marka: 'IX35',
            year: 2013,
            body: 'Позашляховик',
            price: [
                {name:16200},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Механіка',
            drive: 'Повний',
            color: 'Білий',
            volume: 1.7,
            petrol: 'Дизель',
            run: 92000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/hyundai/hyundai_ix35.png'
                }, 
        {
            id: 9,
            name: 'BMW',
            marka: 'X5',
            year: 2016,
            body: 'Позашляховик',
            price: [
                {name:50500},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Автомат',
            drive: 'Повний',
            color: 'Чорний',
            volume: 2,
            petrol: 'Дизель',
            run: 35000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/bmw/bmw_x5.png'
                }, 
        {
            id: 10,
            name: 'Volkswagen',
            marka: 'Passat B7',
            year: 2011,
            body: 'Універсал',
            price: [
                {name:11200},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Автомат',
            drive: 'Передній',
            color: 'Синій',
            volume: 1.4,
            petrol: 'Газ/бензин',
            run: 181000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/volkswagen/volkswagen_passat-b7.png'
                }
        , 
        {
            id: 11,
            name: 'Volkswagen',
            marka: 'Passat B6',
            year: 2008,
            body: 'Седан',
            price: [
                {name:10000},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Автомат',
            drive: 'Передній',
            color: 'Сірий',
            volume: 1.8,
            petrol: 'Бензин',
            run: 157000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/volkswagen/volkswagen_passat-b6.png'
                }, 
        {
            id: 12,
            name: 'Mercedes-Benz',
            marka: 'Vito',
            year: 2000,
            body: 'Мінівен',
            price: [
                {name:5200},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Механіка',
            drive: 'Передній',
            color: 'Чорний',
            volume: 2.2,
            petrol: 'Дизель',
            run: 351000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/mercedes_benz/mercedes-benz_vito.png'
                }, 
        {
            id: 13,
            name: 'Mercedes-Benz',
            marka: 'Vito',
            year: 2005,
            body: 'Мінівен',
            price: [
                {name:8400},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Автомат',
            drive: 'Задній',
            color: 'Зелений',
            volume: 2.2,
            petrol: 'Дизель',
            run: 224000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/mercedes_benz/mercedes-benz_vito-2005.png'
                }, 
        {
            id: 14,
            name: 'Opel',
            marka: 'Vivaro',
            year: 2005,
            body: 'Мінівен',
            price: [
                {name:9000},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Механіка',
            drive: 'Передній',
            color: 'Білий',
            volume: 2.5,
            petrol: 'Дизель',
            run: 254000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/opel/opel_vivaro-pass.png'
                }, 
        {
            id: 15,
            name: 'Renault',
            marka: 'Megane',
            year: 2013,
            body: 'Універсал',
            price: [
                {name:10000},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Механіка',
            drive: 'Передній',
            color: 'Сірий',
            volume: 1.6,
            petrol: 'Бензин',
            run: 138000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/renault/renault_megane.png'
                }, 
        {
            id: 16,
            name: 'Renault',
            marka: 'Grand Scenic',
            year: 2013,
            body: 'Мінівен',
            price: [
                {name:11700},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Механіка',
            drive: 'Передній',
            color: 'Коричневий',
            volume: 1.5,
            petrol: 'Дизель',
            run: 164000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/renault/renault_grand-scenic.png'
                }, 
        {
            id: 17,
            name: 'Volvo',
            marka: 'V60',
            year: 2012,
            body: 'Універсал',
            price: [
                {name:16500},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Автомат',
            drive: 'Передній',
            color: 'Чорний',
            volume: 2,
            petrol: 'Дизель',
            run: 118000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/volvo/volvo_v60.png'
                }, 
        {
            id: 18,
            name: 'Volkswagen',
            marka: 'Transporter T5',
            year: 2011,
            body: 'Мінівен',
            price: [
                {name:16800},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Автомат',
            drive: 'Передній',
            color: 'Білий',
            volume: 2,
            petrol: 'Дизель',
            run: 117000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/volkswagen/volkswagen_t5-transporter.png'
                }, 
        {
            id: 19,
            name: 'Nissan',
            marka: 'Leaf',
            year: 2018,
            body: 'Хетчбек',
            price: [
                {name:36500},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Автомат',
            drive: 'Передній',
            color: 'Білий',
            volume: 0,
            petrol: 'Електро',
            run: 0,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/nissan/nissan_leaf_new.png'
                }, 
        {
            id: 20,
            name: 'Nissan',
            marka: 'Leaf',
            year: 2011,
            body: 'Хетчбек',
            price: [
                {name:11900},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Автомат',
            drive: 'Передній',
            color: 'Синій',
            volume: 0,
            petrol: 'Електро',
            run: 117000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/nissan/nissan_leaf_old.png'
                }, 
        {
            id: 21,
            name: 'Opel',
            marka: 'Astra J',
            year: 2015,
            body: 'Хетчбек',
            price: [
                {name:11450},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Механіка',
            drive: 'Передній',
            color: 'Сірий',
            volume: 1.4,
            petrol: 'Бензин',
            run: 69000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/opel/opel_astra-j.png'
                }, 
        {
            id: 22,
            name: 'Opel',
            marka: 'Astra H',
            year: 2007,
            body: 'Хетчбек',
            price: [
                {name:7299},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Типтронік',
            drive: 'Передній',
            color: 'Сірий',
            volume: 1.6,
            petrol: 'Газ/бензин',
            run: 85000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/opel/opel_astra-h.png'
                }, 
        {
            id: 23,
            name: 'Volvo',
            marka: 'C30',
            year: 2011,
            body: 'Купе',
            price: [
                {name:11500},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Варіатор',
            drive: 'Передній',
            color: 'Сірий',
            volume: 1.6,
            petrol: 'Дизель',
            run: 185000,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/volvo/volvo_c30.png'
                }, 
        {
            id: 24,
            name: 'Mercedes-Benz',
            marka: 'S63 AMG',
            year: 2018,
            body: 'Купе',
            price: [
                {name:287700},
                {name: ''},
                {name: ''}
                
            ],
            gearbox: 'Автомат',
            drive: 'Повний',
            color: 'Чорний',
            volume: 4,
            petrol: 'Бензин',
            run: 0,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.',
            img: '../img/buy/mercedes_benz/mercedes-benz_s-63-amg.png'
                }
    ];
    var _carTypesId = 25; //18 or count car in page
    return {
        getCarTypes: function () {
            return _carTypes;
        },
        getCarTypesId: function () {
            return _carTypesId;
        },
        setCarTypesId: function (carTypesId) {
            if (carTypesId < _carTypesId) throw new Error("carTypesId can't be lesser that _carTypesId")
            _carTypesId = carTypesId;
        }
    }
    
})
