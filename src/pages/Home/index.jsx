import React from 'react';
import { Grid } from 'semantic-ui-react';
import HomeHero from '../../components/HomeHero';
import HomeContent from '../../components/HomeContent';

export default () => (
  <Grid className="main home">
    <Grid.Row>
      <HomeHero />
    </Grid.Row>
    <Grid.Row>
      <HomeContent />
    </Grid.Row>
  </Grid>
);
