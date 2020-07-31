import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        name: '',
        description: '',
        color: '',
    }
    const [values, setValues] = useState(valoresIniciais);
    
    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        })
    }

    function handleChange(event) {
        //const { getAttribute, value } = event.target;
        setValue(
            event.target.getAttribute('name'),
            event.target.value
        );
    }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={(eventForm) => {
          eventForm.preventDefault();
          setCategorias([
              ...categorias,
              values
          ]);
          setValues(valoresIniciais);
      }}>

        <FormField
            label="Nome da Categoria:"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
        />


        <FormField
            label="Descrição:"
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
        />
    
        <FormField
            label="Cor:"
            type="color"
            name="color"
            value={values.color}
            onChange={handleChange}
        />
        
        
      
        <button>
          Cadastrar
        </button>
        
      </form>

        <ul>
            {categorias.map((categoria, count) => {
                return (
                    <li key={`${categoria}${count}`}>
                        {categoria.name}
                    </li>
                )
            })}
        </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;