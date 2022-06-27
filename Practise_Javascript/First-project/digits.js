let motherboard = {
    usbPortCount: 8,
    chipset: 'AMD X570',
    socket: 'AM3/AM4',
}

let cpu = {
coreCount: 8,
cpuManufactored: 'AMD',
socket: 'AM4',
}

let videocard = {
videocardModel: 'Nvidia GeForse GTX 1060',
cpuManufactored: 'AMD',
videomemory: 4096,
}

let ram = {
ramType: 'DDR4',
ramVolume: 8192,
ramFrequency: 3200,
}


let computer = {
price: 100000,
...motherboard,
// свойство socket из motherboard будет заменено на cpu (возьмет то, что упомянуто последним)
...cpu,
...videocard,
...ram
}


let computerWithAssign = Object.assign(
// целевой объект
{
    price: 100000
},
// добавляемые
motherboard, cpu, videocard, ram
);

//Убедимся в идентичности содержимого обоих способов формирования:
console.log(computer);
console.log(computerWithAssign);

console.log(Object.keys(computer));     // ключи
console.log(Object.values(computer));   // значения
console.log(Object.entries(computer));  // оба сразу
