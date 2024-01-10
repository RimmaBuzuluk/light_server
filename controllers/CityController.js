import City from "../models/City.js"
import fs from 'fs';

export const getAllCities=async(req,res)=>{
    try{
        const cities=await City.find();
        res.status(200).json(cities);
    }catch(err){
        res.status(500).json({
            error:"помилка при отриманні міст"
        })
    }
}

export const loadCitiesFromJSON = async (req, res) => {
    try {
      fs.readFile('./output.json', 'utf8', async (err, data) => {
        if (err) {
          console.error('Помилка читання файлу JSON', err);
          return res.status(500).json({ error: 'Помилка читання файлу JSON' });
        }
  
        try {
          const citiesData = JSON.parse(data); // Парсимо вміст JSON-файлу
  
          const promises = citiesData.map(async (cityData) => {
            let population = parseFloat(cityData.population);
            if (isNaN(population) || !Number.isFinite(population)) { // Перевірка на валідність числового значення
              population = 0; // Якщо значення не є числом або є нескінченністю, призначаємо population значення 0
            }
  
            const city = new City({
              name: cityData.name,
              population: population,
              place: cityData.place,
              wikipedia: cityData.wikipedia,
              // Додавайте інші поля з вашого JSON-файлу, якщо такі є
            });
  
            console.log(city);
  
            return city.save(); // Повертаємо проміс збереження міста у базі даних
          });
  
          await Promise.all(promises); // Очікуємо завершення всіх операцій збереження міст у базі даних
          res.status(200).json({ message: 'Дані успішно завантажено до бази даних' });
        } catch (error) {
          console.error('Помилка обробки даних JSON', error);
          res.status(500).json({ error: 'Помилка обробки даних JSON' })
        }
      });
    } catch (error) {
      console.error('Помилка завантаження даних у базу даних', error);
      res.status(500).json({ error: 'Помилка завантаження даних у базу даних' });
    }
  };
  
  