import React from "react";
import Card from "react-bootstrap/Card";


function ResultList(props) {
  return (
    <ul id="charactersList">
      {props.results.map((r) => (
        <Card className="mb-3" key={r.key} style={{ width: "40rem" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <Card.Img variant="top" src={r.picture} />
            </div>
            <div className="col-md-8">
              <Card.Body>
                <h1>{r.name}</h1>
                <h4>From {r.house} House</h4>
                <Card.Text>
                  Was born a {r.blood} in {r.year}, with {r.eyes} eyes and{" "}
                  {r.hair} hair, carries a {r.wand} wand with a {r.core} core,
                  that emits the {r.patronus} patronus.
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      ))}
    </ul>
  );
}

export default ResultList;
