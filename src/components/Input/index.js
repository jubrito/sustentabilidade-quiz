import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // garantir que as props dos componentes sejam dos tipos previstos

const InputBase = styled.input`
    width: ${(props) => (props.type == 'radio' ? 'unset' : '100%')};
    max-width: ${(props) => (props.type == 'radio' ? '12px' : 'unset')};
    max-height: ${(props) => (props.type == 'radio' ? '12px' : 'unset')};
    margin-right: ${(props) => (props.type == 'radio' ? '6px' : 'unset')};
    margin-top: ${(props) => (props.type == 'radio' ? '2px' : 'unset')};

    padding: 15px;
    font-size: ${(props) => (props.type == 'radio' ? '16px' : '14px')};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    /* background-color: ${({ theme }) => theme.colors.black}; */
    background-color: #e2e2e24a;
    border-radius: ${({ theme }) => theme.borderRadius};
    outline: 0;
    -webkit-user-select: text;
    user-select: text;  
    /* margin-bottom: 25px; */
`;

// Por padrão toda função recebe um objeto Input(props) e pela desestruturação podemos receber e alocar uma propriedade especifica: Input({ onChange})
// Algumas variáveis foram declaradas diretamente no parâmetro para serem manipuladas diretamente, ou realizarmos condicionais ou tratamentos
// Todos os outros parâmetros podem vir em um objeto só (...props)
/* <InputBase type={type} id={id} name={name} value={value} onChange={onChange} /> */
export default function Input({ onChange, type, checked, ...props }) {
  return (
    <InputBase type={type} onChange={onChange} checked={checked} {...props} />
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
