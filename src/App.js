import './App.css';
import { Carousel } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function App() {
  return (
    <div className="App">
      <Carousel interval={null}>
        <Carousel.Item>
          <TransformWrapper>
          <TransformComponent>
              <img src="https://img.freepik.com/vector-gratis/menu-restaurante-moderno-comida-rapida_52683-48982.jpg?size=626&ext=jpg" alt="test" className="d-block w-100 carousel-item-image" />
            </TransformComponent>
          </TransformWrapper>
        </Carousel.Item>
        <Carousel.Item>
          <TransformWrapper>
            <TransformComponent>
              <img src="https://us.123rf.com/450wm/seamartini/seamartini1710/seamartini171000035/87271183-plantilla-de-boceto-de-men%C3%BA-de-vector-de-restaurante-de-comida-r%C3%A1pida.jpg?ver=6" alt="test" className="d-block w-100 carousel-item-image"/>
            </TransformComponent>
          </TransformWrapper>
        </Carousel.Item>
        <Carousel.Item>
          <TransformWrapper>
          <TransformComponent>
              <img src="https://thumbs.dreamstime.com/b/men%C3%BA-de-comida-r%C3%A1pida-sobre-fondo-madera-plantilla-estilo-caricatura-ilustraci%C3%B3n-del-vector-aislado-en-blanco-objeto-para-168918944.jpg" alt="test" className="d-block w-100 carousel-item-image"/>
            </TransformComponent>
          </TransformWrapper>
        </Carousel.Item>
        <Carousel.Item>
          <TransformWrapper>
          <TransformComponent>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/menu-poster-template-c4b2a46b31cb0acba3ea7cc619a72b17_screen.jpg?ts=1561491234" alt="test" className="d-block w-100 carousel-item-image"/>
            </TransformComponent>
          </TransformWrapper>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
