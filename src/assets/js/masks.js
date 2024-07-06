
function formatarRG(input) {
    // Formatar RG: 12.345.678-9
    input.value = input.value.replace(/\D/g, '');
    input.value = input.value.replace(/(\d{2})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  }

    function formatarCPF(input) {
      // Formatar CPF: 123.456.789-01
      input.value = input.value.replace(/\D/g, '');
      input.value = input.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    }

    function formatarCNPJ(input) {
      // Formatar CNPJ: 12.345.678/0001-90
      input.value = input.value.replace(/\D/g, '');
      input.value = input.value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    }

    function formatarTelefone(input) {
      // Formatar telefone: (99) 99999-9999
      input.value = input.value.replace(/\D/g, '');
      input.value = input.value.replace(/(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }

    function formatarCEP(input) {
      // Formatar CEP: 41.110-000
      input.value = input.value.replace(/\D/g, '');
      input.value = input.value.replace(/(\d{2})(\d{3})(\d{3})$/, '$1.$2-$3');
  }
