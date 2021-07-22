import { useState } from "react";
import { Col, Row, Card, Button, Collapse } from "react-bootstrap";
import ClientLayout from "../components/client-layout";
import { pressData } from "../utils/PressPageContent";

export default function Press() {

  return (
    <ClientLayout>

      <Row style={{ padding: 120, paddingTop: 90 }}>
        <div>
          <h1>Scope Realty in the Media</h1>
        </div>
        {pressData && pressData.map((data, idx) => {
          if (parseInt(idx % 2) === 0) {
            return <ImageLeftCard data={data} />
          } else {
            return <ImageRightCard data={data} />
          }
        })}
      </Row>
    </ClientLayout>
  )
}

function ImageLeftCard({ data = {} }) {
  const [open, setOpen] = useState(false);

  return (
    <Col xs={12} md={12} lg={12} style={{ padding: 10 }}>
      <Card>
        <Row>
          <Col xs={12} md={3} lg={3} style={{ margin: 15 }}>
            <Card.Img src={`/images/${data.image}`} />
          </Col>
          <Col xs={12} md={8} lg={8}>
            <Card.Body>
              <Card.Title>{`${data.title}`}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{`${data.subtitle}`}</Card.Subtitle>
              <p className="text-muted">{`${data.author}`}</p>
              <p className="text-muted">{`${data.date}`}</p>
              <Collapse
                in={open}
                style={{ overflow: 'auto', maxHeight: '50vh' }}>
                <Card.Text>
                  {data.content}
                </Card.Text>
              </Collapse>
              <div style={{ textAlign: 'right' }}>
                <Button
                  variant="outline-secondary"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}>{open ? "Hide" : "Read More"}
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

function ImageRightCard({ data = {} }) {

  const [open, setOpen] = useState(false);

  return (
    <Col xs={12} md={12} lg={12} style={{ padding: 10 }}>
      <Card>
        <Row>
          <Col xs={12} md={8} lg={8}>
            <Card.Body>
              <Card.Title>{`${data.title}`}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{`${data.subtitle}`}</Card.Subtitle>
              <p className="text-muted">{`${data.author}`}</p>
              <p className="text-muted">{`${data.date}`}</p>
              <Collapse
                in={open}
                style={{ overflow: 'auto', maxHeight: '50vh' }}>
                <Card.Text>
                  {data.content}
                </Card.Text>
              </Collapse>
              <div style={{ textAlign: 'right' }}>
                <Button
                  variant="outline-secondary"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}>{open ? "Hide" : "Read More"}
                </Button>
              </div>
            </Card.Body>
          </Col>
          <Col xs={12} md={3} lg={3} style={{ margin: 15 }}>
            <Card.Img src={`/images/${data.image}`} />
          </Col>
        </Row>
      </Card>
    </Col>
  )
}