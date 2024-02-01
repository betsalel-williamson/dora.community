import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';


interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    id: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

export const FeaturedPost = (props: FeaturedPostProps) => {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      {/* <CardActionArea component="a" href="#"> */}
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            {/* <Typography variant="subtitle1" color="text.secondary">
              {post.blogDate}
            </Typography> */}
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
            <Link display="block" variant="body1" href={"/blog/" + post.id}>
            Continue reading...
          </Link>
              
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      {/* </CardActionArea> */}
    </Grid>
  );
}