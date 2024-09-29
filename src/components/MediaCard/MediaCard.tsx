import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Image from 'next/image';
import styles from './MediaCard.module.sass'


export const MediaCard = () => {

  return (
    <Card 
      sx={{
        maxWidth: '600px',
        border: 'none',
        boxShadow: 'none',
        margin: '20px 15px',
        borderRadius:'10px',
      }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <CardMedia
            component="img"
            title="Perfume"
            sx={{
              height: 'auto',
              width: '100%',
              objectFit: 'content',
              content: {
                xs: 'url("/Images/image-product-mobile.jpg")',
                sm: 'url("/Images/image-product-desktop.jpg")',
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={styles.cardBody}>
          <CardContent className={styles.cardContent}>
            <Typography className={styles.typography__title1} >PERFUME</Typography>
            <Typography variant="h4" className={styles.typography__title2}>
              Gabrielle Essence Eau De Parfum
            </Typography>
            <Typography className={styles.typography__title3}>
              A floral, solar and voluptuous interpretation composed by Olivier Polge,
              Perfumer-Creator for the House of CHANEL.
            </Typography>
            <Box
              sx={{
                display:'flex',
                gap: '1rem'
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: 'hsl(158, 36%, 37%)',
                  fontFamily: 'var(--font-fraunces)',
                }}
              >
                $149.99
              </Typography>
              <Typography
                sx={{
                  color: 'hsl(228, 12%, 48%)',
                  fontFamily: 'var(--font-montserrat)',
                  padding: '10px 0',
                  fontSize: '14px',
                  textDecoration: 'line-through'
                }}
              >
                $169.99
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button 
              className={styles.button}
              startIcon={
                <Image
                  src="Images/icon-cart.svg"
                  alt="icon cart"
                  width={15}
                  height={15}
                  style={{ marginRight: 3 }} 
                />
              }
            >Add to Cart</Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}