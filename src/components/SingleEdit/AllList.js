import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardImage } from "../UI/Common";

const AllList = ({ data }) => {
  return (
    <Card>
      <CardImage style={{ backgroundImage: `url(${data.image})` }}>
        <Link to="/"> </Link>
      </CardImage>
      <CardContent>
        <dl>
          <dt>
            {data.mainTag}
            <span>{data.hashTag}</span>
          </dt>
          <dt>
            <Link to="/"> {data.mainTitle}</Link>
          </dt>
        </dl>
      </CardContent>
    </Card>
  );
};

export default AllList;
