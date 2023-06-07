import dbConnect from "@/util/mongo";
import Order from "@/models/Order";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  if (method === "GET") {
    try {
      const { cpf } = req.query;

      if (cpf) {
        const orders = await Order.find({ cpf: cpf });
        res.status(200).json(orders);
      } else {
        const orders = await Order.find();
        res.status(200).json(orders);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;
