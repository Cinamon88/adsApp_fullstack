import styles from './CardBox.module.scss';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { IMAGES_URL } from '../../../config';
import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/usersRedux';

const CardBox = ({ title, price, localization, image, _id, user }) => {
  const loggedUser = useSelector(getUser);

  return (
    <Card className={styles.card_wrapper}>
      <Card.Img
        variant='top'
        src={IMAGES_URL + image}
        className={styles.card_image}
      />
      <Card.Body>
        <div className={styles.body}>
          <Card.Title>Price: {price}$</Card.Title>
          <Card.Subtitle className='my-3'>
            <b>{title}</b>
          </Card.Subtitle>
          <Card.Text className='mb-3'>
            <b>Location: {localization}</b>
          </Card.Text>
        </div>
        <Row>
          <Col>
            <Link to={'/ad/' + _id}>
              <Button className={styles.button} variant='warning'>
                Read more
              </Button>
            </Link>
          </Col>
          {loggedUser !== null && loggedUser.login === user && (
            <Col>
              <p>It is your Ad</p>
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardBox;
