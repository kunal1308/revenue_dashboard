import React from "react";
import styles from "./Data.module.css";
import DataCard from "./DataCard/DataCard";
import ProductCard from "./ProductCard/ProductCard";
import dollar from "../../assets/dollar.jpg";
import list from "../../assets/list.jpg";
import wallet from "../../assets/wallet.jpg";
import bag from "../../assets/bag.jpg";
import graph1 from "../../assets/graph1.jpg";
import graph2 from "../../assets/graph2.jpg";
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";

const Data = () => {
  const data = [
    {
      image: dollar,
      name: "Earning",
      earnings: "$198k",
      growth: "+37.8%" ,
      period: "month"
    },
    {
      image: list,
      name: "Orders",
      earnings: "$2.4k",
      growth1: "-2%",
      period: "month"
    },
    {
      image: wallet,
      name: "Balance",
      earnings: "$2.4k",
      growth1: "-2%",
      period: "month"
    },
    {
      image: bag,
      name: "Total Sales",
      earnings: "$89k",
      growth: "+11%",
      period: "week"
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        {data.map((item, i) => (
          <DataCard
            image={item.image}
            name={item.name}
            earnings={item.earnings}
            growth={item.growth}
            growth1={item.growth1}
            period={item.period}
            key={i}
          />
        ))}
      </div>
      <div className={styles.graph}>
        <img src={graph1} alt="" />
        <div className={styles.customerInfo}>
          <h3>Customers</h3>
          <p>Customers that buy products</p>
          <img src={graph2} alt="" />
        </div>
      </div>
      <div className={styles.products}>
        <div>
          <div className={styles.head}>
            <h3>Product Sell</h3>
            <div className={styles.nav}>
              <input placeholder="search" />
              <select>
                <option value="option 1">Last 30 days</option>
                <option value="option 2">Last 15 days</option>
              </select>
            </div>
          </div>
          <table>
            <th className={styles.widest}>Product name</th>
            <th className={styles.equal}>Stock</th>
            <th className={styles.equal}>Price</th>
            <th className={styles.equal}>Total Sales</th>
            <hr />
            <tr>
              <td className={styles.widest}>
                <ProductCard
                  image={product1}
                  name="Abstract 3D"
                  description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
                />
              </td>
              <td className={styles.equal}>32 in Stock</td>
              <td className={styles.equal}>$ 45.99</td>
              <td className={styles.equal}>20</td>
            </tr>
            <tr>
              <td className={styles.widest}>
                <ProductCard
                  image={product2}
                  name="Sarphens Illustration"
                  description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
                />
              </td>
              <td className={styles.equal}>32 in Stock</td>
              <td className={styles.equal}>$ 45.99</td>
              <td className={styles.equal}>20</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Data;
