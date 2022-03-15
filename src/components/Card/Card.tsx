import { Card, CardHeader, CardBody } from 'grommet';

interface CardProps {
  header: string;
  body: string;
}

export const CustomCard = ({ header, body }: CardProps) => {
  return (
    <Card height='small' width='small' background='light-1'>
      <CardHeader pad='medium'>{header}</CardHeader>
      <CardBody pad='medium'>{body}</CardBody>
    </Card>
  );
};
