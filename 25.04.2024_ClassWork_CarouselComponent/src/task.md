Carousel
props:
  items: {title: string, imgURL: string, text:string}[]

    useEffect(() => {
    if(itemIndex >= items.length) {setItem(0)} else if (itemIndex < 0) {setItem(items.length - 1)}
  } , [itemIndex])