import React from 'react'

const CreateElements = () => {

  // Didalam createElement method memiliki 3 parameter
  // parameter 1. berisi parent tag html : div, h1, dll
  // parameter 2. berisi atribut tag html seperti penambahan class dan id.
  // parameter 3. berisi isi dari tag html yang didalam parameter 1
  return React.createElement('div', { 'id': 'hello', 'className': 'hello_class' },
    React.createElement('h1', null, 'Ini adalah createElement method'))
}

export default CreateElements;