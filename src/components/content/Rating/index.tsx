import React from "react";
import Stars from "../Stars";
import Grid from "../../layout/Grid";
import { spacerSizeBaseEm } from "../../../styles/layout";
import { fontWeight } from "../../../styles/typography";
import styled from "styled-components";

export type RatingProps = {
  ratings: number;
  stars: number;
};

const RatingText = styled.p`
  font-weight: ${fontWeight.light};
  margin-left: ${spacerSizeBaseEm.xs}em;
`;

const Rating = ({ ratings, stars }: RatingProps) => {
  return (
    <Grid alignItems="center">
      <Stars stars={stars} />
      <RatingText>
        {ratings} rating{ratings !== 1 ? "s" : ""}
      </RatingText>
    </Grid>
  );
};

export default Rating;
