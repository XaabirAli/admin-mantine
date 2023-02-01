import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';
import { TableSort } from './Table';

const PRIMARY_COL_HEIGHT = 300;

export function LeadGrid() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <TableSort data={[
    {
      "name": "Athena Weissnat",
      "company": "Little - Rippin",
      "email": "Elouise.Prohaska@yahoo.com"
    },
    {
      "name": "Deangelo Runolfsson",
      "company": "Greenfelder - Krajcik",
      "email": "Kadin_Trantow87@yahoo.com"
    },
    {
      "name": "Danny Carter",
      "company": "Kohler and Sons",
      "email": "Marina3@hotmail.com"
    },
    {
      "name": "Trace Tremblay PhD",
      "company": "Crona, Aufderhar and Senger",
      "email": "Antonina.Pouros@yahoo.com"
    },
    {
      "name": "Derek Dibbert",
      "company": "Gottlieb LLC",
      "email": "Abagail29@hotmail.com"
    },
    {
      "name": "Viola Bernhard",
      "company": "Funk, Rohan and Kreiger",
      "email": "Jamie23@hotmail.com"
    },
    {
      "name": "Austin Jacobi",
      "company": "Botsford - Corwin",
      "email": "Genesis42@yahoo.com"
    },
    {
      "name": "Hershel Mosciski",
      "company": "Okuneva, Farrell and Kilback",
      "email": "Idella.Stehr28@yahoo.com"
    },
    {
      "name": "Mylene Ebert",
      "company": "Kirlin and Sons",
      "email": "Hildegard17@hotmail.com"
    },
    {
      "name": "Lou Trantow",
      "company": "Parisian - Lemke",
      "email": "Hillard.Barrows1@hotmail.com"
    },
    {
      "name": "Dariana Weimann",
      "company": "Schowalter - Donnelly",
      "email": "Colleen80@gmail.com"
    },
    {
      "name": "Dr. Christy Herman",
      "company": "VonRueden - Labadie",
      "email": "Lilyan98@gmail.com"
    },
    {
      "name": "Katelin Schuster",
      "company": "Jacobson - Smitham",
      "email": "Erich_Brekke76@gmail.com"
    },
    {
      "name": "Melyna Macejkovic",
      "company": "Schuster LLC",
      "email": "Kylee4@yahoo.com"
    },
    {
      "name": "Pinkie Rice",
      "company": "Wolf, Trantow and Zulauf",
      "email": "Fiona.Kutch@hotmail.com"
    },
    {
      "name": "Brain Kreiger",
      "company": "Lueilwitz Group",
      "email": "Rico98@hotmail.com"
    }
  ]}/>
      </SimpleGrid>
    </Container>
  );
}