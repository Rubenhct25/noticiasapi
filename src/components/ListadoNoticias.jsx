import { Fragment } from "react"
import { Typography, Grid, Pagination, Stack  } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"

function ListadoNoticias() {
    const {noticias, totalNoticias, handleChangePagina, pagina} = useNoticias()
    
    const totalPaginas = Math.ceil(totalNoticias / 20)
  return (
    <Fragment>
      <Typography
        marginY={5}
        textAlign="center"
        variant="h3"
        component={'h2'}
      >
        Ultimas Noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map(noticia => (
          <Noticia 
            noticia={noticia}
          />
        ))}
      </Grid>
      <Stack 
        spacing={2}
        direction='row'
        justifyContent='center'
        alignItems='center'
        sx={{marginY:4}}
      >
        <Pagination 
          count={totalPaginas} 
          color="primary" 
          onChange={handleChangePagina}
          page={pagina}
        />
      </Stack>
    </Fragment>
  )
}

export default ListadoNoticias
