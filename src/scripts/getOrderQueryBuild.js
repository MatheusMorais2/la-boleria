import connection from "../database.js";

export default async function queryOrder(orderSearch) {
  orderSearch.rows.map((row) => {
    const [
      orderId,
      clientId1,
      cakeId1,
      quantity,
      createdAt,
      totalPrice,
      isDelivered,
      clientId2,
      clientName,
      clientAddress,
      clientPhone,
      cakeId2,
      cakeName,
      cakePrice,
      cakeImage,
      cakeDescription,
      flavourId1,
      flavourId2,
      flavour,
    ] = row;

    return {
      client: {
        id: clientId1,
        name: clientName,
        address: clientAddress,
        phone: clientPhone,
      },
      cake: {
        id: cakeId1,
        name: cakeName,
        price: cakePrice,
        description: cakeDescription,
        image: cakeImage,
        flavour: flavour,
      },
      createdAt: createdAt,
      quantity: quantity,
      totalPrice: totalPrice,
      isDelivered: isDelivered,
    };
  });
}
