import About from '../About/About.jsx';
import CardList from '../CardList/CardList.jsx';
import CardListOdd from '../CardListOdd/CardListOdd.jsx';
import Container from '../Container/Container.jsx';
import Dropdown from '../Dropdown/Dropdown.jsx';
import Footer from '../Footer/Footer.jsx';
import './List.scss';

const List = ({ list, title }) => {
  return (
      <div className='list__wrapper'>
        <div className='list__header'>
          <h1 className='heading__h4'>{title}</h1>
        </div>
        <Container>
          <div className='list__products'>
            <div className='list__products__wrapper'>
              {list.map(product =>
                (product.id % 2 === 0) ? (
                  <CardList key={product.id} {...product} />
                ) : (
                  <CardListOdd key={product.id} {...product} />
                )
              )}
            </div>
          </div>
          <Dropdown />
          <About />
        </Container>
        <Footer />
      </div>
  )
};

export default List;
