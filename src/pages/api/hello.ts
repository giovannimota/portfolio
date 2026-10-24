// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

// eslint-disable-next-line no-magic-numbers -- standard HTTP success status
const HTTP_OK = 200;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(HTTP_OK).json({ name: "John Doe" });
}
