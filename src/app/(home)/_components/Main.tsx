import React, { useEffect, useState } from "react";
import { IWish } from "@/database/wish.model";

const Main = () => {
  const [wish, setWish] = useState<IWish[] | []>([]);

  useEffect(() => {
    const fetchWish = async () => {
      const response = await fetch("http://localhost:3000/api/home");
      const data = await response.json();
      setWish(data);
    };

    fetchWish();
  }, []);

  return (
    <div>
      <div>{wish[0]?.wish}</div>
    </div>
  );
};

export default Main;
