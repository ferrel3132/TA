import { Carousel }  from "react-bootstrap"
import Background1 from "./../aset/Background1.jpg"

const content =()=> {
    return(
            <Carousel>
              <Carousel.Item>
                <img
                  className="text-center"
                  style={{width:"98%",marginLeft:"auto",marginRight:"auto",display:"block"}}
                  src={Background1}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
    )
}

export default content;
