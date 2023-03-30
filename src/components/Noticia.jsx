import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from '@mui/material';

function Noticia({noticia}) {
    const {title, source, description, url, urlToImage} = noticia
  return (
    <Grid item
        sm={12} md={6} lg={4}
    >
        <Card>
            {urlToImage && (
                <CardMedia 
                    component={'img'}
                    alt={`imagen de la noticia ${title}`}
                    image={urlToImage}
                    height={'250'}
                />
            )}
            <CardContent>
                <Typography variant='body1' color={'error'}>
                    {source.name}
                </Typography>
                <Typography variant='h5' component={'div'}>
                    {title}
                </Typography>
                <Typography variant='body2'>
                    {description}
                </Typography>
            </CardContent>  
            <CardActions>
                <Link
                    href={url}
                    textAlign="center"
                    variant='button'
                    target={'_blank'}
                    width={'100%'}
                    sx={{textDecoration:'none'}}
                >Leer Noticia</Link>
            </CardActions>
        </Card>
    </Grid>
   
  )
}

export default Noticia
