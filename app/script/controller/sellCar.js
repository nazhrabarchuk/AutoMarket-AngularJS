app.controller('sellCtrl', function ($scope, $filter, global) {
    var vm = this;

    //car name
    vm.carName = ['Audi', 'BMW', 'Hyundai', 'Mercedes-Benz', 'Volvo', 'Volkswagen', 'Opel', 'Renault', 'Lada', 'Chevrolet', 'Ford', 'Mitsubishi', 'Kia', 'Mazda', 'Skoda', 'Peugeot'];
    vm.carName.sort();
    //car model
    vm.carModel = [];
    vm.selectModel = function (md) {
        vm.model = md;
        console.log(vm.model)
        vm.currentItem.name = vm.model;
        if (vm.model == 'Audi') {
            vm.carModel = ['80', '100', 'A1', 'A2', 'A3', 'A4', 'A6', 'A8', 'S4', 'S6', 'S8', 'TT', 'Q3', 'Q5', 'Q7', 'RS4', 'RS6'];
            vm.carModel.sort()
        } else if (vm.model == 'BMW') {
            vm.carModel = ['X1', 'X2', 'X3', 'X5', 'X6', 'M1', 'M3', 'M5', 'I3', 'I8', 'Z4', '1 series', '3series', '5 series', '7 series', '325', '330', '528', '540', '760'];
        } else if (vm.model == 'Hyundai') {
            vm.carModel = ['Accent', 'Creta', 'Elantra', 'Tucson', 'Genesis', 'H200', 'H100', 'Matrix', 'Solaris', 'I10', 'I20', 'I30', 'Ix55', 'Sonata']
            vm.carModel.sort()
        } else if (vm.model == 'Mercedes-Benz') {
            vm.carModel = ['A-Class', 'A 140', 'A 150', 'A 160', 'A 170', 'A 200', 'AMG GT', 'B-Class', 'B 200', 'B 150', 'B 160', 'B 170', 'C-Class', 'C 180', 'C 200', 'C 220', 'CL-Class', 'CLA 180', 'CLA 200', 'CLA 220', 'CLK 220', 'CLK 430', 'E-Class', 'E 290', 'E 320', 'G-Class', 'GL 320', 'GL 450', 'GL 63 AMG', 'ML-Class', 'ML 400', 'ML 500', 'S-Class', 'S 300', 'S 500', 'S 600', 'V-Class', 'VIto', 'Viano', 'V 200', 'Sprinter']
            vm.carModel.sort()
        } else if (vm.model == 'Volvo') {
            vm.carModel = ["340", "343", "360", "440", "480", "740", "850", "960", "C30", "C70", "S40", "S60", "S70", "S80", "V40", "V60", "V70", "V90", "XC60", "XC70", "XC90"]
            vm.carModel.sort()
        } else if (vm.model == 'Volkswagen') {
            vm.carModel = ["Amarok", "Bora", "CC", "Caddy", "Golf", "Golf II", "Golf III", "Golf IV", "Golf V", "Golf VI", "Golf Plus", "Jetta", "Passat", "Passat B3", "Passat B4", "Passat B5", "Passat B6", "Polo", "Sharan", "Transporter T3", "Transporter T4", "Transporter T5", "Tiguan", "Toureg", "Vento"]
            vm.carModel.sort()
        } else if (vm.model == 'Opel') {
            vm.carModel = ["Astra", "Astra F", "Astra G", "Astra H", "Astra J", "Combo", "Corsa", "Frontera", "Insignia", "Omega", "Vectra", "Vectra A", "Vectra B", "Vectra C", "Vivaro", "Zafira"]
            vm.carModel.sort()
        } else if (vm.model == 'Renault') {
            vm.carModel = ["Clio", "Duster", "Megane", "Symbol", "Captur", "Fluence", "Kangoo", "Kadjar", "Scenic", "Grand Scenic", "Laguna", "Logan", "Trafic", "Twizy"]
            vm.carModel.sort()
        } else if (vm.model == 'Lada') {
            vm.carModel = ["2108", "2109", "21099", "2111", "2110", "2112", "2114", "2115", "2113", "2121", "Гранта", "Калина", "Нива", "Пріора", "Ларгус"]
            vm.carModel.sort()
        } else if (vm.model == 'Chevrolet') {
            vm.carModel = ["Aveo", "Captiva", "Cruze", "Corvette", "Evanda", "Lacetti", "Tacuma", "Tahoe", "Volt"]
            vm.carModel.sort()
        } else if (vm.model == 'Ford') {
            vm.carModel = ["C-Max", "B-Max", "EcoSport", "Escort", "Fiesta", "Focus", "Kuga", "Mondeo", "Mustang", "Sierra", "Transit"]
            vm.carModel.sort()
        } else if (vm.model == 'Mitsubishi') {
            vm.carModel = ["Carisma", "Colt", "Eclipse", "Galant", "L 200", "Lancer", "Lancer Evolution", "Lancer X", "Outlander", "Pajero", "Pajero Sport", "Space Star", "Galant"]
            vm.carModel.sort()
        } else if (vm.model == 'Kia') {
            vm.carModel = ["Ceed", "Cerato", "Megantis", "Optima", "Rio", "Soul", "Sportage", "Sorento"]
            vm.carModel.sort()
        } else if (vm.model == 'Mazda') {
            vm.carModel = ["323", "626", "CX- 5", "CX-7", "CX-9", "Premacy", "RX-7", "RX-8", "3", "6", "Xedos 6", "Xedos 9"]
            vm.carModel.sort()
        } else if (vm.model == 'Skoda') {
            vm.carModel = ["Fabia", "Octavia", "Superb", "Yeti", "Roomster", "Octavia A5", "Octavia A7", "Rapid"]
            vm.carModel.sort()
        } else if (vm.model == 'Peugeot') {
            vm.carModel = ["206", "207", "208", "307", "308", "3008", "4008", "5008", "301", "406", "407", "508", "605", "607", "Boxer", "Expert", "Partner"]
            vm.carModel.sort()
        }
    }

    //car year
    vm.carYear = new Array()
    for (var i = 1980; i <= 2018; i++) {
        vm.carYear.push(i);
    }
    //petrol type
    vm.petrolType = ['Бензин', 'Дизель', 'Газ/бензин', 'Електро']
    //drive type
    vm.driveType = ['Передній', 'Задній', 'Повний']
    //gearbox type
    vm.gearboxType = ['Механіка', 'Автомат', 'Варіатор', 'Типтронік']
    //body type
    vm.bodyType = ['Седан', 'Хетчбек', 'Купе', 'Мінівен', 'Позашляховик', 'Універсал'];

    vm.currentItem = {};
    vm.price = [
        {name: ''},
        {name: ''},
        {name: ''}
        ]
    vm.id = 3;
    vm.save = function () {
        if (!vm.currentItem.id) {
            var id = global.getCarTypesId();
            vm.currentItem.id = id++;
            global.setCarTypesId(id);
            vm.carTypes = global.getCarTypes();
            vm.currentItem.price = vm.price;
            vm.carTypes.unshift(vm.currentItem);
            alert('Your car created!')
            vm.currentItem = {};
        } else {
            var id = global.getCarTypesId();
            global.setCarTypesId(id);
            vm.carTypes[vm.currentItem.id - 1] = vm.currentItem;
        }
    }

})
