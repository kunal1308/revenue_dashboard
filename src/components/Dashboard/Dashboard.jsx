import React from 'react';
import styles from './Dashboard.module.css';
import Card from './Card/Card';
import dashboard from '../../assets/dashboard.jpg';
import product from '../../assets/product.jpg';
import customer from '../../assets/customer.jpg';
import income from '../../assets/income.jpg';
import promote from '../../assets/promote.jpg';
import help from '../../assets/help.jpg';
import evano from '../../assets/evano.jpg';

const Dashboard = () => {

  const items = [
  {name:'Dashboard',image:dashboard},
  {name:'Product',image:product},
  {name:'Customers',image:customer},
  {name:'Income',image:income},
  {name:'Promote',image:promote},
  {name:'Help',image:help}
]
  return (
    <div className={styles.mainWrapper}>
    <div className={styles.wrapper}>
      <h2>Dashboard</h2>
      <div className={styles.items}>
      {items.map((item,i) => (
       <Card name={item.name}
       image={item.image}
       key={i}
       />
      ))}
      </div>
    </div>
    <div className={styles.member}>
    <Card name='Evano'
    post='Product manager'
    image={evano}
    />
    </div>
    </div>
  )
}

export default Dashboard
