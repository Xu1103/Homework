var car = {
    brand : 'brand',
    color : 'black',
    speed : 0,
    run: function () {
        console.log(this.brand + 'is running...');
    }
};

//构造方法
function car(brand, color) {
    this.brand = brand;
    this.color = color;
}

var count = 0;

function creatCar(brand, color){
    if(count <= 11){
        count++;
        return new Car(brand, color);
    }
    else{
        console.log('最多只允许创建11个对象！')
    }
   
}

var BenzCar = creatCar({
    brand : 'benz',
    color : 'black'
});

Object.defineProperty(Car, "brand",{writable: false});