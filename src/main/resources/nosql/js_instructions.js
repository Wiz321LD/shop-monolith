
//Переключиться на БД
//use shop_mongo_db

//Создание коллекции в БД и вставка значений
db.products.insertMany([
    { name: "Laptop", price: 999.99, category: "Electronics", stock: 50 },
    { name: "Headphones", price: 49.99, category: "Electronics", stock: 200, color: "Black" },
    { name: "Chair", price: 89.99, category: "Furniture", stock: 30 }
])

//Выборка всех данных
db.products.find()

//Вставка одного документа
db.products.insertOne({
    name: "Mouse",
    price: 29.99,
    category: "Electronics",
    stock: 100
})

//Читаемый вывод
db.products.find().pretty()

//Выборка с фильтрацией
db.products.find({ category : "Electronics" })

//Выборка с фильтрацией (показать только name, price)
db.products.find({ category : "Electronics" }, { name : 1, _id: 0, price : 1})

//Найти товары дешевле 100
db.products.find({ price: { $lt: 100 } })


//Операторы сравнения:
// $eq (равно), $ne (не равно), $gt (больше), $lt (меньше), $gte (больше или равно), $lte (меньше или равно).


//Обновление записи
db.products.updateOne(
    { name: "Headphones" },
    { $set: { stock: 250 } }
)

//Увеличение цены всех товаров
db.products.updateMany(
    { category: "Electronics" },
    { $mul: { price: 1.1 } }
)

//Добавление нового поля для всех товаров
db.products.updateMany(
    {},
    { $set: { discount: 0 } }
)

//Удаление одного документа
db.products.deleteOne({ name: "Chair" })

//Удаление нескольких документов
db.products.deleteMany({ stock: { $lt: 100 } })

//Агрегация
db.products.aggregate([
    {
        $group: {
            _id: "$category",
            averagePrice: { $avg: "$price" }
        }
    }
])