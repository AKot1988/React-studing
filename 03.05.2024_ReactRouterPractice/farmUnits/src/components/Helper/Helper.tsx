// import { UnitItemProps } from '../index';

export const fetchData = async (): Promise<unknown> => {
  try {
    const response = await fetch('/unitsItems.json'); // URL для data.json
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}


console.log(await fetchData());


export const getDataToCart = async (): Promise<any[]> => {
  try {
    const response = await fetch('/unitsItems.json'); // URL для data.json
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const itemsIDsInCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const itemsInCart: any[] = [];

    // Отримуємо дані з response.json()
    const data = await response.json();

    // Перебираємо отримані дані та додаємо об'єкти, які містяться в кошику
    data.forEach((unitItem: any) => {
      if (itemsIDsInCart.includes(unitItem.id)) {
        itemsInCart.push(unitItem);
      }
    });

    return itemsInCart;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Повертаємо пустий масив у разі помилки
  }
}