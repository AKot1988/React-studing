export const fetchData = async (link: string): Promise<unknown> => {
  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export const fetchItemByID = async (link: string): Promise<unknown> => {
  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export const getDataToCart = async (): Promise<any[]> => {
  try {
    const response = await fetch('/unitsItems.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const itemsIDsInCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const itemsInCart: any[] = [];

    const data = await response.json();

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