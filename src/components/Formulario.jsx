import {FormControl, InputLabel, Select, MenuItem} from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import { CATEGORIAS } from "../helpers"

function Formulario() {
    const { categoria, handleChangeCategoria} = useNoticias()

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría:</InputLabel>
        <Select
            label="categoría"
            value={categoria}
            onChange={handleChangeCategoria}
        >
            { CATEGORIAS.map(categoria => (
                <MenuItem
                    key={categoria.value}
                    value={categoria.value}
                >
                    {categoria.label}
                </MenuItem>
            )) }
        </Select>
      </FormControl>
    </form>
  )
}

export default Formulario
